
module.exports = (router,jsonParser) =>{

    router.get('/student/:id', jsonParser,(req,res) => {
        res.send({name: 'RAJESH','id':req.params.id})
    })

    router.put('/student',jsonParser, (req,res) => {
        res.send('Updated--'+{name: 'RAJESH','id':req.params.id})
    })

    router.post('/student',jsonParser, (req,res) => {
        res.send('Registered:'+JSON.stringify(req.body))
    })

    router.delete('/student/:id',jsonParser, (req,res) => {
        res.send('DELETED:'+{name: 'RAJESH','id':req.params.id})
    })


}