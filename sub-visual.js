(function(root,factory){if(typeof module!=='undefined')module.exports=factory;else root.ClinicSubVisual=factory;})(typeof window!=='undefined'?window:this,function(key){
 const data=typeof module!=='undefined'?require('./category-data.js'):window.ClinicCategoryData;
 const info={
 'about-greeting':['Greetings','facility-consultation-01.jpg','주례성모안과 진료 공간'],
 'about-doctors':['Our Doctors','facility-consultation-02.jpg','주례성모안과 원내 상담 공간'],
 'about-philosophy':['Our Philosophy','facility-waiting-04.jpg','편안한 병원 공간'],
 'about-history':['Our History','history-waiting-lounge.jpg','주례성모안과 공간'],
 'about-facilities':['Our Facilities','facility-waiting-02.jpg','병원 대기 공간'],
 'about-location':['Visit Us','facility-reception-04.jpg','병원 접수 공간'],
 interest:['Eye Health Journal','hero-journal-family-v1.webp','어린아이와 부모가 함께하는 가족의 일상']
 };
 const p=data[key],item=p?[p.en,p.hero,p.title+' 진료 주제를 위한 이미지']:info[key];if(!item)return '';
 const copy={
  'about-doctors':['서로 다른 전문 분야, 함께하는 세심한 진료','세 명의 안과 전문의가 각자의 경험을 모아 환자분의 눈 건강을 함께 살핍니다.'],
  'about-philosophy':['눈의 이야기에 귀 기울이는 진료','작은 불편부터 치료 후의 변화까지, 내 눈에 맞는 진료의 방향을 함께 고민합니다.'],
  'about-location':['가까이에서 함께하는 당신의 눈 건강','주례역 5번 출구 앞, 엠스퀘어메디컬센터 9층에서 만나 뵙겠습니다.'],
  'cataract':['뿌옇게 느껴지는 시야, 원인부터 차근차근','수정체의 변화와 생활 속 불편을 함께 살펴 나에게 맞는 진료를 상담합니다.'],
  'presbyopia':['가까운 일상의 변화에 귀 기울입니다','읽고 보고 생활하는 거리까지 생각하며 눈의 초점 조절 변화를 살핍니다.'],
  'lens':['내 눈과 생활을 함께 생각하는 렌즈 선택','눈 상태와 자주 사용하는 시야의 거리를 살펴 인공수정체를 상담합니다.'],
  'retina-amd':['중심 시야의 작은 변화까지 세심하게','사물의 모양과 선명함이 달라졌다면 망막과 황반의 상태를 함께 확인합니다.'],
  'retina-diabetes':['당뇨 관리와 함께 살피는 망막 건강','눈 안쪽의 변화를 정기적으로 확인하고 검사 결과에 맞는 진료를 안내합니다.'],
  'retina-detachment':['갑작스러운 시야 변화에 신속한 확인을','번쩍임과 떠다니는 점, 가려지는 시야 등 눈의 변화를 주의 깊게 살핍니다.'],
  'retina-glaucoma':['시야를 지키기 위해 꾸준히 살핍니다','안압과 시신경, 시야의 변화를 함께 확인하며 관리의 방향을 정합니다.'],
  'pediatric-strabismus':['아이마다 다른 눈의 성장을 이해합니다','두 눈의 정렬과 시력 발달을 살펴 아이에게 필요한 진료를 함께 고민합니다.'],
  'pediatric-dream':['아이의 눈과 생활에 맞춘 드림렌즈 상담','각막 상태와 도수, 착용과 관리 여건까지 차근차근 확인합니다.'],
  'pediatric-exam':['잘 보이는 오늘과 자라나는 시력을 함께','아이의 나이와 눈을 사용하는 습관을 생각하며 눈 건강을 확인합니다.'],
  'care-dry':['반복되는 눈의 불편, 눈 표면부터 살핍니다','눈물막과 눈꺼풀, 생활 속 환경을 함께 확인해 관리 방향을 상담합니다.'],
  'care-oculoplastic':['눈 주변의 변화와 기능을 함께 생각합니다','눈꺼풀과 눈물길의 상태를 살펴 일상에서 느끼는 불편에 귀 기울입니다.'],
  'care-exam':['시력 너머의 눈 건강까지 차근차근','나이와 증상, 가족력에 맞춰 눈 안팎의 상태를 함께 살펴봅니다.'],
  'interest':['알아두면 좋은 눈 이야기','주례성모안과가 전하는 눈 건강 정보로 일상의 작은 변화를 살펴보세요.']
 };
 const message=copy[key]||['눈 건강을 함께 살피는 주례성모안과','진료와 검사, 머무는 시간까지 세심하게 생각합니다.'];
 const titleUnits=[...item[0]].reduce((sum,char)=>sum+(/[ilj]/.test(char)?.3:/[mwMW]/.test(char)?.9:char===' '?.26:/[A-Z&]/.test(char)?.76:.56)-.055,0).toFixed(2);
 const title=`<span class="sub-visual-title-line" style="--title-units:${titleUnits}"><span class="sub-visual-accent">${item[0]}</span></span>`;
 const photo=key==='about-doctors'?`<div class="sub-visual-photo sub-doctors-group" role="group" aria-label="주례성모안과 세 명의 의료진">${[['yoo-clinic-logo.png','유지명 원장'],['director-clinic-logo.png','이정헌 대표원장'],['song-clinic-logo.png','송도윤 원장']].map(([src,name])=>`<div class="sub-doctor-portrait"><img src="assets/${src}" alt="${name}" fetchpriority="high" decoding="async"></div>`).join('')}</div>`:`<div class="sub-visual-photo"><img src="assets/${item[1]}" alt="${item[2]}" fetchpriority="high" decoding="async"></div>`;
 return `<section class="sub-visual" id="sub-visual" aria-label="${item[0]}"><div class="sub-visual-title"><h1>${title}</h1><div class="sub-visual-copy"><h2>${message[0]}</h2><p>${message[1]}</p></div></div>${photo}</section>`;
});

