import{d as v,e as o,c as d,w as a,r,a as t,_ as m,f as y,t as c,o as _}from"./main-CurLQpMa.js";const F=v({__name:"v-flow-view",setup(w){const f=o([{key:"<(...args: any[]): any>[]",content:"a set of functions to operate on"}]),s=o(`
import { flow } from '@uikit/utils/flow';

const add = (x: number, y: number): number => x + y;
const square = (x: number): number => x * x;
const positive = (x: number): boolean => x > 0;

const flowFn = flow(add, square, positive); // return type will be true
const result = flowFn(1, 2); // expects args for first function, the rest of functions take in results of last
console.log(result); // result will be true
`),l=o(`
type FlowFn<T, U> = (...args: T extends any ? any : never) => U;
type InferLast<T extends any[]> = T extends [ ...infer _, infer Last ] ? Last : never;


export const flow = <T extends FlowFn<any, any>[]>(...fns: T) => {
  return (...args: Parameters<T[0]>): ReturnType<InferLast<T>> => {
    return fns.reduce((acc, fn) => {
      const args = Array.isArray(acc) ? acc : [ acc ];
      return fn(...args);
    }, args)[0];
  };
};
`);return(x,n)=>{const p=r("v-title"),u=r("v-input"),i=r("v-container");return _(),d(i,{orientation:"vertical",overflow:"auto"},{default:a(()=>[t(i,{orientation:"vertical",border:""},{default:a(()=>[t(p,{title:"vflow",border:""}),t(m,{items:f.value,extractKeyFn:e=>e.key},{content:a(({content:e})=>[y("p",null,c(e.key)+": "+c(e.content),1)]),_:1},8,["items","extractKeyFn"]),t(u,{value:s.value,"onUpdate:value":n[0]||(n[0]=e=>s.value=e),disabled:""},null,8,["value"]),t(u,{value:l.value,"onUpdate:value":n[1]||(n[1]=e=>l.value=e),disabled:""},null,8,["value"])]),_:1})]),_:1})}}});export{F as default};
