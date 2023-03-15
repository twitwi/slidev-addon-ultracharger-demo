import{y as n,u as i,aM as t,n as q,q as E,s as Q,b as S,aW as U,Y as d,aP as M,$ as e,x as a,aT as W,aX as L,aN as V,F as X,aY as _,aQ as B,aR as F,aZ as G,a_ as I,a$ as J,_ as K}from"./nav-efdcd5d6.js";import{N as H}from"./NoteDisplay-27d3b417.js";import{u as O}from"./index-581ceab6.js";const ee={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},te=t("path",{fill:"currentColor",d:"M8 12h10v2H8z"},null,-1),oe=t("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9Z"},null,-1),ne=[te,oe];function se(u,c){return n(),i("svg",ee,ne)}const le={name:"carbon-zoom-out",render:se},ae={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ie=t("path",{fill:"currentColor",d:"M18 12h-4V8h-2v4H8v2h4v4h2v-4h4v-2z"},null,-1),ce=t("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9Z"},null,-1),re=[ie,ce];function de(u,c){return n(),i("svg",ae,re)}const _e={name:"carbon-zoom-in",render:de},ue={class:"h-full flex flex-col"},pe={key:0,class:"px-5 py-2 max-h-60 overflow-auto border-t border-gray-400 border-opacity-20"},me={class:"flex-none border-t border-gray-400 border-opacity-20"},he={class:"flex gap-1 items-center px-6 py-3"},ve=t("div",{class:"flex-auto"},null,-1),fe={class:"p2 text-center"},xe=q({__name:"NotesView",setup(u){E(Q);const c=S.titleTemplate.replace("%s",S.title||"Slidev");O({title:`Notes - ${c}`});const{isFullscreen:T,toggle:p}=G,s=U("slidev-notes-font-size",18),l=d(()=>{var o;return((o=_.lastUpdate)==null?void 0:o.type)==="viewer"?_.viewerPage:_.page}),m=d(()=>B.find(o=>o.path===`${l.value}`)),r=d(()=>B.find(o=>o.path===`${l.value+1}`));function Z(){s.value=s.value+1}function j(){s.value=s.value-1}return(o,h)=>{var v,f,x,g,b,y,$,w,z,N,k,C;const R=I,A=J,D=_e,P=le;return n(),i(X,null,[t("div",{class:"fixed top-0 left-0 h-2px bg-teal-500 transition-all duration-500",style:M({width:`${(e(l)-1)/e(F)*100}%`})},null,4),t("div",ue,[t("div",{class:"px-5 flex-auto h-full overflow-auto",style:M({fontSize:`${e(s)}px`})},[a(H,{note:(x=(f=(v=e(m))==null?void 0:v.meta)==null?void 0:f.slide)==null?void 0:x.note,"note-html":(y=(b=(g=e(m))==null?void 0:g.meta)==null?void 0:b.slide)==null?void 0:y.noteHTML,placeholder:`No notes for Slide ${e(l)}.`},null,8,["note","note-html","placeholder"])],4),e(r)?(n(),i("div",pe,[a(H,{class:"opacity-50",note:(z=(w=($=e(r))==null?void 0:$.meta)==null?void 0:w.slide)==null?void 0:z.note,"note-html":(C=(k=(N=e(r))==null?void 0:N.meta)==null?void 0:k.slide)==null?void 0:C.noteHTML,placeholder:"No notes for next slide."},null,8,["note","note-html"])])):W("v-if",!0),t("div",me,[t("div",he,[t("button",{class:"slidev-icon-btn",onClick:h[0]||(h[0]=(...Y)=>e(p)&&e(p)(...Y))},[e(T)?(n(),L(R,{key:0})):(n(),L(A,{key:1}))]),t("button",{class:"slidev-icon-btn",onClick:Z},[a(D)]),t("button",{class:"slidev-icon-btn",onClick:j},[a(P)]),ve,t("div",fe,V(e(l))+" / "+V(e(F)),1)])])])],64)}}}),$e=K(xe,[["__file","/home/twilight/projects/deck-js-stuffs/slidev-addon-ultracharger-demo/node_modules/.pnpm/@slidev+client@0.40.3_vite@4.1.1/node_modules/@slidev/client/internals/NotesView.vue"]]);export{$e as default};
