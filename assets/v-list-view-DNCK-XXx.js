import{d as p,e as c,c as _,w as o,r as e,a as n,b as y,t as u,o as k}from"./main-CurLQpMa.js";const g=p({__name:"v-list-view",setup(d){const l=c([{key:"items: { key: T, content: V }[]",content:"a list of the key and associated content for the key"},{key:"extractKeyFn: (key: T) => string",content:"get a unique identifier from the key"},{key:"icon?: string",content:"list item icon"}]),i=c(`
<v-list 
  :items="testListItems"
  :extractKeyFn="(key: string) => key">

  <template #key="{ key }">
    {{ key }}
  </template>

  <template #content="{ content }">
    {{  content  }}
  </template>
  
</v-list>
`);return(f,a)=>{const r=e("v-title"),m=e("v-list"),v=e("v-input"),s=e("v-container");return k(),_(s,{orientation:"vertical"},{default:o(()=>[n(s,{orientation:"vertical",border:""},{default:o(()=>[n(r,{title:"vlist",border:""}),n(m,{items:l.value,extractKeyFn:t=>t.key},{content:o(({content:t})=>[y(u(t),1)]),_:1},8,["items","extractKeyFn"]),n(v,{value:i.value,"onUpdate:value":a[0]||(a[0]=t=>i.value=t),disabled:""},null,8,["value"])]),_:1})]),_:1})}}});export{g as default};
