'use strict';
module.exports = function chatbotMarkup() {
  return `<div id="qa-chat" class="qa-chat" data-lenis-prevent>
  <button class="qa-launcher" id="qa-launcher" type="button" aria-expanded="false" aria-controls="qa-panel"><svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="M5 5h14v10H9l-4 4V5Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M9 9h6m-6 3h4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg><span>병원 안내 챗봇</span></button>
  <section id="qa-panel" class="qa-panel" role="dialog" aria-labelledby="qa-title" hidden>
    <header class="qa-header"><div><span class="qa-kicker">JURYE ST. MARY’S</span><h2 id="qa-title">무엇이 궁금하세요?</h2><p>주례성모안과 안내 도우미</p></div><button type="button" id="qa-close" aria-label="챗봇 닫기">×</button></header>
    <div class="qa-messages" id="qa-messages" role="log" aria-live="polite" aria-relevant="additions" aria-label="챗봇 대화" tabindex="0"><div class="qa-message qa-message--assistant"><span class="qa-speaker">안내 도우미</span><p>안녕하세요. 병원 안내 자료를 확인해 답변해 드릴게요.<br>궁금한 점을 편하게 물어보세요.</p></div></div>
    <div class="qa-suggestions" id="qa-suggestions" aria-label="추천 질문"><button type="button" data-question="진료시간이 어떻게 되나요?">진료시간이 궁금해요 ↗</button></div>
    <p class="qa-status" id="qa-status" role="status"></p>
    <form id="qa-form" class="qa-form"><label class="sr-only" for="qa-input">병원 안내 질문</label><input id="qa-input" name="question" type="text" placeholder="궁금한 점을 입력해 주세요" maxlength="500" autocomplete="off" required><button type="submit" id="qa-send" aria-label="질문 보내기"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="m5 12 7-7 7 7M12 5v14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button></form>
    <p class="qa-disclaimer">개인정보·진료 기록은 입력하지 마세요. <a href="tel:0513251919">전화 문의</a></p>
  </section>
</div><noscript><p class="wrap">병원 안내 챗봇은 JavaScript가 필요합니다. <a href="tel:0513251919">051-325-1919 전화 문의</a></p></noscript><script src="qa-engine.js" defer></script><script src="chatbot.js" defer></script>`;
};
