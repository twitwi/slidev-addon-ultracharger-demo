import{d as x,aa as H,ab as C,t as u,ac as N,D as g,C as w,a0 as D,n as E,o as k,c as T,i as v,h as y,ad as j,ae as M,b as S,j as z}from"../modules/vue-DJHzUJr2.js";import{c as B}from"../DrawingPreview-BhoXqXI9.js";import{N as O}from"./ClicksSlider-C8pOCFG5.js";import{_ as I}from"../index-B9h3ow_G.js";const K=x({__name:"NoteEditable",props:{no:{type:Number,required:!0},class:{default:""},editing:{default:!1},style:{default:()=>({})},placeholder:{default:"No notes for this slide"},clicksContext:{type:Object},highlight:{default:!0},autoHeight:{default:!1}},emits:["update:editing","markerDblclick","markerClick"],setup(m,{expose:l,emit:r}){l();const e=m,d=r,i=H(e,"editing",d,{passive:!0}),{info:s,update:o}=B(C(e,"no")),a=u("");let c;const{ignoreUpdates:f}=N(a,t=>{if(!i.value)return;const _=e.no;clearTimeout(c),c=setTimeout(()=>{o({note:t},_)},500)});g(()=>{var t;return(t=s.value)==null?void 0:t.note},(t="")=>{i.value||(clearTimeout(c),f(()=>{a.value=t}))},{immediate:!0,flush:"sync"});const n=u(),b=u();w(()=>{var t;i.value&&((t=n.value)==null||t.focus())}),D(n,()=>{i.value=!1});function h(){!e.autoHeight||!n.value||!i.value||n.value.scrollHeight>n.value.clientHeight&&(n.value.style.height=`${n.value.scrollHeight}px`)}g([a,i],()=>{E(()=>{h()})},{flush:"post",immediate:!0});const p={props:e,emit:d,editing:i,info:s,update:o,note:a,get timer(){return c},set timer(t){c=t},ignoreUpdates:f,inputEl:n,inputHeight:b,calculateEditorHeight:h,NoteDisplay:O};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}}),U=["placeholder"];function V(m,l,r,e,d,i){var s;return e.editing?j((k(),S("textarea",{key:1,ref:"inputEl","onUpdate:modelValue":l[2]||(l[2]=o=>e.note=o),class:v(["prose resize-none overflow-auto outline-none bg-transparent block border-primary border-2",e.props.class]),style:y([{"line-height":"1.75"},[e.props.style,e.inputHeight!=null?{height:`${e.inputHeight}px`}:{}]]),placeholder:r.placeholder,onKeydown:l[3]||(l[3]=z(o=>e.editing=!1,["esc"]))},null,46,U)),[[M,e.note]]):(k(),T(e.NoteDisplay,{key:0,class:v(["border-transparent border-2",[e.props.class,e.note?"":"opacity-25 italic select-none"]]),style:y(e.props.style),note:e.note||r.placeholder,"note-html":(s=e.info)==null?void 0:s.noteHTML,"clicks-context":r.clicksContext,"auto-scroll":!r.autoHeight,highlight:e.props.highlight,onMarkerClick:l[0]||(l[0]=(o,a)=>e.emit("markerClick",o,a)),onMarkerDblclick:l[1]||(l[1]=(o,a)=>e.emit("markerDblclick",o,a))},null,8,["class","style","note","note-html","clicks-context","auto-scroll","highlight"]))}const A=I(K,[["render",V],["__file","/home/twilight/projects/deck-js-stuffs/slidev-addon-ultracharger-demo/node_modules/.pnpm/@slidev+client@0.49.10_postcss@8.4.38_vite@5.2.13/node_modules/@slidev/client/internals/NoteEditable.vue"]]);export{A as N};
