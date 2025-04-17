// src/types/global-components.d.ts
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import VButton  from '../components/v-button/v-button.vue'
import VContainer from '../components/v-container/v-container.vue'
import VDarkmode from '../components/v-darkmode/v-darkmode.vue'
import VDropdown from '../components/v-dropdown/v-dropdown.vue'
import VInput from '../components/v-input/v-input.vue'
import VList from '../components/v-list/v-list.vue'
import VMasterView from '../components/v-master-view/v-master-view.vue'
import VNav from '../components/v-nav/v-nav.vue'
import VPath from '../components/v-path/v-path.vue'
import VSearch from '../components/v-search/v-search.vue'
import VSidebar from '../components/v-sidebar/v-sidebar.vue'
import VTable from '../components/v-table/v-table.vue'
import VTag from '../components/v-tag/v-tag.vue'
import VTitle from '../components/v-title/v-title.vue'
import VTree from '../components/v-tree/v-tree.vue'

import VFade from '../animations/v-fade.vue'
import VSlideHorizontal from '../animations/v-slide-horizontal.vue'
import VSlideVertical from '../animations/v-slide-vertical.vue'

declare module 'vue' {
  export interface GlobalComponents {
    VButton: typeof VButton
    VDarkmode: typeof VDarkmode
    VContainer: typeof VContainer
    VDropdown: typeof VDropdown
    VInput: typeof VInput
    VList: typeof VList
    VMasterView: typeof VMasterView
    VNav: typeof VNav
    VPath: typeof VPath
    VSearch: typeof VSearch
    VSidebar: typeof VSidebar
    VTable: typeof VTable
    VTag: typeof VTag
    VTitle: typeof VTitle
    VTree: typeof VTree
    
    VFade: typeof VFade
    VSlideHorizontal: typeof VSlideHorizontal
    VSlideVertical: typeof VSlideVertical

    FontAwesomeIcon: typeof FontAwesomeIcon
  }
}

// This ensures TypeScript treats the file as a module
export {};