<script setup lang="ts">

import { ref, type Ref } from 'vue';

type TestData = {
  id: number
  parentId?: number | undefined
  label: string
}

const extractId = (node: TestData) => node.id
const fetchChildren = async (node?: TestData) => {
  const testData: Ref<TestData[]> = ref([
    {
      id: 0,
      label: 'take care of the garden'
    },
    { id: 1,
      parentId: 0,
      label: 'test the soil'
    },
    {
      id: 2,
      parentId: 0,
      label: 'water the plants'
    },
    {
      id: 3,
      parentId: 0,
      label: 'harvest veggies'
    },
    { id: 4,
      parentId: 3,
      label: 'gather produce'
    },
    { 
      id: 5,
      parentId: 3,
      label: 'organize cabinets'
    },
    {
      id: 6,
      label: 'take care of the dogs'
    },
    {
      id: 7,
      parentId: 6,
      label: 'give the dogs food'
    },
    {
      id: 8,
      parentId: 6,
      label: 'go for a walk'
    }
  ])

  if (! node) return testData.value.filter(n => n.parentId == null)
  return testData.value.filter(n => n.parentId === node.id)
}
</script>

<template>
  <v-tree
    :extract-id="extractId"
    :fetch-children="fetchChildren"
  >
    <template #data="{ data }">
      <div class="test-data-content">
        {{ data.label }}
      </div>
    </template>
  </v-tree>
</template>

<style lang="scss">
.test-data-content {
  display: flex;
  flex-direction: row;
}
</style>
