const fs = require('fs')
const util = require('util')

const F1 = __dirname + '/in1.txt'
const F2 = __dirname + '/in2.txt'
const F3 = __dirname + '/sorted.txt'

let read = util.promisify(fs.readFile)
let write = util.promisify(fs.writeFile)


async function sort(){
    
    let data1 = await read(F1)
    console.log('File 1 read')

    let data2 = await read(F2)
    console.log('File 2 read')
    
    nums = data1.toString().split('\n')
    nums=nums.concat(data2.toString().split('\n'))

    console.log('Concat of files done!')
    
    nums.sort((a,b)=>a-b)
    console.log('Sorting Done')
    await write(F3,nums.join('\n'))
    console.log('File written')
    return 'Hello'
}

sort().then((data)=>{
    console.log(data+' Sorting done successfully')
})


// fs.readFile(F1,(err,data)=>{
//     if(err) throw err
//     let nums = data.toString().split('\n')
//     // console.log(nums)
//     fs.readFile(F2,(err,data)=>{
//         if(err) throw err
//         nums = nums.concat(data.toString().split('\n'))

//         nums.sort((a,b)=>a-b)

//         fs.writeFile(F3,nums.join('\n'),(err)=>{
//             if(err) throw err
//             console.log("Done") 
//         })
//     })

// })