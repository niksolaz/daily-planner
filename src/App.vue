<template>
  <component
    :is="getLayout"
  >
    <router-view />
  </component>
</template>
<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router'
import defaultLayout from './layouts/default.vue'
import emptyLayout from './layouts/empty.vue'

// composables
const compRoute = useRoute()

// Computed
const getLayout = computed(() => {
  if(compRoute.name) {
    return defaultLayout
  } else {
    return emptyLayout
  }
})
</script>