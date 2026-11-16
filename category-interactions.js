(()=>{
 const reduced=matchMedia('(prefers-reduced-motion:reduce)');
 document.querySelectorAll('.uc-cause-layout').forEach(section=>{
  const track=section.querySelector('.uc-cause-track'),toggle=section.querySelector('[data-cause-autoplay]');
  let visible=false,hovering=false,focused=false,paused=reduced.matches,timer;
  let drag=null,suppressClick=false;
  function paint(){if(!toggle)return;toggle.textContent=paused?'▶':'Ⅱ';toggle.setAttribute('aria-label',paused?'원인 카드 자동 재생 시작':'원인 카드 자동 재생 일시정지');toggle.setAttribute('aria-pressed',String(paused));}
  function move(direction){
   const card=track.querySelector('.uc-cause-card'),gap=parseFloat(getComputedStyle(track).gap)||28;
   const step=card.getBoundingClientRect().width+gap,max=track.scrollWidth-track.clientWidth;
   const next=direction>0?(track.scrollLeft>=max-3?0:Math.min(max,track.scrollLeft+step)):(track.scrollLeft<3?max:Math.max(0,track.scrollLeft-step));
   track.scrollTo({left:next,behavior:reduced.matches?'instant':'smooth'});
  }
  function schedule(){clearTimeout(timer);if(paused||reduced.matches||!visible||hovering||focused||drag||document.hidden)return;timer=setTimeout(()=>{move(1);schedule();},4800);}
  track.addEventListener('dragstart',event=>event.preventDefault());
  track.addEventListener('pointerdown',event=>{
   if(event.pointerType==='touch'||event.button!==0||!event.isPrimary)return;
   if(event.target.closest('a,button,input,select,textarea'))return;
   suppressClick=false;
   track.scrollTo({left:track.scrollLeft,behavior:'instant'});
   drag={pointerId:event.pointerId,startX:event.clientX,startScroll:track.scrollLeft,moved:false};
   clearTimeout(timer);
  });
  document.addEventListener('pointermove',event=>{
   if(!drag||event.pointerId!==drag.pointerId)return;
   const distance=event.clientX-drag.startX;
   if(!drag.moved&&Math.abs(distance)<5)return;
   if(!drag.moved){
    drag.moved=true;
    track.classList.add('is-dragging');
    track.setPointerCapture(event.pointerId);
   }
   event.preventDefault();
   track.scrollTo({left:drag.startScroll-distance,behavior:'instant'});
  },{passive:false});
  function finishDrag(event){
   if(!drag||event.pointerId!==drag.pointerId)return;
   const completed=drag;
   drag=null;
   suppressClick=completed.moved;
   track.classList.remove('is-dragging');
   if(track.hasPointerCapture(event.pointerId))track.releasePointerCapture(event.pointerId);
   if(completed.moved){
    const card=track.querySelector('.uc-cause-card');
    const step=card.getBoundingClientRect().width+(parseFloat(getComputedStyle(track).gap)||28);
    const target=Math.min(track.scrollWidth-track.clientWidth,Math.round(track.scrollLeft/step)*step);
    track.scrollTo({left:target,behavior:reduced.matches?'instant':'smooth'});
   }
   schedule();
  }
  document.addEventListener('pointerup',finishDrag);
  document.addEventListener('pointercancel',finishDrag);
  track.addEventListener('lostpointercapture',finishDrag);
  track.addEventListener('click',event=>{
   if(!suppressClick||event.detail===0)return;
   suppressClick=false;
   event.preventDefault();
   event.stopPropagation();
  },true);
  section.querySelectorAll('[data-cause-direction]').forEach(button=>button.addEventListener('click',()=>{move(Number(button.dataset.causeDirection));schedule();}));
  toggle?.addEventListener('click',()=>{paused=!paused;if(paused)track.scrollTo({left:track.scrollLeft,behavior:'instant'});else focused=false;paint();schedule();});
  section.addEventListener('mouseenter',()=>{hovering=true;schedule();});section.addEventListener('mouseleave',()=>{hovering=false;schedule();});
  section.addEventListener('focusin',()=>{focused=true;schedule();});section.addEventListener('focusout',()=>{setTimeout(()=>{focused=section.contains(document.activeElement);schedule();},0);});
  section.addEventListener('pointerdown',()=>clearTimeout(timer));section.addEventListener('pointerup',schedule);section.addEventListener('pointercancel',schedule);
  document.addEventListener('visibilitychange',schedule);reduced.addEventListener('change',()=>{paused=reduced.matches;paint();schedule();});
  if('IntersectionObserver'in window)new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;schedule();},{threshold:.15}).observe(section);else{visible=true;schedule();}
  paint();
 });
})();
