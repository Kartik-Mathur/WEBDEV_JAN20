const express = require('express')
const server = express()

server.get('/',function(req,res){
    res.send('Hello World') 
})

server.get('/greet/:name',(req,res)=>{
    res.send(`Welcome! ${req.params.name}`) 
})

server.get('/good',(req,res)=>{
    res.send(`Good ${req.query.n} ${req.query.q}`)
    // http://localhost:3333/good?q=Kartik&n=night
})


server.listen(3333)