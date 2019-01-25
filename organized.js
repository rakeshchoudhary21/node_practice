var app = require('./AnotherWayToOrganize')
var registration  = require('./registration')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

var express = require('express')

var router = express.Router()

app.use('/registration',router)
registration(router,jsonParser)


//to update a part of page, use ajax, which is client side tech, it also uses js.
//it can be used to update a part of page without having to refresh it
//ajax can use http or soap underneath it.