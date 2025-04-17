<script setup lang="ts" generic="T">
import { onMounted, ref, type Ref } from 'vue'

import { type TreeNodeProps } from './types.tree'

const { node, fetchChildren } = defineProps<TreeNodeProps<T>>()

const children: Ref<T[]> = ref([])
const isLoading: Ref<boolean> = ref(false)
const isExpanded: Ref<boolean> = ref(false)

const toggle = async () => {
  isExpanded.value = !isExpanded.value
}

const hasChildren = (): boolean => {
  return children.value.length > 0
}

onMounted(async () => {
  try {
    isLoading.value = true
    children.value = await fetchChildren(node)
  } catch (err) {
    console.log('error loading child nodes for node:', (err as Error).message)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <li v-if="!isLoading">
    <div @click="toggle" class="tree-node-data">
      <slot v-cloak name="data" :data="node"/>
      <div v-if="hasChildren()">
        <span v-if="isExpanded">[-]</span>
        <span v-else>[+]</span>
      </div>
    </div>
    <ul v-if="isExpanded && hasChildren()">
      <VTreeNode
        v-for="n in children"
        :key="extractId(n)"
        :node="n"
        :extract-id="extractId"
        :fetch-children="fetchChildren"
      >
        <template v-slot:data="props: { data: T }">
          <slot name="data" :data="props.data" />
        </template>
      </VTreeNode>
    </ul>
  </li>
</template>

<style lang="scss">
.tree-node-data {
  display: flex;
  flex-direction: row;
}
</style>
