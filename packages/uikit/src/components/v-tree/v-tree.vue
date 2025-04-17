<script setup lang="ts" generic="T">
import { onMounted, ref, type Ref } from 'vue'

import { type TreeProps } from './types.tree';
import VTreeNode from './v-tree-node.vue'

const { fetchChildren } = defineProps<TreeProps<T>>()

const isLoading: Ref<boolean> = ref(false)
const treeNodes: Ref<T[]> = ref([])

onMounted(async () => {
  try {
    isLoading.value = true
    treeNodes.value = await fetchChildren()
  } catch (err) {
    console.log('err at root of tree:', (err as Error).message)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <ul>
    <VTreeNode
      v-for="n of treeNodes"
      v-bind:key="extractId(n)"
      :node="n"
      :extract-id="extractId"
      :fetch-children="fetchChildren"
    >
      <template #data="{ data }">
        <slot name="data" :data="data"></slot>
      </template>
    </VTreeNode>
  </ul>
</template>

<style lang="scss">

</style>