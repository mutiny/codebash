module.exports = {
  parser: 'sugarss',
  map: false,
  plugins: [
    require('postcss-smart-import')({ /* ...options */ }),
    require('precss')({ /* ...options */ }),
    require('autoprefixer')({ /* ...options */ }),
    require('cssnano')({ /* ...options */ }),
    require('postcss-cssnext')({ /* ...options */ })
  ]
}
