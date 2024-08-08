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
  publicPath: '/vue-cli-api/dist/',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@vue/cli-plugin-babel/preset'],
              plugins: ['transform-remove-console'] // 添加 Babel 插件 build時忽視console
            }
          }
        }
      ]
    }
  }
})
