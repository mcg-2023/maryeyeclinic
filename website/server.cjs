'use strict';
const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const {createChatHandler}=require('./chat-service.cjs');
try{process.loadEnvFile(path.join(__dirname,'.env'));}catch(error){if(error.code!=='ENOENT')throw error;}
const {createClinicManager}=require('./page-manager.cjs');
const managerReady=createClinicManager();
const chat=createChatHandler();
const root=path.resolve(__dirname,'dist'),mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml','.webp':'image/webp','.png':'image/png','.jpg':'image/jpeg','.xml':'application/xml','.txt':'text/plain; charset=utf-8'};
const server=http.createServer(async(req,res)=>{
 try{
 const port=Number(process.env.PORT)||4173;
 if(!['localhost:'+port,'127.0.0.1:'+port].includes(req.headers.host)){res.writeHead(403);res.end('Forbidden host');return;}
 let url;try{url=decodeURIComponent(new URL(req.url,'http://127.0.0.1:4173').pathname);}catch{res.writeHead(400);res.end();return;}
 if(url==='/api/chat'){chat(req,res);return;}
 if(url==='/interest.html'||url.startsWith('/admin')||url.startsWith('/api/posts')||url.startsWith('/api/statistics')||url==='/api/public/track'||url.startsWith('/media/')||url.startsWith('/articles/')){
  const chunks=[];for await(const chunk of req)chunks.push(chunk);
  const request=new Request(new URL(req.url,'http://'+req.headers.host),{method:req.method,headers:req.headers,...(['GET','HEAD'].includes(req.method)?{}:{body:Buffer.concat(chunks)})});
  const managed=await (await managerReady).fetch(request);
  if(managed){res.writeHead(managed.status,Object.fromEntries(managed.headers));res.end(req.method==='HEAD'?null:Buffer.from(await managed.arrayBuffer()));return;}
 }
 if(!['GET','HEAD'].includes(req.method)){res.writeHead(405,{Allow:'GET, HEAD'});res.end();return;}
 const file=path.resolve(root,'.'+(url==='/'?'/index.html':url));
 if(!file.startsWith(root+path.sep)||!fs.existsSync(file)||!fs.statSync(file).isFile()){res.writeHead(404);res.end('Not found');return;}
 const size=fs.statSync(file).size,headers={'Content-Type':path.extname(file)==='.mp4'?'video/mp4':mime[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store','Accept-Ranges':'bytes'};
 if(req.headers.range){
  const match=/^bytes=(\d*)-(\d*)$/.exec(req.headers.range);
  let start=match&&match[1]?Number(match[1]):0,end=match&&match[2]?Math.min(Number(match[2]),size-1):size-1;
  if(match&&!match[1]&&match[2]){start=Math.max(0,size-Number(match[2]));end=size-1;}
  if(!match||start>=size||start>end){res.writeHead(416,{'Content-Range':'bytes */'+size});res.end();return;}
  res.writeHead(206,{...headers,'Content-Range':`bytes ${start}-${end}/${size}`,'Content-Length':end-start+1});
  if(req.method==='HEAD')res.end();else fs.createReadStream(file,{start,end}).pipe(res);return;
 }
 res.writeHead(200,{...headers,'Content-Length':size});if(req.method==='HEAD')res.end();else fs.createReadStream(file).pipe(res);
 }catch(error){console.error('Request failed:',error.message);if(!res.headersSent)res.writeHead(500,{'Content-Type':'text/plain; charset=utf-8'});res.end('요청을 처리하지 못했습니다.');}
});
server.requestTimeout=20000;server.headersTimeout=15000;
const port=Number(process.env.PORT)||4173;
managerReady.then(()=>server.listen(port,'127.0.0.1',()=>console.log('Local: http://localhost:'+port+'\nAdmin: http://localhost:'+port+'/admin/'))).catch(error=>{console.error('Page manager startup failed:',error.message);process.exitCode=1;});
for(const signal of ['SIGINT','SIGTERM'])process.on(signal,()=>server.close(async()=>{(await managerReady).close();process.exit(0);}));

