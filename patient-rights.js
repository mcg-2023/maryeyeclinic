(function(root,factory){if(typeof module!=='undefined')module.exports=factory;else root.ClinicPatientRights=factory;})(typeof window!=='undefined'?window:this,function(){
 const rights=[
  ['진료받을 권리','환자는 건강을 보호하고 증진하기 위한 적절한 보건의료서비스를 받을 권리가 있습니다. 성별, 나이, 종교, 신분이나 경제적 사정 등을 이유로 차별받지 않으며, 의료인은 정당한 사유 없이 진료를 거부할 수 없습니다.'],
  ['알 권리 및 자기결정권','환자는 질병 상태와 치료 방법, 의학적 연구 대상 여부, 장기이식 여부, 부작용 등 예상 결과와 진료 비용에 관해 충분한 설명을 듣고 질문할 수 있습니다. 설명을 바탕으로 동의 여부를 스스로 결정할 권리가 있습니다.'],
  ['비밀을 보호받을 권리','환자의 진료 관련 신체·건강 정보와 사생활의 비밀은 보호됩니다. 의료인과 의료기관은 환자의 동의가 있거나 법률에서 정한 경우 외에는 이를 누설하거나 발표할 수 없습니다.'],
  ['상담·조정을 신청할 권리','의료서비스와 관련한 분쟁이 발생하면 한국의료분쟁조정중재원 등에 상담과 조정을 신청할 수 있습니다.']
 ];
 const duties=[
  ['의료인에 대한 신뢰·존중 의무','환자는 자신의 건강 관련 정보를 의료인에게 정확히 알리고, 의료인의 치료 계획을 신뢰하고 존중해야 합니다.'],
  ['부정한 방법으로 진료를 받지 않을 의무','환자는 진료 전에 본인의 신분을 밝혀야 하며, 다른 사람의 명의 등 거짓이나 부정한 방법으로 진료를 받아서는 안 됩니다.']
 ];
 const list=items=>items.map(([title,text])=>`<article class="patient-rights-item"><h3>${title}</h3><p>${text}</p></article>`).join('');
 return `<article class="patient-rights-page wrap"><header class="patient-rights-heading"><p class="eyebrow">PATIENT RIGHTS &amp; RESPONSIBILITIES</p><h1>환자권리장전</h1><p>주례성모안과는 환자의 권리를 존중하며,<br>서로 신뢰하는 진료 환경을 함께 만들어갑니다.</p></header><section aria-labelledby="patient-rights-title"><h2 id="patient-rights-title">환자의 권리</h2><div class="patient-rights-list">${list(rights)}</div></section><section aria-labelledby="patient-duties-title"><h2 id="patient-duties-title">환자의 의무</h2><div class="patient-rights-list">${list(duties)}</div></section><p class="patient-rights-source">의료법 시행규칙 별표 1 「환자의 권리와 의무」를 바탕으로 안내합니다. <a href="https://www.law.go.kr/LSW/lsInfoP.do?lsId=007863" target="_blank" rel="noopener noreferrer">관련 법령 보기 ↗</a></p></article>`;
});
