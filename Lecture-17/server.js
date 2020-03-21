const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',express.static(__dirname+'/static'))
app.set('view engine','hbs')


let todo = []

app.get('/task',(req,res)=>{
    console.log(req.query)
    if(req.query.mode == 'json'){
        return res.send(todo)
    }
    res.render('tasklist',{
        todo
    }) 
})

app.post('/task',(req,res)=>{
    // console.log('In here')
    todo.push({
        name:req.body.name,
        priority:+(req.body.priority||1)
    })
    if(req.query.mode == 'json'){
        return res.send('successs')
    }
    res.redirect('/task')
})

app.listen(4444,()=>{
    console.log('http://localhost:4444')
})