var hogwards = {
    name:'Harry Potter',
    getName : function(){
        console.log(this.name) 
    }
}

function fun(a,b){
    console.log(this)
    console.log(a)
    console.log(b)
}

hogwards.getName()

fun(10,20) 

fun.call(hogwards,'a','b') 
var x = fun.bind(hogwards)
console.log('bind ka use krna')
x('Hello',10)

fun.apply(hogwards,['x','y'])


function funGen(){
    return {k:1};
}

let f = new funGen()

