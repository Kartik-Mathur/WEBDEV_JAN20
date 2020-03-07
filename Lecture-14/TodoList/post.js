const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true})) 

app.get('/day',(req,res)=>{
    res.send('Good Day')
})

app.get('/',(req,res)=>{
    if(req.query.m == 1){
        return res.send('Welcome Back') 
    }
    res.send('Welcome')
})

app.post('/day',(req,res)=>{
    console.log(req.body)
    console.log(req.body.name)
    console.log(req.body.age)
    res.send('Good Day')
})


app.listen(4444,()=>{
    console.log('http://localhost:4444') 
})