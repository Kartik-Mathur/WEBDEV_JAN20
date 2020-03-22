const express = require('express')
const app = express()
const {db,Task} = require('./db')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/task',async(req,res)=>{
    let val = {}
    if(req.query.done == 'true'){
        val.done = 1
    }
    else{
        val.done =0
    }
    let tasks = await Task.findAll({
        where:val
    }) // Select * From Task
    res.send(tasks)
})

app.post('/task',async(req,res)=>{
    let newItem = await Task.create({
        name:req.body.name,
        description:req.body.description,
        done:req.body.done
    })
    res.send(newItem)
})

db.sync()
    .then(()=>{
        app.listen(4444,()=>{
            console.log('Server Started')
        }) 
    })
