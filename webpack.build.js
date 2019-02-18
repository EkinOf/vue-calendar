var WebpackStripLoader = require('strip-loader')
var devConfig = require('./webpack.config.js')
var webpack = require('webpack')
var path = require('path')
var version = process.env.VERSION || require('./package.json').version

var banner =
  'vue-fullcalendar v' + version + '\n' +
  '(c) ' + new Date().getFullYear() + '\n' +
  '@license MIT';

var stripLoader = {
  test: [/\.js$/, /\.es6$/],
  exclude: /node_modules/,
  loader: WebpackStripLoader.loader('console.log')
}

devConfig.module.rules.push({ test: /\.js$/, use: 'strip-loader' })
devConfig.entry = './src/index.js'
devConfig.output = {
  path: path.resolve(__dirname + '/dist/'),
  filename:'vue-calendar.js',
  library:'VueCalendar',
  libraryTarget: 'umd'
}
devConfig.plugins = devConfig.plugins.concat([
  new webpack.BannerPlugin(banner)
])
module.exports = devConfig;