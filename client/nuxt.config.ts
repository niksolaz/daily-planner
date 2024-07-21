// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.NUXT_ENV_SUPABASE_URL,
      supabaseKey: process.env.NUXT_ENV_SUPABASE_KEY
    }
  }
})
