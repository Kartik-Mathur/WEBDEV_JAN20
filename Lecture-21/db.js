const Sequelize = require('sequelize')

const db = new Sequelize({
  dialect:'sqlite',
  storage:__dirname+'/users.db'
})

const Users = db.define('Users',{
    username:{
        type:Sequelize.STRING(30),
        allowNull:false,
        // unique:true
    },
    password:{
        type:Sequelize.STRING(30),
        // allowNull:false
    },
    email:{
        type:Sequelize.STRING(30),
        // allowNull:false
    },
    fbToken:{
        type:Sequelize.TEXT
    },
    fbId:{
        type:Sequelize.STRING(30),
    } 
})

module.exports = {
    db,Users
}