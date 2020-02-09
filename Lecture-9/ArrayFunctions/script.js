let arr = [1,2,3,4,5,6]

// let arr1 = arr.map(function(i){
//     return i*i 
// })
let arr1 = arr.map((i)=>i**3)  
let arr2 = arr.map((i)=>{
    if(i%2 == 0){
        return 'even'
    }
    else{
        return 'odd'
    }
})

let arr3 = arr.filter(function(value,index,arr){
    console.log(value) 
    console.log(index)  
    if(value>3){
        return true
    }
    else{
        return false
    }
    
})

let sum = arr.reduce((accum,value,index,arr)=>{
    return accum+value
})

console.log(arr1) 
console.log(arr2) 
console.log(arr3) 
console.log(sum) 

arr = [1,112,12,234,13,1,23,1,31,3,1,423,523,53,64,56,457,46,4,64,5747,5684,635,2,423,5,235,34,635,63,4647,56,865,745,457,56,84,6345,6,45745,68,58,47,478568,56,74,74,874,68,4]

arr.sort(function(a,b){
    return b-a
})
console.log(arr)