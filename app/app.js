const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')
const favicon = require('serve-favicon')
const logger = require('morgan')
const mongoose = require('mongoose')
const passport = require('passport')
let path = require('path')

// Configuration Files
const config = require('../config/base.conf')
var routes = require('./routes/index')
var users = require('./routes/users')

require('./models/db')

/*
 * Express
 */
const app = express()
// TODO app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'dist')))

// Views & Templating
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// Init auth passport
app.use(passport.initialize())
require('../config/passport')(passport)

// Routes
app.use('/', routes)
app.use('/users', users)

app.listen(3000, function () {
  console.log('App listening on port 3000!')
  console.log('Mode: ' + config.env)
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {}
  })
})

module.exports = app
