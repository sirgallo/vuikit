<script setup lang="ts">
import { ref } from 'vue'

import { type ContainerProps, defaultContainerProps } from './types.js'

const props = withDefaults(defineProps<ContainerProps>(), defaultContainerProps)
const defaultStyle = ref({
  border: props.border ? '2px solid var(--v-border)' : 'none',
  'box-shadow': props.border ? '0 4px 6px -4px var(--v-container-boxshadow)' : 'none',
  'border-radius': '0.25rem',
  overflow: props.overflow,
})
</script>

<template>
  <div
    v-cloak
    :class="orientation === 'vertical' ? 'v-container-vertical' : 'v-container-horizontal'"
    :style="style ? { ...style, ...defaultStyle } : defaultStyle"
  >
    <slot></slot>
  </div>
</template>

<style lang="scss">
@use './style.scss';
</style>
