const {MongoClient} = require('mongodb')
const DB_URL = 'mongodb://localhost:27017'

MongoClient.connect(DB_URL,(err,client)=>{
    if(err) throw err

    const testdb = client.db('testdb')
    const people = testdb.collection('people')

    people.find({
        // city:'Delhi'
        // age:{$lt:10}
        // $or:[
        //     {age:{$gt:10}},
        //     {age:{$lt:10}}
        // ]
    }).toArray((err,rows)=>{
        if(err) throw err
        // console.log(rows)
        for(let r of rows){
            console.log(r.name)
        }
    })

})