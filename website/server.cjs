'use strict';
const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const {createChatHandler}=require('./chat-service.cjs');
const chat=createChatHandler();
const root=path.resolve(__dirname,'dist'),mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.xml':'application/xml','.txt':'text/plain; charset=utf-8'};
const server=http.createServer((req,res)=>{
 let url;try{url=decodeURIComponent(new URL(req.url,'http://127.0.0.1:4173').pathname);}catch{res.writeHead(400);res.end();return;}
 if(url==='/api/chat'){chat(req,res);return;}
 const file=path.resolve(root,'.'+(url==='/'?'/index.html':url));
 if(!file.startsWith(root+path.sep)||!fs.existsSync(file)||!fs.statSync(file).isFile()){res.writeHead(404);res.end('Not found');return;}
 res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store'});fs.createReadStream(file).pipe(res);
});
server.requestTimeout=20000;server.headersTimeout=15000;
const port=Number(process.env.PORT)||4173;
server.listen(port,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:'+port));

