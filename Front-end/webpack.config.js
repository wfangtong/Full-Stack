const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './app/index.js', // 入口文件
    'vendor': [
      'react',
      'react-dom',
      'react-router',
      'lodash',
      'moment'
    ]
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '',
    libraryTarget: 'umd',
    filename: '[name].[hash].js', // 打包输出的文件
    chunkFilename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx'] //  引用文件时省略文件的扩展名
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/, // 如果是.js或.jsx结尾的文件，就用babel-loader进行es6和jsx的编译
      exclude: /node_modules/, // 忽略node_modules目录下的文件
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader' // 用!链式调用loader
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      chunks: ['vendor', 'app'],
      setting: backendSetting
    })
  ]
}
