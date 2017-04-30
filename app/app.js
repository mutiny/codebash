const express = require('express')
const app = express()
app.use((req, res, next) => require('index')(req, res, next))
app.listen(3000, function () {
  console.log('App listening on port 3000!')
  console.log('Mode: ' + process.env.NODE_ENV)
})
