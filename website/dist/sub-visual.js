(function(root,factory){if(typeof module!=='undefined')module.exports=factory;else root.ClinicSubVisual=factory;})(typeof window!=='undefined'?window:this,function(key){
 const data=typeof module!=='undefined'?require('./category-data.js'):window.ClinicCategoryData;
 const info={
 'about-greeting':['Greetings','facility-consultation-01.jpg','주례성모안과 진료 공간'],
 'about-doctors':['Our Doctors','director-clinic-logo.png','주례성모안과 의료진'],
 'about-philosophy':['Our Philosophy','clinic-interior.jpg','편안한 병원 공간'],
 'about-history':['Our History','history-waiting-lounge.jpg','주례성모안과 공간'],
 'about-facilities':['Our Facilities','facility-waiting-02.jpg','병원 대기 공간'],
 'about-location':['Visit Us','facility-reception-02.jpg','병원 접수 공간'],
 interest:['Eye Health Journal','iol-lifestyle-near.webp','책을 읽는 일상']
 };
 const p=data[key],item=p?[p.en,p.hero,p.title+' 진료 주제를 위한 이미지']:info[key];if(!item)return '';
 return `<section class="sub-visual" id="sub-visual" aria-label="${item[0]}"><div class="sub-visual-title"><h1>${item[0]}</h1></div><div class="sub-visual-photo"><img src="assets/${item[1]}" alt="${item[2]}" fetchpriority="high" decoding="async"></div></section>`;
});
