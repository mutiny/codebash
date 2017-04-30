# Codebash

## Preprocessors
### CSS
#### [PostCSS](https://www.npmjs.com/package/postcss)
#### [PreCSS](https://www.npmjs.com/package/precss)
#### [cssnext](http://cssnext.io/)
#### [sugarss](https://github.com/postcss/sugarss)

## Server
### [Express Template Engines](https://expressjs.com/en/guide/using-template-engines.html)

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

## Authentication
### [Passport](https://github.com/jaredhanson/passport)
### [passport-jwt](https://github.com/themikenicholson/passport-jwt)

## Other considerations
### [pillarjs](https://github.com/pillarjs)

## Resources
### [JWT for beginners](http://jonathanmh.com/express-passport-json-web-token-jwt-authentication-beginners/)

#### Notes
- Try to use require for all your embedded resources, to process them with webpack.
  ```
  div
    img(src=require("./my/image.png"))
  ```
- 