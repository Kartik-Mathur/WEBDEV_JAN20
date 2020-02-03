let a = {
    k:1,
    l:'Hello',
    m:true,
    n:[1,2,3] 
}

let b = Object.create(a)
let c = Object.create(b)
b.k = 10
if(b.hasOwnProperty('k')){
    console.log('B has k')
}
else{
    console.log('B dont have k')
}

function fun(){
    return 1
}

// function f(){
//     console.log('Hello World!')
// }
// f()
// f.k = 100
// console.log(f.k) // Can act in both ways as functions as well as object

// b.k = 100
// c.k = 200
// console.log(a)
// console.log(b)