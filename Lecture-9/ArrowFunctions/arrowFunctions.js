function normalFun(){
    console.log(this.name) 
}

let x = 20 

arrowFun = ()=>{
    console.log(this.x) 
}
 
var obj = {
    name:'Prabhdeep',
    b:arrowFun
}

var obj1 = {
    name:'Mufler Man',
    b:arrowFun
}
obj.b() 
obj1.b()