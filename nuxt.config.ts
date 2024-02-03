// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/content'
  ],
  googleFonts: {
    families: {
      'Bricolage Grotesque': [200, 300, 400, 600],
    },
  },
  content: {},
  runtimeConfig: {
    openAI: process.env.NUXT_OPENAI_API_KEY,
    gemini: process.env.NUXT_GEMINI_API_KEY,
  },
});
