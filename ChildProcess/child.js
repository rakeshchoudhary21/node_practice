console.log('I was called:'+process.pid)
process.on('message',(msg)=> console.log('received message:'+msg+' from'+process.ppid))
process.send('Rakesh this better be good from:'+process.pid)
