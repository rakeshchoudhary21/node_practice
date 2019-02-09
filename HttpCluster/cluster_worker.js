var cluster = require('cluster')
var http = require('http')
if(cluster.isWorker){

    http.Server((req,res) => {
        res.writeHead(200)
        res.end('Process:'+process.pid+'\t says HI')
        process.send('Process:'+process.pid+'\t just handled a request')
    }).listen(8080, ()=>{
            console.log('A child server is listening on 8080 and the process is:'+process.pid)
    })

}