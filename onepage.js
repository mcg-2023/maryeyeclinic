(() => {
 if(!document.querySelector('.hero'))return;
 document.body.classList.add('onepage-home');
 const nav=document.getElementById('nav'),menu=document.getElementById('mega'),toggle=document.getElementById('menu-toggle');
 const items=[['의료진','doctors'],['진료 안내','care'],['진료 철학','promise'],['검사 장비','equipment'],['병원 공간','space'],['오시는 길','visit']];
 nav.innerHTML=items.map(([label,id])=>'<a href="#'+id+'">'+label+'</a>').join('');
 function close(){menu.hidden=true;toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','전체 메뉴 열기');}
 nav.addEventListener('click',close);
 const details=['about-doctors.html','cataract.html','about-philosophy.html','about-facilities.html','about-facilities.html','about-location.html'];
 menu.innerHTML=items.map(([label,id],i)=>'<div><h2><a href="#'+id+'">'+label+'</a></h2><a href="'+details[i]+'">상세 안내 보기</a></div>').join('');
 menu.addEventListener('click',event=>{if(event.target.closest('a[href^="#"]'))close();});
 const hero=document.querySelector('.hero');hero.id='top';
 document.querySelector('.header .brand').href='#top';
 const observer=typeof IntersectionObserver==='function'?new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){nav.querySelectorAll('a').forEach(a=>{if(a.hash==='#'+entry.target.id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}});
 },{rootMargin:'-15% 0px -55% 0px',threshold:0}):null;
 items.forEach(([,id])=>{const section=document.getElementById(id);if(section)observer?.observe(section);});
 window.addEventListener('pagehide',()=>observer?.disconnect());
})();
