import{n as d,q as _,s as p,aK as u,b as m,aL as h,u as n,aM as t,aN as o,$ as s,F as f,aO as g,aP as v,aQ as x,y as l,aR as y,aS as b,x as N,aT as k,aU as P,_ as w}from"./nav-efdcd5d6.js";import{N as S}from"./NoteDisplay-27d3b417.js";import{u as j}from"./index-581ceab6.js";const L={class:"m-4"},T={class:"mb-10"},V={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},C={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},M=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},F=d({__name:"PresenterPrint",setup(R){_(p),u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),j({title:`Notes - ${m.title}`});const r=h(()=>x.slice(0,-1).map(a=>{var i;return(i=a.meta)==null?void 0:i.slide}).filter(a=>a!==void 0&&a.noteHTML!==""));return(a,i)=>(l(),n("div",{id:"page-root",style:v(s(P))},[t("div",L,[t("div",T,[t("h1",V,o(s(m).title),1),t("div",B,o(new Date().toLocaleString()),1)]),(l(!0),n(f,null,g(s(r),(e,c)=>(l(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",C,[t("div",D,[t("div",H,o(e==null?void 0:e.no)+"/"+o(s(y)),1),b(" "+o(e==null?void 0:e.title)+" ",1),M])]),N(S,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<s(r).length-1?(l(),n("hr",z)):k("v-if",!0)]))),128))])],4))}}),E=w(F,[["__file","/home/twilight/projects/deck-js-stuffs/slidev-addon-ultracharger-demo/node_modules/.pnpm/@slidev+client@0.40.3_vite@4.1.1/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
