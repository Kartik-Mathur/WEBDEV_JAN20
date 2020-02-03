function swapVal(a,b){
    c = a
    a = b
    b = c
}

function swapRef(arr){
    temp = arr[0]
    arr[0] = arr[1]
    arr[1] = temp
}

let a = 10
let b = 20
// console.log('a : '+ a +' b : '+b)
arr = [10,20]
console.log(arr)
swapRef(arr)
console.log(arr) 
// console.log('a : '+ a +' b : '+b)