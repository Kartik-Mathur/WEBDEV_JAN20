const express = require('express')
const app = express()
const path = require('path')

let todo = []

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/',express.static(path.join(__dirname,'static')))

app.get('/tasks',(req,res)=>{
    res.send(todo)
})

app.post('/tasks',(req,res)=>{
    todo.push({
        task:req.body.task,
        priority:+(req.body.priority||1)
    })
    res.send('success')
})

 
app.listen(4444,(req,res)=>{
    console.log('http://localhost:4444') 
})