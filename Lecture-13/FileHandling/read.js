const fs = require('fs')

fs.readFile(
    'HelloWorld.txt',
    {
        encoding:'utf8',
        flag:'r'  
    },
    (err,data)=>{
        if(err) throw err
        console.log(data) 
    } 
) 
