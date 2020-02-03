function FunGen(){
    let x = 1
    function newFun(){
        x++
        function newerFun(){
            x++
            return x
        }
        return newerFun
    }
    return newFun
}
let fun1=FunGen()
let fun2=FunGen()
let fun21 = fun2()
let fun11 = fun1()
let fun12 = fun1()
let fun13 = fun1()
console.log(fun11())
console.log(fun11())
console.log(fun12())
console.log(fun11())
console.log(fun12())
console.log(fun21())
