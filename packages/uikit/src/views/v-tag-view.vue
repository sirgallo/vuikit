<script setup lang="ts">
import { ref } from 'vue'

import type { ListContent } from './types.js'

const tagShowcaseContainerStyle = ref({
  'align-items': 'center',
})

const tagDetailListItems = ref([
  {
    key: 'content: { text?: string, icon?: string }',
    content: 'the display text and icon for the tag',
  },
  { key: 'color: string', content: 'the display text color for the tag' },
  { key: 'bgColor: string', content: 'the background color for the tag' },
])

const implementation = ref(`
<v-tag 
  :content="{ text: 'test' }"
  color="var(--v-text-primary)"
  bgColor="var(--v-soft-green)">
</v-tag>
`)
</script>

<template>
  <v-container orientation="vertical">
    <v-container orientation="vertical" border>
      <v-title title="vtag" border></v-title>
      <v-list :items="tagDetailListItems" :extractKeyFn="(item: ListContent) => item.key">
        <template #content="{ content }">
          {{ content }}
        </template>
      </v-list>
    </v-container>

    <v-container orientation="vertical" :style="tagShowcaseContainerStyle">
      <v-tag
        :content="{ text: 'example' }"
        color="var(--v-text-primary)"
        bgColor="var(--v-soft-green)"
      >
      </v-tag>
    </v-container>

    <v-container orientation="vertical" border>
      <v-title title="implementation" border></v-title>
      <v-input v-model:value="implementation" disabled></v-input>
    </v-container>
  </v-container>
</template>

<style lang="scss">
@use './view.scss';
</style>
