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
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'public/service-worker.js', // 경로 수정
      skipWaiting: true,
      clientsClaim: true
    }
  }
})