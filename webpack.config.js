const path = require('path')
const webpack = require('webpack')

module.exports = {
<<<<<<< HEAD
    entry: path.resolve(__dirname, 'assets/js/index.js'),
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'public')
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new webpack.optimize.UglifyJsPlugin()
=======
  entry: path.resolve(__dirname, 'assets/js/index.js'),
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
>>>>>>> 4c5e6b64d16fac4c1f5d0a46636b5ab75904d4bf
    ]
}