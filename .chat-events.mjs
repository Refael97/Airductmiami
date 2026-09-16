/**
 * The help widget's GA4 events, checked in a real browser.
 *
 * help_open fires when the floating bubble is opened, help_route when a
 * route is chosen. Both are easy to break by accident, because they live
 * inside a click handler that also does the visible work, and nothing about
 * the widget looks wrong when the gtag call stops firing.
 *
 *   npm run build && node .chat-events.mjs
 *
 * Note on reading the output: help_open fires on every open, so closing and
 * reopening counts two. That is correct, and it means the GA4 number to read
 * is Users rather than Event count.
 */
import { chromium } from 'playwright-core';
import { readFileSync } from 'node:fs';
const ROOT='/home/user/Airductmiami/dist';
const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
const p=await b.newPage({viewport:{width:1280,height:900}});
await p.route('**/*', async (r,q)=>{
  const u=new URL(q.url());
  if(u.hostname!=='localhost') return r.abort();
  if(q.method()==='POST') return r.fulfill({status:200,body:JSON.stringify({reply:'ok',quote:null,declined:false}),headers:{'content-type':'application/json'}});
  let f=u.pathname.endsWith('/')?u.pathname+'index.html':u.pathname;
  const ct=f.endsWith('.js')?'text/javascript':f.endsWith('.css')?'text/css':f.endsWith('.json')?'application/json':f.endsWith('.webp')?'image/webp':f.endsWith('.svg')?'image/svg+xml':'text/html';
  try{return r.fulfill({status:200,body:readFileSync(ROOT+f),headers:{'content-type':ct}});}catch{return r.fulfill({status:404,body:'x'});}
});
const dl=()=>p.evaluate(()=>(window.dataLayer||[]).map(a=>Array.prototype.slice.call(a)).filter(a=>a[0]==='event').map(a=>({e:a[1],...a[2]})));

await p.goto('http://localhost/services/air-duct-cleaning/',{waitUntil:'networkidle'});
console.log('--- 1. click the floating bubble');
await p.click('[data-hc-toggle]');
await p.waitForTimeout(400);
console.log(JSON.stringify(await dl(),null,0));

console.log('\n--- 2. click each route in the menu');
const opts = await p.$$eval('[data-hc-open]', els=>els.map(e=>e.getAttribute('data-hc-open')));
console.log('   routes offered:', opts);
for (const which of opts){
  await p.evaluate(()=>{const r=document.querySelector('[data-help-chat]');}); 
}
await p.click('[data-hc-open="chat"]').catch(()=>{});
await p.waitForTimeout(300);
console.log(JSON.stringify((await dl()).slice(-2),null,0));

console.log('\n--- 3. close and reopen (does it double count?)');
await p.click('[data-hc-toggle]'); await p.waitForTimeout(200);
await p.click('[data-hc-toggle]'); await p.waitForTimeout(300);
const all=await dl();
console.log('   total help_open events:', all.filter(x=>x.e==='help_open').length);
console.log('   all events:', all.map(x=>x.e+(x.route?':'+x.route:'')).join('  '));
await b.close();
