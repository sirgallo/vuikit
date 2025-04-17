import{d as h,e as i,c as D,w as n,r as o,a as e,b as y,t as f,f as b,o as M}from"./main-CurLQpMa.js";const w=h({__name:"v-path-view",setup(N){const p=i([{key:"rootData: T",content:"the id of the root element to load"},{key:"extractIdFn: (data: T) => string",content:"function for extract identifier from data for path node"},{key:"extractPrevIdFn: (data: T) => string | null",content:"function fo extract the reference to the previous node"},{key:"extractLinkedNodes: (data: T) => string[] | null",content:"function for extract links to potential selectable nodes"},{key:"selectDataFn: (id: string) => Promise<T>",content:"function for loading selected node in path"}]),c=i([{id:"0",data:"data for node id 0",linkMap:{1:"1",2:"2",3:"3"}},{id:"1",refId:"0",data:"data for node id 1",linkMap:{4:"4",5:"5"}},{id:"2",refId:"0",data:"data for node id 2",linkMap:{6:"6",7:"7",8:"8"}},{id:"3",refId:"0",data:"data for node id 3",linkMap:{9:"9"}},{id:"4",refId:"1",data:"data for node id 4"},{id:"5",refId:"1",data:"data for node id 5",linkMap:{10:"10",11:"11"}},{id:"6",refId:"2",data:"data for node id 6"},{id:"7",refId:"2",data:"data for node id 7"},{id:"8",refId:"2",data:"data for node id 8"},{id:"9",refId:"3",data:"data for node id 9"},{id:"10",refId:"5",data:"data for node id 10"},{id:"11",refId:"5",data:"data for node id 11"}]),v=t=>t.id,u=t=>(t==null?void 0:t.refId)??null,_=t=>t!=null&&t.linkMap?Object.keys(t.linkMap):null,x=async t=>c.value.find(d=>d.id===t),l=i(`
<v-path
  :rootData="data[0]"
  :extractIdFn="extractIdFn"
  :extractPrevIdFn="extractPrevIdFn"
  :extractLinkedNodes="extractLinkedNodes"
  :selectDataFn="selectDataFn">

  <template #nodeDataView="{ data }">
    <v-text><pre>{{ data }}</pre></v-text>
  </template>
  
</v-path>
`);return(t,d)=>{const s=o("v-title"),m=o("v-list"),r=o("v-container"),k=o("v-text"),I=o("v-path"),F=o("v-input");return M(),D(r,{orientation:"vertical",overflow:"auto"},{default:n(()=>[e(r,{orientation:"vertical",border:""},{default:n(()=>[e(s,{title:"vpath",border:""}),e(m,{items:p.value,extractKeyFn:a=>a.key},{content:n(({content:a})=>[y(f(a),1)]),_:1},8,["items","extractKeyFn"])]),_:1}),e(I,{rootData:c.value[0],extractIdFn:v,extractPrevIdFn:u,extractLinkedNodes:_,selectDataFn:x},{nodeDataView:n(({data:a})=>[e(k,null,{default:n(()=>[b("pre",null,f(a),1)]),_:2},1024)]),_:1},8,["rootData"]),e(r,{orientation:"vertical",border:""},{default:n(()=>[e(s,{title:"implementation",border:""}),e(F,{value:l.value,"onUpdate:value":d[0]||(d[0]=a=>l.value=a),disabled:""},null,8,["value"])]),_:1})]),_:1})}}});export{w as default};
