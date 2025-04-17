<script setup lang="ts">
import { ref } from 'vue'

import type { TitleProps } from './types.js'

const props = defineProps<TitleProps>()
const styles = ref({
  ...(props?.border ? { 'border-left': '0.25rem solid var(--v-title-border)' } : {}),
})
</script>

<template>
  <div class="v-title" :style="styles">
    <p class="v-title-main">{{ title.toUpperCase() }}</p>
    <p v-if="subTitle" class="v-title-secondary">{{ subTitle.toUpperCase() }}</p>
  </div>
</template>

<style lang="scss">
@use './style.scss';
</style>
