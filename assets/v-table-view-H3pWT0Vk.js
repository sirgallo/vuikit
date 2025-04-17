import{d as _,e as r,c as u,w as a,r as o,a as e,b,t as f,o as w}from"./main-CurLQpMa.js";const k=_({__name:"v-table-view",setup(x){const s=r([{key:"rows: T[]",content:"table row data"},{key:"striped: boolean",content:"flag to determine application of stripes"},{key:"bordered: boolean",content:"flag to determine application of border"}]),c=r([{name:"John Doe",age:30,email:"john.doe@example.com"},{name:"Jane Smith",age:25,email:"jane.smith@example.com"},{name:"Sam Wilson",age:40,email:"sam.wilson@example.com"}]),l=r(`
<v-table
  :rows="rows"
  striped
  bordered
/>
`);return(y,i)=>{const m=o("v-title"),p=o("v-list"),n=o("v-container"),d=o("v-table"),v=o("v-input");return w(),u(n,{orientation:"vertical",overflow:"auto"},{default:a(()=>[e(n,{orientation:"vertical",border:""},{default:a(()=>[e(m,{title:"vtable",border:""}),e(p,{items:s.value,extractKeyFn:t=>t.key},{content:a(({content:t})=>[b(f(t),1)]),_:1},8,["items","extractKeyFn"])]),_:1}),e(d,{rows:c.value,striped:"",bordered:""},null,8,["rows"]),e(n,{orientation:"vertical",border:""},{default:a(()=>[e(v,{value:l.value,"onUpdate:value":i[0]||(i[0]=t=>l.value=t),disabled:""},null,8,["value"])]),_:1})]),_:1})}}});export{k as default};
