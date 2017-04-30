# Codebash

## Preprocessors
### CSS
#### [PostCSS](https://www.npmjs.com/package/postcss)
#### [PreCSS](https://www.npmjs.com/package/precss)
#### [cssnext](http://cssnext.io/)
#### [sugarss](https://github.com/postcss/sugarss)

## Webpack
### [devServer](https://webpack.js.org/configuration/dev-server/#devserver)
### [List of loaders](https://github.com/webpack-contrib/awesome-webpack#loaders/)
### Our loaders
- [file-loader](https://github.com/webpack-contrib/file-loader)
- [style-loader](https://github.com/webpack-contrib/style-loader)
- [url-loader](https://www.npmjs.com/package/url-loader)
- [babel-loader](https://www.npmjs.com/package/babel-loader)
- [pug-loader](https://www.npmjs.com/package/pug-loader)
- [postcss-loader](https://github.com/postcss/postcss-loader)
- [uglify](http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin)

#### Notes
- Try to use require for all your embedded resources, to process them with webpack.
  ```
  div
    img(src=require("./my/image.png"))
  ```
- 