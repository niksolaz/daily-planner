<template>
  <div>
    <h1>Update Country</h1>
    <form @submit.prevent="updateCountry">
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" />
      </div>
      <div>
        <label for="iso2">ISO2</label>
        <input type="text" id="iso2" v-model="iso2" />
      </div>
      <div>
        <label for="iso3">ISO3</label>
        <input type="text" id="iso3" v-model="iso3" />
      </div>
      <div>
        <label for="localName">Local name</label>
        <input type="text" id="localName" v-model="localName" />
      </div>
      <div>
        <label for="continet">Local name</label>
        <input type="text" id="continet" v-model="continent" />
      </div>
      <button type="submit">Update</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import useApi from '@/composables/useApi'
import { useRouter, useRoute } from 'vue-router'

const api = useApi()
const router = useRouter()
const route = useRoute()
const name = ref('')
const iso2 = ref('')
const iso3 = ref('')
const localName = ref(null)
const continent = ref(null)

const getDataCountry = async () => {
  try {
    const data = await api.GET(`/api/v1/countries/${route.params.id}`)
    name.value = data.name
    iso2.value = data.iso2
    iso3.value = data.iso3
    localName.value = data.local_name
    continent.value = data.continent
    console.log('[DEBUG - getDataCountry]', data)
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

const updateCountry = async () => {
  try {
    const id = route.params.id
    await api.PUT(`/api/v1/countries/${id}`, { 
      name: name.value,
      iso2: iso2.value,
      iso3: iso3.value,
      local_name: localName.value,
      continent: continent.value,
     })
    router.push(`/country`)
  } catch (error) {
    console.error(error)
    switch (error.response.status) {
      case 400:
        console.error('[ERROR 400] - Name is required')
        break
      case 404:
        console.error('[ERROR 404] - Country not found')
        break
      case 409:
        console.error('[ERROR 409] - Country already exists')
        break
      case 500:
        console.error('[ERROR 500] - Something went wrong')
        break
      default:
        console.error('[ERROR DEFAULT] - Something went wrong')
        break
    }
  }
}

onMounted(async () => {
  await getDataCountry()
})
</script>

<style lang="scss" scoped>

</style>