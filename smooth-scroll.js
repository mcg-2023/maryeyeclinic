(() => {
 'use strict';
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const home=!!document.querySelector('.hero');
 let instance=null;
 // Keep the home layout while scrolling continuously by the user's input.
 if(home)document.body.classList.add('screen-scroll-home');
 function setup(){
  instance?.destroy();instance=null;
  if(reduced.matches||typeof window.Lenis!=='function')return;
  instance=new Lenis({
   autoRaf:true,
   lerp:.11,
   smoothWheel:true,
   syncTouch:false,
   anchors:{offset:-100},
   prevent:node=>node.tagName==='DIALOG'||node.closest?.('dialog,#mega,.qa-messages,[data-lenis-prevent],.content-tablist,.equipment-track')
  });
 }
 setup();
 reduced.addEventListener('change',setup);
 window.addEventListener('pagehide',()=>{instance?.destroy();instance=null;});
 window.addEventListener('pageshow',event=>{if(event.persisted)setup();});
})();
