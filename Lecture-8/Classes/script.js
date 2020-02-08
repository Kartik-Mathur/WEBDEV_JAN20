
function Person(name,age){
    this.name = name
    // this.age = age
    this.getFirstName = function(){
        return this.name.split(' ')[0] 
    }
    this.isAdult = function(){
        return age>18
    }
}

Person.staticFun = Person.prototype.staticFun = function(){
    console.log('This is a static fun')
}

let p = new Person('Harry Potter',15) 
let p1 = new Person('Kartik Mathur',22) 



console.log(p.getFirstName())
console.log(p1.getFirstName())



// function funGen(){
//     return {k:1} 
// }

// console.log(((new funGen()).__proto__ == funGen.prototype)) 

