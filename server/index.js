const path = require('path')
const express = require('express')
const config = require('config')
const webpackConfig = require('../config/webpack.dev')

const PORT = process.env.PORT || config.get('HMR_PORT')
const host =
  process.env.NODE_ENV === 'production' ? config.get('prod.host') : config.get('dev.host')
const BUILD_PATH = path.resolve(__dirname, '../build')

const app = express()
const compiler = require('webpack')(webpackConfig)

const authProxy = require('http-proxy-middleware')({
  target: host,
  changeOrigin: true,
})

app.engine('.html', require('ejs').__express)
app.set('views', BUILD_PATH)
app.set('view engine', 'html')

/* history api组件必须先被使用，否则会不生效 */
app.use('/', require('connect-history-api-fallback')())
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
}))
app.use(require('webpack-hot-middleware')(compiler, {
  path: '/__webpack_hmr',
}))
app.use(express.static(BUILD_PATH))
app.use('*', authProxy)

app.get('/', (req, res) => {
  res.render(BUILD_PATH)
})

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}! \n`)
  console.log(`server run in ${webpackConfig.mode}`)
})
