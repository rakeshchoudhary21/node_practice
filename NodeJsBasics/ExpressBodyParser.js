var express = require('express')
var bodyParser = require('body-parser')
var registration = require('./registration')
var app = express()

var parser = bodyParser.json()

app.post('/register/user',parser,(req,res) => {
    console.log(JSON.stringify(req.body))
    var response = {"congrats":"DONE!!!!"}
    res.send(response)
})

//we can actually pass the app object to other classes. so no need to redeclare this again

app.listen(3000)
registration(app)


