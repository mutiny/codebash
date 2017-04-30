const webpack = require('webpack')
var Uglify = webpack.optimize.UglifyJsPlugin

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './www/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1',
          'postcss-loader'
        ]
      },
      {
        test: /\.sss$/,
        loaders: [
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new Uglify({
      compress: {
        warnings: false
      }
    }),
    new webpack.ProvidePlugin({
      $: 'jQuery-slim',
      jQuery: 'jquery-slim',
      'window.jQuery': 'jquery'
    })
  ]
}
