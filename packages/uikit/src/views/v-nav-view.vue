<script setup lang="ts">
import { ref } from 'vue'

import type { ListContent } from './types.js'

const navDetailsList = ref([
  {
    key: 'title: { title: string, subTitle?: string, icon?: string };',
    content: 'nav bar title, left aligned',
  },
  { key: 'routerLinks: { path: `/${string}`, label: string }[]', content: 'the nav router links' },
  { key: 'style?: { [style: string]: string }', content: 'overrride nav style' },
])

const navImplementation = ref(`
<v-nav
  :title="{ title: 'title', subTitle: 'subTitle' }"
  :routerLinks="routerLinks">
  <template #actions>
    <!--your additional nav actions-->
    <!--dark mode is already included and will stack first in actions-->
  </template>
</v-nav>`)
</script>

<template>
  <v-container orientation="vertical" border>
    <v-title title="vnav" border></v-title>
    <v-list :items="navDetailsList" :extractKeyFn="(item: ListContent) => item.key">
      <template #content="{ content }">
        {{ content }}
      </template>
    </v-list>
    <v-input v-model:value="navImplementation" disabled></v-input>
  </v-container>
</template>

<style lang="scss">
@use './view.scss';
</style>
