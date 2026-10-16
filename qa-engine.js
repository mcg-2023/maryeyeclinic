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
    const docs = entries.map(entry => ({entry, tokens: terms(entry.question)}));
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
    return scored.filter(doc => doc.score >= 0.38 && doc.hits >= 2).sort((a, b) => b.score - a.score).slice(0, 3);
  }
  function answer(question, entries) {
    const matches = retrieve(question, entries);
    if (!matches.length) return {answer: FALLBACK, sources: [], mode: 'extractive', phone: PHONE};
    const first = matches[0];
    return {answer: formatAnswer([first]), sources: [first], mode: 'extractive', phone: PHONE};
  }
  return {parse, retrieve, answer, formatAnswer, FALLBACK, PHONE};
});
