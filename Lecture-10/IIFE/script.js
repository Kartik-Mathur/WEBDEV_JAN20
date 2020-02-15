// (function greet(name){
//     console.log('Hello '+name)
// })('Raghav')

// (function(x){
//     setTimeout(()=>{
//         clearInterval(x)
//     },6000)
// })((setInterval(()=>{
//     console.log('Hello')
// },1000)))

(function(cl,s,sn){
    cl(s(16))
    cl(s(25))
    cl(sn(30)) 
})(console.log,Math.sqrt,Math.sin)

function arithmetic(){
    console.log(Math.sqrt(16))
    console.log(Math.sqrt(25))
    console.log(Math.sin(30))
    console.log(Math.sin(45))
}

// arithmetic()

// let x = setInterval(()=>{
//     console.log('Hello')
// },1000)

// setTimeout(()=>{
//     clearInterval(x)
// },6000)

// let x = ((setTimeout(()=>{
//     clearInterval(x)
// },6000)) , (setInterval(()=>{
//     console.log('Hello')
// },1000)))