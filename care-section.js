(() => {
 'use strict';
 const section=document.querySelector('.care-showcase');
 if(!section)return;
 const items=[...section.querySelectorAll('[data-care-service]')];
 const comparison=section.querySelector('.care-comparison');
 const caption=section.querySelector('#care-view-caption'),count=section.querySelector('.care-view-count');
 const scene=section.querySelector('.care-scene'),softImage=section.querySelector('.care-scene-soft img');
 const before=section.querySelector('[data-care-before]'),note=section.querySelector('.care-simulation-note');
 const copy=section.querySelector('.care-active-copy'),link=section.querySelector('.care-active-link');
 function select(index){
  const data=items[index].dataset,photo=data.mode==='photo';
  items.forEach((item,i)=>item.setAttribute('aria-pressed',String(i===index)));
  comparison.dataset.mode=data.mode;
  if(caption)caption.textContent=data.title;if(copy)copy.textContent=data.copy;if(link){link.href=data.route;link.setAttribute('aria-label',data.title+' 진료 자세히 보기');}
  count.textContent=String(index+1).padStart(2,'0')+' / '+String(items.length).padStart(2,'0');
  scene.src=data.image;scene.alt=photo?data.title+' 진료 관련 사진':'시야 변화를 비교하기 위한 병원 공간 사진';softImage.src=data.image;
  before.textContent={vision:'흐릿한 시야 예시',presbyopia:'가까운 글씨 흐림 예시',cataract:'뿌연 시야 예시',macular:'중심 시야 변화 예시'}[data.mode]||'';
  if(note)note.hidden=photo;
  section.dataset.activeCare=String(index);
 }
 items.forEach((item,i)=>{
  item.addEventListener('click',()=>select(i));
  item.addEventListener('keydown',event=>{
   let next;if(event.key==='ArrowDown'||event.key==='ArrowRight')next=(i+1)%items.length;else if(event.key==='ArrowUp'||event.key==='ArrowLeft')next=(i+items.length-1)%items.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=items.length-1;else return;
   event.preventDefault();select(next);items[next].focus();
  });
 });
 select(0);
 let visible=true;
 const sync=()=>comparison.classList.toggle('care-auto-paused',!visible||document.hidden);
 if(typeof IntersectionObserver==='function'){
  new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();},{threshold:0}).observe(comparison);
 }
 document.addEventListener('visibilitychange',sync);sync();
})();
