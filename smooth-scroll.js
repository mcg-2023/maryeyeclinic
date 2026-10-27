(() => {
 'use strict';
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const desktop=matchMedia('(min-width:1024px) and (min-height:650px)');
 const main=document.querySelector('main'),home=!!document.querySelector('.hero');
 let instance=null,lockedUntil=0,lastWheel=0,wheelTotal=0,transitionFrame=null;
 if(home)document.body.classList.add('screen-scroll-home');
 function setup(){
  instance?.destroy();instance=null;
  if(reduced.matches||(home&&desktop.matches)||typeof window.Lenis!=='function')return;
  instance=new Lenis({autoRaf:true,lerp:.11,smoothWheel:true,syncTouch:false,anchors:{offset:-100},prevent:node=>node.tagName==='DIALOG'||node.closest?.('dialog,[data-lenis-prevent],.content-tablist,.equipment-track')});
 }
 function panels(){return [...main.children].flatMap(el=>el.classList.contains('mission-cover-stage')?[...el.querySelectorAll('#history,#promise')]:el.tagName==='SECTION'?[el]:[]).concat(document.querySelector('footer')||[]);}
 function go(target){
  lockedUntil=performance.now()+1550;
  const cover=document.querySelector('.mission-cover-stage');
  const top=target.id==='promise'&&cover?Number(cover.dataset.coverStop):target.id==='history'&&cover?cover.getBoundingClientRect().top+window.scrollY:Math.max(0,target.getBoundingClientRect().top+window.scrollY-100);
  if(instance)instance.scrollTo(top,{duration:1.05,easing:t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,force:true});
    else if(reduced.matches)window.scrollTo({top,behavior:'instant'});
  else{
   if(transitionFrame!==null)cancelAnimationFrame(transitionFrame);
   const from=window.scrollY,distance=top-from,began=performance.now(),duration=1400;
   function step(now){
    const progress=Math.min(1,(now-began)/duration);
    const eased=progress*progress*(3-2*progress);
    window.scrollTo({top:from+distance*eased,behavior:'instant'});
    transitionFrame=progress<1?requestAnimationFrame(step):null;
   }
   transitionFrame=requestAnimationFrame(step);
  }
 }
 // Smooth only the history-to-mission cover; retain existing chapter scrolling elsewhere.
 let coverFrame=null,coverTarget=0,coverTime=0,centerCaught=false,centerPending=false,centerHoldUntil=0;
 function cancelCover(){if(coverFrame!==null)cancelAnimationFrame(coverFrame);coverFrame=null;coverTime=0;centerPending=false;}
 function coverStep(time){
  const dt=coverTime?Math.min(64,time-coverTime):16.67;coverTime=time;
  const delta=coverTarget-window.scrollY;
  window.scrollTo({top:Math.abs(delta)<3?coverTarget:window.scrollY+delta*(1-Math.exp(-dt/65)),behavior:'instant'});
  window.dispatchEvent(new Event('mission-scroll-tick'));
  if(Math.abs(coverTarget-window.scrollY)>.75)coverFrame=requestAnimationFrame(coverStep);
  else{coverFrame=null;coverTime=0;if(centerPending){centerPending=false;centerHoldUntil=performance.now()+180;}}
 }
 window.addEventListener('touchstart',cancelCover,{passive:true});
 window.addEventListener('pointerdown',cancelCover,{passive:true});
 window.addEventListener('keydown',cancelCover);
 window.addEventListener('wheel',event=>{
  if(!home||!desktop.matches||event.ctrlKey||Math.abs(event.deltaX)>Math.abs(event.deltaY)||event.target.closest('dialog,#mega,[data-lenis-prevent]'))return;
  // Finish the incoming chapter transition before handing control to the cover.
  if(transitionFrame!==null){event.preventDefault();event.stopImmediatePropagation();return;}
  const cover=document.querySelector('.mission-cover-stage.cover-enabled');
  const bounds=cover?.getBoundingClientRect();
  const approach=cover?.previousElementSibling;
  const careBounds=approach?.id==='care'?approach.getBoundingClientRect():null;
  // Keep the care chapter in the chapter controller in BOTH directions.
  // Only hand off to the scrubbed cover after history is fully aligned.
  const atCare=careBounds&&careBounds.top<=102&&careBounds.bottom>100&&bounds.top>2;
  if(atCare){
   event.preventDefault();event.stopImmediatePropagation();cancelCover();
   const now=performance.now(),gap=now-lastWheel;lastWheel=now;
   if(now<lockedUntil||(lockedUntil>0&&gap<160))return;
   const direction=Math.sign(event.deltaY);if(!direction)return;
   if(gap>180||Math.sign(wheelTotal)!==direction)wheelTotal=0;
   wheelTotal+=event.deltaY;
   if(Math.abs(wheelTotal)<55)return;
   wheelTotal=0;
   const destination=direction>0?document.getElementById('history'):approach.previousElementSibling;
   if(destination)go(destination);
   return;
  }
  const inCover=!reduced.matches&&bounds&&bounds.top<=2&&bounds.bottom>110;
  if(inCover||coverFrame!==null){
   event.preventDefault();event.stopImmediatePropagation();
   if(event.deltaY<0&&bounds.top>=-2){
    cancelCover();centerHoldUntil=0;
    const previous=cover.previousElementSibling;
    if(previous)go(previous);
    return;
   }
   lockedUntil=0;wheelTotal=0;lastWheel=0;
   if(coverFrame===null)coverTarget=window.scrollY;
   const stop=Number(cover.dataset.coverStop);
   if(window.scrollY<stop-window.innerHeight*.65)centerCaught=false;
   if(centerPending||performance.now()<centerHoldUntil)return;
   // After the single center catch, restore the site's chapter transition.
   if(event.deltaY>0&&window.scrollY>=stop-2){
    cancelCover();centerCaught=true;
    const next=cover.nextElementSibling;
    if(next)go(next);
    return;
   }
   const unit=event.deltaMode===1?16:event.deltaMode===2?window.innerHeight:1;
   coverTarget=Math.max(0,Math.min(document.documentElement.scrollHeight-window.innerHeight,coverTarget+event.deltaY*unit));
   const historyStart=bounds.top+window.scrollY;
   if(event.deltaY<0&&window.scrollY>historyStart&&coverTarget<historyStart)coverTarget=historyStart;
   if(event.deltaY>0&&window.scrollY<stop&&coverTarget>=stop){
    coverTarget=stop;centerCaught=true;centerPending=true;
   }
   if(coverFrame===null)coverFrame=requestAnimationFrame(coverStep);
   return;
  }
  cancelCover();
  const now=performance.now(),gap=now-lastWheel;lastWheel=now;
  if(now<lockedUntil||(lockedUntil>0&&gap<160)){event.preventDefault();event.stopImmediatePropagation();return;}
  const list=panels(),direction=Math.sign(event.deltaY);if(!direction)return;
  const index=list.reduce((best,el,i)=>Math.abs(el.getBoundingClientRect().top-100)<Math.abs(list[best].getBoundingClientRect().top-100)?i:best,0);
  const rect=list[index].getBoundingClientRect();
  // Let taller content scroll normally until its upper or lower boundary is reached.
  if(rect.height>window.innerHeight-96&&((direction>0&&rect.bottom>window.innerHeight+8)||(direction<0&&rect.top<92)))return;
  event.preventDefault();event.stopImmediatePropagation();
  if(gap>180||Math.sign(wheelTotal)!==direction)wheelTotal=0;
  wheelTotal+=event.deltaY;
  if(Math.abs(wheelTotal)<55)return;
  wheelTotal=0;
  const target=list[index+direction];if(target)go(target);
 },{passive:false,capture:true});
 setup();reduced.addEventListener('change',setup);desktop.addEventListener('change',setup);
 window.addEventListener('pagehide',()=>{cancelCover();instance?.destroy();instance=null;if(transitionFrame!==null)cancelAnimationFrame(transitionFrame);});
 window.addEventListener('pageshow',event=>{if(event.persisted)setup();});
})();
