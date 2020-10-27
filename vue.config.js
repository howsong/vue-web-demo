//当前时间为了防止打包缓存不刷新，所以给每个js文件都加一个时间戳
const Timestamp = new Date().getTime()
module.exports = {
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://crm-dev.wusong.com',
  //       changeOrigin: true,
  //       ws: true
  //     }
  //   }
  // },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'vue demo'
      return args
    })
    config.module.rule('svg').uses.clear()
    config.module //针对svg文件添加svg-sprite-loader规则
      .rule('svg1')
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  configureWebpack: {
    output: {
      filename: `[name].${Timestamp}.js`,
      chunkFilename: `[name].${Timestamp}.js`
    }
  }
}
