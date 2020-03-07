const express = require('express')
const app = express()
const path = require('path')

// app.use('/',express.static(path.join(__dirname,'static')))
let arr = []

app.get('/tasks',(req,res)=>{
    res.send(arr) 
})

app.get('/addtask',(req,res)=>{
    arr.push(req.query.m)
    // res.send('Success')
    res.redirect('/tasks')
})

app.listen(4343,()=>{
    console.log('http://localhost:4343')
})