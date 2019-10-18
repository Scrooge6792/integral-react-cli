const path = require('path')
const express = require('express')
const webpack = require('webpack')
const config = require('config')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const proxy = require('http-proxy-middleware')
const webpackConfig = require('../config/webpack.dev')

const PORT = process.env.PORT || config.get('HMR_PORT')
const host =
  process.env.NODE_ENV === 'production' ? config.get('prod.host') : config.get('dev.host')
const BUILD_PATH = path.resolve(__dirname, '../build')

const app = express()
const compiler = webpack(webpackConfig)

const authProxy = proxy('!/sockjs-node', {
  target: host,
  changeOrigin: true,
})

app.engine('.html', require('ejs').__express)
app.set('views', BUILD_PATH)
app.set('view engine', 'html')

// app.use(webpackDevMiddleware(compiler, {
//   publicPath: webpackConfig.output.publicPath,
// }))
// app.use(webpackHotMiddleware(compiler, {
//   path: '/__webpack_hmr',
// }))
app.use(express.static(BUILD_PATH))
// app.use(authProxy)

app.get('/', (req, res) => {
  res.render(BUILD_PATH)
})

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}! \n`)
  console.log(`server run in ${webpackConfig.mode}`)
})
