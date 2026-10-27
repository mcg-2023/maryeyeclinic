(() => {
 'use strict';
 const root=document.querySelector('[data-equipment-accordion]');if(!root)return;
 const tiles=[...root.querySelectorAll('[data-equipment-tile]')];
 const toggles=tiles.map(tile=>tile.querySelector('.equipment-tile-toggle'));
 const hover=matchMedia('(hover:hover) and (pointer:fine)');
 let selected=0;
 function select(index){
  selected=(index+tiles.length)%tiles.length;
  tiles.forEach((tile,i)=>{
   tile.classList.toggle('is-active',i===selected);
   toggles[i].setAttribute('aria-expanded',String(i===selected));
   tile.querySelector('.equipment-tile-detail').hidden=i!==selected;
  });root.dataset.selected=String(selected);
 }
 tiles.forEach((tile,i)=>{
  tile.addEventListener('pointermove',event=>{if(hover.matches&&(event.movementX||event.movementY)&&selected!==i)select(i);});
  toggles[i].addEventListener('click',()=>select(i));
  toggles[i].addEventListener('focus',()=>select(i));
  toggles[i].addEventListener('keydown',event=>{
   const direction={ArrowRight:1,ArrowDown:1,ArrowLeft:-1,ArrowUp:-1}[event.key];
   if(direction){event.preventDefault();select(selected+direction);toggles[selected].focus();}
   else if(event.key==='Home'||event.key==='End'){event.preventDefault();select(event.key==='Home'?0:tiles.length-1);toggles[selected].focus();}
  });
 });select(0);
})();
