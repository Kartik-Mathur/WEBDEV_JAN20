let a = 10 + '1'
console.log(a)

a = 10 - '1'
console.log(a)

// console.log(10 == 10)
// console.log(10 == '10')

// console.log(10 === 10)
// console.log(10 === '10')

// console.log(false == '')
// console.log(0 == '')

// console.log(false == 0) 

console.log(true == 1) 
console.log(true == 2) 
console.log(false == -1) 

console.log('\t' == 0)
console.log('' == 0)
console.log('\t' == '')

console.log([] == '')
console.log('' == 0)
console.log([] == 0) 

let arr = [1,2,3]
let arr1 = arr
console.log(arr == [1,2,3])

console.log(arr == arr1)

console.log({} + []) 