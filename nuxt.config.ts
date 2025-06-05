// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";


export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui'
  ],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/favicon.png' }
      ]
    }
  },
  vite: {    plugins: [      tailwindcss(),    ]}
})