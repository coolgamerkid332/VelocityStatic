import{c as m,o as b,_ as C,i as e,d as r,T as V,U as k,w as E,z as S,F as H,t as d,f as j}from"./index.e65d7ba3.js";import{F as D}from"./Favicon.bc1ca08e.js";import"./BareClient.06787bc0.js";const F=d('<main class="flex h-full w-full bg-[#1C1B22] text-white"><div class="flex h-full w-[118px] select-none flex-col items-center pt-[70px] text-2xl sm:w-[240px] sm:items-end"><div class="flex h-12 w-12 cursor-pointer items-center justify-center gap-[9px] rounded px-[10px] transition-colors hover:bg-[#52525E] sm:w-[204px] sm:justify-start"><i class="fa-light fa-trash h-6 w-6"></i><span class="hidden text-base sm:block">Clear Browsing Data</span></div></div><div class="mx-24 my-16 flex flex-1 flex-col"><h1 class="mb-5 text-2xl">History</h1></div></main>'),M=d('<div class="flex items-center justify-between border-b border-white px-5 py-2"><div class="flex flex-1 gap-5"><i class="fa-light fa-trash mt-[2px]"></i><a class="flex items-center gap-2"><div class="mt-[2px] h-4 w-4"></div><span class="text-sm"></span></a></div><div class="hidden flex-1 justify-end lg:flex"><span class="text-sm opacity-50"></span></div></div>'),T=d('<span class="text-sm opacity-50">:<!> </span>');function B(){const[g,o]=m([]);return b(async()=>{await C(()=>import("./index.104056db.js").then(i=>i.i),["assets/index.104056db.js","assets/BareClient.06787bc0.js","assets/index.e65d7ba3.js","assets/index.f2f66a35.css","assets/url.624aedf1.js"]),window.Velocity.history.on("ready",async()=>{o(await window.Velocity.history.get())})}),(()=>{const i=F.cloneNode(!0),a=i.firstChild,_=a.firstChild,f=a.nextSibling;return f.firstChild,e(i,r(V,{children:"History"}),a),e(i,r(k,{rel:"icon",href:"/icons/clock.svg"}),a),_.$$click=async()=>{await window.Velocity.history.clear(),o(await window.Velocity.history.get())},e(f,r(H,{get each(){return g()},children:t=>(()=>{const p=M.cloneNode(!0),c=p.firstChild,x=c.firstChild,n=x.nextSibling,h=n.firstChild,y=h.nextSibling,$=c.nextSibling,v=$.firstChild;return x.$$click=async()=>{window.Velocity.history.delete(t.id),o(await window.Velocity.history.get())},e(c,()=>{const s=new Date(t.timestamp);return(()=>{const l=T.cloneNode(!0),w=l.firstChild,u=w.nextSibling;return u.nextSibling,e(l,()=>s.getHours()%12,w),e(l,()=>s.getMinutes(),u),e(l,()=>s.getHours()>=12?"PM":"AM",null),l})()},n),n.$$click=s=>{s.preventDefault(),new window.parent.Velocity.Tab(t.url,!0)},e(h,r(D,{get src(){return m(t.favicon)[0]}})),e(y,()=>t.title),e(v,()=>t.url.replace(/^(?:https?:\/\/)?(?:www\.)?/i,"")),E(()=>S(n,"href",t.url)),p})()}),null),i})()}j(["click"]);export{B as default};