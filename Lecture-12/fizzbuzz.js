let N = parseInt(process.argv[2])
let c3 = 0
let c5 = 0
for(let i = 0;i <= N ; i++){
    let o = ''
    if(c3 == 3){
        o+='fizz'
        c3 = 0
    }
    if(c5 ==5){
        o+='buzz' 
        c5 = 0
    }
    if(o=='') o =i
    
    console.log(o)

    c3++
    c5++
}