function hello(){
    console.log('Hello World!')
}

function hello1(){
    return 'Hello World!'
}

function add(a,b){
    console.log(a+b)
}

function add1(a,b=9){
    return a+b
}

function addMultiple(a=0,b=0,c=0,d=0,e=0){
    return a+b+c+d+e
}

hello()
add(10,10)  
console.log(add1(10))
console.log(hello1()) 

console.log(addMultiple(1,2,3,4,5)) 
console.log(addMultiple(1,2,3,4))
console.log(addMultiple(1,2,3))
console.log(addMultiple(1,2))
console.log(addMultiple(1))
console.log(addMultiple())

console.log(typeof(add1))
console.log(typeof(addMultiple))

var fun1 = function(){
    console.log('This is another way to create functions')
}
fun1()
