import{d as u,e as s,c as f,w as e,r as n,a as t,b as d,t as y,n as x,o as g}from"./main-CurLQpMa.js";const h=u({__name:"v-sidebar-view",setup(w){const c=s({"align-items":"center"}),v=s([{key:"button: SidebarButtonProps",content:"styling and content for the dropdown toggle"},{key:"position: left | right",content:"the sidebar position"}]),r=s(`
<v-sidebar :button="{ message: 'show sidebar' }">
        
  <template #sidebar>
    <v-text>sidebar content!</v-text>
  </template>

</v-sidebar>
`);return(k,a)=>{const l=n("v-title"),_=n("v-list"),i=n("v-container"),p=n("v-text"),b=n("v-sidebar"),m=n("v-input");return g(),f(i,{orientation:"vertical"},{default:e(()=>[t(i,{orientation:"vertical",border:""},{default:e(()=>[t(l,{title:"vsidebar",border:""}),t(_,{items:v.value,extractKeyFn:o=>o.key},{content:e(({content:o})=>[d(y(o),1)]),_:1},8,["items","extractKeyFn"])]),_:1}),t(i,{orientation:"vertical",style:x(c.value)},{default:e(()=>[t(b,{button:{message:"show sidebar"}},{sidebar:e(()=>[t(p,null,{default:e(()=>a[1]||(a[1]=[d("sidebar content!")])),_:1})]),_:1})]),_:1},8,["style"]),t(i,{orientation:"vertical",border:""},{default:e(()=>[t(l,{title:"implementation",border:""}),t(m,{value:r.value,"onUpdate:value":a[0]||(a[0]=o=>r.value=o),disabled:""},null,8,["value"])]),_:1})]),_:1})}}});export{h as default};
