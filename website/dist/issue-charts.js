(function(root,factory){if(typeof module!=='undefined')module.exports=factory;else root.ClinicIssueCharts=factory;})(typeof window!=='undefined'?window:this,function(key){
 const nhis='https://www.kiri.or.kr/PDF/weeklytrend/20241223/trend20241223_3.pdf';
 const kca='https://www.kca.go.kr/smartconsumer/sub.do?menukey=7714&mode=view&no=1003202044';
 const amd='https://pmc.ncbi.nlm.nih.gov/articles/PMC12235191/';
 const detachment='https://pmc.ncbi.nlm.nih.gov/articles/PMC8627102/';
 const glaucoma='https://neca.scholarworks.kr/api/assets/82eaf2f4-cfaa-42ff-adb2-d40881facc42/download';
 const dry='https://pubmed.ncbi.nlm.nih.gov/25149910/';
 const children='https://pubmed.ncbi.nlm.nih.gov/24809740/';
 const myopia='https://bjo.bmj.com/content/bjophthalmol/109/3/362.full.pdf?with-ds=yes';
 const ptosis='https://pmc.ncbi.nlm.nih.gov/articles/PMC5518839/';
 const presbyopia='https://www.aaojournal.org/article/S0161-6420%2817%2933797-1/fulltext';
 const diabetes='https://www.jkos.org/upload/pdf/jkos-2021-62-1-55.pdf';
 const chart=(title,unit,values,sourceName,source,note,max)=>({title,unit,values,sourceName,source,note,max});
 const screening=[chart('소아 검진에서 확인된 굴절 이상','%',[['2002년',1.10],['2011년',0.42]],'한국실명예방재단 검진자료 연구',children,'서울 3–6세 가정 시력검진 결과입니다. 전국 유병률과는 다릅니다.',1.2),chart('소아 검진에서 확인된 약시','%',[['2002년',0.25],['2011년',0.06]],'한국실명예방재단 검진자료 연구',children,'같은 검진사업에서 확인된 비율입니다. 연도별 검진 결과의 비교입니다.',.3)];
 const charts={
 cataract:[chart('주요수술 건수 비교 · 2023년','건',[['백내장',637879],['일반 척추',206785],['치핵',151899],['제왕절개',147121],['담낭절제',96975]],'국민건강보험공단 · 2023 주요수술 통계연보',nhis,'2024년 12월 발표된 공단 원문 통계입니다. 수술 건수이며 환자 수가 아닙니다.',800000),chart('연도별 백내장 수술 건수','건',[['2019년',689919],['2020년',702621],['2021년',781220],['2022년',735693],['2023년',637879]],'국민건강보험공단 · 2023 주요수술 통계연보',nhis,'연도에 따라 증감합니다. 특정 연령대만의 수술 건수를 뜻하지 않습니다.',800000)],
 presbyopia:[chart('세계 노안 인구 추정 · 2015년','백만 명',[['노안 전체',1800],['교정 부족에 따른 근거리 시각장애',826]],'Fricke 등 · Ophthalmology 2018',presbyopia,'세계 추정치입니다. 근거리 시각장애 인구는 노안 전체에 포함되는 일부입니다.',2000),chart('세계 인구의 노안 추정 비율 · 2015년','%',[['노안',25],['그 외',75]],'Fricke 등 · Ophthalmology 2018',presbyopia,'연구의 노안 유병률 추정치 25%를 시각화했습니다. 한국 통계가 아닙니다.',100)],
 lens:[chart('백내장 수술 경험자의 렌즈 인식','명',[['급여 단초점',187],['비급여 다초점',109],['잘 모름',104],['무응답',10]],'한국소비자원 · 2021년 조사',kca,'수술 경험자 410명 응답입니다. 제품별 효과나 현재 렌즈 사용 비율을 뜻하지 않습니다.',200),chart('인공수정체의 급여 여부 인식','명',[['모르고 있었음',204],['그 외 응답',206]],'한국소비자원 · 2021년 조사',kca,'410명 중 급여·비급여 대상을 모르고 있었다는 응답과 나머지 응답을 비교했습니다.',250)],
 'retina-amd':[chart('습성 황반변성 연령표준화 유병률','1만 명당',[['2013년',10.7],['2022년',22.5]],'국민건강보험 자료 분석 · JKMS 2025',amd,'40세 이상 대상, 같은 기준으로 연령표준화한 연간 유병률입니다.',30),chart('습성 황반변성 조유병률','1만 명당',[['2013년',10.9],['2022년',29.2]],'국민건강보험 자료 분석 · JKMS 2025',amd,'40세 이상 대상 조유병률입니다. 연령표준화 수치와 구분해 보세요.',35)],
 'retina-diabetes':[chart('실명 위험 당뇨망막병증 관련 시술','건',[['2006년',37634],['2017년',96214]],'국민건강보험 청구자료 연구 · 대한안과학회지 2021',diabetes,'국내 2형 당뇨병 중 실명 위험 당뇨망막병증의 시술 건수입니다. 전체 환자 수가 아닙니다.',100000),chart('실명 위험 당뇨망막병증 요양급여 비용','억 원',[['2006년',162.45],['2017년',555]],'국민건강보험 청구자료 연구 · 대한안과학회지 2021',diabetes,'동일 연구의 요양급여 비용 총액입니다. 개인의 치료비를 의미하지 않습니다.',600)],
 'retina-detachment':[chart('수술이 필요한 열공망막박리 발생 환자','명',[['2004년',2947],['2008년',4508],['2012년',4625],['2015년',5408]],'국민건강보험 자료 연구 · BMC Ophthalmology 2021',detachment,'연구에서 확인한 연도별 신규 환자입니다. 모든 유형의 망막박리를 합친 값은 아닙니다.',6000),chart('열공망막박리 성별 연평균 표준화 발생률','10만 인년당',[['남성',10.68],['여성',8.87]],'국민건강보험 자료 연구 · BMC Ophthalmology 2021',detachment,'2004–2015년 수술이 필요한 열공망막박리 연구입니다.',12)],
 'retina-glaucoma':[chart('녹내장 진료 환자 추이','명',[['2019년',971353],['2020년',962594],['2021년',1073423],['2022년',1112165],['2023년',1183023]],'한국보건의료연구원 · HIRA 공개자료 재구성',glaucoma,'진단코드 H40 기준입니다. 다른 코드의 녹내장 환자는 포함하지 않습니다.',1250000),chart('녹내장 진료 청구건수','건',[['2019년',2907797],['2020년',2878884],['2021년',3092740],['2022년',3115770],['2023년',3347421]],'한국보건의료연구원 · HIRA 공개자료 재구성',glaucoma,'같은 H40 코드의 청구건수입니다. 한 사람이 여러 번 청구에 포함될 수 있습니다.',3500000)],
 'pediatric-strabismus':screening,
 'pediatric-dream':[chart('세계 소아·청소년 근시 유병률 추정','%',[['1990년',24.32],['2023년',35.81]],'Liang 등 · British Journal of Ophthalmology',myopia,'50개국 연구를 종합한 세계 추정치입니다. 국내 통계나 드림렌즈 효과 수치가 아닙니다.',50),chart('세계 소아·청소년 근시 전망','%',[['2040년 전망',36.59],['2050년 전망',39.8]],'Liang 등 · British Journal of Ophthalmology',myopia,'미래 예측 모형의 추정값입니다. 실제 관측된 환자 비율과 구분해 보세요.',50)],
 'pediatric-exam':screening,
 'care-dry':[chart('안구건조증 진단 경험 비율','%',[['진단 경험',8],['그 외',92]],'국민건강영양조사 2010–2011 분석 · AJO 2014',dry,'국내 19–95세 대표 표본 연구입니다. 진단 경험이 없는 집단에 미진단자가 있을 수 있습니다.',100),chart('안구건조 증상 경험 비율','%',[['증상 경험',14.4],['그 외',85.6]],'국민건강영양조사 2010–2011 분석 · AJO 2014',dry,'동일 연구의 증상 경험 기준입니다. 진단 경험과는 다른 지표입니다.',100)],
 'care-oculoplastic':[chart('연령별 안검하수 유병률','%',[['40–49세',5.4],['50–59세',11.6],['60–69세',19.8],['70세 이상',32.8]],'국민건강영양조사 2008–2011 분석 · Eye 2017',ptosis,'국내 40세 이상 연구의 퇴행성 안검하수 기준입니다. 모든 안성형 질환의 비율이 아닙니다.',40),chart('40세 이상 안검하수 유병률','%',[['안검하수',13.5],['그 외',86.5]],'국민건강영양조사 2008–2011 분석 · Eye 2017',ptosis,'같은 연구의 전체 추정치입니다. 개인의 수술 필요 여부를 판단하는 기준은 아닙니다.',100)],
 'care-exam':[chart('검진 연구에서 확인된 안검하수 유병률','%',[['40–49세',5.4],['50–59세',11.6],['60–69세',19.8],['70세 이상',32.8]],'국민건강영양조사 2008–2011 분석 · Eye 2017',ptosis,'안검하수에 한정한 국내 40세 이상 자료입니다. 안종합검진의 이상 소견 비율을 뜻하지 않습니다.',40),chart('안구건조증의 증상과 진단 경험','%',[['진단 경험',8],['증상 경험',14.4]],'국민건강영양조사 2010–2011 분석 · AJO 2014',dry,'국내 성인 표본에서 확인한 서로 다른 지표입니다. 두 집단은 겹칠 수 있습니다.',20)]
 };
 const list=charts[key];if(!list)return '';
 return list.map(c=>{
  const max=c.max||Math.max(...c.values.map(x=>x[1]))*1.2;
  const format=n=>n.toLocaleString('ko-KR',{maximumFractionDigits:2});
  return `<figure class="uc-graphic uc-stat-chart"><div class="uc-chart-heading"><h3>${c.title}</h3><span>단위: ${c.unit}</span></div><div class="uc-bar-chart" role="img" aria-label="${c.title}. ${c.values.map(([label,value])=>label+' '+format(value)+' '+c.unit).join(', ')}"><div class="uc-chart-scale" aria-hidden="true"><span>${format(max)}</span><span>${format(max/2)}</span><span>0</span></div><div class="uc-chart-columns">${c.values.map(([label,value],i)=>`<div class="uc-chart-column"><div class="uc-chart-bar-area"><div class="uc-chart-bar${i===c.values.length-1?' is-accent':''}" style="--bar-height:${value/max*100}%"><b><span class="uc-value-full">${format(value)}</span><span class="uc-value-compact">${value>=10000?(value/10000).toLocaleString('ko-KR',{maximumFractionDigits:1})+'만':format(value)}</span></b></div></div><span class="uc-chart-label">${label}</span></div>`).join('')}</div></div><p class="uc-chart-note">${c.note}</p><figcaption><a href="${c.source}" target="_blank" rel="noopener noreferrer">출처: ${c.sourceName}</a></figcaption></figure>`;
 }).join('');
});
