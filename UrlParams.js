var express = require('express')
var app = express()


app.get('/welcome/:name',(req,res) => {
    res.send('WELCOME----'+req.params.name)
})


app.get('/regist',(req,res) => {
    var username = req.query.username
    var password = req.query.password
    res.send("WELCOME ABOARD--"+username+" registered successfulyy")
})


app.listen(2999)