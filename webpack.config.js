const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

let config = {
  output: {
    path: path.resolve(__dirname + '/dist/'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.js$/, use: 'babel-loader' }
    ]
  },
  externals: {
    moment: 'moment'
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
    ],
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};


module.exports = [
  merge(config, {
    entry: path.resolve(__dirname + '/src/index.js'),
    output: {
      filename: 'vue-calendar.min.js',
      libraryTarget: 'window',
      library: 'VueCalendar',
    }
  }),
  merge(config, {
    entry: path.resolve(__dirname + '/src/Calendar.vue'),
    output: {
      filename: 'vue-calendar.js',
      libraryTarget: 'umd',
      library: 'vue-calendar',
      umdNamedDefine: true
    }
  })
];