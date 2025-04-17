import{d as g,e as o,c as F,w as a,r as s,a as t,b as c,t as l,o as b}from"./main-CurLQpMa.js";const T=g({__name:"v-master-view",setup(D){const k=o([{key:"selectedKey: T",content:"the currently selected key element"},{key:"loadKeysFn(page: number): Promise<T[]>",content:"lazy load keys on scroll"},{key:"extractKeyFn(keyObj: T): string",content:"extract the unique id from a key"},{key:"getDataFn(key: string): Promise<V>",content:"get the data associated with a key"},{key:"keyViewStyle?: { [style: string]: string }",content:"optional styling for the key view"}]),v=o(null),w=o([{page:0,items:[{id:0,content:"this is key 0"},{id:1,content:"this is key 1"},{id:2,content:"this is key 2"},{id:3,content:"this is key 3"},{id:4,content:"this is key 4"},{id:5,content:"this is key 5"},{id:6,content:"this is key 6"},{id:7,content:"this is key 7"},{id:8,content:"this is key 8"},{id:9,content:"this is key 9"}]},{page:1,items:[{id:10,content:"this is key 10"},{id:11,content:"this is key 11"},{id:12,content:"this is key 12"},{id:13,content:"this is key 13"},{id:14,content:"this is key 14"},{id:15,content:"this is key 15"},{id:16,content:"this is key 16"},{id:17,content:"this is key 17"},{id:18,content:"this is key 18"},{id:19,content:"this is key 19"}]}]),f=o(["data for master view 0","data for master view 1","data for master view 2","data for master view 3","data for master view 4","data for master view 5","data for master view 6","data for master view 7","data for master view 8","data for master view 9","data for master view 10","data for master view 11","data for master view 12","data for master view 13","data for master view 14","data for master view 15","data for master view 16","data for master view 17","data for master view 18","data for master view 19"]),u=async i=>{var n;return((n=w.value.find(r=>r.page===i))==null?void 0:n.items)??[]},p=i=>i.id.toString(),_=i=>f.value[parseInt(i)],y=o(`
<v-master-view
  v-model:selectedKey="selectedKey"
  :loadKeysFn="loadKeysFn"
  :extractKeyFn="extractKeyFn"
  :getDataFn="getDataFn">

  <template #keyview="{ key }">
    <v-text>{{ key.content }}</v-text>
  </template>

  <template #dataview="{ data }">
    <v-text>{{ data }}</v-text>
  </template>

</v-master-view>
`);return(i,n)=>{const r=s("v-title"),h=s("v-list"),d=s("v-container"),m=s("v-text"),x=s("v-master-view",!0),K=s("v-input");return b(),F(d,{orientation:"vertical",overflow:"auto"},{default:a(()=>[t(d,{orientation:"vertical",border:""},{default:a(()=>[t(r,{title:"vmasterview",border:""}),t(h,{items:k.value,extractKeyFn:e=>e.key},{content:a(({content:e})=>[c(l(e),1)]),_:1},8,["items","extractKeyFn"])]),_:1}),t(x,{selectedKey:v.value,"onUpdate:selectedKey":n[0]||(n[0]=e=>v.value=e),loadKeysFn:u,extractKeyFn:p,getDataFn:_},{keyview:a(({key:e})=>[t(m,null,{default:a(()=>[c(l(e.content),1)]),_:2},1024)]),dataview:a(({data:e})=>[t(m,null,{default:a(()=>[c(l(e),1)]),_:2},1024)]),_:1},8,["selectedKey"]),t(d,{orientation:"vertical",border:""},{default:a(()=>[t(r,{title:"implementation",border:""}),t(K,{value:y.value,"onUpdate:value":n[1]||(n[1]=e=>y.value=e),disabled:""},null,8,["value"])]),_:1})]),_:1})}}});export{T as default};
