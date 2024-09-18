const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    manifestOptions: {
      name: "App Name",
      short_name: "Short Name",
      start_url: "./",
      display: "standalone",
      theme_color: "#FFF",
    },
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true
    }
  }
})
