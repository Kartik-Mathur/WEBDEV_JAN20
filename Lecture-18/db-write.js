const sqlite = require('sqlite3')
const DB_PATH = __dirname + '/test.db'
const db = new sqlite.Database(DB_PATH)

db.serialize(()=>{
    db.run(
        `CREATE TABLE IF NOT EXISTS task(
            id INTEGER AUTO_INCREMENT PRIMARY KEY,
            name TEXT,
            done BOOLEAN
        )`
    )
    db.run(
        `INSERT INTO task
        VALUES(2,"TASK2",true)`
    )
})