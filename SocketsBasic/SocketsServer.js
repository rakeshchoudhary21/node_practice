var net = require('net');

var server = net.createServer(socket => {
    console.log('a client has just Connected');

    
    socket.on('error',err=> console.log('an error occurred='+JSON.stringify(err)))
    socket.on('data',data=> {
        socket.write('SERVER: I just received some data from u'+socket.remoteAddress)
        console.log(data.toString());
    })
});

server.listen(1337,()=>{
    console.log('Listening on...'+1337)
});
