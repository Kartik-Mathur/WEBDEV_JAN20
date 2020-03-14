const express = require('express')
const route = express.Router()

let students = []

route.get('/',(req,res)=>{
    res.send(students)
})

route.post('/',(req,res)=>{
    students.push({
        name:req.body.name,
        marks:req.body.marks
    })
    res.send({
        success:'true',
        studentId:students.length
    })
})

module.exports = route