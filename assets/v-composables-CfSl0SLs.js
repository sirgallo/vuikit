import{d as T,e as r,c as P,w as o,r as d,o as I,a as t,b as c,t as u}from"./main-CurLQpMa.js";const R=T({__name:"v-composables",setup(_){const k=r([{key:"actionFn: T extends (...args: any[]) => any",content:"the operation to debounce"},{key:"delay: number",content:"the debounce period in ms"}]),f=r(`
import { useDebounce } from '@uikit/composables/useDebounce';

// debounce is the debounce wrapper function for the operation
const { debounce } = useDebounce<(arg: T) => void>(); // arg is T for demo purposes

const action = (arg: T) => { /* the operation to perform */ };
const debounceAction = debounce(action, 200); // delay of 200ms
`),x=r([{key:"fn: T extends (...args: any[]) => any",content:"the operation to retry on failures"},{key:"retries: number",content:"the number of retries to attempt"}]),p=r(`
import { useExponentialBackoff } from '@uikit/composables/useExponentialBackoff';

/*
  backoff is the backoff wrapper function for the operation
  backoffErr exposes a ref for Error objects on max retries load failure
*/
const { backoff, backoffErr } = useExponentialBackoff<(arg: T) => Promise<void>>(); // arg is T for demo purposes

const action = async (arg: T) => { /* the operation to perform */ };
const backoffAction = backoff(action, 5); // 5 total retries
`),h=r([{key:"prefix: PRF extends string",content:"the prefix for the key"},{key:"key: KEY extends string",content:"the key"},{key:"value: string",content:"the stringified value for a given key"}]),m=r(`
import { useLocalStorage } from '@uikit/composables/useLocalStorage';

/*
  localStorageRef exposes ref to localstorage
  updateValueForKeyMap exposes ref for signalling updated keys in localstorage
  setItem(prefix, key, value) is a wrapper function to set a key value pair in localstorage
  getItem(prefix, key): value is a wrapper function to get a key value pair in localstorage
  deleteItem(prefix, key) is a wrapper function to delete a key value pair in localstorage
  clear() is a wrapper function to clear localstorage
*/
const { localStorageRef, updateValueForKeyMap, setItem, getItem, deleteItem, clear } = useLocalStorage<T, V>();
`),F=r([{key:"route: `/${string}`",content:"the route path to navigate to"}]),v=r(`
import { useNavigateRoute } from '@uikit/composables/useNavigateRoute';

/*
  navigate is the backoff wrapper function for updating router state
  navErr exposes a ref for Error objects on reroute errors
*/
const { navigate, navErr } = useNavigateRoute();
`),D=r([{key:"rootData: T",content:"the root data of the path"},{key:"extractIdFn: (data: T) => string",content:"function to extract key from data"},{key:"extractPrevIdFn: (data: T) => string | null",content:"function to extract reference to previous node in path"},{key:"extractLinkedNodes: (data: T) => string[] | null",content:"function to extract references to possible next path"},{key:"selectDataFn: (id: string) => Promise<T>",content:"function to asynchronously load data for next node in path"}]),b=r(`
import { usePathDataLoader} from '@uikit/composables/usePathDataLoader';

const rootData = ref<T>(/* needs to be populated, make network request or other op */);
const extractIdFn = (data: T) => { /* get identifier from data object */ };
const extractPrevIdFn = (data: T) => { /* get reference id from current data object for previous */ };
const extractLinkedNodes = (data: T) => { /* get references to potential child objects */ };
const selectDataFn = async = (id: string) => { /* fetch selected data asynchronously */ };

/*
  path exposes ref to entire current path as Ref<PathNode<T>[]>
  currNode exposes ref to current selected data
  pathLoading exposes ref to loading state of data
  pathErr exposes a ref for Error objects on max retries load failure
  selectNode(selectedId) is a wrapper function to update path state on interaction
*/
const { path, currNode, pathLoading, pathErr, selectNode } = usePathDataLoader(
  rootData, extractIdFn, extractPrevIdFn, extractLinkedNodes, selectDataFn
);
`),L=r([{key:"fetcher: Ref<(() => Promise<T>) | undefined>",content:"the data fetch function"},{key:"timespanInMs: number",content:"the length of time for a period"}]),g=r(`
import { usePeriodicDataFetch } from '@uikit/composables/usePeriodicDataFetch';

const fetcher = (): Promise<T> => { /* perform operation here */ };
/*
  data exposes ref to updated data
  loading exposes ref to loading state
  periodicError exposes a ref for Error objects on data fetch failures
*/
const { data, loading, periodicError } = usePeriodicDataFetch(fetcher, 500); // period of 500ms
`),E=r([{key:"loadPageFn: (page: number) => Promise<T[]>",content:"asynchronous page load function"},{key:"scrollableElementRef: Ref<HTMLElement | null>",content:"the scrollable html element to load content in"}]),y=r(`
import { useScrollLoader } from '@uikit/composables/useScrollLoader';

const scrollElRef = ref(null); // the html element, use ref binding in component
const loadDataFn = async (page: number) => { /* paginate function */ };

/*
  items exposes a ref for the current page data
  loading exposes a ref for loading state
  scrollError exposes a ref for Error objects on data load failure
*/
const { items, loading, scrollError } = useScrollLoader(loadDataFn, scrollElRef);
`);return(K,a)=>{const s=d("v-title"),i=d("v-list"),l=d("v-input"),n=d("v-container");return I(),P(n,{orientation:"vertical",overflow:"auto"},{default:o(()=>[t(n,{orientation:"vertical",border:""},{default:o(()=>[t(s,{title:"useDebounce",border:""}),t(i,{items:k.value,extractKeyFn:e=>e.key},{content:o(({content:e})=>[c(u(e),1)]),_:1},8,["items","extractKeyFn"]),t(l,{value:f.value,"onUpdate:value":a[0]||(a[0]=e=>f.value=e),disabled:""},null,8,["value"])]),_:1}),t(n,{orientation:"vertical",border:""},{default:o(()=>[t(s,{title:"useExponentialBackoff",border:""}),t(i,{items:x.value,extractKeyFn:e=>e.key},{content:o(({content:e})=>[c(u(e),1)]),_:1},8,["items","extractKeyFn"]),t(l,{value:p.value,"onUpdate:value":a[1]||(a[1]=e=>p.value=e),disabled:""},null,8,["value"])]),_:1}),t(n,{orientation:"vertical",border:""},{default:o(()=>[t(s,{title:"useLocalStorage",border:""}),t(i,{items:h.value,extractKeyFn:e=>e.key},{content:o(({content:e})=>[c(u(e),1)]),_:1},8,["items","extractKeyFn"]),t(l,{value:m.value,"onUpdate:value":a[2]||(a[2]=e=>m.value=e),disabled:""},null,8,["value"])]),_:1}),t(n,{orientation:"vertical",border:""},{default:o(()=>[t(s,{title:"useNavigateRoute",border:""}),t(i,{items:F.value,extractKeyFn:e=>e.key},{content:o(({content:e})=>[c(u(e),1)]),_:1},8,["items","extractKeyFn"]),t(l,{value:v.value,"onUpdate:value":a[3]||(a[3]=e=>v.value=e),disabled:""},null,8,["value"])]),_:1}),t(n,{orientation:"vertical",border:""},{default:o(()=>[t(s,{title:"usePathDataLoader",border:""}),t(i,{items:D.value,extractKeyFn:e=>e.key},{content:o(({content:e})=>[c(u(e),1)]),_:1},8,["items","extractKeyFn"]),t(l,{value:b.value,"onUpdate:value":a[4]||(a[4]=e=>b.value=e),disabled:""},null,8,["value"])]),_:1}),t(n,{orientation:"vertical",border:""},{default:o(()=>[t(s,{title:"usePeriodicDataFetcher",border:""}),t(i,{items:L.value,extractKeyFn:e=>e.key},{content:o(({content:e})=>[c(u(e),1)]),_:1},8,["items","extractKeyFn"]),t(l,{value:g.value,"onUpdate:value":a[5]||(a[5]=e=>g.value=e),disabled:""},null,8,["value"])]),_:1}),t(n,{orientation:"vertical",border:""},{default:o(()=>[t(s,{title:"useScrollLoader",border:""}),t(i,{items:E.value,extractKeyFn:e=>e.key},{content:o(({content:e})=>[c(u(e),1)]),_:1},8,["items","extractKeyFn"]),t(l,{value:y.value,"onUpdate:value":a[6]||(a[6]=e=>y.value=e),disabled:""},null,8,["value"])]),_:1})]),_:1})}}});export{R as default};
