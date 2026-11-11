'use strict';
module.exports = function chatbotMarkup() {
  return `<div id="qa-chat" class="qa-chat" data-lenis-prevent>
  <button class="qa-launcher" id="qa-launcher" type="button" aria-expanded="false" aria-controls="qa-panel"><svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="M5 5h14v10H9l-4 4V5Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M9 9h6m-6 3h4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg><span>병원 안내 챗봇</span></button>
  <section id="qa-panel" class="qa-panel" role="dialog" aria-labelledby="qa-title" hidden>
    <header class="qa-header"><div><span class="qa-kicker">JURYE ST. MARY’S</span><h2 id="qa-title">무엇이 궁금하세요?</h2><p>주례성모안과 안내 도우미</p></div><button type="button" id="qa-close" aria-label="챗봇 닫기">×</button></header>
    <div class="qa-messages" id="qa-messages" role="log" aria-live="polite" aria-relevant="additions" aria-label="챗봇 대화" tabindex="0"><div class="qa-message qa-message--assistant"><span class="qa-speaker">안내 도우미</span><p>안녕하세요 🙂<br>진료시간이나 방문 안내가 궁금하신가요?<br>편하게 물어보세요. 차근차근 안내해 드릴게요.</p></div></div>
    <div class="qa-suggestions" id="qa-suggestions" aria-label="추천 질문"><button type="button" data-question="진료시간이 어떻게 되나요?">진료시간 ↗</button><button type="button" data-question="처음 방문하는데 무엇을 준비하나요?">처음 방문해요 ↗</button><button type="button" data-question="산동검사 후 운전해도 되나요?">검사 후 운전 ↗</button><button type="button" data-question="백내장 수술은 언제 해야 하나요?">백내장 수술 ↗</button><button type="button" data-question="드림렌즈는 몇 살부터 가능한가요?">드림렌즈 ↗</button><button type="button" data-question="주차할 수 있나요?">주차 안내 ↗</button></div>
    <p class="qa-status" id="qa-status" role="status"></p>
    <form id="qa-form" class="qa-form"><label class="sr-only" for="qa-input">병원 안내 질문</label><input id="qa-input" name="question" type="text" placeholder="궁금한 점을 입력해 주세요" maxlength="500" autocomplete="off" required><button type="submit" id="qa-send" aria-label="질문 보내기"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="m5 12 7-7 7 7M12 5v14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button></form>
    <p class="qa-disclaimer">일반 안내이며 진단을 대신하지 않습니다. 개인정보는 입력하지 마세요. <a href="tel:0513251919">전화 문의</a></p>
  </section>
</div><noscript><p class="wrap">병원 안내 챗봇은 JavaScript가 필요합니다. <a href="tel:0513251919">051-325-1919 전화 문의</a></p></noscript><script src="qa-engine.js" defer></script><script src="chatbot.js" defer></script>`;
};
