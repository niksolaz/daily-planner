<template>
  <div>
    <h1>Create Country</h1>
    <form @submit.prevent="createCountry">
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" placeholder="Country Name" />
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
      <button type="submit">Create</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useApi from '@/composables/useApi'
import { useRouter } from 'vue-router'

const router = useRouter()
const name = ref('')
const iso2 = ref('')
const iso3 = ref('')
const localName = ref(null)
const continent = ref(null)

const createCountry = async () => {
  const api = useApi()
  try { 
    const data = await api.POST('/api/countries', { 
      name: name.value,
      iso2: iso2.value,
      iso3: iso3.value,
      local_name: localName.value,
      continent: continent.value,
    })
    if (data) {
      router.push(`/country`)
    }
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
</script>

<style lang="scss" scoped>

</style>