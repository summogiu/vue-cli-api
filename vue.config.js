const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/helpers/var.scss";` // 將此支scss的變數套用到全域
      }
    }
  }
})
