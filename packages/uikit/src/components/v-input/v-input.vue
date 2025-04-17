<script setup lang="ts">
import { ref, watch } from 'vue'

import { type InputEmits, type InputProps, defaultInputProps } from './types.js'

const props = withDefaults(defineProps<InputProps>(), defaultInputProps)
const emit = defineEmits<InputEmits>()

const valueRef = ref(props.value)
watch(valueRef, (update: string) => emit('update:value', update))
</script>

<template>
  <div v-cloak class="v-input">
    <textarea v-model="valueRef" disabled></textarea>
  </div>
</template>

<style lang="scss">
@use './style.scss';
</style>
