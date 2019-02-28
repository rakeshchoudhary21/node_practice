var EventEmitter = require('events').EventEmitter;

//remember the lambda style declaration should not be used when creating an Object
var Counter = function(val) {
    this.increment = function(newVal){
        val+=newVal;
        this.emit('increased',val);
    }
}

Counter.prototype = new EventEmitter()
var c = new Counter(100)
var callback = val => console.log('current value-'+val);

c.addListener('increased',callback)

c.increment(20)

c.removeListener('increased',callback)

c.on('increased',(val)=> console.log(val) )
c.increment(10)