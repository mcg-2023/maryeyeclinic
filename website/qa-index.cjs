'use strict';
const fs = require('node:fs');
const path = require('node:path');
const sourcePath = path.join(__dirname, 'knowledge/maryeye_chatbot_knowledge.md');
const aliases = {
 '병원 안내': [
  '주소 위치 오시는 길 지하철 주례역 전화번호 연락처 홈페이지',
  '진료시간 운영시간 평일 월요일 화요일 수요일 목요일 금요일 토요일 일요일 공휴일 점심시간 휴진 접수 마감',
  '주차 주차장 주차비 주차 지원 학장천 공영주차장 수술 환자 일반 환자',
  '의료진 원장 이정헌 전문의 진료 일정 담당 분야',
  '예약 예약방법 예약취소 예약변경 진료 예약',
  '비용 가격 금액 보험 검사비 수술비 렌즈 비용'
 ],
 '백내장과 노안': ['백내장 수술 인공수정체 단초점 다초점 렌즈 합병증', '노안 가까운 글씨 돋보기'],
 '소아안과 사시와 드림렌즈': ['소아안과 사시 아이 눈 찡그림 가까이 보는 아이', '드림렌즈 착용 효과 부작용 위생'],
 '시력교정 및 안종합검진': ['시력교정 안경 콘택트렌즈 라식 라섹 수술 안종합검진 검사 항목 소요 시간 준비사항 비용']
};
function loadQA() {
 const lines=fs.readFileSync(sourcePath,'utf8').replace(/^\uFEFF/,'').split(/\r?\n/);
 const entries=[];let section='',paragraph=[],start=0,number=0;
 function commit(){
  if(!paragraph.length)return;
  const text=paragraph.join(' ');paragraph=[];
  if(!section||section==='자료 관리')return;
  const index=number++;
  const faq=text.match(/^Q\.\s*(.*?)\s+A\.\s*([\s\S]+)$/);
  const refs=text.match(/https?:\/\/[^\s;]+/g)||[];
  const answer=(faq?faq[2]:text).replace(/\s*출처:.*$/,'').trim();
  const policy=section==='답변 원칙',emergency=section==='응급 증상 우선 안내';
  entries.push({id:'knowledge-'+(entries.length+1),question:faq?faq[1]:((aliases[section]||[])[index]||section),answer,
   source:'maryeye_chatbot_knowledge.md',line:start+1,section,references:refs,
   ...(section==='병원 안내'?{intent:['location','hours','parking','doctorSchedule','reservation','cost'][index]}:{}),
   ...(policy?{kind:'policy'}:emergency?{kind:'emergency'}:{})});
 }
 for(let i=0;i<lines.length;i++){
  if(/^## /.test(lines[i])){commit();section=lines[i].slice(3).trim();number=0;}
  else if(!lines[i].trim()){commit();}
  else if(section){if(!paragraph.length)start=i;paragraph.push(lines[i].trim());}
 }
 commit();if(entries.length<20)throw new Error('지식자료의 필수 항목을 확인해 주세요.');
 const profile=JSON.parse(fs.readFileSync(path.join(__dirname,'knowledge/clinic-profile.json'),'utf8'));
 entries.push({id:'clinic-doctors',question:profile.question,answer:profile.answer,doctors:profile.doctors,intent:'doctors',source:'clinic-profile.json',line:2,section:'의료진 소개'});
 entries.push(...faqEntries().entries);
 return entries;
}
function faqEntries(){
 const catalog=require('./knowledge/faq-catalog.cjs'),lines=['# 안과 자주 묻는 질문','','기준일: 2026-10-30. 병원 제공 자료와 표시된 의료 참고 출처에 근거한 일반 안내입니다.',''];
 const entries=catalog.map(item=>{
  const line=lines.length+1;
  lines.push('## '+item.question,'',item.answer,'','비슷한 질문: '+item.aliases.join(' / '),'','근거: '+item.basis,...item.references,'');
  return {...item,faq:true,source:'clinic-faq.md',line,section:item.category};
 });
 return {entries,markdown:lines.join('\n')+'\n'};
}
function buildQA() {
  const entries = loadQA();
  fs.writeFileSync(path.join(__dirname,'knowledge/clinic-faq.md'),faqEntries().markdown);
  fs.writeFileSync(path.join(__dirname, 'dist/qa-data.json'), JSON.stringify({version: 2, reviewedAt:'2026-10-30', entries}, null, 2) + '\n');
  return entries;
}
module.exports = {loadQA, buildQA};
if (require.main === module) console.log('Indexed ' + buildQA().length + ' QA entries.');
