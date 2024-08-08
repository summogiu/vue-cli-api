const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/assets/helpers/var.scss";'
      }
    }
  },

  publicPath: '/vue-cli-api/dist/'
})
