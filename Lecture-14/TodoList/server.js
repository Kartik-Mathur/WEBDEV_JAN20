const express = require('express')
const app = express()
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({extended:true})) 

let todo = []

app.use('/',express.static(path.join(__dirname,'static')))
app.get('/tasks',(req,res)=>{
    res.send(todo)
})

app.post('/tasks',(req,res)=>{
    todo.push({
        name:req.body.name,
        priority:+(req.body.priority||1) 
    })
    res.send({
        "data":"success",
        "taskId":todo.length
    })
})

app.listen(4444,()=>{
    console.log('http://localhost:4444') 
})