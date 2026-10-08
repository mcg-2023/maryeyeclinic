(() => {
 'use strict';
 const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
 const easing='cubic-bezier(0.22, 1, 0.36, 1)';
 const cleanups=[];
 function animate(el,frames,options={}){
  if(motion.matches||typeof el.animate!=='function')return null;
  return el.animate(frames,{duration:300,easing,...options});
 }
 function enableControls(root){root.querySelectorAll('[data-enhancement]').forEach(el=>el.hidden=false);}
 function initTabs(root){
  const name=root.dataset.tabs,list=root.querySelector('.content-tablist');
  const tabs=[...list.querySelectorAll('[data-tab]')],panels=[...root.querySelectorAll('[data-panel]')];
  if(!tabs.length||tabs.length!==panels.length)return null;
  let selected=0,lastAnimation=null;
  function select(index,{focus=false,scroll=false}={}){
   selected=Math.max(0,Math.min(tabs.length-1,index));
   lastAnimation?.cancel();
   tabs.forEach((tab,i)=>{tab.setAttribute('aria-selected',String(i===selected));tab.tabIndex=i===selected?0:-1;});
   panels.forEach((panel,i)=>{panel.hidden=i!==selected;});
   const panel=panels[selected];
   if(scroll&&tabs[selected].scrollIntoView)tabs[selected].scrollIntoView({block:'nearest',inline:'nearest',behavior:motion.matches?'instant':'smooth'});
   if(focus)tabs[selected].focus({preventScroll:true});
   lastAnimation=animate(panel,[{opacity:0,transform:'translateY(12px)'},{opacity:1,transform:'translateY(0)'}]);
   root.dataset.selected=String(selected);
  }
  list.setAttribute('role','tablist');
  tabs.forEach((tab,i)=>{
   tab.setAttribute('role','tab');tab.setAttribute('aria-controls',panels[i].id);
   panels[i].setAttribute('role','tabpanel');panels[i].setAttribute('aria-labelledby',tab.id);panels[i].tabIndex=0;
   panels[i].querySelectorAll('img').forEach(image=>image.loading='eager');
   tab.addEventListener('click',e=>{e.preventDefault();select(i,{scroll:true});});
   tab.addEventListener('keydown',e=>{
    let target=i;
    if(e.key==='ArrowRight')target=(i+1)%tabs.length;
    else if(e.key==='ArrowLeft')target=(i-1+tabs.length)%tabs.length;
    else if(e.key==='Home')target=0;
    else if(e.key==='End')target=tabs.length-1;
    else if(e.key==='Enter'||e.key===' '){e.preventDefault();select(i,{scroll:true});return;}
    else return;
    e.preventDefault();
    tabs.forEach(t=>t.tabIndex=-1);tabs[target].tabIndex=0;tabs[target].focus({preventScroll:true});
    tabs[target].scrollIntoView?.({block:'nearest',inline:'nearest',behavior:'instant'});
   });
  });
  root.classList.add('tabs-ready');enableControls(root);
  select(0);
  motion.addEventListener?.('change',()=>{if(motion.matches){lastAnimation?.cancel();lastAnimation=null;}});
  const api={select,index:()=>selected,length:tabs.length};
  root.querySelectorAll('.content-panel').forEach(panel=>addSwipe(panel,dir=>api.select((api.index()+dir+api.length)%api.length,{scroll:true})));
  return api;
 }
 function addSwipe(el,callback){
  let start=null;
  el.addEventListener('pointerdown',e=>{if(e.pointerType==='touch')start={x:e.clientX,y:e.clientY};});
  el.addEventListener('pointercancel',()=>start=null);
  el.addEventListener('pointerup',e=>{
   if(!start)return;
   const dx=e.clientX-start.x,dy=e.clientY-start.y;start=null;
   if(Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy)*1.4)callback(dx<0?1:-1);
  });
 }
 function initHero(){
  const hero=document.querySelector('.hero'),image=document.getElementById('hero-image');
  if(!hero||!image)return;
  const slides=[
   ['YOUR EYES, OUR PROMISE','당신의 눈,<br>우리의 약속.','각자의 전문 분야를 가진<br><strong>3인의 안과 전문의</strong>가 함께합니다.','의료진 소개','about-doctors','image3.png','주례성모안과 진료실의 이정헌 대표원장','CARE THAT SEES YOU'],
   ['A SPACE FOR YOU','머무는 순간까지,<br>편안하도록.','진료부터 대기까지,<br>당신의 시간을 생각하는 공간.','병원 공간 둘러보기','about-facilities','image1.png','주례성모안과 대기 공간','COMFORT IN EVERY MOMENT'],
   ['SPECIALIZED EYE CARE','눈의 작은 변화도,<br>세심하게.','노안·백내장, 망막·녹내장, 소아안과.<br>눈의 상태에 맞는 진료를 함께 생각합니다.','진료 안내','cataract','image7.png','눈을 살피는 의료진','A CLEARER TOMORROW']
  ];
  let current=0,timer=null,userPaused=false,hovered=false,focused=false,offscreen=false,revision=0,zoom=null;
  const animations=[],visual=hero.querySelector('.hero-visual'),play=hero.querySelector('[data-hero-play]');
  const announce=document.createElement('p');announce.className='sr-only';announce.setAttribute('role','status');announce.setAttribute('aria-atomic','true');hero.appendChild(announce);
  hero.dataset.slideCount=String(slides.length);hero.dataset.activeSlide='0';
  slides.slice(1).forEach(s=>{const preload=new Image();preload.src='assets/'+s[5];});
  function blocked(){return userPaused||motion.matches||hovered||focused||offscreen||document.hidden||document.getElementById('dialog')?.open||document.getElementById('menu-toggle')?.getAttribute('aria-expanded')==='true';}
  function stop(){if(timer!==null)clearTimeout(timer);timer=null;zoom?.pause();hero.dataset.autoplay='paused';}
  function schedule(){
   stop();play.disabled=motion.matches;
   play.setAttribute('aria-pressed',String(userPaused));
   play.textContent=motion.matches?'자동재생 꺼짐':userPaused?'재생':'일시정지';
   play.setAttribute('aria-label',motion.matches?'모션 줄이기 설정으로 자동재생 꺼짐':userPaused?'자동 재생 시작':'자동 재생 일시정지');
   if(blocked()||slides.length<2)return;
   hero.dataset.autoplay='playing';zoom?.play();timer=setTimeout(()=>{timer=null;show(current+1,false);},6000);
  }
  function cancelAnimations(){animations.splice(0).forEach(a=>a?.cancel());zoom?.cancel();zoom=null;visual.querySelectorAll('.hero-image-outgoing').forEach(el=>el.remove());}
  function show(index,manual=true){
   const next=(index+slides.length)%slides.length;
   if(next===current){schedule();return;}
   const rev=++revision,slide=slides[next];
   const old=image.cloneNode(false);old.removeAttribute('id');old.removeAttribute('fetchpriority');old.className='hero-image-outgoing';old.alt='';old.setAttribute('aria-hidden','true');old.style.opacity=getComputedStyle(image).opacity;
   cancelAnimations();current=next;hero.dataset.activeSlide=String(current);
   image.src='assets/'+slide[5];image.alt=slide[6];image.style.setProperty('--photo-offset',slide[5]==='image7.png'?'-20%':'0%');
   document.getElementById('hero-eyebrow').textContent=slide[0];document.getElementById('hero-title').innerHTML=slide[1];document.getElementById('hero-intro').innerHTML=slide[2];
   const cta=document.getElementById('hero-link');cta.textContent=slide[3];cta.href=slide[4]+'.html';
   document.getElementById('hero-caption').textContent=slide[7];document.getElementById('hero-position').textContent=String(current+1).padStart(2,'0')+' / '+String(slides.length).padStart(2,'0');
   hero.querySelectorAll('[data-slide]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.slide)===current)));
   if(!motion.matches){
    visual.appendChild(old);
    const fade=animate(old,[{opacity:old.style.opacity||1},{opacity:0}],{duration:800});
    if(fade){animations.push(fade);fade.finished.then(()=>{if(rev===revision)old.remove();}).catch(()=>{});}else old.remove();
    const enter=animate(image,[{opacity:0},{opacity:1}],{duration:800});if(enter)animations.push(enter);
    const offset=image.style.getPropertyValue('--photo-offset')||'0%';
    zoom=animate(image,[{transform:'translateY('+offset+') scale(1.04)'},{transform:'translateY('+offset+') scale(1)'}],{duration:6000,fill:'forwards'});
    ['hero-eyebrow','hero-title','hero-intro','hero-link'].forEach((id,i)=>{
     const el=document.getElementById(id);const a=animate(el,[{opacity:0,transform:'translateY('+[16,20,16,12][i]+'px)'},{opacity:1,transform:'translateY(0)'}],{duration:i<2?600:500,delay:i*90,fill:'backwards'});if(a)animations.push(a);
    });
   }
   if(manual)announce.textContent=(current+1)+' / '+slides.length+' · '+slide[6];
   schedule();
  }
  hero.querySelectorAll('[data-slide]').forEach(b=>b.addEventListener('click',()=>show(Number(b.dataset.slide))));
  hero.querySelector('[data-hero-prev]').addEventListener('click',()=>show(current-1));
  hero.querySelector('[data-hero-next]').addEventListener('click',()=>show(current+1));
  play.addEventListener('click',()=>{if(!motion.matches){userPaused=!userPaused;schedule();}});
  hero.addEventListener('mouseenter',()=>{hovered=true;schedule();});
  hero.addEventListener('mouseleave',()=>{hovered=false;schedule();});
  hero.addEventListener('focusin',()=>{focused=true;schedule();});
  hero.addEventListener('focusout',()=>{setTimeout(()=>{focused=hero.contains(document.activeElement);schedule();},0);});
  document.addEventListener('visibilitychange',schedule);
  if(typeof MutationObserver!=='undefined'){
   const observer=new MutationObserver(schedule);
   const dialog=document.getElementById('dialog'),menu=document.getElementById('menu-toggle');
   if(dialog)observer.observe(dialog,{attributes:true,attributeFilter:['open']});
   if(menu)observer.observe(menu,{attributes:true,attributeFilter:['aria-expanded']});
  }
  if(typeof IntersectionObserver!=='undefined'){
   const observer=new IntersectionObserver(entries=>{offscreen=!entries[0].isIntersecting;schedule();},{threshold:0.1});observer.observe(hero);
  }
  motion.addEventListener?.('change',()=>{cancelAnimations();schedule();});
  addSwipe(visual,dir=>show(current+dir));
  enableControls(hero);
  if(slides.length<2)hero.querySelector('.hero-controls').hidden=true;
  zoom=animate(image,[{transform:'translateY(0%) scale(1.04)'},{transform:'translateY(0%) scale(1)'}],{duration:6000,fill:'forwards'});
  schedule();cleanups.push(stop);
 }
 function initDoctors(){
  const track=document.getElementById('doctor-track'),controls=document.querySelector('.doctor-controls');
  if(!track||!controls)return;
  const cards=[...track.querySelectorAll('.doctor-card')],prev=controls.querySelector('[data-doctor="-1"]'),next=controls.querySelector('[data-doctor="1"]');
  let selected=0,scrollTimer=null;
  function update(index){
   selected=Math.max(0,Math.min(cards.length-1,index));
   document.getElementById('doctor-position').textContent=(selected+1)+' / '+cards.length;
   prev.disabled=selected===0;next.disabled=selected===cards.length-1;
  }
  function move(index){
   update(index);
   const target=cards[selected].offsetLeft-cards[0].offsetLeft;
   track.scrollTo({left:target,behavior:motion.matches?'instant':'smooth'});
  }
  controls.hidden=false;track.classList.add('carousel-ready');
  track.setAttribute('role','group');track.setAttribute('aria-roledescription','캐러셀');track.tabIndex=0;
  cards.forEach((card,i)=>{card.setAttribute('aria-label',(i+1)+' / '+cards.length+' · '+card.querySelector('h3').textContent);});
  prev.addEventListener('click',()=>move(selected-1));next.addEventListener('click',()=>move(selected+1));
  track.addEventListener('keydown',e=>{if(e.target!==track)return;if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();move(selected+(e.key==='ArrowRight'?1:-1));}});
  track.addEventListener('scroll',()=>{clearTimeout(scrollTimer);scrollTimer=setTimeout(()=>{
   const width=cards[0].getBoundingClientRect().width+20;if(width>20)update(Math.round(track.scrollLeft/width));
  },100);},{passive:true});
  window.addEventListener('resize',()=>{if(window.innerWidth>640)update(0);});
  update(0);
 }
 function initHeader(){
  const header=document.querySelector('.header'),menu=document.getElementById('mega'),nav=document.getElementById('nav'),toggle=document.getElementById('menu-toggle');
  if(!header||!menu||!nav||!toggle)return;
  function open(){menu.hidden=false;toggle.setAttribute('aria-expanded','true');toggle.setAttribute('aria-label','전체 메뉴 닫기');}
  function close(){menu.hidden=true;toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','전체 메뉴 열기');}
  nav.addEventListener('focusin',open);
  nav.addEventListener('keydown',e=>{if(e.key==='ArrowDown'){e.preventDefault();open();const index=[...nav.children].indexOf(document.activeElement);menu.children[Math.max(0,index)]?.querySelector('a')?.focus();}});
  header.addEventListener('focusout',()=>setTimeout(()=>{if(!header.contains(document.activeElement))close();},0));
  let frame=null;
  function update(){frame=null;header.classList.toggle('is-scrolled',window.scrollY>48);}
  window.addEventListener('scroll',()=>{if(frame===null)frame=requestAnimationFrame(update);},{passive:true});update();
 }
 function initReveal(){
  const targets=[...document.querySelectorAll('.section-head .eyebrow,.section-head h2,.section-head>p,.doctor-card,.content-tabs,.feature-item,.mission-copy>h2,.mission-copy>p,.promise-grid>div,.mission-photo,.space-grid>a,.visit-grid>div,.content-layout>div,.profile-detail,.profile-pending,.history-list,.promise-detail article,.facility-gallery article,.greeting p')];
  if(motion.matches||typeof IntersectionObserver==='undefined')return;
  let observer=null,idle=null,safety=null,receivedCallbacks=false;
  function reveal(el){el.classList.remove('reveal-pending');el.classList.add('is-revealed');observer?.unobserve(el);}
  function finish(){targets.forEach(reveal);observer?.disconnect();clearTimeout(idle);clearTimeout(safety);}
  try{
   observer=new IntersectionObserver(entries=>{receivedCallbacks=true;entries.forEach(entry=>{if(entry.isIntersecting||entry.boundingClientRect.top<0)reveal(entry.target);});},{threshold:0.15,rootMargin:'0px 0px -80px 0px'});
   targets.forEach((el,i)=>{
    const rect=el.getBoundingClientRect();
    if(rect.top<window.innerHeight-80){reveal(el);return;}
    el.classList.add('reveal-pending');el.style.setProperty('--reveal-delay',(i%3)*90+'ms');observer.observe(el);
   });
   // A single idle check catches large scroll jumps without measuring on each scroll event.
   window.addEventListener('scroll',()=>{clearTimeout(idle);idle=setTimeout(()=>{
    targets.filter(el=>el.classList.contains('reveal-pending')).forEach(el=>{if(el.getBoundingClientRect().top<window.innerHeight)reveal(el);});
   },160);},{passive:true});
   document.addEventListener('focusin',e=>targets.forEach(el=>{if(el.contains(e.target))reveal(el);}));
   motion.addEventListener?.('change',()=>{if(motion.matches)finish();});
   window.addEventListener('pagehide',finish);
   // If a browser fails to deliver observer callbacks, readable content wins.
   safety=setTimeout(()=>{if(!receivedCallbacks)finish();},12000);
  }catch{finish();}
 }
 function initCount(){
  const count=document.querySelector('[data-count]');if(!count)return;
  const goal=Number(count.dataset.count);let frame=null,observer=null,played=false;
  function finish(){if(frame!==null)cancelAnimationFrame(frame);frame=null;count.textContent=String(goal);observer?.disconnect();}
  function start(){
   if(played)return;played=true;
   if(motion.matches){finish();return;}
   let begin=null;
   function tick(time){if(begin===null)begin=time;const p=Math.min(1,(time-begin)/1200);count.textContent=String(Math.round(goal*(1-Math.pow(1-p,3))));if(p<1)frame=requestAnimationFrame(tick);else finish();}
   frame=requestAnimationFrame(tick);
  }
  if(!motion.matches&&typeof IntersectionObserver!=='undefined'){observer=new IntersectionObserver(entries=>{if(entries[0].isIntersecting)start();},{threshold:.15});observer.observe(count);}else finish();
  motion.addEventListener?.('change',()=>{if(motion.matches)finish();});
  window.addEventListener('pagehide',finish);
 }
 function safe(fn){try{return fn();}catch(error){console.error('홈페이지 인터랙션 초기화 실패',error);return null;}}
 safe(initHeader);safe(initHero);
 document.querySelectorAll('[data-tabs]').forEach(root=>{
  const api=safe(()=>initTabs(root));
  if(api&&root.dataset.tabs==='equipment'){
   document.querySelector('.equipment-toolbar').hidden=false;
   document.querySelectorAll('[data-equipment]').forEach(b=>b.addEventListener('click',()=>api.select((api.index()+Number(b.dataset.equipment)+api.length)%api.length,{scroll:true})));
  }
 });
 safe(initDoctors);safe(initReveal);safe(initCount);
 window.addEventListener('pagehide',()=>cleanups.forEach(fn=>fn()));
})();

