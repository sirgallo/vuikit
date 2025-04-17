import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: () => import('../views/about.vue'),
    },
    {
      path: '/vbutton',
      name: 'vbutton',
      component: () => import('../views/v-button-view.vue')
    },
    {
      path: '/vcomposables',
      name: 'vcomposables',
      component: () => import('../views/v-composables.vue')
    },
    {
      path: '/vcontainer',
      name: 'vcontainer',
      component: () => import('../views/v-container-view.vue')
    },
    {
      path: '/vdropdown',
      name: 'vdropdown',
      component: () => import('../views/v-dropdown-view.vue')
    },
    {
      path: '/vflow',
      name: 'vflow',
      component: () => import('../views/v-flow-view.vue')
    },
    {
      path: '/vlist',
      name: 'vlist',
      component: () => import('../views/v-list-view.vue')
    },
    {
      path: '/vmasterview',
      name: 'vmasterview',
      component: () => import('../views/v-master-view.vue')
    },
    {
      path: '/vnav',
      name: 'vnav',
      component: () => import('../views/v-nav-view.vue')
    },
    {
      path: '/vpath',
      name: 'vpath',
      component: () => import('../views/v-path-view.vue')
    },
    {
      path: '/vsearch',
      name: 'vsearch',
      component: () => import('../views/v-search-view.vue')
    },
    {
      path: '/vsidebar',
      name: 'vsidebar',
      component: () => import('../views/v-sidebar-view.vue')
    },
    {
      path: '/vtag',
      name: 'vtag',
      component: () => import('../views/v-tag-view.vue')
    },
    {
      path: '/vtitle',
      name: 'vtitle',
      component: () => import('../views/v-title-view.vue')
    },
    {
      path: '/vtable',
      name: 'vtable',
      component: () => import('../views/v-table-view.vue')
    },
    {
      path: '/vtree',
      name: 'vtree',
      component: () => import('../views/v-tree-view.vue')
    }
  ],
})

export default router
