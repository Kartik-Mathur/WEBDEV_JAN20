const express = require('express')
const app = express()
const path = require('path')

let todos = []

app.get('/addtodos',(req,res)=>{
    todos.push(req.query.newtask)
    res.send('success')
})

app.get('/gettodos',function(req,res){
    res.send(todos) 
})

app.get('/file',(req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html')) 
    // res.sendFile(index.html)
})

app.listen(4444,()=>{
    console.log('http://localhost:4444')
})

