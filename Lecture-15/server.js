const express = require('express')
const app = express()
const path = require('path')

app.use('/',express.static(path.join(__dirname,'static')))

let todo = []

app.get('/tasks',(req,res)=>{
    res.send(todo)
})

app.get('/addtask',(req,res)=>{
    todo.push({
        task:req.query.task,
        priority:+(req.query.priority||1)
    })
    res.send('success')
})


app.listen(4444,()=>{
    console.log('http://localhost:4444')
})