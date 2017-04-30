module.exports = {
  // General
  env: process.env.NODE_ENV || 'development',
  // Auth
  auth: {
    secret: "Secret, secret I've got a secret"
  },
  // MongoDB
  database: {
    local: 'mongodb://localhost/codebash',
    remote: '' // TODO
  }
}
