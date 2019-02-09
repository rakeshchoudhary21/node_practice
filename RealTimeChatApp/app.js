var express = require('express')
var router = express.Router()
var app = express()
var socket = require('socket.io')
router.get('/chat',(req,res)=> res.send("<h3>Lets Chat </h3>"))

app.use(express.static('public'))

app.use('/chat-app',router)

var localhost = app.listen(4000, () => console.log('listening on...'+4000))


console.log(Object.keys(localhost))
var io = socket(localhost)

//the calls made by browser are the http calls so they wont invoke below.
io.on('connection',(socket) => {
    console.log('made the socket connection')
    socket.on('chat',(msg) => {
        console.log(msg)
        io.sockets.emit('chat',msg)
    })
})


//broadcast vs emit:
//broadcast means to everyone except the original sender, emit means to all


//The plain old js is also called as Vanilla js