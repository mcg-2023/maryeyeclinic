function initializeInformationBoard(){
 const form=document.querySelector('#info-search');if(!form)return;
 if(form.dataset.ready==='true')return;
 form.dataset.ready='true';
 const rows=[...document.querySelectorAll('[data-info-post]')],input=document.querySelector('#info-query'),pager=document.querySelector('.info-pagination');
 // Search vocabulary describes related articles, not a diagnosis.
 const related={
  'pediatric-strabismus':['소아','어린이','아이','아기','유아','영유아','청소년','학생','초등','키즈','사시','약시','사팔뜨기','눈 정렬','눈이 몰려','가림 치료','시력 발달'],
  'pediatric-dream':['소아','어린이','아이','아기','유아','영유아','청소년','학생','초등','키즈','드림렌즈','드림 렌즈','근시','근시 관리','밤에 끼는 렌즈','잘 때 끼는 렌즈','수면 렌즈','오쏘케이'],
  'pediatric-exam':['소아','어린이','아이','아기','유아','영유아','청소년','학생','초등','키즈','영유아 검진','취학 전','입학 전','시력 발달','어린이 시력 검사'],
  cataract:['백내장','수정체 혼탁','뿌옇','흐릿','침침','눈부심','빛 번짐','백내장 수술','노인','어르신'],
  presbyopia:['노안','돋보기','가까운 글씨','작은 글씨','근거리','중년','노인','어르신','휴대폰 글씨','책 글씨','침침'],
  lens:['인공수정체','인공 수정체','백내장 렌즈','수술 렌즈','다초점','단초점','연속초점','렌즈 종류','렌즈 선택','백내장 수술'],
  'retina-amd':['황반변성','황반 변성','황반','직선이 휘어','휘어 보','찌그러','중심 시력','노인','어르신','망막'],
  'retina-diabetes':['당뇨','당뇨병','당뇨망막','당뇨 합병증','혈당','망막','안저 검사'],
  'retina-detachment':['망막박리','망막 박리','망막','비문증','날파리','날파리가','떠다니','번쩍','광시증','커튼','시야 가림'],
  'retina-glaucoma':['녹내장','안압','시신경','주변 시야','시야 좁아','시야가 좁','안압 검사','시야 검사'],
  'care-dry':['안구건조','건조증','건성안','눈 건조','눈이 건조','뻑뻑','따가','따갑','시림','눈이 시려','이물감','모래','인공눈물','눈물막','충혈','눈 피로','눈이 피곤'],
  'care-oculoplastic':['안성형','눈꺼풀','눈꺼풀 처짐','눈꺼풀이 처','안검하수','눈물길','눈물 흘림','눈물이 흘러','눈물이 나','눈 주변'],
  'care-exam':['안종합검진','종합 검진','정기 검진','건강 검진','눈 검사','안과 검사','시력 검사','시력검사','안저 검사','안압 검사','정밀 검사','눈 건강']
 };
 const normalize=text=>text.normalize('NFC').toLocaleLowerCase().replace(/[\s·.,?!？！]/g,'');
 const index=rows.map(row=>{
  const route=row.dataset.topic||row.querySelector('h3 a').getAttribute('href').replace(/\.html.*$/,'');
  return {row,text:normalize(row.dataset.search||row.textContent),aliases:[...(related[route]||[]),...(row.dataset.category==='소아안과'?['어린이','아이','유아','소아','청소년','학생','키즈']:[])].map(normalize)};
 });
 function matches(entry){
  if(!query)return true;
  const term=normalize(query);
  if(entry.text.includes(term))return true;
  if(entry.aliases.some(alias=>term.includes(alias)||(term.length>=2&&alias.includes(term))))return true;
  const words=query.split(/\s+/).filter(Boolean).map(normalize);
  return words.length>1&&words.every(word=>entry.text.includes(word)||entry.aliases.some(alias=>alias.includes(word)));
 }
 let category='전체',query='',page=1;const size=8;
 function render(){
  const found=index.filter(entry=>(category==='전체'||entry.row.dataset.category===category)&&matches(entry)).map(entry=>entry.row);
  const pages=Math.ceil(found.length/size);page=Math.min(page,pages||1);
  rows.forEach(row=>row.hidden=true);found.slice((page-1)*size,page*size).forEach(row=>row.hidden=false);
  document.querySelector('.info-count').innerHTML=(query?'검색 결과':'전체')+' <strong>'+found.length+'</strong>건';
  document.querySelector('.info-empty').hidden=!!found.length;
  pager.replaceChildren();
  if(pages>1)for(let n=0;n<pages+2;n++){
   const button=document.createElement('button');button.type='button';
   const target=n===0?page-1:n===pages+1?page+1:n;
   button.textContent=n===0?'이전':n===pages+1?'다음':n;
   button.disabled=target<1||target>pages;
   if(n===page)button.setAttribute('aria-current','page');
   button.addEventListener('click',()=>{page=target;render();document.querySelector('.info-count').scrollIntoView({block:'center',behavior:'instant'});pager.querySelector('[aria-current]')?.focus({preventScroll:true});});pager.append(button);
  }
 }
 function search(){query=input.value.normalize('NFC').trim().toLocaleLowerCase();page=1;render();}
 form.addEventListener('submit',e=>{e.preventDefault();search();});
 input.addEventListener('input',event=>{if(!event.isComposing)search();});
 input.addEventListener('compositionend',search);
 input.addEventListener('search',search);
 document.querySelectorAll('[data-info-category]').forEach(button=>button.addEventListener('click',()=>{category=button.dataset.infoCategory;page=1;document.querySelectorAll('[data-info-category]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));render();}));
 input.value=new URLSearchParams(location.search).get('q')||input.value;
 search();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initializeInformationBoard,{once:true});
else initializeInformationBoard();
