'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {createAdminSetup}=require('./admin-setup.cjs');
test('first setup validates the form, persists credentials and cannot overwrite the configured account',async()=>{
 const filename=path.join(__dirname,'.qa','setup-'+crypto.randomUUID()+'.env'),environment={};
 fs.writeFileSync(filename,'OTHER_SETTING=keep-this\n');
 const setup=createAdminSetup({filename,environment});
 const req=(url,fields={},cookie='',origin='http://localhost:4173')=>new Request('http://localhost:4173'+url,{method:Object.keys(fields).length?'POST':'GET',headers:{Origin:origin,Cookie:cookie},...(Object.keys(fields).length?{body:new URLSearchParams(fields)}:{})});
 try{
  assert.equal((await setup.fetch(req('/admin/'))).headers.get('location'),'/admin/setup/');
  let page=await setup.fetch(req('/admin/setup/'));const cookie=page.headers.get('set-cookie').split(';')[0],html=await page.text(),csrf=html.match(/name="csrf" value="([^"]+)"/)[1];
  const fields={username:'clinic-owner',password:'private-test-$#12345',confirmation:'private-test-$#12345',csrf};
  assert.equal((await setup.fetch(req('/admin/setup/',{...fields,csrf:'bad'},cookie))).status,403);
  assert.equal((await setup.fetch(req('/admin/setup/',fields,cookie,'https://other.example'))).status,403);
  assert.equal((await setup.fetch(req('/admin/setup/',{...fields,confirmation:'different'},cookie))).status,400);
  assert.equal(environment.ADMIN_PASSWORD,undefined);
  const response=await setup.fetch(req('/admin/setup/',fields,cookie));
  assert.equal(response.status,303);assert.equal(response.headers.get('location'),'/admin/login/');
  const saved=require('node:util').parseEnv(fs.readFileSync(filename,'utf8'));
  assert.equal(saved.OTHER_SETTING,'keep-this');assert.equal(saved.ADMIN_USERNAME,fields.username);assert.equal(saved.ADMIN_PASSWORD,fields.password);
  assert.equal(environment.ADMIN_PASSWORD,fields.password);
  assert.equal((await setup.fetch(req('/admin/setup/',{...fields,password:'replacement-password'},cookie))).status,303);
  assert.equal(environment.ADMIN_PASSWORD,fields.password);
  assert.equal(await setup.fetch(req('/admin/')),null);
 }finally{fs.rmSync(filename,{force:true});}
});
test('setup cannot be claimed remotely or in production',async()=>{
 const setup=createAdminSetup({environment:{}});
 assert.equal((await setup.fetch(new Request('https://clinic.example/admin/setup/'))).status,403);
 const production=createAdminSetup({environment:{NODE_ENV:'production'}});
 assert.equal((await production.fetch(new Request('http://localhost:4173/admin/setup/'))).status,403);
});
