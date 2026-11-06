'use strict';
const fs=require('node:fs'),path=require('node:path');
const config=require('./page-manager.config.cjs');
const escape=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

async function createClinicManager(options={}){
 const {createPageManager,repository,postBody,postText}=await import('@mcg/page-manager');
 const {createSqliteDatabase}=await import('@mcg/page-manager/sqlite');
 const filename=options.filename||process.env.PAGE_MANAGER_DB||path.join(__dirname,'.data','posts.sqlite');
 const database=createSqliteDatabase(filename);
 const manager=createPageManager(config,{storage:database,localPreview:options.localPreview===true,...(options.environment?{environment:options.environment}:{})});
 const seedMarker=filename+'.seeded-v1';
 if(options.seed!==false&&!fs.existsSync(seedMarker)){
  const repo=repository(database),existing=await repo.list();
  const {PAGES}=require('./dist/app.js');
  for(const [id,p] of Object.entries(PAGES)){
   if(existing.some(post=>post.id===id))continue;
   const category=['','cataract','retina','pediatric','care'][p.group];
   let body='<h2>'+escape(p.title)+' 안내</h2><p>'+escape(p.definition)+'</p>';
   if(p.symptoms)body+='<h2>'+escape(p.symptomTitle||'살펴볼 증상')+'</h2><ul>'+p.symptoms.map(s=>'<li>'+escape(s)+'</li>').join('')+'</ul>';
   for(const [heading,items] of [['검사',p.exams],['관리와 치료',p.treatments],['자주 묻는 질문',p.faq]])if(items)body+='<h2>'+heading+'</h2>'+items.map(([t,v])=>'<h3>'+escape(t)+'</h3><p>'+escape(v)+'</p>').join('');
   body+='<p>'+escape(p.notice||'검사와 치료 방법은 눈 상태에 따라 달라집니다. 진료 후 의료진과 함께 결정합니다.')+'</p>';
   if(p.source)body+='<p>일반 질환 정보 참고: <a href="https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/'+escape(p.source)+'">National Eye Institute</a></p>';
   const title=p.title+' 알아보기';
   const cover='data:image/'+(/\.png$/i.test(p.image)?'png':'jpeg')+';base64,'+fs.readFileSync(path.join(__dirname,'dist/assets',p.image)).toString('base64');
   await repo.save({id,title,category,excerpt:p.definition,body,bodyFormat:'html',author:'주례성모안과',status:'published',seoTitle:title,description:p.definition,tags:[],cover,imageAlt:p.title,createdAt:'2026-11-04T00:00:00.000Z',updatedAt:'2026-11-04T00:00:00.000Z',publishedAt:'2026-11-04T00:00:00.000Z'});
  }
  fs.writeFileSync(seedMarker,'Existing eye health articles imported once.\n');
 }
 // Convert early imported covers to the editor's native stored-image format.
 for(const post of await repository(database).list())if(/^\/assets\/image\d+\.(png|jpg)$/.test(post.coverRef||'')){
  const source=path.join(__dirname,'dist',post.coverRef.slice(1));
  if(fs.existsSync(source)){post.cover='data:image/'+(source.endsWith('.png')?'png':'jpeg')+';base64,'+fs.readFileSync(source).toString('base64');delete post.coverRef;await repository(database).save(post);}
 }
 const categoryName=slug=>config.categories.find(c=>c.slug===slug)?.name||'진료과목';
 const href=post=>'/articles/'+encodeURIComponent(post.id)+'/';
 function card(post,index){
  const title=escape(post.title),category=escape(categoryName(post.category));
  const search=escape([post.title,categoryName(post.category),post.excerpt,postText(post),...(post.tags||[])].join(' '));
  const thumbnail=post.coverUrl||'/assets/care-exam.jpg';
  const cover=/^(\/[^/]|https:\/\/)/.test(thumbnail)?thumbnail:'/assets/care-exam.jpg';
  return '<article class="info-row" data-info-post data-category="'+category+'" data-topic="'+escape(post.id)+'" data-search="'+search+'"><a class="info-thumbnail" href="'+href(post)+'" tabindex="-1" aria-hidden="true"><img src="'+escape(cover)+'" alt="'+escape(post.imageAlt||post.title)+'" loading="lazy"><span class="info-thumbnail-shade"></span><span class="info-thumbnail-copy"><span class="info-thumbnail-kicker">EYE HEALTH · '+String(index+1).padStart(2,'0')+'</span><strong>'+title+'</strong><span class="info-thumbnail-caption">내 눈을 위한<br>건강 이야기</span></span><span class="info-thumbnail-brand">주례성모안과</span></a><div><span class="info-category">'+category+'</span><h3><a href="'+href(post)+'">'+title+'</a></h3><p>'+escape(post.excerpt)+'</p></div></article>';
 }
 const template=()=>fs.readFileSync(path.join(__dirname,'dist','interest.html'),'utf8');
 const response=(html,status=200)=>new Response(html,{status,headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}});
 return {
  manager,database,close:()=>database.close(),
  async fetch(request){
   const requested=new URL(request.url);
   const managed=await manager.fetch(request);
   if(managed){
    if(new URL(request.url).pathname==='/admin/login/'&&managed.headers.get('Content-Type')?.includes('text/html')){
     const html=(await managed.text()).replace('</head>','<link rel="stylesheet" href="/admin-login.css"></head>');
     return new Response(html,{status:managed.status,headers:managed.headers});
    }
    return managed;
   }
   if(!['GET','HEAD'].includes(request.method))return null;
   const url=new URL(request.url);
   if(url.pathname==='/interest.html'){
    const posts=await manager.publishedPosts();
    let html=template().replace(/<div class="info-list">[\s\S]*?<p class="info-empty"/, ()=>'<div class="info-list">'+posts.map(card).join('')+'</div><p class="info-empty"');
    html=html.replace(/전체 <strong>\d+<\/strong>건/,'전체 <strong>'+posts.length+'</strong>건');
    return response(html);
   }
   const article=url.pathname.match(/^\/articles\/([\w-]+)\/?$/);if(!article)return null;
   const posts=await manager.publishedPosts(),post=posts.find(p=>p.id===article[1]);
   if(!post)return response('<!doctype html><html lang="ko"><meta charset="utf-8"><title>글을 찾을 수 없습니다</title><h1>글을 찾을 수 없습니다.</h1><a href="/interest.html">목록으로</a></html>',404);
   if(!url.pathname.endsWith('/'))return new Response(null,{status:308,headers:{Location:href(post)}});
   const body='<article class="journal-article wrap"><nav aria-label="현재 위치"><a href="/interest.html">눈여겨볼 정보</a><span> / '+escape(categoryName(post.category))+'</span></nav><header><p class="eyebrow">EYE HEALTH JOURNAL</p><h1>'+escape(post.title)+'</h1><p class="journal-meta">'+escape(post.author)+' · '+escape(post.publishedAt?.slice(0,10))+'</p><p class="journal-excerpt">'+escape(post.excerpt)+'</p></header><div class="journal-body">'+postBody(post)+'</div><a class="button" href="/interest.html">목록으로 돌아가기</a></article>';
   let html=template().replace(/<main id="main" tabindex="-1">[\s\S]*?<\/main>/,()=>'<main id="main" tabindex="-1">'+body+'</main>');
   html=html.replace('<head>','<head><base href="/">').replace(/<title>.*?<\/title>/,()=>'<title>'+escape(post.seoTitle||post.title)+' | 주례성모안과</title>');
   html=html.replace(/<meta name="description" content="[^"]*">/,()=>'<meta name="description" content="'+escape(post.description||post.excerpt)+'">');
   const origin=process.env.SITE_URL||url.origin;
   html=html.replace(/<link rel="canonical" href="[^"]*">/,'<link rel="canonical" href="'+escape(origin.replace(/\/$/,'')+href(post))+'">');
   html=html.replace('</head>','<link rel="stylesheet" href="/page-manager/article-images.css"></head>');
   return response(html);
  }
 };
}
module.exports={createClinicManager};
