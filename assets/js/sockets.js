import IO from 'socket.io-client'
var socket = IO('http://localhost:3030')
var socks = function () {
  console.log('Socks a go go!')
}

module.exports = socks
