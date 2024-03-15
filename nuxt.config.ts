// https://nuxt.com/docs/api/configuration/nuxt-config

// https://fonts.google.com/icons
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/styles/global.scss"],
  ssr: false,
  modules: ["nuxt-quasar-ui"],
  quasar: {
    config: {
      brand: {
        primary: "#FF5722",
        secondary: "#03A9F4",
        accent: "#00BCD4",
        dark: "#212121",
        positive: "#4CAF50",
        negative: "#FF5252",
        info: "#2196F3",
        warning: "#FFC107",
      },
    },

    iconSet: "material-symbols-rounded",
    extras: {
      svgIcons: ["material-symbols-rounded"],
    },
  },
});
