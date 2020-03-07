const express = require('express')
const app = express()

function m1(req,res,next){
    console.log(req.url) 
    if(req.query.m == 1){
        return res.send('Returned from m1')
    }
        console.log('running m1')
        next()
}
function m2(req,res,next){
    console.log('running m2')
    next()
}
function m3(req,res,next){
    console.log('running m3')
    next()
}

app.use('/day',m1)
app.use(m2)
app.use(m3)

app.get('/day',(req,res,next)=>{
    if(req.query.day == 1){
        return res.send('Good Day');
    }
    next();
})

app.get('/',(req,res)=>{
    res.send('Hello') 
})

app.get('/day',(req,res,next)=>{
    res.send('Good Night') 
})

app.listen(4444,()=>{
    console.log('http://localhost:4444')
})