import{d as b,e as d,g as h,a as e,w as n,r as l,F as g,b as I,t as s,f as x,o as k}from"./main-CurLQpMa.js";const y={class:"test-data-content"},F=b({__name:"v-tree-view",setup(C){const v=r=>r.id,p=async r=>{const o=d([{id:0,label:"take care of the garden"},{id:1,parentId:0,label:"test the soil"},{id:2,parentId:0,label:"water the plants"},{id:3,parentId:0,label:"harvest veggies"},{id:4,parentId:3,label:"gather produce"},{id:5,parentId:3,label:"organize cabinets"},{id:6,label:"take care of the dogs"},{id:7,parentId:6,label:"give the dogs food"},{id:8,parentId:6,label:"go for a walk"}]);return r?o.value.filter(a=>a.parentId===r.id):o.value.filter(a=>a.parentId==null)},_=d([{key:"extractId: (node: T) => number",content:"get an id from a tree node"},{key:"fetchChildren: (node?: T) => Promise<T[]>",content:"function to lazy load children"}]),c=d(`<v-tree
    :extract-id="extractId"
    :fetch-children="fetchChildren"
  >
    <template #data="{ data }">
      <div class="test-data-content">
        {{ data.label }}
      </div>
    </template>
  </v-tree>`);return(r,o)=>{const a=l("v-title"),u=l("v-list"),i=l("v-container"),f=l("v-tree"),m=l("v-input");return k(),h(g,null,[e(i,{orientation:"vertical",border:!1},{default:n(()=>[e(i,{orientation:"vertical",border:""},{default:n(()=>[e(a,{title:"vtree",border:""}),e(u,{items:_.value,extractKeyFn:t=>t.key},{content:n(({content:t})=>[I(s(t),1)]),_:1},8,["items","extractKeyFn"])]),_:1})]),_:1}),e(i,{orientation:"vertical"},{default:n(()=>[e(f,{"extract-id":v,"fetch-children":p},{data:n(({data:t})=>[x("div",y,s(t.label),1)]),_:1})]),_:1}),e(i,{orientation:"vertical",border:""},{default:n(()=>[e(a,{title:"implementation",border:""}),e(m,{value:c.value,"onUpdate:value":o[0]||(o[0]=t=>c.value=t),disabled:""},null,8,["value"])]),_:1})],64)}}});export{F as default};
