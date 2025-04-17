# graceuikit

## a collection of components for vue 3


**Note** 

The component library is still incomplete, with additional components and better test coverage to come. These will be rolled out in later versions. Until `v1`, all versions will be considered dev and not production ready.



## installation

In the root of your vue project, run:
```
pnpm install graceuikit
```


## usage

In your `main.ts` file, you can either import individual components/animations/composables/directives or use the included `VUIKitLoader`.

```ts
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VUIKitLoader } from 'graceuikit';

import 'graceuikit/dist/style.css'; // import stylesheet

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

  VBlur,
  VFocus,

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
  vsidebar,
  vtag,
  vtitle,
  vtext,

  vfade,
  vslidehorizontal,
  vslidevertical
} from 'graceuikit';
```

with more to come.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
pnpm test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
pnpm build
pnpm test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

## todo

- complete testing of components