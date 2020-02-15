// let btn = document.getElementById('btn')
// btn.onclick=()=>{
//     console.log('Button Clicked')
// }

function printLoop(){
    let inp = document.getElementById('inp')
    let list = document.getElementById('list')

    let N = parseInt(inp.value)
    console.log(typeof N)
    let start = new Date().getTime()
    let str = ''
    for(let i=0;i<=N;i++){
        let x = ''
        if(i%3==0) x+='fizz'
        if(i%5==0) x+='buzz'
        if(x=='') x = i
        let li = document.createElement('li')
        li.innerText = x
        list.appendChild(li) 
        // str += `<li>${x}</li>`
    }
    // list.innerHTML=str 
    let end = new Date().getTime()
    console.log(end-start)

    // console.log(str)
}

// window.onload = function(){
//     let div = document.getElementById('div')

//     console.log(div)
//     div.innerHTML = "<b>This is some text</b>"
// }