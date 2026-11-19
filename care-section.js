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
 const wide=matchMedia('(min-width:1024px)');
 const imageFor=data=>wide.matches?data.image.replace('-wide-v2.webp','-compact-v3.webp').replace('-wide-v4.webp','-compact-v4.webp'):data.image;
 const ready=new Map();let request=0,active=-1;
 function prepare(src){
  if(!ready.has(src)){const image=new Image();image.decoding='async';image.src=src;ready.set(src,image.decode().catch(()=>{ready.delete(src);throw new Error('Image unavailable');}));}
  return ready.get(src);
 }
 async function select(index){
  const ticket=++request;
  const data=items[index].dataset,photo=data.mode==='photo',src=imageFor(data);
  items.forEach((item,i)=>item.setAttribute('aria-pressed',String(i===index)));
  try{await prepare(src);}catch{if(ticket===request)items.forEach((item,i)=>item.setAttribute('aria-pressed',String(i===active)));return;}
  if(ticket!==request||(index===active&&scene.getAttribute('src')===src))return;
  comparison.querySelectorAll('.care-transition-snapshot').forEach(node=>node.remove());
  let snapshot;
  if(active>=0&&!matchMedia('(prefers-reduced-motion:reduce)').matches){
   const times=comparison.getAnimations({subtree:true}).map(animation=>animation.currentTime);
   snapshot=comparison.cloneNode(true);snapshot.classList.add('care-transition-snapshot');snapshot.setAttribute('aria-hidden','true');
   snapshot.style.setProperty('--care-focus',getComputedStyle(comparison).getPropertyValue('--care-focus'));snapshot.removeAttribute('id');snapshot.querySelectorAll('[id]').forEach(node=>node.removeAttribute('id'));
   comparison.append(snapshot);
   snapshot.getAnimations({subtree:true}).forEach((animation,i)=>{animation.pause();animation.currentTime=times[i]||0;});
  }
  comparison.dataset.mode=data.mode;
  if(caption)caption.textContent=data.title;if(copy)copy.textContent=data.copy;if(link){link.href=data.route;link.setAttribute('aria-label',data.title+' 진료 자세히 보기');}
  if(count)count.textContent=String(index+1).padStart(2,'0')+' / '+String(items.length).padStart(2,'0');
  scene.src=src;scene.alt=photo?data.title+' 진료 관련 사진':'시야 변화를 비교하기 위한 병원 공간 사진';softImage.src=src;
  before.textContent={vision:'흐릿한 시야 예시',presbyopia:'가까운 글씨 흐림 예시',cataract:'뿌연 시야 예시',macular:'중심 시야 변화 예시'}[data.mode]||'';
  if(note)note.hidden=photo;
  section.dataset.activeCare=String(index);
  active=index;
  if(snapshot){const fade=snapshot.animate([{opacity:1},{opacity:0}],{duration:320,easing:'ease-out',fill:'forwards'});fade.finished.then(()=>snapshot.remove()).catch(()=>snapshot.remove());}
 }
 items.forEach((item,i)=>{
  item.addEventListener('click',()=>select(i));
  item.addEventListener('keydown',event=>{
   let next;if(event.key==='ArrowDown'||event.key==='ArrowRight')next=(i+1)%items.length;else if(event.key==='ArrowUp'||event.key==='ArrowLeft')next=(i+items.length-1)%items.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=items.length-1;else return;
   event.preventDefault();select(next);items[next].focus();
  });
 });
 select(0);
 const preload=()=>items.forEach(item=>prepare(imageFor(item.dataset)).catch(()=>{}));
 wide.addEventListener('change',()=>{preload();select(active>=0?active:0);});
 if('IntersectionObserver'in window){const warmer=new IntersectionObserver(entries=>{if(entries.some(entry=>entry.isIntersecting)){preload();warmer.disconnect();}},{rootMargin:'800px'});warmer.observe(section);}else preload();
 let visible=true;
 const sync=()=>comparison.classList.toggle('care-auto-paused',!visible||document.hidden);
 if(typeof IntersectionObserver==='function'){
  new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();},{threshold:0}).observe(comparison);
 }
 document.addEventListener('visibilitychange',sync);sync();
})();
