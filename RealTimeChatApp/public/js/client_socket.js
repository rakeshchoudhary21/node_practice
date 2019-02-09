console.log('I was loaded')
var socket = io.connect('http://localhost:4000')


var submit = document.getElementById('submit');
var msg = document.getElementById('chat_msg');
var output = document.getElementById('output');


submit.addEventListener('click',()=>{
    socket.emit('chat',{
        message: msg.value
    })
})

socket.on('chat',(data)=>{
    output.innerHTML += "<p><strong>"+JSON.stringify(data)+"</strong></p>"
})