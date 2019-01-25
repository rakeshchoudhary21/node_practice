const express = require('express')
const server = express()

server.get('/hello',(req,res) => {
	res.writeHead(200,{'Content-type': 'text/html'})
	res.end('HELLO WORLD')
	//res.end()
})


server.use(express.static('./public'))


server.listen(3000,(req,res) => {
	console.log('reg'+req)
}) 
