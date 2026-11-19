(()=>{
 'use strict';
 const mobile=matchMedia('(max-width:900px)');
 const homeTabs=[...document.querySelectorAll('#doctors .lifecare-tabs button')];
 const homeLabels=homeTabs.map(button=>button.lastElementChild.textContent);
 const profiles=[...document.querySelectorAll('.profile-detail')];
 let selected=0,lastMode=null,nav,buttons=[],accordions=[];
 if(profiles.length){
  const root=profiles[0].parentElement;root.classList.add('mobile-doctors-view');
  nav=document.createElement('div');nav.className='mobile-doctor-tabs';nav.setAttribute('role','tablist');nav.setAttribute('aria-label','의료진 선택');
  buttons=profiles.map((profile,index)=>{
   const name=profile.querySelector('.doctor-detail-name').childNodes[0].textContent.trim();
   const button=document.createElement('button');button.type='button';button.textContent=name;button.id='mobile-doctor-tab-'+index;button.setAttribute('role','tab');
   profile.id='mobile-doctor-profile-'+index;button.setAttribute('aria-controls',profile.id);nav.append(button);
   button.addEventListener('click',()=>select(index));
   button.addEventListener('keydown',event=>{let next;if(event.key==='ArrowRight')next=(index+1)%profiles.length;else if(event.key==='ArrowLeft')next=(index+profiles.length-1)%profiles.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=profiles.length-1;else return;event.preventDefault();select(next);buttons[next].focus();});
   profile.querySelectorAll('.biography-columns>div').forEach(block=>{
    const heading=block.querySelector('h4'),list=block.querySelector('ul');if(!heading||!list)return;
    const details=document.createElement('details'),summary=document.createElement('summary');details.className='mobile-profile-details';summary.textContent=heading.textContent;details.append(summary,list);block.append(details);accordions.push(details);
   });
   return button;
  });
  profiles[0].before(nav);
 }
 function select(index){selected=index;paint();}
 function paint(){
  const compact=mobile.matches;
  homeTabs.forEach((button,index)=>button.lastElementChild.textContent=compact?homeLabels[index].replace(/\s*(대표원장|원장)$/,''):homeLabels[index]);
  if(!nav)return;
  nav.hidden=!compact;
  profiles.forEach((profile,index)=>{profile.hidden=compact&&index!==selected;if(compact){profile.setAttribute('role','tabpanel');profile.setAttribute('aria-labelledby',buttons[index].id);}else{profile.removeAttribute('role');profile.removeAttribute('aria-labelledby');}});
  buttons.forEach((button,index)=>{button.setAttribute('aria-selected',String(index===selected));button.tabIndex=index===selected?0:-1;});
  if(lastMode!==compact){accordions.forEach(details=>details.open=!compact);lastMode=compact;}
 }
 mobile.addEventListener('change',paint);paint();
})();
