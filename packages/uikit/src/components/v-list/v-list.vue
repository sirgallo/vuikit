<script setup lang="ts" generic="T">
import { ref } from 'vue'

import type { ListProps } from './types.js'

defineProps<ListProps<T>>()
const defaultIcon = ref('fa-solid fa-check-circle')
</script>

<template>
  <div class="v-list">
    <v-fade type="group" tag="ul">
      <li v-for="item of items" :key="extractKeyFn(item)" class="v-list-item">
        <font-awesome-icon :icon="icon ? icon : defaultIcon"></font-awesome-icon>
        <div v-cloak class="v-list-item-key">
          <slot name="key" :key="extractKeyFn(item)"></slot>
        </div>
        <slot v-cloak name="content" :content="item"> </slot>
      </li>
    </v-fade>
  </div>
</template>

<style lang="scss">
@use './style.scss';
</style>
