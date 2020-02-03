function myFun(){
    console.log('Running myFun')
}

function Hello(){
    console.log('Hello')
}
// setTimeout(function(){
//     console.log('Download Complete') 
// },4000)

let id = setInterval(function(){
    Hello()
},1000)

setTimeout(function(){
    clearInterval(id)
},5000)  

myFun() 