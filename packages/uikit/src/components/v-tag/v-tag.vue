<script setup lang="ts">
import type { TagProps } from './types.js'

defineProps<TagProps>()
</script>

<template>
  <div class="v-tag" v-cloak :style="{ color, 'background-color': bgColor }">
    <div class="v-tag-content">{{ content.text }}</div>
  </div>
</template>

<style lang="scss">
@use './style.scss';
</style>
