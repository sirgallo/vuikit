import type { App } from 'vue'

import FontAwesomeIcon from './font-awesome.loader.js'
import {
  vbutton,
  vcontainer,
  vdarkmode,
  vdropdown,
  vinput,
  vlist,
  vmasterview,
  vnav,
  vpath,
  vsidebar,
  vtable,
  vtag,
  vtitle,
  vtext,
  vtree,
  vfade,
  vslidehorizontal,
  vslidevertical,
} from './uikit.js'

type ComponentRegistry = {
  label: string
  component: Parameters<App['component']>[1]
}

export default {
  install(app: App<Element>) {
    app.component('font-awesome-icon', FontAwesomeIcon)

    const componentRegitryList = [
      { label: 'v-button', component: vbutton },
      { label: 'v-container', component: vcontainer },
      { label: 'v-darkmode', component: vdarkmode },
      { label: 'v-dropdown', component: vdropdown },
      { label: 'v-input', component: vinput },
      { label: 'v-list', component: vlist },
      { label: 'v-master-view', component: vmasterview },
      { label: 'v-nav', component: vnav },
      { label: 'v-path', component: vpath },
      { label: 'v-sidebar', component: vsidebar },
      { label: 'v-table', component: vtable },
      { label: 'v-tag', component: vtag },
      { label: 'v-text', component: vtext },
      { label: 'v-title', component: vtitle },
      { label: 'v-tree', component: vtree }
    ]

    const animationRegistryList: ComponentRegistry[] = [
      { label: 'v-fade', component: vfade },
      { label: 'v-slide-horizontal', component: vslidehorizontal },
      { label: 'v-slide-vertical', component: vslidevertical },
    ]

    componentRegitryList.forEach((cr) => app.component(cr.label, cr.component))
    animationRegistryList.forEach((ar) => app.component(ar.label, ar.component))
  }
}
