const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy: 'https://t-bridge.s3.eu-west-1.amazonaws.com'
  }
})
