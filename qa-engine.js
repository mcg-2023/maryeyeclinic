(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.ClinicQA = factory();
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const FALLBACK = '현재 안내 자료에서는 이 질문에 대한 답변을 확인하기 어렵습니다. 자세한 내용은 병원으로 전화 문의해 주세요.';
  const PHONE = '051-325-1919';
  const CLOSING = '더 궁금하신 점이 있으시면 편하게 질문해 주세요.';
  function politeText(text) {
    return String(text).trim().split('\n').map(line => {
      const body = line.trim();
      if (!body) return '';
      if (/(?:습니다|입니다|드립니다|세요|해요|돼요|예요|이에요)[.!?。！？]*$/.test(body)) return /[.!?。！？]$/.test(body) ? body : body + '.';
      const plain = body.replace(/[.!。]+$/, '');
      const formal = plain.replace(/한다$/, '합니다').replace(/하다$/, '합니다').replace(/된다$/, '됩니다').replace(/있다$/, '있습니다').replace(/없다$/, '없습니다').replace(/이다$/, '입니다');
      if (formal !== plain) return formal + '.';
      // Keep unfamiliar full sentences intact rather than guessing their grammar.
      if (/다$/.test(plain) || /[?？!]$/.test(body)) return '안내 자료에는 “' + body + '”라고 기재되어 있습니다.';
      return plain + '입니다.';
    }).join('\n');
  }
  function formatAnswer(sources) {
    return sources.map(source => politeText(source.answer)).join('\n\n') + '\n\n' + CLOSING;
  }
  const modifiers = ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일', '평일', '공휴일', '주말', '오늘', '내일', '지금', '점심', '야간', '휴진', '주차', '예약', '비용', '가격'];
  function normalize(text) {
    return String(text).normalize('NFKC').toLowerCase()
      .replace(/(?:이|가|은|는)?\s*(?:뭔가요|뭐예요|무엇인가요|무엇인지|어떤건가요)/g, ' ')
      .replace(/하고\s*싶(?:어요|습니다)|(?:을|를)?\s*알고\s*싶(?:어요|습니다)/g, ' ')
      .replace(/주례\s*성모\s*안과(?:의원)?/g, ' ')
      .replace(/(?:진료|운영|영업|접수)\s*시간|몇\s*시|오픈|마감|언제.{0,8}(?:열|닫|진료)|문.{0,5}(?:열|닫)|진료.{0,5}(?:시작|끝)/g, ' 진료시간 ')
      .replace(/어떻게\s*되(?:나요|죠)|알려\s*(?:주세요|줘|주실\s*수\s*있나요)|궁금(?:해요|합니다)|안녕하세요|혹시/g, ' ')
      .replace(/주말/g, '토요일 일요일')
      .replace(/[^가-힣a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
  }
  function terms(text) {
    const set = new Set();
    for (const word of normalize(text).split(' ')) {
      if (word.length < 2 || /^(알려|주세요|알려주세요|궁금해요|있나요|어떻게|병원|안과|문의|가능한가요)$/.test(word)) continue;
      for (let i = 0; i < word.length - 1; i++) set.add(word.slice(i, i + 2));
    }
    return set;
  }
  function parse(text, sourceName) {
    const lines = String(text).replace(/^\uFEFF/, '').replace(/\r/g, '').split('\n');
    const entries = []; let question = '', answer = [], start = 0;
    function commit() {
      if (question && !answer.join('\n').trim()) throw new Error('질문의 답변이 없습니다: ' + (start + 1) + '행');
      if (question && answer.join('\n').trim()) entries.push({id: 'qa-' + (entries.length + 1), question, answer: answer.join('\n').trim(), source: sourceName || 'qa.txt', line: start + 1});
      question = ''; answer = [];
    }
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) { if (answer.length) commit(); continue; }
      const q = line.match(/^(?:Q|질문)\s*[:：.]\s*(.+)$/i);
      const a = line.match(/^(?:A|답변)\s*[:：.]\s*(.+)$/i);
      if (q) { commit(); question = q[1]; start = i; }
      else if (a) { if (!question) throw new Error('답변 앞에 질문이 필요합니다: ' + (i + 1) + '행'); answer.push(a[1]); }
      else if (!question) { question = line; start = i; }
      else answer.push(line);
    }
    commit();
    if (!entries.length) throw new Error('QA 파일에 질문과 답변이 없습니다.');
    return entries;
  }
  function retrieve(question, entries) {
    const query = terms(question);
    if (!query.size) return [];
    const docs = entries.filter(entry => !entry.kind).map(entry => ({entry, tokens: terms(entry.question)}));
    const frequency = new Map();
    for (const doc of docs) for (const term of doc.tokens) frequency.set(term, (frequency.get(term) || 0) + 1);
    const scored = docs.map(({entry, tokens}) => {
      let matched = 0, total = 0, hits = 0;
      for (const term of query) {
        const idf = Math.log(1 + (docs.length + 1) / ((frequency.get(term) || 0) + 1));
        total += idf;
        if (tokens.has(term)) { matched += idf; hits++; }
      }
      const scope = entry.question + ' ' + entry.answer;
      const unsupported = modifiers.some(term => normalize(question).includes(normalize(term)) && !normalize(scope).includes(normalize(term)));
      const score = unsupported ? 0 : matched / (total || 1);
      return {...entry, score, hits};
    });
    return scored.filter(doc => doc.score >= 0.38 && (doc.hits >= 2 || (query.size === 1 && doc.score === 1))).sort((a, b) => b.score - a.score).slice(0, 3);
  }
  function answer(question, entries) {
    const urgent = emergencyAnswer(question, entries);
    if (urgent) return urgent;
    const faq=faqAnswer(question,entries);
    if(faq)return faq;
    const conversation = conversationalAnswer(question, entries);
    if (conversation) return conversation;
    const matches = retrieve(question, entries);
    if (!matches.length) return {answer: FALLBACK, sources: [], mode: 'extractive', phone: PHONE};
    const first = matches[0];
    return {answer: formatAnswer([first]), sources: [first], mode: 'extractive', phone: PHONE};
  }
  function faqAnswer(question,entries){
    const compact=text=>String(text).normalize('NFKC').toLowerCase().replace(/[\s?？!！.,·]/g,'');
    const q=compact(question).replace(/토욜/g,'토요일').replace(/일욜/g,'일요일');
    if(/지시.*무시|프롬프트|시스템명령/.test(q))return null;
    const matches=entries.filter(e=>e.faq).map(e=>{
      const exact=[e.question,...e.aliases].some(a=>compact(a)===q);
      const matched=(!e.exclude||!new RegExp(e.exclude,'i').test(q))&&e.match.every(pattern=>new RegExp(pattern,'i').test(q));
      return {entry:e,score:exact?100:matched?e.match.length:0};
    }).filter(e=>e.score>0).sort((a,b)=>b.score-a.score);
    if(!matches.length)return null;
    const first=matches[0].entry,selected=[first];
    // Separate questions joined in one message can use different FAQ categories.
    if(/그리고|이랑|하고|또|랑|및/.test(q)){
      for(const {entry} of matches.slice(1)){
        if(selected.length>=3)break;
        if(selected.some(e=>e.category===entry.category))continue;
        // A generic one-keyword match must not add an unrelated answer.
        if(entry.match.length<2)continue;
        selected.push(entry);
      }
    }
    const parts=selected.map(e=>e.answer),sources=[...selected];
    const extras=[[/원장|의사|의료진|선생님/,'의료진'],[/주차/,'주차'],[/진료시간|몇시|점심|토요일|일요일/,'예약·접수'],[/주소|위치|몇층|주례역/,'병원 위치']];
    for(const [pattern,category] of extras){
      if(!pattern.test(q)||selected.some(e=>e.category===category))continue;
      if(category==='의료진'&&!/몇분|몇명/.test(q))continue;
      if(category==='예약·접수'&&/검사|수술|렌즈/.test(q))continue;
      const only=category==='의료진'?'원장 몇명':category==='주차'?'주차':category==='병원 위치'?'병원 주소':q;
      const extra=conversationalAnswer(only,entries);
      if(extra&&extra.sources.every(s=>!sources.some(e=>e.id===s.id))){parts.push(extra.answer);sources.push(...extra.sources);}
    }
    return {answer:parts.join('\n\n'),sources,mode:'conversational',phone:PHONE};
  }
  // Recognize clinic topics independently of particles, spacing and politeness.
  // Responses are assembled from cited facts; no clinic facts are guessed.
  function conversationalAnswer(question, entries) {
    if (!entries.some(e=>e.intent)) return null;
    const q=String(question).normalize('NFKC').toLowerCase().replace(/\s|[?？!！.,]/g,'')
      .replace(/토욜/g,'토요일').replace(/일욜/g,'일요일').replace(/이지명/g,'유지명');
    if(/지시.*무시|프롬프트|시스템명령/.test(q)) return null;
    const byIntent=intent=>entries.find(e=>e.intent===intent);
    const doctor=/원장|의료진|의사|선생님|전문의|이정헌|유지명|송도윤/.test(q);
    const current=/오늘|내일|지금|이번주|다음주|이번달|\d+월\d+일/.test(q);
    const day=/월요일|화요일|수요일|목요일|금요일|토요일|일요일|공휴일|주말/.test(q);
    const hours=/진료시간|영업|운영|몇시|문열|문닫|여는|닫는|점심|야간|마감|언제까지|몇시에|토요일|일요일|주말|평일|휴진/.test(q);
    const parking=/주차|차대|차량|차끌고|차가지고|차갖고/.test(q);
    const location=/주소|위치|어디|어딨|어딘|어떻게가|찾아가|오시는길|지하철|주례역|몇층|몇번출구/.test(q);
    const phone=/전화|연락처|연락할|전화번호/.test(q);
    const reservation=/예약|접수방법|접수하려/.test(q);
    const cost=/비용|가격|금액|얼마|수술비|검사비|진료비|보험|비싸|비싼/.test(q);
    const parts=[],sources=[];
    function add(source,text){if(!source||!text)return;parts.push(text);if(!sources.some(e=>e.id===source.id))sources.push(source);}
    if(doctor){
      const schedule=byIntent('doctorSchedule'),profile=byIntent('doctors');
      if(current||day||/일정|스케줄|담당|전문분야/.test(q)){
        add(schedule,'원장님별 진료 일정과 담당 분야는 병원으로 확인해 주세요. '+PHONE+'로 전화하시면 안내받으실 수 있어요.');
      }else if(/약력|경력|학력/.test(q)){
        add(schedule,schedule?.answer);
      }else if(profile?.doctors?.length){
        const count=profile.doctors.length;
        add(profile,'원장님은 총 '+(count===3?'세 분':count+'분')+' 계세요. '+profile.doctors.join(', ')+'이 함께 진료합니다.');
      }
    }
    if(hours&&!current&&!(doctor&&day)){
      const source=byIntent('hours'),a=source?.answer||'';
      const weekday=a.match(/평일 진료시간은 ([0-9:~]+)/)?.[1],saturday=a.match(/토요일은 ([0-9:~]+)/)?.[1],lunch=a.match(/점심시간은 ([0-9:~]+)/)?.[1];
      if(source&&weekday&&saturday&&lunch){
        if(/야간/.test(q))add(source,'안내된 평일 진료시간은 '+weekday+'예요. 별도 야간진료 여부는 병원에 확인해 주세요.');
        else if(/주말/.test(q))add(source,'토요일은 '+saturday+'에 진료하고, 일요일·공휴일은 쉬어요.');
        else if(/토요일/.test(q))add(source,'토요일은 '+saturday+'에 진료해요. 오후 1시에 진료가 끝나 별도 점심시간은 없어요. 접수 마감시간은 병원에 확인해 주세요.');
        else if(/일요일|공휴일|휴진/.test(q))add(source,'일요일과 공휴일은 휴진이에요.');
        else if(/점심/.test(q))add(source,'평일 점심시간은 '+lunch+'예요. 토요일은 '+saturday+'에 진료해요.');
        else add(source,'평일은 '+weekday+', 토요일은 '+saturday+'에 진료해요. 평일 점심시간은 '+lunch+'이며, 일요일·공휴일은 휴진이에요.');
      }
    }
    if(parking){
      const source=byIntent('parking');
      add(source,'일반 진료로 방문하시면 학장천 공영주차장을 이용해 주세요. 일반 환자 주차비 지원은 없고, 수술 환자에 한해 주차비를 지원해 드려요. 자세한 지원 조건은 병원에 확인해 주세요.');
    }
    if(location){
      const source=byIntent('location'),a=source?.answer||'';
      const address=a.match(/주소:\s*([^。]+?)\.\s*지하철/)?.[1];
      if(address)add(source,address+'에 있어요. 지하철 2호선 주례역 5번 출구 앞이에요.');
    }
    if(reservation){
      const source=byIntent('reservation');
      add(source,'예약·변경·취소는 '+PHONE+'로 전화해 주세요. 이 챗봇에서는 예약을 직접 확정하거나 취소할 수 없어요.');
    }
    if(cost&&!parking){
      const source=byIntent('cost');
      add(source,'검사·수술·렌즈 비용과 보험 적용 여부는 눈 상태와 진료 내용에 따라 달라요. 확정된 공개 가격이 없어 '+PHONE+'로 문의해 주시면 안내받으실 수 있어요.');
    }
    if(phone&&!reservation&&!cost)add(byIntent('location'),'병원 전화번호는 '+PHONE+'예요.');
    const diseaseRules=[[/드림렌즈|드림랜즈|밤에끼는렌즈/,/드림렌즈 착용/],[/백내장/,/백내장 수술 인공수정체/],[/노안|돋보기|가까운글씨/,/노안 가까운/],[/녹내장/,/^녹내장$/],[/황반|망막/,/^망막과/],[/안구건조|눈이뻑뻑|눈뻑뻑|눈이건조|눈시림/,/^안구건조$/],[/사시|소아|아이눈/,/소아안과 사시/],[/안검하수|안검내반|안성형/,/^안성형/],[/시력교정|라식|라섹|안종합검진/,/^시력교정 안경/]];
    if(!cost&&!reservation){
      for(const [pattern,title] of diseaseRules){
        if(!pattern.test(q))continue;
        const source=entries.find(e=>!e.kind&&title.test(e.question));
        if(/인가|진단|맞나|맞아|수술해야|치료해줘|약먹|처방/.test(q)){
          const policy=entries.find(e=>e.kind==='policy');
          add(policy,'증상만으로 병명을 진단하거나 수술이 필요한지 결정하기는 어려워요. 안과 검사와 진료로 확인해 주세요.');
        }else if(source)add(source,source.answer);
        break;
      }
    }
    if(!parts.length)return null;
    // Do not silently turn a time-specific question into a routine-hours answer.
    if(current&&!doctor)return null;
    return {answer:parts.join('\n\n'),sources,mode:'conversational',phone:PHONE};
  }
  function emergencyAnswer(question, entries) {
    const text=String(question).replace(/\s/g,'');
    const chemical=/(?:화학|세제|락스|표백제|산성|알칼리).{0,20}눈|눈.{0,20}(?:화학|세제|락스|표백제)/.test(text);
    const embedded=/눈.{0,15}(?:박혔|박힌|찔렸|찔린|심한외상)/.test(text);
    const sudden=/(?:갑자기|갑작|급격|갑작스럽).{0,30}(?:안보|안보이|안보여|보이지|시력|날파리|비문|번쩍|시야)|(?:커튼|가림막).{0,15}(?:시야|눈|가려|가림)|시야.{0,15}(?:커튼|가려)/.test(text);
    const severe=/(?:심한|심하게|극심|심해).{0,15}(?:눈통증|눈이아|안통)|눈.{0,10}(?:심하게아|너무아)|눈.{0,6}통증.{0,10}(?:심해|심한|극심)/.test(text);
    const after=/(?:수술|안구주사|눈주사).{0,15}(?:후|뒤).{0,30}(?:통증|시력|안보)/.test(text);
    const source=entries.find(e=>e.kind==='emergency');
    if(!source||!(chemical||embedded||sudden||severe||after))return null;
    let message='신속한 응급 평가가 필요한 증상일 수 있습니다. 예약이나 진료시간을 기다리지 말고 즉시 안과 응급진료가 가능한 의료기관 또는 응급실을 방문하세요. 위급하면 119에 연락하세요.';
    if(chemical)message='즉시 깨끗한 흐르는 물로 눈을 충분히 씻으면서 응급 진료를 받으세요. '+message;
    if(embedded)message='눈에 박힌 물체를 빼거나 눈을 누르지 마세요. '+message;
    return {answer:message,sources:[source],mode:'emergency',phone:PHONE};
  }
  return {parse, retrieve, answer, emergencyAnswer, faqAnswer, conversationalAnswer, formatAnswer, FALLBACK, PHONE};
});
