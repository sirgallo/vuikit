<script setup lang="ts">
import { useNavigateRoute } from '../../composables/useNagivateRoute.js'
import { flow } from '../../utils/flow.js'
import type { NavProps } from './types.js'

defineProps<NavProps>()

const { navigate } = useNavigateRoute()
</script>

<template>
  <div class="v-nav-container">
    <div class="v-nav-title">
      <v-title :title="title.title" :subTitle="title.subTitle"></v-title>
      <font-awesome-icon v-if="title?.icon" :icon="title.icon"></font-awesome-icon>
    </div>

    <div class="v-nav-router">
      <v-sidebar :button="{ icon: 'fa-solid fa-list', overrideBtnClass: 'v-nav-router-button' }">
        <template #sidebar="{ isOpen, toggleSidebar }">
          <v-button
            v-for="route in routerLinks"
            :key="route.path"
            :option="isOpen as boolean"
            :action="
              flow(
                (isOpen: boolean) => {
                  toggleSidebar(isOpen)
                  return true
                },
                () => navigate(route.path),
              )
            "
            :route="route.path"
            :message="route.label"
            overrideBtnClass="v-nav-router-link"
          >
          </v-button>
        </template>
      </v-sidebar>
    </div>

    <div class="v-nav-actions">
      <v-darkmode></v-darkmode>
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<style lang="scss">
@use './style.scss';
</style>
