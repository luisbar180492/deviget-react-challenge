const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../dist'),
    chunkFilename: 'chunks/[name].js',
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        nodeModules: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `npm.${packageName.replace('@', '')}`;
          },
        },
        sharedModules: {
          name: 'sharedModules',
          minChunks: 2,
          enforce: true,
        }
      },
    },
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.mdx',
      '.json',
      '.scss',
      '.png',
      '.svg',
      '.jpeg',
      '.jpg',
    ],
    alias: {
      root: path.resolve(__dirname, '../src/'),
      stateMachines: path.resolve(__dirname, '../src/stateMachines/'),
      pages: path.resolve(__dirname, '../src/components/pages/'),
      templates: path.resolve(__dirname, '../src/components/templates/'),
      organisms: path.resolve(__dirname, '../src/components/organisms/'),
      molecules: path.resolve(__dirname, '../src/components/molecules/'),
      atoms: path.resolve(__dirname, '../src/components/atoms/'),
      utils: path.resolve(__dirname, '../src/utils/'),
      assets: path.resolve(__dirname, '../src/assets/'),
      images: path.resolve(__dirname, '../src/assets/images/'),
      styles: path.resolve(__dirname, '../src/assets/styles/'),
      languages: path.resolve(__dirname, '../src/internationalization/languages/'),
      internationalization: path.resolve(__dirname, '../src/internationalization/'),
      routes: path.resolve(__dirname, '../src/routes/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(mdx)$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: '@mdx-js/loader',
          }
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
      favicon: './public/favicon.png',
    }),
  ],
};
