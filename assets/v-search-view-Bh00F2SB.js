import{d as h,e as n,c as y,w as o,r as a,a as t,b as g,t as b,n as w,o as S}from"./main-CurLQpMa.js";const M=h({__name:"v-search-view",setup(k){const i=n(""),p=n({id:{context:"id",help:"the id to search for",filters:[1,2,3]},group:{context:"animals",help:"",filters:["cat","cow","dog","dolphin","eagle"]}}),u=async c=>(console.log("submitting:",c),!0),m=n({"align-items":"center"}),d=n([{key:"v-model:text: string",content:"the search string"}]),l=n('<v-search v-model:text="inputRef"></v-search>');return(c,r)=>{const v=a("v-title"),_=a("v-list"),s=a("v-container"),x=a("v-search"),f=a("v-input");return S(),y(s,{orientation:"vertical"},{default:o(()=>[t(s,{orientation:"vertical",border:""},{default:o(()=>[t(v,{title:"vsearch",border:""}),t(_,{items:d.value,extractKeyFn:e=>e.key},{content:o(({content:e})=>[g(b(e),1)]),_:1},8,["items","extractKeyFn"])]),_:1}),t(s,{orientation:"vertical",style:w(m.value)},{default:o(()=>[t(x,{text:i.value,"onUpdate:text":r[0]||(r[0]=e=>i.value=e),onSubmit:u,contextMap:p.value},null,8,["text","contextMap"])]),_:1},8,["style"]),t(s,{orientation:"vertical",border:""},{default:o(()=>[t(v,{title:"implementation",border:""}),t(f,{value:l.value,"onUpdate:value":r[1]||(r[1]=e=>l.value=e),disabled:""},null,8,["value"])]),_:1})]),_:1})}}});export{M as default};
