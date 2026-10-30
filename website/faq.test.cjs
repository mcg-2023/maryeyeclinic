'use strict';
const {test}=require('node:test');
const assert=require('node:assert/strict');
const QA=require('./dist/qa-engine.js');
const {loadQA}=require('./qa-index.cjs');
const entries=loadQA(),faqs=entries.filter(e=>e.faq);
test('all FAQ questions and colloquial examples choose their own answer',()=>{
 assert.equal(faqs.length,43);
 for(const faq of faqs)for(const question of [faq.question,...faq.aliases]){
  const result=QA.answer(question,entries);
  assert.equal(result.sources[0]?.id,faq.id,question);
  assert(result.answer.includes(faq.answer),question);
 }
});
test('specific clinical details beat general disease descriptions',()=>{
 for(const [question,id] of [['산동하고 운전하려는데','drive-exam'],['백내장 수술 하고 돋보기 필요할까요','glasses-after'],['안약을 끊고 싶은데요','medication'],['드림렌즈 아이 나이 제한 있어요','dream-age'],['눈 검사를 받으면 시간 얼마나 걸릴까요','exam-duration'],['녹내장인데 초기 증상은 없나요','glaucoma-silent']]){
  assert.equal(QA.answer(question,entries).sources[0]?.id,'faq-'+id,question);
 }
});
test('emergency evaluation takes precedence over routine FAQs',()=>{
 for(const question of ['수술 후 갑자기 안보여요 운전해도 돼요?','드림렌즈 끼고 눈이 너무 아파요','눈 통증이 심해요','커튼처럼 가려져요 검사 시간이 얼마나 걸려요']){
  assert.equal(QA.answer(question,entries).mode,'emergency',question);
 }
});
test('combined questions include the second clinic topic',()=>{
 const result=QA.answer('산동검사하고 운전해도 돼요 그리고 주차는요',entries);
 assert(result.answer.includes('운전'));assert(result.answer.includes('학장천'));assert(result.sources.length>=2);
});
test('answers do not guarantee eligibility, price or a live appointment',()=>{
 assert(QA.answer('라식 가능해요',entries).answer.includes('확정할 수'));
 assert(QA.answer('검사비 얼마예요',entries).answer.includes('공개 가격 자료는 없어요'));
 assert(QA.answer('예약 안하고 가도 돼',entries).answer.includes('확인'));
});
