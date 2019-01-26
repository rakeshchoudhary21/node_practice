var express = require('express')
var app = express()

function getStudents(){
    return new Promise((resolve,reject) => {
        resolve([{name: 'RAKESH',id: 1},{name:'RAJESH',id:2}])
    })
}

//Misconception is that api itself can return a promise, but truth is 
//api always returns concrete stuff and the handler then converts that to a promise
//since api call itself could take some time
app.get('/students',(req,res) => {
    getStudents().then(result => res.json(result))    
})

app.listen(3000)