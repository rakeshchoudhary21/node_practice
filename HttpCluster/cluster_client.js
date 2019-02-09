var http = require('http')
function sendRequest(){
    http.request({port: 8080, host:'localhost'}, response => {
        var serverData = ''
        response.on('data', data=>{
            serverData+=data;
        })

        response.on('end',()=> console.log(serverData))
    }).end()
}

for(var i=0;i<10;i++){
    console.log('sending a request')
    sendRequest();
}