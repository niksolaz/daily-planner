<template>
  <div>
    test chiamata supabase
    <ul>
      <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
    </ul>
    <p>{{ errorMessage }}</p>
  </div>
</template>
<script setup>

  const api = useApi()

  const countries = ref([])
  const errorMessage = ref('')

  async function getCountries() {
    try {
      const data = await api.GET('/api/countries')
      countries.value = data
    } catch (error) {
      console.error('Errore:', error)
      errorMessage.value = 'Errore nel recupero dei paesi'
    }
  }

  onMounted(async () => {
    await getCountries()
  })
</script>
