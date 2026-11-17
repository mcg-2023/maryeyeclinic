// Vercel function: admin, posts API, statistics, article pages and the dynamic board page.
// Static pages are served from public/ by Vercel; vercel.json rewrites only these routes here.
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const {createClinicManager}=require('../page-manager.cjs');
const setup=require('../admin-setup.cjs').createAdminSetup();
const managerReady=createClinicManager();

export default {
 async fetch(request){
  try{
   const managed=await setup.fetch(request)||await (await managerReady).fetch(request);
   if(managed)return managed;
   return new Response('Not found',{status:404,headers:{'Content-Type':'text/plain; charset=utf-8'}});
  }catch(error){
   console.error('Request failed:',error);
   return new Response('요청을 처리하지 못했습니다.',{status:500,headers:{'Content-Type':'text/plain; charset=utf-8'}});
  }
 }
};
