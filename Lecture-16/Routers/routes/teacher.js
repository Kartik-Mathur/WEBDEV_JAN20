const express = require('express')
const route = express.Router()

let teachers = []

route.get('/',(req,res)=>{
    res.send(teachers)
})

route.post('/',(req,res)=>{
    teachers.push({
        name:req.body.name,
        subject:req.body.subject,
        language:req.body.language
    })
    res.send({
        success:'true',
        teacherId:teachers.length
    })
})

module.exports = route


