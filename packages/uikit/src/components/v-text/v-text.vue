<script setup lang="ts">
import type { TextProps } from './types.js'

defineProps<TextProps>()
</script>

<template>
  <div class="v-text-container" v-cloak>
    <slot></slot>
  </div>
</template>

<style lang="scss">
@use './style.scss';
</style>
