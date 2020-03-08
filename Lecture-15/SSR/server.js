const express = require('express')
const app = express()
const path = require('path')

app.set('view engine','hbs')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

let todo = []
app.get('/tasks',(req,res)=>{
    res.render('tasks',{
        todo,
        title:'Handlebars',
        heading1:'Todo List'
    }) 
})

app.post('/tasks',(req,res)=>{
    todo.push({
        task:req.body.task,
        priority:+(req.body.priority||1) 
    })
    res.redirect('/tasks')
})


app.listen(4444,(req,res)=>{
    console.log('http://localhost:4444') 
})