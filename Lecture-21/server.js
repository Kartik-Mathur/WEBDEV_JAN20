const express = require('express')
const app = express()
const {db,Users}= require('./db')
const session = require('express-session')
const passport = require('./passport')

app.set('view engine','hbs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(session({
    secret: 'ajshbkabdakdabdnmasbdkmadahjdbjadm,abdmabdbqhjkd',
    resave: false,
    saveUninitialized: true,
  }))

app.use(passport.initialize())
app.use(passport.session())

app.use('/login',require('./routes/login').route)
app.use('/signup',require('./routes/signup').route)
app.use('/profile',require('./routes/profile').route)

app.get('/',(req,res)=>{
    if(!req.user){
        return res.redirect('/login')
    }
    res.redirect('/profile')
})

db.sync({alter:true})
    .then(()=>{
        app.listen(4444,()=>{
            console.log('http://localhost:4444')
        })
    })