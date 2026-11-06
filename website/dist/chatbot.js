(() => {
  'use strict';
  const root = document.getElementById('qa-chat');
  if (!root) return;
  const launcher = document.getElementById('qa-launcher'), panel = document.getElementById('qa-panel');
  const input = document.getElementById('qa-input'), form = document.getElementById('qa-form');
  const messages = document.getElementById('qa-messages'), status = document.getElementById('qa-status'), send = document.getElementById('qa-send');
  let busy = false, dataPromise;
  document.body.classList.add('qa-chat-ready');
  const headerSlot = document.getElementById('header-chat-slot');
  const mobileLayout=matchMedia('(max-width:900px)');
  function placeLauncher(){
    const floating=mobileLayout.matches||!headerSlot;
    if(floating)root.prepend(launcher);else headerSlot.append(launcher);
    launcher.querySelector('span').textContent='병원 안내 챗봇';
    document.body.classList.toggle('qa-header-launcher',!floating);
    document.body.classList.toggle('qa-mobile-launcher',floating);
  }
  placeLauncher();
  mobileLayout.addEventListener('change',placeLauncher);
  launcher.addEventListener('keydown', event => { if (event.key === 'Escape' && !panel.hidden) open(false); });
  launcher.setAttribute('aria-label','병원 안내 챗봇 열기');
  function open(value) {
    const menuToggle=document.getElementById('menu-toggle');
    if(value&&menuToggle?.getAttribute('aria-expanded')==='true')menuToggle.click();
    panel.hidden = !value;
    launcher.setAttribute('aria-expanded', String(value));
    launcher.setAttribute('aria-label',value?'병원 안내 챗봇 닫기':'병원 안내 챗봇 열기');
    (value ? input : launcher).focus();
  }
  launcher.addEventListener('click', () => open(panel.hidden));
  document.getElementById('qa-close').addEventListener('click', () => open(false));
  root.addEventListener('keydown', event => { if (event.key === 'Escape' && !panel.hidden) { event.preventDefault(); event.stopPropagation(); open(false); } });
  function readableReply(text) {
    // Preserve existing paragraphs, URLs, decimal numbers and explicit lists.
    return String(text).replace(/\r\n/g,'\n').split(/\n{2,}/).map(block=>{
      if(/https?:\/\/|^\s*(?:[-•]|\d+[.)])\s/m.test(block))return block;
      return block.replace(/([.!?。])\s+(?=[가-힣A-Za-z])/g,'$1\n\n');
    }).join('\n\n');
  }
  async function replyPause(started, result) {
    if(result?.mode==='emergency')return;
    const remaining=1000-(performance.now()-started);
    if(remaining>0)await new Promise(resolve=>setTimeout(resolve,remaining));
  }
  function append(text, role, sources, phone) {
    const message = document.createElement('div'); message.className = 'qa-message qa-message--' + role;
    const speaker = document.createElement('span'); speaker.className = 'qa-speaker'; speaker.textContent = role === 'user' ? '나' : '안내 도우미';
    const p = document.createElement('p'); p.textContent = role==='assistant'?readableReply(text):text; message.append(speaker, p);
    if (sources && sources.length) {
      const details = document.createElement('details'); details.className = 'qa-source';
      const summary = document.createElement('summary'); summary.textContent = '답변 근거 · 병원 지식자료'; details.append(summary);
      for (const source of sources) {
        const quote = document.createElement('blockquote'); quote.textContent = source.question + '\n' + source.answer;
        const cite = document.createElement('cite'); cite.textContent = source.source + ' · ' + source.line + '행'; details.append(quote, cite);
        for (const [index, url] of (source.references || []).entries()) {
          if (!/^https:\/\//i.test(url)) continue;
          const link = document.createElement('a'); link.href=url;link.target='_blank';link.rel='noopener noreferrer';link.textContent='참고 출처 '+(index+1);details.append(link);
        }
      }
      message.append(details);
    }
    if (phone && (!sources || !sources.length)) {
      const link = document.createElement('a'); link.className = 'qa-call'; link.href = 'tel:0513251919'; link.textContent = phone + ' 전화 문의'; message.append(link);
    }
    messages.append(message);
    while (messages.children.length > 40) messages.firstElementChild.remove();
    messages.scrollTop = messages.scrollHeight;
  }
  async function staticAnswer(question) {
    if (!dataPromise) dataPromise = fetch('qa-data.json', {cache: 'no-cache'}).then(response => {
      if (!response.ok) throw new Error('QA unavailable');
      return response.json();
    }).catch(error => { dataPromise = null; throw error; });
    const data = await dataPromise;
    return ClinicQA.answer(question, data.entries);
  }
  async function ask(question) {
    const controller = new AbortController(), timer = setTimeout(() => controller.abort(), 18000);
    try {
      const response = await fetch('/api/chat', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({question}), signal: controller.signal});
      if (response.status === 404 || response.status === 405 || response.status === 501) return await staticAnswer(question);
      if (!response.ok) throw new Error(response.status === 429 ? 'rate' : 'server');
      const data = await response.json();
      if (typeof data.answer !== 'string' || !Array.isArray(data.sources)) throw new Error('server');
      return data;
    } catch (error) {
      if (error.message === 'rate') throw error;
      return await staticAnswer(question);
    } finally { clearTimeout(timer); }
  }
  async function submit(question) {
    question = question.trim();
    if (!question || busy) return;
    busy = true; send.disabled = true; form.setAttribute('aria-busy', 'true'); input.value = '';
    document.getElementById('qa-suggestions').hidden = true;
    append(question, 'user'); status.textContent = '안내 자료를 확인하고 있어요…';
    const started=performance.now();
    try { const result = await ask(question);status.textContent='답변을 정리하고 있어요…';await replyPause(started,result);append(result.answer, 'assistant', result.sources, result.phone); status.textContent = ''; }
    catch (error) {
      await replyPause(started);
      append(error.message === 'rate' ? '질문이 많아 잠시 쉬고 있어요. 잠시 후 다시 질문해 주세요.' : '안내 자료에 연결하지 못했습니다. 잠시 후 다시 시도하거나 병원으로 전화 문의해 주세요.', 'assistant', [], ClinicQA.PHONE);
      status.textContent = '질문을 다시 보내실 수 있어요.';
    } finally { busy = false; send.disabled = false; form.removeAttribute('aria-busy'); }
  }
  form.addEventListener('submit', event => { event.preventDefault(); submit(input.value); });
  root.querySelectorAll('[data-question]').forEach(button => button.addEventListener('click', () => submit(button.dataset.question)));
})();
