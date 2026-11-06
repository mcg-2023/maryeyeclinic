'use strict';
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const redirect=location=>new Response(null,{status:303,headers:{Location:location,'Cache-Control':'no-store'}});
function createAdminSetup({filename=path.join(__dirname,'.env'),environment=process.env}={}){
 const secret=crypto.randomBytes(32);
 const sign=value=>crypto.createHmac('sha256',secret).update(value).digest('hex');
 const same=(a,b)=>{const x=Buffer.from(a),y=Buffer.from(b);return x.length===y.length&&crypto.timingSafeEqual(x,y);};
 function page(error='',status=200,username=''){
  const value=Date.now()+'.'+crypto.randomBytes(24).toString('hex'),csrf=value+'.'+sign(value);
  const html=`<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>관리자 계정 설정 | 주례성모안과</title><link rel="stylesheet" href="/page-manager/base.css"><link rel="stylesheet" href="/page-manager/admin.css"><link rel="stylesheet" href="/admin-login.css"></head><body class="admin-body" style="--brand:#75604c;--brand-dark:#3e2f23"><main class="desk-login"><section class="desk-login-story"><a class="desk-login-brand" href="/"><img src="/assets/logo-horizontal.png" width="253" height="46" alt="주례성모안과"></a><div><p class="desk-eyebrow">JURYE ST. MARY’S · CONTENT DESK</p><h1>우리 병원 소식의 시작,<br>관리자 계정을 만들어주세요.</h1><p>사용할 아이디와 비밀번호를 직접 정해주세요.<br>처음 한 번만 설정하면 됩니다.</p></div><p class="desk-login-copyright">JURYE ST. MARY’S EYE CLINIC</p></section><section class="desk-login-panel"><div class="desk-login-form"><p class="desk-eyebrow">FIRST SETUP</p><h2>관리자 계정 설정</h2><p>앞으로 로그인할 계정 정보를 입력해주세요.</p>${error?'<div class="desk-alert" role="alert">'+escape(error)+'</div>':''}<form action="/admin/setup/" method="post"><input type="hidden" name="csrf" value="${csrf}"><div class="field"><label for="username">아이디</label><input id="username" name="username" value="${escape(username)}" autocomplete="username" required minlength="3" maxlength="40" pattern="[A-Za-z0-9_.-]{3,40}" placeholder="영문, 숫자, 점, 밑줄, 하이픈 3~40자"></div><div class="field"><label for="password">비밀번호</label><input id="password" name="password" type="password" autocomplete="new-password" required minlength="10" maxlength="128" placeholder="10자 이상 입력해주세요"></div><div class="field"><label for="confirmation">비밀번호 확인</label><input id="confirmation" name="confirmation" type="password" autocomplete="new-password" required minlength="10" maxlength="128" placeholder="비밀번호를 한 번 더 입력해주세요"></div><button class="btn primary desk-login-submit" type="submit">계정 저장하고 로그인하기 <span aria-hidden="true">→</span></button></form><a class="desk-back-link" href="/">홈페이지로 돌아가기</a></div></section></main></body></html>`;
  return new Response(html,{status,headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store','X-Frame-Options':'DENY','Content-Security-Policy':"frame-ancestors 'none'; form-action 'self'; base-uri 'none'",'Set-Cookie':'clinic_admin_setup='+csrf+'; Path=/admin/setup/; HttpOnly; SameSite=Strict; Max-Age=600'}});
 }
 return {async fetch(request){
  const url=new URL(request.url),setup=url.pathname==='/admin/setup/'||url.pathname==='/admin/setup';
  if(!setup){if(!environment.ADMIN_PASSWORD&&/^\/admin(?:\/|$)/.test(url.pathname))return redirect('/admin/setup/');return null;}
  if(environment.ADMIN_PASSWORD)return redirect('/admin/login/');
  if(!['localhost','127.0.0.1','[::1]'].includes(url.hostname)||environment.NODE_ENV==='production'||environment.VERCEL)return new Response('초기 계정은 로컬 서버에서 설정해주세요.',{status:403});
  if(request.method==='GET'||request.method==='HEAD')return page();
  if(request.method!=='POST')return new Response(null,{status:405,headers:{Allow:'GET, HEAD, POST'}});
  if(request.headers.get('origin')!==url.origin||request.headers.get('sec-fetch-site')==='cross-site')return new Response('Forbidden',{status:403});
  if(Number(request.headers.get('content-length')||0)>8192)return new Response('Too large',{status:413});
  const raw=await request.text();if(raw.length>8192)return new Response('Too large',{status:413});
  const form=new URLSearchParams(raw),csrf=form.get('csrf')||'',parts=csrf.split('.');
  const cookie=(request.headers.get('cookie')||'').split(';').map(s=>s.trim()).find(s=>s.startsWith('clinic_admin_setup='))?.slice('clinic_admin_setup='.length)||'';
  if(!same(csrf,cookie)||parts.length!==3||!same(parts[2],sign(parts.slice(0,2).join('.')))||Date.now()-Number(parts[0])>600000||Number(parts[0])>Date.now())return page('설정 화면이 만료되었습니다. 다시 입력해주세요.',403);
  const username=(form.get('username')||'').trim(),password=form.get('password')||'';
  if(!/^[A-Za-z0-9_.-]{3,40}$/.test(username))return page('아이디는 영문·숫자·점·밑줄·하이픈으로 3~40자 입력해주세요.',400,username);
  if(password.length<10||password.length>128||/[\x00-\x1f\x7f]/.test(password))return page('비밀번호는 줄바꿈 없이 10~128자로 입력해주세요.',400,username);
  if(password!==form.get('confirmation'))return page('비밀번호 확인이 일치하지 않습니다.',400,username);
  const quote=["'",'"','`'].find(q=>!password.includes(q));
  if(!quote)return page('비밀번호에 작은따옴표, 큰따옴표, 백틱을 모두 함께 사용할 수 없습니다.',400,username);
  // Recheck after awaiting the body so concurrent setup requests cannot replace an account.
  if(environment.ADMIN_PASSWORD)return redirect('/admin/login/');
  const previous=fs.existsSync(filename)?fs.readFileSync(filename,'utf8'):'';
  const clean=previous.replace(/^\s*(?:export\s+)?ADMIN_(?:USERNAME|PASSWORD)\s*=.*(?:\r?\n|$)/gm,'');
  const contents=clean.trimEnd()+'\n\n# Administrator account\nADMIN_USERNAME='+username+'\nADMIN_PASSWORD='+quote+password+quote+'\n';
  if(require('node:util').parseEnv(contents).ADMIN_PASSWORD!==password)return page('이 특수문자 조합은 저장할 수 없습니다. 다른 비밀번호를 입력해주세요.',400,username);
  const temporary=filename+'.setup-'+crypto.randomBytes(8).toString('hex');
  try{fs.writeFileSync(temporary,contents,{flag:'wx',mode:0o600});fs.renameSync(temporary,filename);}finally{fs.rmSync(temporary,{force:true});}
  environment.ADMIN_USERNAME=username;environment.ADMIN_PASSWORD=password;
  const response=redirect('/admin/login/');response.headers.set('Set-Cookie','clinic_admin_setup=; Path=/admin/setup/; HttpOnly; SameSite=Strict; Max-Age=0');return response;
 }};
}
module.exports={createAdminSetup};
