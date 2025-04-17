<script setup lang="ts" generic="T extends object">
import { computed, ref } from 'vue'
import { keys } from 'lodash'

import { type TableProps, type TableEmits, CURSOR_MAP } from './types.js'

const props = defineProps<TableProps<T>>()
const emit = defineEmits<TableEmits<T>>()

const selectedRow = ref<string | undefined>()

const tableClasses = computed(() => ({
  'v-table': true,
  'v-table--striped': props?.striped ?? false,
  'v-table--bordered': props?.bordered ?? false,
}))

const headers = computed(() => {
  if (props.rows?.length > 0) {
    return keys(props.rows[0]) as (keyof T)[]
  } else {
    return []
  }
})

const extractKeyFn = (row: T) => {
  if (row) {
    return row[keys(row)[0] as keyof T] as string
  }
}

const selectRow = (row: T) => {
  if (row) {
    selectedRow.value = extractKeyFn(row)
    emit('select', row)
  }
}

const isSelected = (row: T) => {
  if (row && selectedRow.value) {
    return selectedRow.value === extractKeyFn(row)
  }

  return false
}
</script>

<template>
  <div class="v-table-container">
    <table :class="tableClasses">
      <thead>
        <tr>
          <th></th>
          <th v-for="header in headers" :key="header">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="row in rows"
          :key="extractKeyFn(row)"
          :class="{ 'selected-row': isSelected(row) }"
          :style="{ cursor: CURSOR_MAP[isSelected(row) ? 'default' : 'pointer'] }"
          @click="!isSelected(row) && selectRow(row)"
        >
          <td>
            <input type="radio" :checked="isSelected(row)" disabled />
          </td>
          <td v-for="header in headers" :key="header">
            {{ row[header] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss">
@use './style.scss';
</style>
