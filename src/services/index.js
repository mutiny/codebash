const challenge = require('./challenge/challenge.service.js')
const users = require('./users/users.service.js')
module.exports = function () {
  const app = this // eslint-disable-line no-unused-vars
  app.configure(challenge)
  app.configure(users)
}
