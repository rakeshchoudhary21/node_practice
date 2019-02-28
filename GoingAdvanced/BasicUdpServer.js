var dgram = require('dgram')
var client = dgram.createSocket('udp4')
var server = dgram.createSocket('udp4')

var message = process.argv[2] || 'default message'
//message = new Buffer(message)
server.on('message', (msg) => {
    process.stdout.write('Got this message='+msg)
    process.exit()
}).bind(1234)

client.send(message,0,message.length,1234,'localhost')
