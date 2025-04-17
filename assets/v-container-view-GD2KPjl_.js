import{d as _,e as l,c as u,w as n,r as t,a as o,b as p,t as m,o as f}from"./main-CurLQpMa.js";const w=_({__name:"v-container-view",setup(y){const c=l([{key:"orientation: vertical | horizontal",content:"the flex direction of the container"},{key:"border?: boolean",content:"show container border"},{key:"overflow?: hidden | auto | visible",content:"how the container should handle overflow"},{key:"style?: { [style: string]: string }",content:"override container style"}]),a=l(`
<v-container 
  orientation="vertical" 
  overflow="auto"
  border>
  <slot></slot>
</v-container>
`);return(b,r)=>{const s=t("v-title"),v=t("v-list"),d=t("v-input"),i=t("v-container");return f(),u(i,{orientation:"vertical"},{default:n(()=>[o(i,{orientation:"vertical",border:""},{default:n(()=>[o(s,{title:"vcontainer",border:""}),o(v,{items:c.value,extractKeyFn:e=>e.key},{content:n(({content:e})=>[p(m(e),1)]),_:1},8,["items","extractKeyFn"]),o(d,{value:a.value,"onUpdate:value":r[0]||(r[0]=e=>a.value=e),disabled:""},null,8,["value"])]),_:1})]),_:1})}}});export{w as default};
