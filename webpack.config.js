const webpack = require('webpack')
var Uglify = webpack.optimize.UglifyJsPlugin
const path = require('path')

module.exports = {
  entry: [
    './src/index.js',
    'webpack-dev-server/client?http://localhost8080',
    'webpack/hot/only-dev-server'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // ??? needed for HMR (also devServer.publicPath)
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
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
    }),
    // HMR
    new webpack.HotModuleReplacementPlugin(),
    // Provides readable module names in browser
    new webpack.NamedModulesPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    publicPath: '/',
    compress: true,
    hot: true,
    port: 9000
  }
}
