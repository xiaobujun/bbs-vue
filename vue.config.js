const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {                              //需要代理的接口
        target: 'http://localhost:8081',    //目标服务器
        changeOrigin: true,                //是否跨域
        pathRewrite: { '^/api': '' },   //重写
      }
    }
  },
})
