(()=>{'use strict';const root=document.querySelector('.support-content');if(!root)return;
 const search=root.querySelector('.support-search'),query=root.querySelector('#support-query'),questions=[...root.querySelectorAll('[data-question]')];
 function filter(){const term=query.value.trim().normalize('NFC').toLocaleLowerCase();let count=0;questions.forEach(row=>{row.hidden=!row.textContent.normalize('NFC').toLocaleLowerCase().includes(term);if(!row.hidden)count++;});root.querySelector('.support-no-results').hidden=count>0;}
 search.addEventListener('submit',event=>{event.preventDefault();filter();});query.addEventListener('input',filter);
 root.querySelectorAll('[data-faq-filter]').forEach(button=>button.addEventListener('click',()=>{root.querySelectorAll('[data-faq-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));root.querySelectorAll('[data-faq-category]').forEach(row=>{row.hidden=button.dataset.faqFilter!=='전체'&&row.dataset.faqCategory!==button.dataset.faqFilter;});}));
 const form=root.querySelector('#support-question-form'),status=root.querySelector('#support-form-status');
 function values(){const d=new FormData(form);return{subject:'[주례성모안과 문의] '+d.get('subject'),body:'문의 분야: '+d.get('topic')+'\n성함: '+d.get('name')+'\n\n'+d.get('message')};}
 form.addEventListener('submit',event=>{event.preventDefault();if(!form.reportValidity())return;const v=values();location.href='mailto:maryeye1919@naver.com?subject='+encodeURIComponent(v.subject)+'&body='+encodeURIComponent(v.body);status.textContent='이메일 앱에서 전송을 완료해 주세요. 앱이 열리지 않으면 작성 내용을 복사해 병원 이메일로 보내주세요.';});
 root.querySelector('#support-copy-question').addEventListener('click',async()=>{if(!form.reportValidity())return;const v=values();try{await navigator.clipboard.writeText(v.subject+'\n\n'+v.body);status.textContent='작성 내용을 복사했습니다.';}catch{status.textContent='자동 복사가 지원되지 않습니다. 입력한 내용을 직접 복사해 주세요.';}});
})();
