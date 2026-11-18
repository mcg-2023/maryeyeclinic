(function(root,factory){
 if(typeof module!=='undefined')module.exports=factory;
 else root.ClinicDirectionsPage=factory;
})(typeof window!=='undefined'?window:this,function(){
 return `<div class="clinic-directions" id="contents">
  <section class="directions-hours">
   <div class="directions-heading"><p>Directions</p><h2>주례성모안과의 <em>진료시간을 안내해 드립니다.</em></h2><div>진료와 내원에 관한 문의는 전화로 안내해 드립니다.</div></div>
   <div class="directions-panels">
    <article class="directions-hours-panel"><h3>진료시간</h3><dl><div><dt>평일</dt><dd>09:00 ~ 18:00</dd></div><div><dt>토요일</dt><dd>09:00 ~ 13:00</dd></div><div><dt>점심시간</dt><dd>13:00 ~ 14:00</dd></div></dl><p>일요일 및 공휴일 휴진</p></article>
    <article class="directions-contact-panel"><h3>진료 및 내원 문의</h3><a href="tel:0513251919">051-325-1919</a><p>부산 사상구 가야대로 276<br>엠스퀘어메디컬센터 9층</p></article>
   </div>
  </section>
  <section class="directions-place">
   <div class="directions-heading"><p>Place</p><h2>주례성모안과로 <em>오시는 길을 안내해 드립니다.</em></h2><div>지하철 2호선 주례역 5번 출구 앞에 있습니다.</div></div>
   <div class="directions-map"><video autoplay muted loop playsinline preload="metadata" poster="assets/clinic-route-poster.png" aria-label="주례역에서 주례성모안과까지 오시는 길"><source src="assets/clinic-route.mp4" type="video/mp4"></video></div>
   <div class="directions-transport"><article><span class="transport-symbol" aria-hidden="true"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="3" width="14" height="16" rx="4"/><path d="M5 11h14M9 7h6M8 22l2-3m6 3-2-3"/><circle cx="8.5" cy="15" r=".7"/><circle cx="15.5" cy="15" r=".7"/></svg></span><h3>지하철</h3><p>부산 지하철 2호선 주례역 5번 출구 앞<br>주례농협 옆 엠스퀘어메디컬 9층</p></article><article><span class="transport-symbol" aria-hidden="true"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="3" width="16" height="16" rx="3"/><path d="M4 11h16M8 19v2m8-2v2M9 6h6"/><circle cx="8" cy="15" r=".7"/><circle cx="16" cy="15" r=".7"/></svg></span><h3>버스</h3><p>주례역 인근 버스정류장 하차<br>주례역 5번 출구 방향 이동</p></article><article><span class="transport-symbol" aria-hidden="true"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 10 2-5h10l2 5 2 3v6H3v-6l2-3Zm0 0h14M6 19v2m12-2v2M6 14h2m8 0h2"/></svg></span><h3>자가용</h3><p>내비게이션 '주례성모안과' 검색<br>부산 사상구 가야대로 276<br>주례농협 옆 메디컬센터 9층</p></article></div>
  </section>
 </div>`;
});
