'use strict';
const {chromium}=require('./.qa/node_modules/playwright');const fs=require('node:fs'),assert=require('node:assert/strict');
const {ROUTES}=require('./dist/app.js');const base='http://127.0.0.1:4173/';let checks=0;const errors=[];
(async()=>{
 fs.mkdirSync('.qa/screenshots',{recursive:true});
 const browser=await chromium.launch({headless:true});
 try{
 const context=await browser.newContext({viewport:{width:1440,height:1000}});
 const page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));
 page.setDefaultTimeout(6000);await page.clock.install();await page.goto(base,{waitUntil:'domcontentloaded'});await page.locator('.hero[data-autoplay="playing"]').waitFor();await page.clock.pauseAt(new Date(Date.now()+100));
 assert.equal(await page.locator('.hero').getAttribute('data-active-slide'),'0');
 await page.clock.fastForward(6100);assert.equal(await page.locator('.hero').getAttribute('data-active-slide'),'1');checks++;
 await page.locator('.hero').hover();const hovered=await page.locator('.hero').getAttribute('data-active-slide');await page.clock.fastForward(6500);assert.equal(await page.locator('.hero').getAttribute('data-active-slide'),hovered);checks++;
 await page.mouse.move(5,110);await page.locator('[data-hero-next]').click();const manual=await page.locator('.hero').getAttribute('data-active-slide');await page.clock.fastForward(6500);assert.equal(await page.locator('.hero').getAttribute('data-active-slide'),manual);checks++;
 await page.locator('[data-hero-play]').click();assert.equal(await page.locator('[data-hero-play]').getAttribute('aria-pressed'),'true');
 await page.evaluate(()=>document.activeElement.blur());await page.mouse.move(5,110);await page.clock.fastForward(14000);assert.equal(await page.locator('.hero').getAttribute('data-active-slide'),manual);checks++;
 await page.locator('[data-hero-play]').click();await page.evaluate(()=>document.activeElement.blur());await page.mouse.move(5,110);await page.clock.runFor(20);await page.clock.fastForward(6100);assert.notEqual(await page.locator('.hero').getAttribute('data-active-slide'),manual);checks++;
 await page.locator('[data-tabs="care"] [data-tab="1"]').click();assert.equal(await page.locator('[data-tabs="care"]').getAttribute('data-selected'),'1');assert(await page.locator('#care-panel-1 img').getAttribute('src').then(s=>s.endsWith('image8.png')));checks++;
 await page.locator('[data-tabs="care"] [data-tab="0"]').focus();await page.keyboard.press('ArrowRight');assert.equal(await page.evaluate(()=>document.activeElement.id),'care-tab-1');await page.keyboard.press(' ');assert.equal(await page.locator('[data-tabs="care"]').getAttribute('data-selected'),'1');checks++;
 await page.evaluate(()=>{document.querySelector('#care-tab-2').click();document.querySelector('#care-tab-1').click();document.querySelector('#care-tab-0').click();});assert.equal(await page.locator('[data-tabs="care"]').getAttribute('data-selected'),'0');assert.equal(await page.locator('#care-panel-0').isVisible(),true);checks++;
 await page.locator('[data-equipment="1"]').click();assert.equal(await page.locator('[data-tabs="equipment"]').getAttribute('data-selected'),'1');await page.locator('#equipment-tab-3').click();assert((await page.locator('#equipment-panel-3 img').getAttribute('src')).endsWith('image21.jpg'));checks++;
 await page.locator('#nav a').first().focus();assert(await page.locator('#mega').isVisible());await page.keyboard.press('ArrowDown');assert((await page.evaluate(()=>document.activeElement.closest('#mega')!==null)));await page.keyboard.press('Escape');assert.equal(await page.locator('#mega').isVisible(),false);checks++;
 await page.evaluate(()=>scrollTo(0,document.body.scrollHeight));await page.clock.runFor(250);assert.equal(await page.locator('.reveal-pending').evaluateAll(nodes=>nodes.filter(n=>n.getBoundingClientRect().top<innerHeight).length),0);checks++;
 await page.evaluate(()=>scrollTo(0,0));await page.clock.fastForward(13000);
 await page.screenshot({path:'.qa/screenshots/desktop.png',fullPage:true,animations:'disabled'});await page.screenshot({path:'.qa/screenshots/desktop-top.png',animations:'disabled'});
 assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));checks++;
 for(const size of [{width:390,height:844},{width:320,height:768},{width:768,height:1024}]){
  await page.setViewportSize(size);await page.goto(base,{waitUntil:'domcontentloaded'});await page.clock.fastForward(13000);
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'overflow at '+size.width);checks++;
  if(size.width<=640){await page.locator('[data-doctor="1"]').click();await page.clock.runFor(800);await page.waitForTimeout(450);await page.clock.runFor(200);assert(Number(await page.locator('#doctor-track').evaluate(el=>el.scrollLeft))>0);checks++;await page.locator('[data-doctor="1"]').click();await page.clock.runFor(800);await page.waitForTimeout(450);await page.clock.runFor(200);assert.equal(await page.locator('[data-doctor="1"]').isDisabled(),true);checks++;}
  if(size.width===390){await page.evaluate(()=>scrollTo(0,document.body.scrollHeight));await page.waitForTimeout(200);await page.clock.runFor(250);await page.evaluate(()=>scrollTo(0,0));await page.waitForTimeout(200);await page.clock.runFor(50);await page.screenshot({path:'.qa/screenshots/mobile.png',fullPage:true,animations:'disabled'});await page.screenshot({path:'.qa/screenshots/mobile-top.png',animations:'disabled'});}
 }
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto(base,{waitUntil:'domcontentloaded'});await page.clock.fastForward(20000);
 assert.equal(await page.locator('.hero').getAttribute('data-active-slide'),'0');assert(await page.locator('[data-hero-play]').isDisabled());assert.equal(await page.locator('.reveal-pending').count(),0);checks+=3;
 await page.locator('[data-slide="2"]').click();assert.equal(await page.locator('.hero').getAttribute('data-active-slide'),'2');assert.equal(await page.locator('#hero-image').evaluate(el=>el.getAnimations().length),0);checks+=2;
 await page.emulateMedia({reducedMotion:'no-preference'});await page.clock.runFor(50);await page.mouse.move(1,110);await page.evaluate(()=>document.activeElement.blur());await page.clock.runFor(50);
 const live=await page.locator('.hero').getAttribute('data-active-slide');await page.clock.fastForward(6100);assert.notEqual(await page.locator('.hero').getAttribute('data-active-slide'),live);checks++;
 await page.emulateMedia({reducedMotion:'reduce'});await page.waitForTimeout(200);await page.clock.runFor(100);assert.equal(await page.locator('#hero-image').evaluate(el=>el.getAnimations().length),0);checks++;
 for(const route of ROUTES.filter(Boolean)){
  await page.goto(base+route+'.html',{waitUntil:'domcontentloaded'});assert.equal(await page.locator('h1').count(),1);assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'detail overflow '+route);checks+=2;
 }
 const nojs=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:844}});const fallback=await nojs.newPage();await fallback.goto(base,{waitUntil:'domcontentloaded'});
 assert(await fallback.locator('h1').isVisible());assert.equal(await fallback.locator('.care-tabs .content-panel:visible').count(),3);assert.equal(await fallback.locator('.equipment-tabs .content-panel:visible').count(),4);assert.equal(await fallback.locator('.hero-controls').isVisible(),false);assert.equal(await fallback.locator('.doctor-card:visible').count(),3);assert(await fallback.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));checks+=6;
 await fallback.screenshot({path:'.qa/screenshots/no-js.png',fullPage:true,animations:'disabled'});await nojs.close();
 assert.deepEqual(errors,[]);
 const result={checks,pages:ROUTES.length,viewports:[1440,768,390,320],reducedMotion:true,noJavaScript:true,result:'passed'};
 fs.writeFileSync('.qa/browser-results.json',JSON.stringify(result,null,2));console.log(JSON.stringify(result));await context.close();
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});


