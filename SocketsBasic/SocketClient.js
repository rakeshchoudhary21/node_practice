var net = require('net');
function createSocket(socketName){
var client = new net.Socket(socketName);

client.connect({port:1337, host:'localhost'}, () => {
	client.write(socketName+':pinging server!!!\r\n');
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
rakesh.write('RAKESH:I got to focus on my career man!!!\n\r')

setTimeout(()=> {
    console.log('Its time to shut this down!!!')
    rakesh.destroy()   
    
},5000)