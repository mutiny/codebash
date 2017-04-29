/** eslint-env jquery, browser */
var socks = require('./sockets.js')
require('../css/index.css')
// FOR TESTING ONLY MAKE YOUR OWN JS FILE AND IMPORT IT 
$(document).ready(() => {
  socks() // Socket.io
})
