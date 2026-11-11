'use strict';
const fs=require('node:fs'),path=require('node:path');
const managerAssets=path.resolve(path.dirname(require.resolve('@mcg/page-manager/assets')),'../dist/assets');
fs.cpSync(managerAssets,path.join(__dirname,'dist/page-manager'),{recursive:true});
fs.copyFileSync(path.join(__dirname,'../page-manager-kit-v1.2.0-clinic.6/article-images.css'),path.join(__dirname,'dist/page-manager/article-images.css'));
const {MENU,ROUTES,renderPage,titleFor,PAGES}=require('./dist/app.js');
const chatbotMarkup=require('./chatbot-markup.cjs');
const {buildQA}=require('./qa-index.cjs');
const qaEntries=buildQA();
const origin=process.env.SITE_URL || 'https://mcg-2023.github.io/maryeyeclinic';
let template=fs.readFileSync('template.html','utf8').replace(/href="#\/about\/location"/g,'href="about-location.html"').replace(/href="#\/"/g,'href="index.html"');
template=template.replace('<nav id="nav" aria-label="주 메뉴"></nav>','<nav id="nav" aria-label="주 메뉴">'+MENU.map(([title,items])=>'<a href="'+items[0][1]+'.html">'+title+'</a>').join('')+'</nav>');
for(const key of ROUTES){
 const file=key?key+'.html':'index.html',title=titleFor(key);
 let html=template.replace(/<main id="main" tabindex="-1">[\s\S]*?<\/main>/,'<main id="main" tabindex="-1">'+renderPage(key)+'</main>');
 if(key){
  html=html.replace('<body>','<body class="subpage">');
  let assets='<script src="category-data.js" defer></script><script src="sub-visual.js" defer></script>';
  if(PAGES[key])assets+='<link rel="stylesheet" href="cataract-booking.css"><link rel="stylesheet" href="eye-detail.css"><link rel="stylesheet" href="eye-reservation.css"><script src="cataract-booking.js" defer></script><script src="eye-reservation.js" defer></script><script src="category-page.js" defer></script><script src="eye-detail-effects.js" defer></script><script src="category-interactions.js" defer></script>';
  html=html.replace('</head>',assets+'<link rel="stylesheet" href="subpages.css"></head>');
 }
 html=html.replace(/<title>.*?<\/title>/,'<title>주례성모안과 | '+title+'</title>');
 if(key)html=html.replace(/<meta name="description" content="[^"]*">/,'<meta name="description" content="주례성모안과 '+title+' 안내. 눈 상태에 맞는 검사와 진료를 상담합니다.">');
 html=html.replace('</head>','<link rel="canonical" href="'+origin+'/'+file+'"></head>');
 {html=html.replace('</head>','<link rel="stylesheet" href="chatbot.css"></head>').replace('</body>',chatbotMarkup()+'</body>');}
 if(key==='interest'){html=html.replace(/<script src="information\.js[^"]*" defer><\/script>/, '<script>'+fs.readFileSync('dist/information.js','utf8')+'</script>');}
 fs.writeFileSync(path.join('dist',file),html);
}
const manifest=JSON.parse(fs.readFileSync('.openai/hosting.json','utf8').replace(/^\uFEFF/,''));
manifest.static={directory:'dist'};fs.writeFileSync('.openai/hosting.json',JSON.stringify(manifest,null,2)+'\n');
fs.writeFileSync('dist/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+ROUTES.map(r=>'<url><loc>'+origin+'/'+(r?r+'.html':'index.html')+'</loc></url>').join('')+'</urlset>');
fs.writeFileSync('dist/robots.txt','User-agent: *\nAllow: /\nSitemap: '+origin+'/sitemap.xml\n');
console.log('Generated '+ROUTES.length+' HTML pages.');
console.log('Indexed '+qaEntries.length+' QA entries for the homepage chatbot.');

