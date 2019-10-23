const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')

const HotMiddleWareConfig = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'
const ReactHotLoader = 'react-hot-loader/patch'

module.exports = merge(require('./webpack.config'), {
  mode: 'development',
  entry: [HotMiddleWareConfig, ReactHotLoader, path.resolve(__dirname, '../index.tsx')],
  devtool: '#cheap-module-source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: '首页',
      template: path.resolve(__dirname, '../index.html'),
    }),
    new ErrorOverlayPlugin(),
  ],
})
