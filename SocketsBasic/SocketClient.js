var net = require('net');
function createSocket(socketName){
var client = new net.Socket(socketName);
client.connect({port:1337, host:'localhost'}, () => {
	console.log('Connected');
	client.write('Hello, server! Love, Client.');
});

client.on('data', data => {
    console.log('Received: ' + data);
});

client.on('close', () => {
	console.log('Connection closed');
});

client.on('error', (err) => {
	console.log('Error occurred'+JSON.stringify(err));
});

return client;
}

var rakesh = createSocket('RAKESH')
rakesh.write('I got to focus on my career man!!!')

setTimeout(()=> {
    console.log('Its time to shut this down!!!')
    rakesh.destroy()   
    
},5000)