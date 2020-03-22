const sqlite = require('sqlite3')
const DB_PATH = __dirname + '/test.db'
const db = new sqlite.Database(DB_PATH)

db.serialize(()=>{
   db.all(
       `SELECT * FROM task`,
       (err,rows)=>{
           if(err) throw err
           for(let data of rows){
               console.log(data)
           }
       }
   )
})