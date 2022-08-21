import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/prismic', '@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  prismic: { endpoint: 'potstop' },
  tailwindcss: {
    configPath: '~/tailwind.config.js',
    cssPath: '~/assets/styles/tailwind.css',
    exposeConfig: false,
  },
  googleFonts: {
      families: {
        Lato: [400,700],
        Quicksand:[400,700],
      }
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
})
