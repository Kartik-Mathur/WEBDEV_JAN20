const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const route = {
    teachers:require('./routes/teacher.js'),
    students:require('./routes/student')
}

app.use('/mentors',route.teachers)
app.use('/students',route.students)


app.get('/',(req,res)=>{
    res.send('Hello Welcome')
})


app.listen(4444,()=>{
    console.log('http://localhost:4444')
})