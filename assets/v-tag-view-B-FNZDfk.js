import{d as m,e as r,c as d,w as o,r as n,a as t,b as u,t as y,n as f,o as x}from"./main-CurLQpMa.js";const C=m({__name:"v-tag-view",setup(b){const s=r({"align-items":"center"}),v=r([{key:"content: { text?: string, icon?: string }",content:"the display text and icon for the tag"},{key:"color: string",content:"the display text color for the tag"},{key:"bgColor: string",content:"the background color for the tag"}]),i=r(`
<v-tag 
  :content="{ text: 'test' }"
  color="var(--v-text-primary)"
  bgColor="var(--v-soft-green)">
</v-tag>
`);return(h,l)=>{const c=n("v-title"),_=n("v-list"),a=n("v-container"),p=n("v-tag"),g=n("v-input");return x(),d(a,{orientation:"vertical"},{default:o(()=>[t(a,{orientation:"vertical",border:""},{default:o(()=>[t(c,{title:"vtag",border:""}),t(_,{items:v.value,extractKeyFn:e=>e.key},{content:o(({content:e})=>[u(y(e),1)]),_:1},8,["items","extractKeyFn"])]),_:1}),t(a,{orientation:"vertical",style:f(s.value)},{default:o(()=>[t(p,{content:{text:"example"},color:"var(--v-text-primary)",bgColor:"var(--v-soft-green)"})]),_:1},8,["style"]),t(a,{orientation:"vertical",border:""},{default:o(()=>[t(c,{title:"implementation",border:""}),t(g,{value:i.value,"onUpdate:value":l[0]||(l[0]=e=>i.value=e),disabled:""},null,8,["value"])]),_:1})]),_:1})}}});export{C as default};
