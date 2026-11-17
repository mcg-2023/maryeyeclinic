'use strict';
// Builds the site, then copies dist/ to public/ for Vercel's static hosting.
// interest.html is left out so its route reaches the function and shows live posts.
const fs=require('node:fs'),path=require('node:path'),{execFileSync}=require('node:child_process');
execFileSync(process.execPath,[path.join(__dirname,'build.cjs')],{stdio:'inherit',cwd:__dirname});
const out=path.join(__dirname,'public');
fs.rmSync(out,{recursive:true,force:true});
fs.cpSync(path.join(__dirname,'dist'),out,{recursive:true,filter:src=>path.relative(path.join(__dirname,'dist'),src)!=='interest.html'});
console.log('Copied dist to public for Vercel.');
