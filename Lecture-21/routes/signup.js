const route = require('express').Router()
const {db,Users} = require('../db')

route.get('/',(req,res)=>{
    res.render('signup')
})

route.post('/',(req,res)=>{
    Users.create({
        username:req.body.username,
        password:req.body.password,
        email:req.body.email
    }).then(()=>{
        res.redirect('/login')
    }).catch((err)=>{
        if(err) throw err
    })
})

module.exports={route}