'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {createClinicManager}=require('./page-manager.cjs');
test('saved posts persist, publish to the board, retain images and respect draft/auth boundaries',async()=>{
 const filename=path.join(__dirname,'.qa','manager-'+crypto.randomUUID()+'.sqlite');
 let site;
 const request=(url,fields,headers={})=>new Request('http://localhost:4173'+url,fields?{method:'POST',headers:{Origin:'http://localhost:4173','Content-Type':'application/x-www-form-urlencoded',Accept:'application/json',...headers},body:new URLSearchParams({csrf:'local-preview',...fields})}:{});
 try{
  site=await createClinicManager({filename});
  assert.equal((await site.manager.publishedPosts()).length,13);
  assert.equal((await site.fetch(request('/admin/'))).status,200);
  const post={title:'검증용 글 $& <안내>',category:'pediatric',body:'<h2>검증 본문</h2><p>저장 내용입니다.</p><script>window.bad=true</script>',bodyFormat:'html',author:'검증 담당',excerpt:'검증용 요약',status:'draft'};
  let result=await site.fetch(request('/api/posts',post));assert.equal(result.status,200);let saved=await result.json();const id=saved.id;
  assert(!(await (await site.fetch(request('/interest.html'))).text()).includes('검증용 글'));
  assert.equal((await site.fetch(request('/articles/'+id+'/'))).status,404);
  assert.equal((await site.fetch(request('/api/posts',post,{Origin:'https://elsewhere.example'}))).status,403);
  assert.equal((await site.fetch(request('/api/posts',{...post,csrf:'bad'}))).status,403);
  const image='data:image/png;base64,'+fs.readFileSync(path.join(__dirname,'dist/assets/image11.png')).toString('base64');
  result=await site.fetch(request('/api/posts/images',{postId:id,uploadId:crypto.randomUUID(),kind:'cover',part:0,parts:1,data:image}));assert.equal(result.status,200);const media=await result.json();
  result=await site.fetch(request('/api/posts',{...post,id,status:'published',cover:media.src,imageAlt:'검증 이미지'}));assert.equal(result.status,200,await result.clone().text());
  let html=await (await site.fetch(request('/interest.html'))).text();assert(html.includes('검증용 글 $&amp; &lt;안내&gt;'));assert(html.includes('/articles/'+id+'/'));assert(html.includes('data-search='));
  html=await (await site.fetch(request('/articles/'+id+'/'))).text();assert(/<h2[^>]*>검증 본문<\/h2>/.test(html));assert(!html.includes('window.bad'));assert(html.includes('<base href="/">'));assert(html.includes('검증용 글 $&amp; &lt;안내&gt;'));
  assert.equal((await site.fetch(request(media.src))).headers.get('Content-Type'),'image/png');
  // Existing imported covers must also survive a normal editor save.
  const {repository}=await import('@mcg/page-manager');const seeded=await repository(site.database).get('pediatric-dream');
  result=await site.fetch(request('/api/posts',{...seeded,cover:'/media/pediatric-dream/cover',bodyFormat:'html'}));assert.equal(result.status,200,await result.clone().text());
  site.close();site=await createClinicManager({filename});assert.equal((await site.manager.publishedPosts()).length,14);
  result=await site.fetch(request('/api/posts/status',{id,status:'archived'}));assert.equal(result.status,200);assert.equal((await site.fetch(request('/articles/'+id+'/'))).status,404);
  assert.equal((await site.manager.publishedPosts()).length,13);
  site.close();site=await createClinicManager({filename,localPreview:false});assert.notEqual((await site.fetch(request('/admin/'))).status,200);
 }finally{
  site?.close();for(const suffix of ['','-wal','-shm','.seeded-v1'])fs.rmSync(filename+suffix,{force:true});
 }
});
