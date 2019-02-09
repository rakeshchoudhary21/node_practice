var net = require('net');

var server = net.createServer(socket => {
	socket.write('Echo server\r\n');
    
    socket.on('error',err=> console.log('an error occurred='+JSON.stringify(err)))
    socket.on('data',data=> {
        console.log('FROM CLIENT:'+data.toString());
    })
});

server.listen(1337,()=>{
    console.log('Listening on...'+1337)
});
