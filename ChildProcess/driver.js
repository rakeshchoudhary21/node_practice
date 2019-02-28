var cp = require('child_process')
var os = require('os')
var child = [];
for(i=0;i<os.cpus().length;i++){
    child[i] = cp.fork('./child.js')
    child[i].send('Go boy do my work!!!')
    child[i].on('message',(msg)=> console.log(msg))
}