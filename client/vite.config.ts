import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
// import renderer from 'vite-plugin-electron-renderer'
import svgLoader from 'vite-svg-loader'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'


const isDevelopment = process.env.NODE_ENV === "development" || !!process.env.VSCODE_DEBUG
// const isProduction = process.env.NODE_ENV === "production"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({
      /* options */
      // locale messages resource pre-compile option
      runtimeOnly: isDevelopment,
      include: resolve(dirname(fileURLToPath(import.meta.url)), './src/locales/**'),
    }),
    svgLoader({ defaultImport: 'component' }),
    Pages()
  ],
  server: {
    port: 3030,
    host: true, // necessario se si desidera accedere dall'esterno, ad esempio tramite Docker
  }
})
