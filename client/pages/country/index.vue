<template>
  <div>
    <h2>test chiamata supabase</h2>
    <button @click="createCountry">Create</button>
    <ul>
      <li v-for="country in countries" :key="country.id">
        <nuxt-link :to="`/country/${country.id}`">{{ country.name }} - {{ country.id }}</nuxt-link>
        <button @click="deleteCountry(country.id)">Delete</button>
        <nuxt-link :to="`/country/create/${country.id}`" class="update">Update</nuxt-link>
      </li>
    </ul>
    <p>{{ errorMessage }}</p>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useApi } from '@/composables/useApi'
import { useRouter } from 'vue-router'

  const api = useApi()
  const router = useRouter()

  const countries = ref([])
  const errorMessage = ref('')

  async function getCountries() {
    try {
      const data = await api.GET('/api/v1/countries')
      countries.value = data
    } catch (error) {
      console.error('Errore:', error)
      switch (error.response.status) {
        case 404:
          errorMessage.value = 'Errore nel recupero dei paesi'
          break
        case 500:
          errorMessage.value = 'Errore nel recupero dei paesi'
          break
        default:
          errorMessage.value = 'Errore nel recupero dei paesi'
          break
      }
    }
  }

  async function deleteCountry(id) {
    try {
      await api.DELETE(`/api/v1/countries/${id}`)
    } catch (error) {
      console.error(error)
    }
  }

  async function createCountry() {
    router.push('/country/create/')
  }

  onMounted(async () => {
    await getCountries()
  })
</script>
<style>
li {
  padding: 5px;
}
a {
  text-decoration: none;
}
.update {
  color: #ffcc00;
  border: 1px solid #ffcc00;
  border-radius: 5px;
  padding:2px;
}
button {
  margin-left: 5px;
  margin-right: 5px;
  padding:2px;
  color:#0000ff;
  border: 1px solid #0000ff;
  border-radius: 5px;
}
li button {
  margin-left: 5px;
  margin-right: 5px;
  padding:2px;
  color:#ff0000;
  border: 1px solid #ff0000;
  border-radius: 5px;
}
</style>
