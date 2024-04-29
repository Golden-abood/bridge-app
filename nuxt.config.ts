// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxt/ui", "@nuxtjs/google-fonts", "@vueuse/nuxt", "@pinia/nuxt"],

  css: ["~/assets/main.scss"],

  googleFonts: {
    families: {
      Barlow: [100, 300, 400, 500, 700, 900],
    },
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },

    head: {
      title: "Bridge App - Calibro AI",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },
  ui: {
    safelistColors: ["#ec912b"],
  },
});
