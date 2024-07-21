<template>
  <div>
    test chiamata supabase
    <ul>
      <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
    </ul>
  </div>
</template>
<script setup>
  import { createClient } from '@supabase/supabase-js'
  import { useRuntimeConfig } from '#app'

  const config = useRuntimeConfig()
  const supabaseUrl = config.public.supabaseUrl
  const supabaseKey = config.public.supabaseKey

  const supabase = createClient(supabaseUrl, supabaseKey)
  const countries = ref([])

  async function getCountries() {
    const { data } = await supabase.from('countries').select()
    countries.value = data
  }

  onMounted(() => {
    getCountries()
    console.log(config.public)
  })
</script>
