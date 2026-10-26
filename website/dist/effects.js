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
  if(document.getElementById('hero-video')){initHeroVideo();return;}
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
 function initHeroVideo(){
  const video=document.getElementById('hero-video'),hero=video.closest('.hero');
  const button=hero.querySelector('[data-video-play]'),label=button.querySelector('[data-video-label]'),icon=button.querySelector('[data-video-icon]');
  let userPaused=false,visible=true,failed=false;
  video.muted=true;video.defaultMuted=true;button.hidden=false;
  function paint(){
   const paused=video.paused;button.setAttribute('aria-pressed',String(paused));
   button.setAttribute('aria-label',paused?'소개 영상 재생':'소개 영상 일시정지');
   label.textContent=paused?'재생':'일시정지';icon.textContent=paused?'▶':'Ⅱ';
   hero.dataset.autoplay=paused?'paused':'playing';
  }
  function sync(){
   if(failed||userPaused||motion.matches||document.hidden||!visible){video.pause();paint();return;}
   video.play()?.catch(paint);
  }
  button.addEventListener('click',()=>{userPaused=!video.paused;if(userPaused)video.pause();else video.play()?.catch(paint);paint();});
  video.addEventListener('play',paint);video.addEventListener('pause',paint);
  video.addEventListener('error',()=>{failed=true;video.pause();button.hidden=true;hero.classList.add('video-unavailable');});
  document.addEventListener('visibilitychange',sync);motion.addEventListener?.('change',sync);
  if(typeof IntersectionObserver==='function')new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();},{threshold:.1}).observe(hero);
  cleanups.push(()=>video.pause());sync();paint();
 }
 function initDoctors(){
  const root=document.getElementById('doctors'),track=document.getElementById('doctor-track');
  if(!root||!track)return;
  const cards=[...track.querySelectorAll('.doctor-card')];if(!cards.length)return;
  root.querySelector('.doctor-controls')?.remove();
  cards.forEach(card=>{
   const meta=card.querySelector('.doctor-meta');
   if(!meta||meta.querySelector('.doctor-more'))return;
   const more=document.createElement('div');more.className='doctor-more';
   more.textContent='의료진 자세히 보기';meta.appendChild(more);
  });
  cards.forEach(card=>{
   if(card.querySelector('.doctor-watermark'))return;
   const logo=document.createElement('img');logo.className='doctor-watermark';
   logo.src='assets/favicon.svg';logo.alt='';logo.setAttribute('aria-hidden','true');card.appendChild(logo);
  });
  const nav=document.createElement('div');nav.className='lifecare-tabs';nav.setAttribute('role','tablist');nav.setAttribute('aria-label','의료진 진료 분야');
  const labels=['이정헌 대표원장','망막·녹내장','소아안과'];
  const tabs=cards.map((card,i)=>{
   const button=document.createElement('button');button.type='button';button.id='doctor-tab-'+i;button.setAttribute('role','tab');button.innerHTML='<span class="eyebrow">SPECIALIST 0'+(i+1)+'</span><span>'+labels[i]+'</span>';
   card.id='doctor-panel-'+i;button.setAttribute('aria-controls',card.id);nav.appendChild(button);return button;
  });
  const bar=document.createElement('div');bar.className='lifecare-progress';bar.setAttribute('aria-hidden','true');bar.innerHTML='<span class="lifecare-fill"></span><span class="lifecare-thumb"></span>';
  track.before(nav,bar);root.classList.add('lifecare-ready');
  let selected=0,frame=null,start=null,elapsed=0,hovered=false,lastAnimation=null,doctorInView=false;
  const mobile=matchMedia('(max-width:1024px)'),fill=bar.firstElementChild,thumb=bar.lastElementChild;
  function paint(progress){const value=(selected+progress)/cards.length*100;fill.style.width=value+'%';thumb.style.left=value+'%';}
  function stop(){if(frame!==null)cancelAnimationFrame(frame);frame=null;start=null;}
  function blocked(){return hovered||document.hidden||motion.matches;}
  function tick(time){
   frame=null;if(blocked())return;
   if(start===null)start=time;
   const delta=time-start;start=time;elapsed+=delta;
   const progress=Math.min(1,elapsed/(mobile.matches?5000:8000));paint(progress);
   if(progress===1){select((selected+1)%cards.length);return;}
   frame=requestAnimationFrame(tick);
  }
  function resume(){stop();if(motion.matches){paint(1);return;}if(!blocked())frame=requestAnimationFrame(tick);}
  function select(index,focus=false){
   stop();cards.forEach(card=>card.classList.remove('light-active'));selected=(index+cards.length)%cards.length;elapsed=0;lastAnimation?.cancel();
   cards.forEach((card,i)=>{card.hidden=i!==selected;card.classList.remove('reveal-pending');});
   tabs.forEach((tab,i)=>{tab.setAttribute('aria-selected',String(i===selected));tab.tabIndex=i===selected?0:-1;});
   track.setAttribute('aria-labelledby',tabs[selected].id);track.setAttribute('role','tabpanel');
   root.dataset.activeDoctor=String(selected);nav.style.setProperty('--active-tab',String(selected));paint(0);
   if(doctorInView)lastAnimation=animate(cards[selected],[{opacity:0},{opacity:1}],{duration:1100,easing:'cubic-bezier(.25,.1,.25,1)'});
   if(focus)tabs[selected].focus({preventScroll:true});resume();
  }
  tabs.forEach((tab,i)=>{
   tab.addEventListener('click',()=>select(i));
   tab.addEventListener('keydown',e=>{
    let target;if(e.key==='ArrowRight')target=selected+1;else if(e.key==='ArrowLeft')target=selected-1;else if(e.key==='Home')target=0;else if(e.key==='End')target=cards.length-1;else return;
    e.preventDefault();select(target,true);
   });
  });
  track.addEventListener('mouseenter',()=>{hovered=true;resume();});track.addEventListener('mouseleave',()=>{hovered=false;resume();});
  document.addEventListener('visibilitychange',resume);
  motion.addEventListener?.('change',()=>{lastAnimation?.cancel();resume();});
  const finePointer=matchMedia('(hover:hover) and (pointer:fine)');
  let lightFrame=null,lightPoint=null;
  track.addEventListener('pointermove',event=>{
   if(motion.matches||!finePointer.matches)return;
   const card=cards[selected],rect=card.getBoundingClientRect();
   lightPoint={card,x:event.clientX-rect.left,y:event.clientY-rect.top};
   if(lightFrame!==null)return;
   lightFrame=requestAnimationFrame(()=>{
    lightFrame=null;if(!lightPoint)return;
    lightPoint.card.style.setProperty('--light-x',lightPoint.x+'px');
    lightPoint.card.style.setProperty('--light-y',lightPoint.y+'px');
    lightPoint.card.classList.add('light-active');
   });
  },{passive:true});
  function clearLight(){
   if(lightFrame!==null)cancelAnimationFrame(lightFrame);lightFrame=null;lightPoint=null;
   cards.forEach(card=>card.classList.remove('light-active'));
  }
  track.addEventListener('pointerleave',clearLight);
  motion.addEventListener?.('change',clearLight);
  cleanups.push(clearLight);
  addSwipe(track,dir=>select(selected+dir));
  root.classList.add('doctor-entry-pending');
  const entryObserver=new IntersectionObserver(entries=>{
   entries.forEach(entry=>{
    if(entry.isIntersecting&&entry.intersectionRect.height>=Math.min(entry.boundingClientRect.height,window.innerHeight-100)*.7&&!doctorInView){
     doctorInView=true;
     root.classList.remove('doctor-entry-pending');
    }else if(!entry.isIntersecting){
     doctorInView=false;
     lastAnimation?.cancel();
     root.classList.add('doctor-entry-pending');
    }
   });
  },{threshold:Array.from({length:21},(_,i)=>i/20),rootMargin:'-100px 0px 0px 0px'});
  entryObserver.observe(track);
  select(0);
  cleanups.push(()=>{entryObserver.disconnect();root.classList.remove('doctor-entry-pending');stop();lastAnimation?.cancel();});
 }
 function initHeader(){
  const header=document.querySelector('.header'),menu=document.getElementById('mega'),nav=document.getElementById('nav'),toggle=document.getElementById('menu-toggle');
  if(!header||!menu||!nav||!toggle)return;
  function alignMenu(){
   if(!matchMedia('(min-width:901px)').matches)return;
   const headerBox=header.getBoundingClientRect(),navBox=nav.getBoundingClientRect();
   menu.style.setProperty('--menu-left',Math.max(0,navBox.left-headerBox.left)+'px');
   menu.style.setProperty('--menu-right',Math.max(0,headerBox.right-navBox.right)+'px');
  }
  alignMenu();
  const menuResize=typeof ResizeObserver==='function'?new ResizeObserver(alignMenu):null;
  menuResize?.observe(header);menuResize?.observe(nav);
  document.fonts?.ready.then(alignMenu);
  window.addEventListener('resize',alignMenu,{passive:true});
  cleanups.push(()=>{menuResize?.disconnect();window.removeEventListener('resize',alignMenu);});
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
  const targets=[...document.querySelectorAll('.section-head .eyebrow,.section-head h2,.section-head>p,.doctor-card,.content-tabs,.feature-item,.mission-copy>h2,.mission-copy>p,.promise-grid>div,.mission-photo,.space-grid>a,.visit-grid>div,.content-layout>div,.profile-pending,.history-list,.promise-detail article,.facility-gallery article,.greeting p')];
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
  const section=count.closest('section'),goal=Number(count.dataset.count);
  let frame=null,observer=null,played=false,digitAnimation=null;
  function stop(){if(frame!==null)cancelAnimationFrame(frame);frame=null;digitAnimation?.cancel();}
  function finish(){stop();count.textContent=String(goal);}
  function start(){
   if(played)return;played=true;
   if(motion.matches){finish();return;}
   stop();count.textContent='1';let begin=null,last=1;
   function tick(time){
    if(begin===null)begin=time;
    const progress=Math.min(1,(time-begin)/3000);
    const value=1+Math.floor(progress*(goal-1));
    if(value!==last){
     last=value;count.textContent=String(value);digitAnimation?.cancel();
     digitAnimation=animate(count,[{opacity:.55,transform:'translateY(5px)'},{opacity:1,transform:'translateY(0)'}],{duration:180,easing:'ease-out'});
    }
    if(progress<1)frame=requestAnimationFrame(tick);else frame=null;
   }
   frame=requestAnimationFrame(tick);
  }
  if(!motion.matches&&typeof IntersectionObserver!=='undefined'){
   observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
     if(entry.isIntersecting&&entry.intersectionRatio>=.45)start();
     else if(!entry.isIntersecting){stop();played=false;count.textContent='1';}
    });
   },{threshold:[0,.45]});observer.observe(section||count);
  }else finish();
  motion.addEventListener?.('change',()=>{if(motion.matches){observer?.disconnect();finish();}});
  cleanups.push(()=>{observer?.disconnect();finish();});
 }
 function initDoctorDetailMotion(){
  const profile=document.querySelector('.profile-detail');
  if(!profile||motion.matches||typeof IntersectionObserver==='undefined')return;
  let observer=null,animation=null,inView=false;
  function show(){
   if(inView)return;inView=true;animation?.cancel();
   profile.style.opacity='1';
   animation=animate(profile,[{opacity:0},{opacity:1}],{duration:750,easing:'ease-out'});
  }
  function hide(){inView=false;animation?.cancel();profile.style.opacity='0';}
  profile.classList.remove('detail-fade-pending','detail-fade-visible','reveal-pending','is-revealed');
  try{
   hide();
   observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
     if(entry.isIntersecting)show();
     else if(entry.boundingClientRect.bottom<=0||entry.boundingClientRect.top>=window.innerHeight)hide();
    });
   },{threshold:0,rootMargin:'0px 0px -50px 0px'});
   observer.observe(profile);
   profile.addEventListener('focusin',show);
   motion.addEventListener?.('change',()=>{if(motion.matches){observer?.disconnect();animation?.cancel();profile.style.opacity='1';}});
   cleanups.push(()=>{observer?.disconnect();animation?.cancel();profile.style.opacity='1';});
  }catch{profile.style.opacity='1';}
 } function safe(fn){try{return fn();}catch(error){console.error('홈페이지 인터랙션 초기화 실패',error);return null;}}
 safe(initHeader);safe(initHero);
 document.querySelectorAll('[data-tabs]').forEach(root=>{
  const api=safe(()=>initTabs(root));
  if(api&&root.dataset.tabs==='equipment'){
   document.querySelector('.equipment-toolbar').hidden=false;
   document.querySelectorAll('[data-equipment]').forEach(b=>b.addEventListener('click',()=>api.select((api.index()+Number(b.dataset.equipment)+api.length)%api.length,{scroll:true})));
  }
 });
 function initHistoryMotion(){
  const section=document.getElementById('history');
  if(!section||motion.matches||typeof IntersectionObserver!=='function')return;
  section.classList.add('history-motion-ready');
  const observer=new IntersectionObserver(entries=>{
   entries.forEach(entry=>{
    if(entry.isIntersecting&&entry.intersectionRatio>=.45)section.classList.add('history-in-view');
    else if(!entry.isIntersecting)section.classList.remove('history-in-view');
   });
  },{threshold:[0,.45]});
  observer.observe(section);
  cleanups.push(()=>{observer.disconnect();section.classList.remove('history-motion-ready','history-in-view');});
 }
 safe(initDoctors);safe(initReveal);safe(initCount);safe(initDoctorDetailMotion);safe(initHistoryMotion);
 window.addEventListener('pagehide',()=>cleanups.forEach(fn=>fn()));
})();

