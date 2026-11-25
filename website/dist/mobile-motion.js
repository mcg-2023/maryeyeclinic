(() => {
 'use strict';
 const mobile=matchMedia('(max-width:1023px), (hover:none) and (pointer:coarse)');
 const reduced=matchMedia('(prefers-reduced-motion:reduce)');
 const history=document.querySelector('#history.history-journey');
 let entranceObserver=null,historyObserver=null,historyTimer=null;
 let historyVisible=false,historyPlayed=false,targets=[];
 function reveal(element){
  element.classList.remove('mobile-enter-pending');
  element.classList.add('mobile-enter-visible');
  entranceObserver?.unobserve(element);
 }
 function advanceHistory(){
  clearTimeout(historyTimer);historyTimer=null;
  if(!history||historyPlayed||!historyVisible||document.hidden||reduced.matches||!mobile.matches)return;
  historyTimer=setTimeout(()=>{
   if(historyVisible&&!document.hidden&&mobile.matches){history.classList.add('history-show-years');historyPlayed=true;}
   historyTimer=null;
  },1850);
 }
 function cleanup(){
  entranceObserver?.disconnect();historyObserver?.disconnect();
  entranceObserver=null;historyObserver=null;historyVisible=false;
  clearTimeout(historyTimer);historyTimer=null;
  targets.forEach(element=>element.classList.remove('mobile-enter-pending','mobile-enter-visible'));
  targets=[];
 }
 function setup(){
  cleanup();document.documentElement.classList.toggle('mobile-motion',mobile.matches);
  if(!mobile.matches)return;
  if(history){
   history.style.removeProperty('--history-drift');
   history.classList.toggle('history-show-years',historyPlayed&&!reduced.matches);
  }
  if(reduced.matches||typeof IntersectionObserver!=='function')return;
  try{
   entranceObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting||entry.boundingClientRect.bottom<0)reveal(entry.target);
   }),{threshold:.04,rootMargin:'0px 0px -16px 0px'});
   targets=[...document.querySelectorAll('.sub-visual-copy,.sub-visual-photo,.care-comparison,.mission-copy,.equipment-tile,.directions-heading')];
   targets.forEach(element=>{
    if(element.getBoundingClientRect().bottom<=0)return;
    element.classList.add('mobile-enter-pending');entranceObserver.observe(element);
   });
   if(history){
    historyObserver=new IntersectionObserver(entries=>{
     historyVisible=entries[0].isIntersecting&&entries[0].intersectionRatio>=.25;
     advanceHistory();
    },{threshold:[0,.25]});
    historyObserver.observe(history);
   }
  }catch{cleanup();}
 }
 document.addEventListener('focusin',event=>{
  const pending=event.target.closest('.mobile-enter-pending');if(pending)reveal(pending);
 });
 document.addEventListener('visibilitychange',advanceHistory);
 mobile.addEventListener('change',setup);reduced.addEventListener('change',setup);
 addEventListener('pagehide',cleanup);
 addEventListener('pageshow',event=>{if(event.persisted)setup();});
 setup();
})();
