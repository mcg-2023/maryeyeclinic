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
 const photoWide=matchMedia('(min-width:701px)');
 const mobile=matchMedia('(max-width:700px)');
 const reduced=matchMedia('(prefers-reduced-motion:reduce)');
 const imageFor=data=>data.desktopImage?(photoWide.matches?data.desktopImage:data.image):!wide.matches&&data.image.includes('care-pediatric-')?'assets/care-pediatric-mobile-v6.webp':wide.matches?data.image.replace('-wide-v2.webp','-compact-v3.webp').replace('-wide-v5.webp','-compact-v5.webp'):data.image;
 const ready=new Map();let request=0,active=-1,desired=0,warmRun=0,mobileLayer=null,mobileFade=null;
 const waiting=[];let decoding=0;
 function drainImages(){
  const limit=mobile.matches?2:Infinity;
  while(decoding<limit&&waiting.length){
   const entry=waiting.shift();entry.started=true;decoding++;
   const finish=loaded=>{
    decoding--;
    if(loaded)entry.resolve(entry.image);
    else{if(ready.get(entry.src)===entry)ready.delete(entry.src);entry.reject(new Error('Image unavailable'));}
    drainImages();
   };
   entry.image.src=entry.src;
   try{entry.image.decode().then(()=>finish(true),()=>finish(false));}catch{finish(false);}
  }
 }
 function prepare(src,priority=false){
  if(!ready.has(src)){
   const image=new Image();image.decoding='async';
   const entry={src,image,started:false};entry.promise=new Promise((resolve,reject)=>{entry.resolve=resolve;entry.reject=reject;});
   ready.set(src,entry);waiting.push(entry);
  }
  const entry=ready.get(src),queued=waiting.indexOf(entry);
  if(priority&&queued>0){waiting.splice(queued,1);waiting.unshift(entry);}
  drainImages();return entry.promise;
 }
 function clearMobileTransition(){
  const layer=mobileLayer,fade=mobileFade;mobileLayer=null;mobileFade=null;
  fade?.cancel();layer?.remove();
 }
 function copyFrameImage(source){
  const image=new Image(),style=getComputedStyle(source);
  image.className='care-mobile-transition-image';image.alt='';image.draggable=false;
  ['objectFit','objectPosition','transform','transformOrigin','filter','maskImage','webkitMaskImage','backgroundColor'].forEach(property=>image.style[property]=style[property]);
  image.src=source.currentSrc||source.src;
  return image;
 }
 function mobileSnapshot(){
  const layer=document.createElement('div');layer.className='care-mobile-transition';layer.setAttribute('aria-hidden','true');
  layer.append(copyFrameImage(scene));
  if(comparison.dataset.mode!=='photo'){
   const original=softImage.parentElement,soft=document.createElement('div');soft.className='care-mobile-transition-soft';
   soft.style.clipPath=getComputedStyle(original).clipPath;soft.append(copyFrameImage(softImage));
   if(comparison.dataset.mode==='macular'){
    const shade=document.createElement('span'),style=getComputedStyle(original,'::after');shade.className='care-mobile-transition-shade';
    shade.style.background=style.background;shade.style.filter=style.filter;soft.append(shade);
   }
   layer.append(soft);
   const originalDivider=comparison.querySelector(':scope>.care-divider');
   if(originalDivider){const divider=document.createElement('span');divider.className='care-mobile-transition-divider';divider.style.left=getComputedStyle(originalDivider).left;layer.append(divider);}
  }
  comparison.append(layer);return layer;
 }
 async function select(index){
  const ticket=++request;
  desired=index;
  const data=items[index].dataset,photo=data.mode==='photo',src=imageFor(data);
  items.forEach((item,i)=>item.setAttribute('aria-pressed',String(i===index)));
  try{await prepare(src,true);}catch{if(ticket===request){desired=active>=0?active:0;items.forEach((item,i)=>item.setAttribute('aria-pressed',String(i===active)));}return;}
  if(ticket===request&&src!==imageFor(data)){select(index);return;}
  if(ticket!==request||(index===active&&scene.getAttribute('src')===src))return;
  clearMobileTransition();
  comparison.querySelectorAll('.care-transition-snapshot').forEach(node=>node.remove());
  let snapshot;
  if(active>=0&&!reduced.matches){
   if(mobile.matches)snapshot=mobileSnapshot();
   else{
    const times=comparison.getAnimations({subtree:true}).map(animation=>animation.currentTime);
    snapshot=comparison.cloneNode(true);snapshot.classList.add('care-transition-snapshot');snapshot.setAttribute('aria-hidden','true');
    snapshot.style.setProperty('--care-focus',getComputedStyle(comparison).getPropertyValue('--care-focus'));snapshot.removeAttribute('id');snapshot.querySelectorAll('[id]').forEach(node=>node.removeAttribute('id'));
    comparison.append(snapshot);
    snapshot.getAnimations({subtree:true}).forEach((animation,i)=>{animation.pause();animation.currentTime=times[i]||0;});
   }
  }
  comparison.dataset.mode=data.mode;
  if(caption)caption.textContent=data.title;if(copy)copy.textContent=data.copy;if(link){link.href=data.route;link.setAttribute('aria-label',data.title+' 진료 자세히 보기');}
  if(count)count.textContent=String(index+1).padStart(2,'0')+' / '+String(items.length).padStart(2,'0');
  scene.src=src;scene.alt=photo?data.title+' 진료 관련 사진':'시야 변화를 비교하기 위한 병원 공간 사진';softImage.src=src;
  before.textContent={vision:'흐릿한 시야 예시',presbyopia:'가까운 글씨 흐림 예시',cataract:'뿌연 시야 예시',macular:'중심 시야 변화 예시'}[data.mode]||'';
  if(note)note.hidden=photo;
  section.dataset.activeCare=String(index);
  active=index;
  if(snapshot){
   const fade=snapshot.animate([{opacity:1},{opacity:0}],{duration:mobile.matches?220:320,easing:'ease-out',fill:'forwards'});
   if(mobile.matches){mobileLayer=snapshot;mobileFade=fade;}
   const finish=()=>{snapshot.remove();if(mobileLayer===snapshot){mobileLayer=null;mobileFade=null;}};
   fade.finished.then(finish).catch(finish);
  }
 }
 items.forEach((item,i)=>{
  item.addEventListener('click',()=>select(i));
  item.addEventListener('keydown',event=>{
   let next;if(event.key==='ArrowDown'||event.key==='ArrowRight')next=(i+1)%items.length;else if(event.key==='ArrowUp'||event.key==='ArrowLeft')next=(i+items.length-1)%items.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=items.length-1;else return;
   event.preventDefault();select(next);items[next].focus();
  });
 });
 select(0);
 const preload=()=>{
  const run=++warmRun,sources=[...new Set(items.map(item=>imageFor(item.dataset)))];
  if(!mobile.matches){sources.forEach(src=>prepare(src).catch(()=>{}));return;}
  let next=0;
  async function worker(){while(run===warmRun&&next<sources.length){try{await prepare(sources[next++]);}catch{}}}
  worker();worker();
 };
 const refresh=()=>{clearMobileTransition();preload();select(desired);};
 wide.addEventListener('change',refresh);
 photoWide.addEventListener('change',refresh);
 addEventListener('resize',clearMobileTransition,{passive:true});
 reduced.addEventListener('change',()=>{if(reduced.matches)clearMobileTransition();});
 addEventListener('pagehide',()=>{warmRun++;clearMobileTransition();});
 if('IntersectionObserver'in window){const warmer=new IntersectionObserver(entries=>{if(entries.some(entry=>entry.isIntersecting)){preload();warmer.disconnect();}},{rootMargin:'800px'});warmer.observe(section);}else preload();
 let visible=true;
 const sync=()=>comparison.classList.toggle('care-auto-paused',!visible||document.hidden);
 if(typeof IntersectionObserver==='function'){
  new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();},{threshold:0}).observe(comparison);
 }
 document.addEventListener('visibilitychange',sync);sync();
})();
