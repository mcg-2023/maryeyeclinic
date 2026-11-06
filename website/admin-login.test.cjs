'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {createClinicManager}=require('./page-manager.cjs');

test('administrator login protects pages and APIs, validates CSRF, and supports logout',async()=>{
 const filename=path.join(__dirname,'.qa','login-'+crypto.randomUUID()+'.sqlite');
 const environment=()=>({ADMIN_USERNAME:'test-admin',ADMIN_PASSWORD:'test-only-private-password'});
 const site=await createClinicManager({filename,seed:false,environment});
 const request=(url,form,cookie='')=>new Request('http://localhost:4173'+url,{method:form?'POST':'GET',headers:{Origin:'http://localhost:4173',Cookie:cookie,...(form?{'Content-Type':'application/x-www-form-urlencoded'}:{})},...(form?{body:new URLSearchParams(form)}:{})});
 const token=html=>html.match(/name="csrf" value="([^"]+)"/)[1];
 const jar=response=>response.headers.getSetCookie().map(c=>c.split(';')[0]).join('; ');
 try{
  let response=await site.fetch(request('/admin/new/'));
  assert.equal(response.status,303);assert.match(response.headers.get('location'),/^\/admin\/login\//);
  assert.equal((await site.fetch(request('/api/posts',{title:'unauthorized'}))).status,401);
  response=await site.fetch(request('/admin/login/?next=/admin/new/'));
  assert.equal(response.status,200);let csrf=token(await response.text()),cookie=jar(response);
  assert.match(cookie,/__Host-/);
  assert.equal((await site.fetch(request('/admin/login/',{username:'test-admin',password:'test-only-private-password',csrf:'bad'},cookie))).status,403);
  response=await site.fetch(request('/admin/login/',{username:'test-admin',password:'wrong',csrf},cookie));
  assert.equal(response.status,401);cookie=jar(response);csrf=token(await response.text());
  response=await site.fetch(request('/admin/login/',{username:'test-admin',password:'test-only-private-password',csrf,next:'/admin/new/'},cookie));
  assert.equal(response.status,303);assert.equal(response.headers.get('location'),'/admin/new/');
  assert.equal(response.headers.getSetCookie().length,2);
  cookie=jar(response);
  response=await site.fetch(request('/admin/',undefined,cookie));assert.equal(response.status,200);
  const html=await response.text();assert.match(html,/로그아웃/);csrf=token(html);
  assert.equal((await site.fetch(request('/admin/logout/',{csrf:'bad'},cookie))).status,403);
  response=await site.fetch(request('/admin/logout/',{csrf},cookie));assert.equal(response.status,303);
  assert(response.headers.getSetCookie().every(c=>c.includes('Max-Age=0')));
  assert.equal((await site.fetch(request('/admin/'))).status,303);
 }finally{site.close();for(const suffix of ['','-wal','-shm'])fs.rmSync(filename+suffix,{force:true});}
});
