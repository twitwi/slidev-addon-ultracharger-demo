import{f as d,h as _,j as p,ag as h,c as m,ah as u,l as n,ai as t,aj as o,y as s,F as f,ak as g,al as v,am as x,n as l,an as y,ao as b,m as k,ap as N,aq as j,_ as w}from"./nav-4c28b9bf.js";import{N as P}from"./NoteViewer-723909ca.js";import{u as V}from"./index-83090862.js";const S={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},C={class:"text-lg"},H={class:"font-bold flex gap-2"},z={class:"opacity-50"},D=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"},M=d({__name:"PresenterPrint",setup(q){_(p),h(`
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
`),V({title:`Notes - ${m.title}`});const r=u(()=>x.slice(0,-1).map(a=>{var i;return(i=a.meta)==null?void 0:i.slide}).filter(a=>a!==void 0&&a.notesHTML!==""));return(a,i)=>(l(),n("div",{id:"page-root",style:v(s(j))},[t("div",S,[t("div",L,[t("h1",T,o(s(m).title),1),t("div",B,o(new Date().toLocaleString()),1)]),(l(!0),n(f,null,g(s(r),(e,c)=>(l(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",C,[t("div",H,[t("div",z,o(e==null?void 0:e.no)+"/"+o(s(y)),1),b(" "+o(e==null?void 0:e.title)+" ",1),D])]),k(P,{"note-html":e.notesHTML,class:"max-w-full"},null,8,["note-html"])]),c<s(r).length-1?(l(),n("hr",F)):N("v-if",!0)]))),128))])],4))}}),W=w(M,[["__file","/home/twilight/projects/deck-js-stuffs/slidev-addon-ultracharger-demo/node_modules/.pnpm/@slidev+client@0.38.0_vite@4.0.1/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{W as default};
