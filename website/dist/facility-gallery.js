(() => {
 'use strict';
 const launchers=[...document.querySelectorAll('[data-facility]')];if(!launchers.length)return;
 const reduced=matchMedia('(prefers-reduced-motion:reduce)');
 let groupsPromise=null,group=null,index=0,timer=null,playing=false,revision=0,opener=null;
 const modal=document.createElement('dialog');modal.className='facility-modal';modal.id='facility-modal';modal.setAttribute('aria-labelledby','facility-modal-title');
 modal.innerHTML='<h2 id="facility-modal-title" class="sr-only">병원 공간 사진</h2><div class="facility-modal-stage" aria-label="공간 사진"><div class="facility-modal-photo"></div><button type="button" class="facility-modal-arrow facility-modal-prev" aria-label="이전 사진">‹</button><button type="button" class="facility-modal-arrow facility-modal-next" aria-label="다음 사진">›</button><span class="facility-modal-loading" role="status">사진을 불러오는 중입니다.</span></div><button type="button" class="facility-modal-close" aria-label="갤러리 닫기" autofocus>×</button><button type="button" class="facility-modal-play"></button><p class="facility-modal-status sr-only" aria-live="polite"></p>';
 document.body.append(modal);
 const title=modal.querySelector('h2'),photo=modal.querySelector('.facility-modal-photo'),loading=modal.querySelector('.facility-modal-loading'),play=modal.querySelector('.facility-modal-play'),close=modal.querySelector('.facility-modal-close'),status=modal.querySelector('.facility-modal-status');
 function fitPhoto(){const image=photo.querySelector('img');if(!image?.naturalWidth)return;const ratio=image.naturalWidth/image.naturalHeight;const width=Math.min(innerWidth-32,1280,(innerHeight-64)*ratio);modal.style.width=width+'px';modal.style.height=(width/ratio)+'px';}
 function stop(){clearTimeout(timer);timer=null;}
 function schedule(){stop();if(modal.open&&playing&&!document.hidden&&group?.images.length>1)timer=setTimeout(()=>show(index+1),2500);}
 function paintPlay(){play.textContent=playing?'Ⅱ':'▶';play.setAttribute('aria-label',playing?'자동 넘김 일시정지':'자동 넘김 재생');play.setAttribute('aria-pressed',String(playing));}
 async function show(next,manual=false){
  if(!group)return;stop();index=(next+group.images.length)%group.images.length;const token=++revision,item=group.images[index];
  loading.hidden=photo.children.length>0;
  const image=new Image();image.alt=item.alt;image.src=item.src;image.decoding='async';
  try{await image.decode();}catch{if(token===revision&&modal.open){loading.hidden=false;loading.textContent='사진을 불러오지 못했습니다. 다른 사진을 선택해 주세요.';schedule();}return;}
  if(token!==revision||!modal.open)return;
  photo.replaceChildren(image);fitPhoto();loading.hidden=true;
  if(!reduced.matches)image.animate([{opacity:.25},{opacity:1}],{duration:500,easing:'ease-out'});
  if(manual)status.textContent=group.title+' 사진 '+(index+1)+' / '+group.images.length;
  const nextImage=new Image();nextImage.src=group.images[(index+1)%group.images.length].src;
  schedule();
 }
 async function openGallery(category,trigger){
  if(modal.open)return;opener=trigger;group=null;index=0;playing=true;paintPlay();
  photo.replaceChildren();status.textContent='';modal.style.width='';modal.style.height='';title.textContent=trigger.querySelector('span,h3')?.textContent||'병원 공간 사진';loading.hidden=false;loading.textContent='사진을 불러오는 중입니다.';
  document.documentElement.classList.add('facility-gallery-open');modal.showModal();close.focus();const token=++revision;
  try{
   if(!groupsPromise)groupsPromise=fetch('facility-galleries.json').then(response=>{if(!response.ok)throw Error('gallery data');return response.json();});
   const groups=await groupsPromise;if(!modal.open||token!==revision)return;group=groups[category];if(!group)throw Error('missing category');
   title.textContent=group.title+' 사진';
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
 window.addEventListener('resize',fitPhoto);
 window.addEventListener('pagehide',()=>{stop();revision++;});
})();
