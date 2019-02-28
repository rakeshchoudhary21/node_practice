//repl is also a native object so u can require it like other objects etc.
var net = require('net')
var socket = net.connect(8080)
process.stdin.pipe(socket)

socket.pipe(process.stdout)