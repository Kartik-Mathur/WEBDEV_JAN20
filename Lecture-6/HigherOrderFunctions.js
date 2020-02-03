function funGen(){

    function newFun(){
        console.log('This is a new function')
    }

    return newFun
}

let fun1 = funGen()
fun1() 
console.log(fun1.toString())