<script setup lang="ts" generic="T">
import { usePathDataLoader } from '../../composables/usePathDataLoader.js'
import type { PathProps } from './types.js'

const props = defineProps<PathProps<T>>()

const { path, currNode, selectNode } = usePathDataLoader(
  props.rootData,
  props.extractIdFn,
  props.extractPrevIdFn,
  props.extractLinkedNodes,
  props.selectDataFn,
)
</script>

<template>
  <div class="v-path">
    <div class="v-path-nodes">
      <v-fade type="group">
        <div v-for="(node, index) in path" :key="node.id" v-cloak class="v-node">
          <div v-if="index !== 0" class="v-node-connector"></div>

          <template v-if="node.linkedNodes && node.linkedNodes.length > 0">
            <v-button
              v-for="link in node.linkedNodes"
              :key="link"
              :option="link"
              :icon="
                path.find((el) => el.id === link)
                  ? 'fa-solid fa-chevron-right'
                  : 'fa-solid fa-chevron-down'
              "
              :action="() => { 
                selectNode(link)
                return ''
              }"
              overrideBtnClass="v-node-button"
            >
            </v-button>
          </template>
        </div>
      </v-fade>
    </div>

    <div v-if="currNode" class="v-path-node-data">
      <slot name="nodeDataView" :data="currNode.data"></slot>
    </div>
  </div>
</template>

<style lang="scss">
@use './style.scss';
</style>
