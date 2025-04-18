# vuikit

## a collection of reusable vue3 components

To view component showcase, go to the [github pages athnuikit showcase](https://sirgallo.github.io/vuikit)

**Note** 

The component library is still incomplete, with additional components and better test coverage to come. These will be rolled out in later versions. Until `v1`, all versions will be considered dev and not production ready.

## usage

In your `main.ts` file, you can either import individual components/animations/composables/directives or use the included `VUIKitLoader`.

```ts
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VUIKitLoader } from 'vuikit';

import 'vuikit/dist/style.css'; // import stylesheet

import App from '@app/App.vue';
import router from '@app/router';


const app = createApp(App);

app.use(createPinia());
app.use(router);

new VUIKitLoader().load(app); // this loads all included uikit functionality

app.mount('#app');
```

## available exports

```ts
import { 
  VUIKitLoader,
  flow,
  useDebounce,
  useExponentialBackoff,
  useLocalStorage,
  useNavigateRoute,
  usePathDataLoader,
  usePeriodicDataFetch,
  useResize,
  useScrollLoader,
  vbutton,
  vcontainer,
  vdarkmode,
  vdropdown,
  vinput,
  vlist,
  vmasterview,
  vnav,
  vnotification,
  vpath,
  vsearch,
  vsidebar,
  vtag,
  vtitle,
  vtext,
  vtable,
  vtree,
  vfade,
  vslidehorizontal,
  vslidevertical
} from 'vuikit';
```

with more to come.
