(()=>{
 const root=document.querySelector('.eye-detail');if(!root)return;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const items=root.querySelectorAll('.ed-heading,.ed-copy,.ed-overview figure,.ed-causes article,.ed-comparison-wrap,.ct-test-item,.ed-booking>.wrap,.pr-about-copy,.pr-about-visual,.pr-section-title,.pr-symptom-card,.pr-check-photo,.pr-speech,.ed-bottom-booking,.uc-about-copy,.uc-about-photo,.uc-compare,.uc-section-heading,.uc-issue-text,.uc-graphic,.uc-issue-emphasis,.uc-cause-intro,.uc-cause-card');
 if(!reduced.matches&&'IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('ed-visible');observer.unobserve(entry.target);}}),{threshold:.1,rootMargin:'0px 0px -35px 0px'});
  items.forEach(item=>{
   const sidewaysLeft=item.matches('.ed-copy,.pr-about-copy,.uc-about-copy,.uc-cause-intro');
   const sidewaysRight=item.matches('.ed-overview figure,.pr-about-visual,.pr-check-photo,.uc-about-photo');
   item.classList.add('ed-reveal',sidewaysLeft?'ed-from-left':sidewaysRight?'ed-from-right':'ed-from-bottom');
   const siblings=item.parentElement.querySelectorAll('.ed-causes>article,.pr-symptom-card,.ct-test-item,.uc-graphic,.uc-cause-card');
   const index=Array.from(siblings).indexOf(item);
   item.style.setProperty('--ed-delay',`${Math.min(Math.max(index,0),3)*90}ms`);
   observer.observe(item);
  });
 }
 const comparison=root.querySelector('.ed-comparison'),range=comparison.querySelector('input');
 range.addEventListener('input',()=>comparison.style.setProperty('--ed-split',range.value+'%'));
 const checks=[...root.querySelectorAll('[name="cataract-symptom"]')],button=root.querySelector('.ct-booking-trigger'),dialog=root.querySelector('dialog'),status=root.querySelector('.ed-check-status');
 let opener=button;
 function open(source){opener=source;if(dialog.open)return;dialog.showModal();document.body.classList.add('ct-booking-open');dialog.querySelector('.ct-booking-call').focus();}
 checks.forEach(check=>check.addEventListener('change',()=>{
  const count=checks.filter(input=>input.checked).length;button.disabled=count<1;
  status.textContent=count<1?`${count}개 선택 · 1개 이상 선택해 주세요.`:`${count}개 선택 · 예약문의를 진행해 주세요.`;
 }));
 button.addEventListener('click',()=>{if(!button.disabled)open(button);});
 dialog.querySelector('.ct-booking-close').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',e=>{if(e.target!==dialog)return;const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();});
 dialog.addEventListener('close',()=>{document.body.classList.remove('ct-booking-open');opener.focus({preventScroll:true});});
})();
