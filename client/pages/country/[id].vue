<template>
  <div>
    <h2>ID: {{ route.params.id }}</h2>
    <ul>
      <li><label>NAME: {{ country?.name ? country?.name : '--' }}</label></li>
      <li><label>ISO2: {{ country?.iso2 ? country?.iso2 : '--' }}</label></li>
      <li><label>ISO3: {{ country?.iso3 ? country?.iso3 : '--' }}</label></li>
      <li><label>LOCAL NAME: {{ country?.local_name ? country?.local_name : '--' }}</label></li>
      <li><label>CONTINENT: {{ country?.continent ? country?.continent : '--' }}</label></li>
    </ul>
    <nuxt-link to="/country">Return</nuxt-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useApi } from '@/composables/useApi'
import { useRoute } from 'vue-router'

const route = useRoute()
const api = useApi()
const country = ref()

async function getSpecificCountry() {
  try {
    country.value = await api.GET(`/api/v1/countries/${route.params.id}`)
  } catch (error) {
    console.error(error)
    switch (error.response.status) {
      case 404:
        console.error('[ERROR 404] - Country not found')
        break
      default:
        console.error('[ERROR DEFAULT] - Something went wrong')
        break
    }
  }
}

onMounted(async () => {
  await getSpecificCountry()
})
</script>

<style lang="scss" scoped>

</style>