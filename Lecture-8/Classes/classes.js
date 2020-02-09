class Person{
    constructor(name,age){
        this.name = name
        this.age = age
        this.isAdult = function(){
            return age>18
        }
        // this.getFirstName = function(){
        //     return this.name.split(' ')[0]
        // } 
    }

    getFirstName(){
        return this.name.split(' ')[0]
    }

    get FirstName(){
        return this.name.split(' ')[0]
    }

    set FirstName(firstname){
        let arr = this.name.split(' ')
        arr[0] = firstname
        this.name = arr.join(' ') 
    }

    static StaticFun(){
        console.log('This is static')
    }
}

class child extends Person{
    constructor(name,age,standard){
        super(name,age)
        this.standard = standard
    }
}

let p = new Person('Harry Potter',20) 
Person.StaticFun()

let child1 = new child('Ishan',10,5)