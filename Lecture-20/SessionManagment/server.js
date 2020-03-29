const express = require('express')
const session = require('express-session')
const app = express()

app.use((req,res,next)=>{
    // console.log(req.session)
    next()
})

app.use(session({
    secret: 'mbsadasbd adbahksbdkndadkabdasbdabfbadbfkabdmabkdbajbfak',
    resave: false,
    saveUninitialized: true
}))

app.use((req,res,next)=>{
    // console.log(req.session)
    next()
})

app.get('/hi',(req,res)=>{
    if(typeof req.session.hiCounter == 'undefined'){
        req.session.hiCounter = 0
        return res.send('Hello Welcome')
    }

    req.session.hiCounter++;
    return res.send('Welcome back')
})

app.get('/bye',(req,res)=>{
    if(typeof req.session.byeCounter == 'undefined'){
        req.session.byeCounter = 0
        return res.redirect('/hi')
    }
    
    return res.send('Ok! tata')
})

app.listen(4444)