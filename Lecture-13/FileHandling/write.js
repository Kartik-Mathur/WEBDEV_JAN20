const fs = require('fs')

fs.writeFile(
    'HelloWorld.txt',
    'Hello Welcome to CB!',
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