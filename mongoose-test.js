var mongoose = require('mongoose')

mongoose.connect('mongodb://rakesh:test-123@ds161724.mlab.com:61724/mean-stack')

var SHOPPING_CART_SCHEMA = new mongoose.Schema({item: String, id: String, expires:Date})

var headset = mongoose.model('headset',SHOPPING_CART_SCHEMA)

var query = {'id':'1'},
    update = {'item': 'BOAT_3','id':'1','expires': new Date()},
    options = { upsert: true, new: true, setDefaultsOnInsert: true };

// Find the document
headset.findOneAndUpdate(query, update, options, function(error, result) {

    console.log(error)

    
});

//Anything on the model executes immediately if a callback is passed.
//otherwise they return a query object
//on the query object u can call the exec with call back.

headset.findOne({id:'1'},(err,data) => {
    console.log(data)
})





