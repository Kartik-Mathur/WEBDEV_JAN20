const {MongoClient} = require('mongodb')
const DB_URL = 'mongodb://localhost:27017'

MongoClient.connect(DB_URL,(err,client)=>{
    if(err) throw err

    const testdb = client.db('testdb')
    const people = testdb.collection('people')

    people.deleteOne({
        name:'MNO'
    },(err,result)=>{
        console.log(result)
    })

})