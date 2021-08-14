const path = require('path')
const { merge } = require('webpack-merge')
// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const commonWebPackConfiguration = require('./webpack.common')

module.exports = merge(commonWebPackConfiguration, {
  entry: [
    path.join(__dirname, '../src/index.js'),
  ],
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    hot: true,
    compress: true,
    port: 3000,
    historyApiFallback: true,
  },
  plugins: [
    // new ReactRefreshWebpackPlugin(),
  ],
})