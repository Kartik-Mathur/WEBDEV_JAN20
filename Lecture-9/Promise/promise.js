let p = new Promise(function(resolve,reject){
    console.log('Hello')
    // if(true){
    //     throw new Error('Invalid Function call') 
    // }
    setTimeout(function(){
        console.log('World')
        resolve('Hello World')
    },3000)
})

    p
    .then(function(str){
        console.log(str)
    })
    .catch(function(error){
        console.log(error.message) 
    })


// setTimeout(function(){
//     p.then(function(str){
//         console.log(str)
//     })    
// },6000)

console.log('Knock Knock!')
setTimeout(function(){
    console.log('Whos there!!!')
},3000)




