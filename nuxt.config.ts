// https://nuxt.com/docs/api/configuration/nuxt-config

// https://fonts.google.com/icons
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/styles/global.scss"],
  modules: ['nuxt-simple-robots', '@nuxtjs/sitemap', 'nuxt-schema-org'],
  site: {
    url: 'https://www.marthin.no',
    name: 'Portfolio website',
  },
  robots: {
    // provide simple disallow rules for all robots `user-agent: *`
    allow: '/'
  }
});
