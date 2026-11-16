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
   <div class="directions-transport"><article><h3>지하철을 이용하실 경우</h3><p>부산 지하철 2호선 주례역 5번 출구 앞<br>엠스퀘어메디컬센터 9층</p></article><article><h3>자가용을 이용하실 경우</h3><p>부산 사상구 가야대로 276<br>일반 진료 시 학장천 공영주차장을 이용해 주세요.</p></article></div>
   <div class="directions-links"><a href="https://map.naver.com/p/search/%EC%A3%BC%EB%A1%80%EC%84%B1%EB%AA%A8%EC%95%88%EA%B3%BC" target="_blank" rel="noopener noreferrer">네이버 지도 ↗</a><a href="https://map.kakao.com/link/search/%EC%A3%BC%EB%A1%80%EC%84%B1%EB%AA%A8%EC%95%88%EA%B3%BC" target="_blank" rel="noopener noreferrer">카카오맵 ↗</a></div>
  </section>
  <section class="directions-parking"><div class="directions-heading"><p>Parking</p><h2>주차 <em>이용 안내</em></h2></div><p>일반 진료 환자는 학장천 공영주차장을 이용하며 주차비 지원은 없습니다.<br>수술 환자는 주차비 지원이 가능하므로, 지원 조건과 이용 방법을 방문 전 병원에 확인해 주세요.</p></section>
 </div>`;
});
