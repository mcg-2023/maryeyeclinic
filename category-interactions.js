(()=>{
 const reduced=matchMedia('(prefers-reduced-motion:reduce)');
 const mobile=matchMedia('(max-width:1023px), (hover:none) and (pointer:coarse)');
 const mobileHighlights=matchMedia('(max-width:700px)');
 const highlights=[...document.querySelectorAll('.uc-highlight')];
 let highlightFrame;
 function fitHighlights(){
  highlights.forEach(highlight=>{
   highlight.style.removeProperty('--uc-highlight-size');
   if(!mobileHighlights.matches)return;
   const style=getComputedStyle(highlight);
   const available=highlight.parentElement.clientWidth-parseFloat(style.paddingLeft)-parseFloat(style.paddingRight)-2;
   const range=document.createRange();
   range.selectNodeContents(highlight);
   const textWidth=range.getBoundingClientRect().width;
   if(textWidth>available&&available>0){
    const size=Math.floor(parseFloat(style.fontSize)*available/textWidth*100)/100;
    highlight.style.setProperty('--uc-highlight-size',`${size}px`);
   }
  });
 }
 function scheduleHighlights(){
  cancelAnimationFrame(highlightFrame);
  highlightFrame=requestAnimationFrame(fitHighlights);
 }
 if(highlights.length){
  scheduleHighlights();
  addEventListener('resize',scheduleHighlights,{passive:true});
  addEventListener('pageshow',scheduleHighlights);
  mobileHighlights.addEventListener('change',scheduleHighlights);
  if(document.fonts)document.fonts.ready.then(scheduleHighlights);
 }
 document.querySelectorAll('.uc-cause-layout').forEach(section=>{
  const track=section.querySelector('.uc-cause-track'),toggle=section.querySelector('[data-cause-autoplay]');
  const cards=[...track.querySelectorAll('.uc-cause-card')];
  let visible=false,hovering=false,focused=false,paused=reduced.matches,timer;
  let drag=null,suppressClick=false;
  function positions(){
   const maximum=Math.max(0,track.scrollWidth-track.clientWidth);
   return [...new Set(cards.map(card=>Math.min(maximum,card.offsetLeft-cards[0].offsetLeft)))];
  }
  function nearestIndex(left){
   const stops=positions();
   return stops.reduce((nearest,position,index)=>Math.abs(position-left)<Math.abs(stops[nearest]-left)?index:nearest,0);
  }
  function showCard(index){
   const stops=positions();
   track.scrollTo({left:stops[Math.max(0,Math.min(stops.length-1,index))],behavior:reduced.matches?'instant':'smooth'});
  }
  function paint(){if(!toggle)return;toggle.textContent=paused?'▶':'Ⅱ';toggle.setAttribute('aria-label',paused?'원인 카드 자동 재생 시작':'원인 카드 자동 재생 일시정지');toggle.setAttribute('aria-pressed',String(paused));}
  function move(direction){
   const current=nearestIndex(track.scrollLeft);
   const count=positions().length;
   showCard((current+direction+count)%count);
  }
  function schedule(){clearTimeout(timer);if(mobile.matches||paused||reduced.matches||!visible||hovering||focused||drag||document.hidden)return;timer=setTimeout(()=>{move(1);schedule();},4800);}
  track.addEventListener('dragstart',event=>event.preventDefault());
  track.addEventListener('pointerdown',event=>{
   if(event.button!==0||!event.isPrimary)return;
   if(event.target.closest('a,button,input,select,textarea'))return;
   suppressClick=false;
   if(mobile.matches&&event.pointerType==='touch')return;
   track.scrollTo({left:track.scrollLeft,behavior:'instant'});
   drag={pointerId:event.pointerId,startX:event.clientX,startY:event.clientY,startScroll:track.scrollLeft,startIndex:nearestIndex(track.scrollLeft),distance:0,moved:false};
   clearTimeout(timer);
  });
  document.addEventListener('pointermove',event=>{
   if(!drag||event.pointerId!==drag.pointerId)return;
   const distance=event.clientX-drag.startX;
   if(!drag.moved&&event.pointerType==='touch'&&Math.abs(event.clientY-drag.startY)>Math.abs(distance)+8){drag=null;schedule();return;}
   if(!drag.moved&&Math.abs(distance)<5)return;
   if(!drag.moved){
    drag.moved=true;
    track.classList.add('is-dragging');
    track.setPointerCapture(event.pointerId);
   }
   event.preventDefault();
   drag.distance=distance;
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
    const direction=Math.abs(completed.distance)>=32?(completed.distance<0?1:-1):0;
    showCard(completed.startIndex+direction);
   }
   schedule();
  }
  document.addEventListener('pointerup',finishDrag);
  document.addEventListener('pointercancel',finishDrag);
  track.addEventListener('lostpointercapture',event=>{if(event.target===track)finishDrag(event);});
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
  mobile.addEventListener('change',()=>{
   if(drag){
    const pointerId=drag.pointerId;drag=null;suppressClick=false;
    track.classList.remove('is-dragging');
    if(track.hasPointerCapture(pointerId))track.releasePointerCapture(pointerId);
   }
   if(mobile.matches)track.scrollTo({left:track.scrollLeft,behavior:'instant'});
   schedule();
  });
  if('IntersectionObserver'in window)new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;schedule();},{threshold:.15}).observe(section);else{visible=true;schedule();}
  paint();
 });
})();
