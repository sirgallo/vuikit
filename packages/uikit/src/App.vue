<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'

const routerLinks = ref<{ path: `/${string}`, label: string }[]>([
  { path: '/', label: 'about' },
  { path: '/vbutton', label: 'vbutton' },
  { path: '/vcomposables', label: 'vcomposables' },
  { path: '/vcontainer', label: 'vcontainer' },
  { path: '/vdropdown', label: 'vdropdown' },
  { path: '/vflow', label: 'vflow' },
  { path: '/vlist', label: 'vlist' },
  { path: '/vmasterview', label: 'vmasterview' },
  { path: '/vnav', label: 'vnav' },
  { path: '/vpath', label: 'vpath' },
  { path: '/vsidebar', label: 'vsidebar' },
  { path: '/vtable', label: 'vtable' },
  { path: '/vtag', label: 'vtag' },
  { path: '/vtitle', label: 'vtitle' },
  { path: '/vtree', label: 'vtree' }
])
</script>

<template>
  <div class="app-container">
    <v-nav
      :title="{ title: 'graceuikit', subTitle: 'a vue component collection' }"
      :routerLinks="routerLinks"
    >
    </v-nav>

    <div class="app-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style lang="scss">
@use './v-common.scss';
@use './App.scss';
</style>
