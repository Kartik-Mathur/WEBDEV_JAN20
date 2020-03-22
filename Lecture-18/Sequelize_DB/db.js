const sequelize = require('sequelize')

const db = new sequelize({
    dialect:'sqlite', 
    storage:__dirname+'/task.db',
})

const Task = db.define('tasks',{
    name:{
        type:sequelize.STRING(100),
        allowNull:false
    },
    description:{
        type:sequelize.TEXT
    },
    done:{
        type:sequelize.BOOLEAN,
        defaultValue:false
    }
})

module.exports={
    db,Task
}

