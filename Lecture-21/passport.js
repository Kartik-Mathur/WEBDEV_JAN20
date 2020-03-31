const passport = require('passport')
const LocalStratergy = require('passport-local').Strategy
const FacebookStratergy = require('passport-facebook').Strategy

const {db,Users}=require('./db')

passport.serializeUser((user,done)=>{
    done(null,user.id) 
})

passport.deserializeUser((userId,done)=>{
    Users.findOne({
        where:{
            id:userId
        }
    }).then((user)=>{
        done(null,user)
    }).catch((err)=>{done(err)})
})

passport.use(new FacebookStratergy({
    clientID: '701804883891074',
    clientSecret: 'XXXXXXXXXX',
    callbackURL:'http://localhost:4444/login/facebook/callback'
},async(token,rt,profile,done)=>{
    let User = await Users.findOne({
        where:{
            fbId:profile.id
        }
    })
    if(User){
        return done(null,User)
    }
    User = await Users.create({
        fbId:profile.id,
        fbToken:token,
        username:profile.displayName
    })
    done(null,User)
}))


passport.use(new LocalStratergy((username,password,done)=>{
    Users.findOne({
        where:{
            username:username
        }
    }).then((User)=>{
        if(!User){
            return done(null,false)
        }
        if(User.password != password){
            return done(null,false)
        }
        done(null,User)
    }).catch((err)=>{
        done(err)
    })
}))

module.exports = passport