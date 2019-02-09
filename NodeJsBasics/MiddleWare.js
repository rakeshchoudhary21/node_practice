var express = require('express')
var app = express()


app.use('/workfusion-resources/package.json',express.static('package.json'))



app.use('/',(req,res,next) => {

	console.log(req.url)
	console.log('done!!!!')
	next()
	//This portion runs after the method returns
	console.log('THIS')
})

app.get('/',(req,res) => {
	res.send('HELLO WORLD')
	console.log("done executing the call!!!!!")
});

app.listen(3000)
