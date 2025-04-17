<script setup lang="ts">
import { ref } from 'vue'

import type { ListContent } from './types.js'

const tableDetailListItems = ref([
  { key: 'rows: T[]', content: 'table row data' },
  { key: 'striped: boolean', content: 'flag to determine application of stripes' },
  { key: 'bordered: boolean', content: 'flag to determine application of border' },
])

const rows = ref([
  { name: 'John Doe', age: 30, email: 'john.doe@example.com' },
  { name: 'Jane Smith', age: 25, email: 'jane.smith@example.com' },
  { name: 'Sam Wilson', age: 40, email: 'sam.wilson@example.com' },
])

const implementation = ref(`
<v-table
  :rows="rows"
  striped
  bordered
/>
`)
</script>

<template>
  <v-container orientation="vertical" overflow="auto">
    <v-container orientation="vertical" border>
      <v-title title="vtable" border></v-title>
      <v-list :items="tableDetailListItems" :extractKeyFn="(item: ListContent) => item.key">
        <template #content="{ content }">
          {{ content }}
        </template>
      </v-list>
    </v-container>

    <v-table :rows="rows" striped bordered />

    <v-container orientation="vertical" border>
      <v-input v-model:value="implementation" disabled></v-input>
    </v-container>
  </v-container>
</template>

<style lang="scss">
@use './view.scss';
</style>
