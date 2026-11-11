(()=>{
 document.querySelectorAll('.uc-cause-layout').forEach(section=>{
  const track=section.querySelector('.uc-cause-track');
  section.querySelectorAll('[data-cause-direction]').forEach(button=>button.addEventListener('click',()=>{
   const card=track.querySelector('.uc-cause-card');
   track.scrollBy({left:(card.getBoundingClientRect().width+28)*Number(button.dataset.causeDirection),behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'});
  }));
 });
})();
