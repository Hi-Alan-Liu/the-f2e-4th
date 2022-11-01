const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/the-f2e-4th/' : '/',
  transpileDependencies: true
})