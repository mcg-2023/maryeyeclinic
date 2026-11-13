(()=>{
 const reduced=matchMedia('(prefers-reduced-motion:reduce)');
 document.querySelectorAll('.uc-cause-layout').forEach(section=>{
  const track=section.querySelector('.uc-cause-track'),toggle=section.querySelector('[data-cause-autoplay]');
  let visible=false,hovering=false,focused=false,paused=reduced.matches,timer;
  function paint(){if(!toggle)return;toggle.textContent=paused?'▶':'Ⅱ';toggle.setAttribute('aria-label',paused?'원인 카드 자동 재생 시작':'원인 카드 자동 재생 일시정지');toggle.setAttribute('aria-pressed',String(paused));}
  function move(direction){
   const card=track.querySelector('.uc-cause-card'),gap=parseFloat(getComputedStyle(track).gap)||28;
   const step=card.getBoundingClientRect().width+gap,max=track.scrollWidth-track.clientWidth;
   const next=direction>0?(track.scrollLeft>=max-3?0:Math.min(max,track.scrollLeft+step)):(track.scrollLeft<3?max:Math.max(0,track.scrollLeft-step));
   track.scrollTo({left:next,behavior:reduced.matches?'instant':'smooth'});
  }
  function schedule(){clearTimeout(timer);if(paused||reduced.matches||!visible||hovering||focused||document.hidden)return;timer=setTimeout(()=>{move(1);schedule();},4800);}
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
