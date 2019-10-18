const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const webpackConfig = require('./config/webpack.dev')
const config = require('config')

const compiler = webpack(webpackConfig)

new WebpackDevServer(compiler, {
  hot: true,
  historyApiFallback: true,
  quiet: false,
  noInfo: false,
  host: '127.0.0.1',
  port: 3000,
  proxy: {
    '/': {
      target: config.get('dev.host'),
      changeOrigin: true,
    },
  },
})
  .listen(3000, '127.0.0.1', (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('server run in dev')
    }
  })
