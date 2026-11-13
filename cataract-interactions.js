(()=>{
 const root=document.querySelector('.cataract-page');if(!root)return;
 const vision=root.querySelector('.ct-vision');
 if(vision){const range=vision.querySelector('input');
 function setSplit(value){const next=Math.max(0,Math.min(100,value));range.value=String(next);vision.style.setProperty('--ct-split',next+'%');}
 range.addEventListener('input',()=>setSplit(Number(range.value)));
 let dragging=null;
 function moveSplit(event){const bounds=vision.getBoundingClientRect();if(bounds.width)setSplit((event.clientX-bounds.left)/bounds.width*100);}
 vision.addEventListener('pointerdown',event=>{
  if(!event.isPrimary||event.button!==0||event.target.closest('.ct-vision-control'))return;
  dragging=event.pointerId;vision.setPointerCapture(dragging);vision.classList.add('is-dragging');range.focus({preventScroll:true});moveSplit(event);
  if(event.pointerType==='mouse')event.preventDefault();
 });
 vision.addEventListener('pointermove',event=>{if(event.pointerId===dragging)moveSplit(event);});
 function endDrag(event){if(event.pointerId!==dragging)return;dragging=null;vision.classList.remove('is-dragging');if(vision.hasPointerCapture(event.pointerId))vision.releasePointerCapture(event.pointerId);}
 vision.addEventListener('pointerup',endDrag);vision.addEventListener('pointercancel',endDrag);vision.addEventListener('lostpointercapture',endDrag);
 vision.addEventListener('dragstart',event=>event.preventDefault());
 }
 const checks=[...root.querySelectorAll('[name="cataract-symptom"]')];
 const trigger=root.querySelector('.ct-booking-trigger'),dialog=root.querySelector('#ct-booking-dialog');
 const minimum=Number(root.querySelector('[data-min-selected]')?.dataset.minSelected??3);
 function update(){trigger.disabled=checks.filter(c=>c.checked).length<minimum;}
 checks.forEach(input=>input.addEventListener('change',update));update();
 trigger.addEventListener('click',()=>{if(trigger.disabled)return;dialog.showModal();document.body.classList.add('ct-booking-open');dialog.querySelector('.ct-booking-call')?.focus();});
 dialog.querySelector('.ct-booking-close').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',event=>{if(event.target!==dialog)return;const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();});
 dialog.addEventListener('close',()=>{document.body.classList.remove('ct-booking-open');trigger.focus();});
 const tabs=[...root.querySelectorAll('[data-iol-tab]')];
 function selectTab(tab,focus=false){tabs.forEach(item=>{const selected=item===tab;item.setAttribute('aria-selected',String(selected));item.tabIndex=selected?0:-1;root.querySelector('#'+item.getAttribute('aria-controls')).hidden=!selected;});if(focus)tab.focus();}
 tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>selectTab(tab));tab.addEventListener('keydown',event=>{let next;if(['ArrowRight','ArrowDown'].includes(event.key))next=(index+1)%tabs.length;else if(['ArrowLeft','ArrowUp'].includes(event.key))next=(index-1+tabs.length)%tabs.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=tabs.length-1;else return;event.preventDefault();selectTab(tabs[next],true);});});
})();
