var fs = require('fs')
var watcher = fs.watch(__filename,{persistent: false},(event,filename) => {console.log(event);console.log('this file--'+filename)});

setImmediate(() => fs.rename(__filename,__filename+'.new.js',()=>{watcher.close()}));
