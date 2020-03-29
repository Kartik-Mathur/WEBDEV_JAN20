const {MongoClient} = require('mongodb')
const DB_URL = 'mongodb://localhost:27017'

MongoClient.connect(DB_URL,(err,client)=>{
    if(err) throw err

    const testdb = client.db('testdb')
    const people = testdb.collection('people')

    people.insertOne(
        {name:'MNO',age:800,city:'Delhi'}
    ,(err,result)=>{
        if(err) throw err
        console.log(result)
    })
    // people.insertMany([
    //     {name:'ABC',age:10,city:'Delhi'},
    //     {name:'DEF',age:9,city:'Pune'},
    //     {name:'GHI',age:12,city:'Mumbai'},
    //     {name:'JKL',age:8,city:'Delhi'}
    // ],(err,result)=>{
    //     if(err) throw err
    //     console.log(result)
    // })
})