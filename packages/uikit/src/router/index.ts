import { createRouter, createWebHistory } from 'vue-router'

import about from '../views/about.vue'
import vbuttonview from '../views/v-button-view.vue'
import vcomposables from '../views/v-composables.vue'
import vcontainerview from '../views/v-container-view.vue'
import vflowview from '../views/v-flow-view.vue'
import vlistview from '../views/v-list-view.vue'
import vmasterviewv from '../views/v-master-view.vue'
import vdropdownview from '../views/v-dropdown-view.vue'
import vnavview from '../views/v-nav-view.vue'
import vpathview from '../views/v-path-view.vue'
import vsidebarview from '../views/v-sidebar-view.vue'
import vtableview from '../views/v-table-view.vue'
import vtagview from '../views/v-tag-view.vue'
import vtitleview from '../views/v-title-view.vue'
import vtreeview from '../views/v-tree-view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: about,
    },
    {
      path: '/vbutton',
      name: 'vbutton',
      component: vbuttonview,
    },
    {
      path: '/vcomposables',
      name: 'vcomposables',
      component: vcomposables,
    },
    {
      path: '/vcontainer',
      name: 'vcontainer',
      component: vcontainerview,
    },
    {
      path: '/vdropdown',
      name: 'vdropdown',
      component: vdropdownview,
    },
    {
      path: '/vflow',
      name: 'vflow',
      component: vflowview,
    },
    {
      path: '/vlist',
      name: 'vlist',
      component: vlistview,
    },
    {
      path: '/vmasterview',
      name: 'vmasterview',
      component: vmasterviewv,
    },
    {
      path: '/vnav',
      name: 'vnav',
      component: vnavview,
    },
    {
      path: '/vpath',
      name: 'vpath',
      component: vpathview,
    },
    {
      path: '/vsidebar',
      name: 'vsidebar',
      component: vsidebarview,
    },
    {
      path: '/vtag',
      name: 'vtag',
      component: vtagview,
    },
    {
      path: '/vtitle',
      name: 'vtitle',
      component: vtitleview,
    },
    {
      path: '/vtable',
      name: 'vtable',
      component: vtableview,
    },
    {
      path: '/vtree',
      name: 'vtree',
      component: vtreeview,
    }
  ],
})

export default router
