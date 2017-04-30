// Configuration Files
const config = require('../config/base.conf')
const express = require('express')
const app = express()
// Database code
require('./models/db')
app.use((req, res, next) => require('index')(req, res, next))
app.listen(3000, function () {
  console.log('App listening on port 3000!')
  console.log('Mode: ' + config.env)
})
