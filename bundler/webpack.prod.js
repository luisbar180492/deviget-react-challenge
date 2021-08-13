const path = require('path');
const { merge } = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const commonWebPackConfiguration = require('./webpack.common');

module.exports = merge(commonWebPackConfiguration, {
  entry: [
    path.join(__dirname, '../src/indexWithServiceWorker.js'),
  ],
  mode: 'production',
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../src/serviceWorker.js'), 
          to: 'serviceWorker.js',
        },
      ]
    }),
  ]
});
