(() => {
 'use strict';
 const launchers=[...document.querySelectorAll('[data-facility]')];if(!launchers.length)return;
 const reduced=matchMedia('(prefers-reduced-motion:reduce)');
 let groupsPromise=null,group=null,index=0,timer=null,playing=false,revision=0,opener=null;
 const modal=document.createElement('dialog');modal.className='facility-modal';modal.id='facility-modal';modal.setAttribute('aria-labelledby','facility-modal-title');
 modal.innerHTML='<div class="facility-modal-head"><div><p class="facility-modal-eyebrow">OUR SPACE</p><h2 id="facility-modal-title">병원 공간</h2></div><button type="button" class="facility-modal-close" aria-label="갤러리 닫기" autofocus>×</button></div><p class="facility-modal-description"></p><div class="facility-modal-stage" aria-label="공간 사진"><div class="facility-modal-photo"></div><button type="button" class="facility-modal-arrow facility-modal-prev" aria-label="이전 사진">‹</button><button type="button" class="facility-modal-arrow facility-modal-next" aria-label="다음 사진">›</button><span class="facility-modal-loading" role="status">사진을 불러오는 중입니다.</span></div><div class="facility-modal-toolbar"><p class="facility-modal-count" aria-live="off"></p><button type="button" class="facility-modal-play"></button></div><div class="facility-modal-thumbnails" aria-label="사진 선택"></div><p class="facility-modal-status sr-only" aria-live="polite"></p>';
 document.body.append(modal);
 const title=modal.querySelector('h2'),description=modal.querySelector('.facility-modal-description'),photo=modal.querySelector('.facility-modal-photo'),loading=modal.querySelector('.facility-modal-loading'),counter=modal.querySelector('.facility-modal-count'),thumbs=modal.querySelector('.facility-modal-thumbnails'),play=modal.querySelector('.facility-modal-play'),close=modal.querySelector('.facility-modal-close'),status=modal.querySelector('.facility-modal-status');
 function stop(){clearTimeout(timer);timer=null;}
 function schedule(){stop();if(modal.open&&playing&&!document.hidden&&group?.images.length>1)timer=setTimeout(()=>show(index+1),4500);}
 function paintPlay(){play.textContent=playing?'Ⅱ  자동 넘김 일시정지':'▶  자동 넘김 재생';play.setAttribute('aria-pressed',String(playing));}
 async function show(next,manual=false){
  if(!group)return;stop();index=(next+group.images.length)%group.images.length;const token=++revision,item=group.images[index];
  counter.textContent=String(index+1).padStart(2,'0')+' / '+String(group.images.length).padStart(2,'0');
  [...thumbs.children].forEach((button,i)=>{button.setAttribute('aria-current',String(i===index));});
  loading.hidden=photo.children.length>0;
  const image=new Image();image.alt=item.alt;image.src=item.src;image.decoding='async';
  try{await image.decode();}catch{if(token===revision&&modal.open){loading.hidden=false;loading.textContent='사진을 불러오지 못했습니다. 다른 사진을 선택해 주세요.';schedule();}return;}
  if(token!==revision||!modal.open)return;
  photo.replaceChildren(image);loading.hidden=true;
  if(!reduced.matches)image.animate([{opacity:.25},{opacity:1}],{duration:500,easing:'ease-out'});
  if(manual)status.textContent=group.title+' 사진 '+(index+1)+' / '+group.images.length;
  const nextImage=new Image();nextImage.src=group.images[(index+1)%group.images.length].src;
  schedule();
 }
 async function openGallery(category,trigger){
  if(modal.open)return;opener=trigger;group=null;index=0;playing=!reduced.matches;paintPlay();
  photo.replaceChildren();thumbs.replaceChildren();counter.textContent='';description.textContent='';title.textContent=trigger.querySelector('span,h3')?.textContent||'병원 공간';loading.hidden=false;loading.textContent='사진을 불러오는 중입니다.';
  document.documentElement.classList.add('facility-gallery-open');modal.showModal();close.focus();const token=++revision;
  try{
   if(!groupsPromise)groupsPromise=fetch('facility-galleries.json').then(response=>{if(!response.ok)throw Error('gallery data');return response.json();});
   const groups=await groupsPromise;if(!modal.open||token!==revision)return;group=groups[category];if(!group)throw Error('missing category');
   title.textContent=group.title;description.textContent=group.description;
   group.images.forEach((item,i)=>{const button=document.createElement('button');button.type='button';button.setAttribute('aria-label',group.title+' 사진 '+(i+1)+' 보기');const image=document.createElement('img');image.src=item.src;image.alt='';image.loading='lazy';button.append(image);button.addEventListener('click',()=>show(i,true));thumbs.append(button);});
   show(0);
  }catch{groupsPromise=null;loading.textContent='사진을 불러오지 못했습니다. 잠시 후 다시 열어 주세요.';playing=false;paintPlay();}
 }
 document.addEventListener('click',event=>{const trigger=event.target.closest('[data-facility]');if(!trigger)return;event.preventDefault();event.stopImmediatePropagation();openGallery(Number(trigger.dataset.facility),trigger);},true);
 close.addEventListener('click',()=>modal.close());
 modal.addEventListener('close',()=>{stop();revision++;playing=false;document.documentElement.classList.remove('facility-gallery-open');opener?.focus({preventScroll:true});});
 modal.addEventListener('click',event=>{if(event.target!==modal)return;const r=modal.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)modal.close();});
 modal.querySelector('.facility-modal-prev').addEventListener('click',()=>show(index-1,true));modal.querySelector('.facility-modal-next').addEventListener('click',()=>show(index+1,true));
 play.addEventListener('click',()=>{playing=!playing;paintPlay();schedule();});
 modal.addEventListener('keydown',event=>{if(!group)return;if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();show(index+(event.key==='ArrowRight'?1:-1),true);}else if(event.key==='Home'||event.key==='End'){event.preventDefault();show(event.key==='Home'?0:group.images.length-1,true);}});
 let touchX=null,touchY=null;const stage=modal.querySelector('.facility-modal-stage');
 stage.addEventListener('touchstart',event=>{if(event.touches.length===1){touchX=event.touches[0].clientX;touchY=event.touches[0].clientY;}},{passive:true});
 stage.addEventListener('touchend',event=>{if(touchX===null)return;const dx=event.changedTouches[0].clientX-touchX,dy=event.changedTouches[0].clientY-touchY;touchX=null;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)*1.4)show(index+(dx<0?1:-1),true);},{passive:true});
 document.addEventListener('visibilitychange',schedule);
 reduced.addEventListener?.('change',()=>{if(reduced.matches){playing=false;paintPlay();stop();}});
 window.addEventListener('pagehide',()=>{stop();revision++;});
})();
