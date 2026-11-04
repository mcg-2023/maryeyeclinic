'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {ROUTES}=require('./dist/app.js');
const used=new Set();let links=0,images=0;
for(const r of ROUTES){
 const file=r?r+'.html':'index.html',html=fs.readFileSync('dist/'+file,'utf8');
 assert.equal((html.match(/<h1[ >]/g)||[]).length,1,file+' must have one h1');
 assert(html.includes('<html lang="ko">'));assert(html.includes('<link rel="canonical"'));
 for(const m of html.matchAll(/(?:href|src)="([^"]+)"/g)){
  const ref=m[1];if(/^(https?:|tel:|mailto:|data:|#)/.test(ref))continue;
  // The admin entry is served by the authenticated Page Manager router.
  if(ref==='/admin/'){links++;continue;}
  assert(fs.existsSync(path.join('dist',ref)),file+' has missing asset or page '+ref);
  if(ref.startsWith('assets/')){used.add(ref);images++;}else links++;
 }
 for(const m of html.matchAll(/<img\b[^>]*>/g))assert(/\balt="[^"]+"/.test(m[0]),file+' image lacks alt');
 assert(!/href="#\/"/.test(html));
 assert(!/완치|부작용 없음|권위자|최첨단/.test(html));
}
const app=fs.readFileSync('dist/app.js','utf8');
for(const m of app.matchAll(/image\d+\.(?:png|jpg)/g)){assert(fs.existsSync('dist/assets/'+m[0]));used.add('assets/'+m[0]);}
console.log(JSON.stringify({pages:ROUTES.length,localLinks:links,imageReferences:images,uniqueAssets:used.size,result:'passed'}));

