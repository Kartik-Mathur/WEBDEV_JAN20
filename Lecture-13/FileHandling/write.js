const fs = require('fs')
const path = require('path') 

fs.writeFile(
    path.join(__dirname, '/HelloWorld.txt'), 
    'Hello Welcome to Coding!',
    {
        encoding:'utf8',
        flag:'w'
    }, 
    (err)=>{
        if(err) throw err
        console.log('File Written Successfully!')
    }
)

console.log('Hello There!') 