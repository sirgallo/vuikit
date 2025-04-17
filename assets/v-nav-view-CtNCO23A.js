import{d,e as o,c as p,w as s,r as e,a as n,b as _,t as m,o as k}from"./main-CurLQpMa.js";const f=d({__name:"v-nav-view",setup(y){const r=o([{key:"title: { title: string, subTitle?: string, icon?: string };",content:"nav bar title, left aligned"},{key:"routerLinks: { path: `/${string}`, label: string }[]",content:"the nav router links"},{key:"style?: { [style: string]: string }",content:"overrride nav style"}]),a=o(`
<v-nav
  :title="{ title: 'title', subTitle: 'subTitle' }"
  :routerLinks="routerLinks">
  <template #actions>
    <!--your additional nav actions-->
    <!--dark mode is already included and will stack first in actions-->
  </template>
</v-nav>`);return(b,i)=>{const l=e("v-title"),c=e("v-list"),v=e("v-input"),u=e("v-container");return k(),p(u,{orientation:"vertical",border:""},{default:s(()=>[n(l,{title:"vnav",border:""}),n(c,{items:r.value,extractKeyFn:t=>t.key},{content:s(({content:t})=>[_(m(t),1)]),_:1},8,["items","extractKeyFn"]),n(v,{value:a.value,"onUpdate:value":i[0]||(i[0]=t=>a.value=t),disabled:""},null,8,["value"])]),_:1})}}});export{f as default};
