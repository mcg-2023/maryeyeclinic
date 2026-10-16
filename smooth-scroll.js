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
 function panels(){return [...main.children].filter(el=>el.tagName==='SECTION').concat(document.querySelector('footer')||[]);}
 function go(target){
  lockedUntil=performance.now()+1550;
  const top=Math.max(0,target.getBoundingClientRect().top+window.scrollY-100);
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
 window.addEventListener('wheel',event=>{
  if(!home||!desktop.matches||event.ctrlKey||Math.abs(event.deltaX)>Math.abs(event.deltaY)||event.target.closest('dialog,#mega,[data-lenis-prevent]'))return;
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
 window.addEventListener('pagehide',()=>{instance?.destroy();instance=null;if(transitionFrame!==null)cancelAnimationFrame(transitionFrame);});
 window.addEventListener('pageshow',event=>{if(event.persisted)setup();});
})();
