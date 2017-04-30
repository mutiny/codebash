const URL = require('../../config/base.conf').dbURL
const Mongoose = require('mongoose')

/** Schema */
require('./challenges')
require('./teams')
require('./users')

var gracefulShutdown

Mongoose.connect(URL)
const db = Mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => console.log('Connected to DB'))

gracefulShutdown = function (msg, callback) {
  Mongoose.connection.close(function () {
    console.log('Mongoose disconnected through ' + msg)
    callback()
  })
}
// For nodemon restarts
process.once('SIGUSR2', function () {
  gracefulShutdown('nodemon restart', function () {
    process.kill(process.pid, 'SIGUSR2')
  })
})
// For app termination
process.on('SIGINT', function () {
  gracefulShutdown('app termination', function () {
    process.exit(0)
  })
})
// For Heroku app termination
process.on('SIGTERM', function () {
  gracefulShutdown('Heroku app shutdown', function () {
    process.exit(0)
  })
})
