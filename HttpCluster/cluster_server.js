var cluster = require('cluster')
var http = require('http')
if(cluster.isMaster){
    cluster.on('fork',(worker) => {
        console.log('WORKER '+worker.id+"\t created")
    })

    cluster.on('listening',(worker,address) => {
        console.log('worker:'+worker.id+'\tlistening on:'+address.port)
    })

    cluster.on('exit',(worker,code,signal) => {
        console.log('worker-'+worker.id+'\t has exited')
    })
}

cluster.setupMaster({exec: 'cluster_worker.js'});

var cpus = require('os').cpus().length;

for(var i=0;i< cpus;i++){
    if(i>=4) break;
    cluster.fork();
}

Object.keys(cluster.workers).forEach(id => {
    cluster.workers[id].on('message',message=>{
        console.log(message)
    })
})