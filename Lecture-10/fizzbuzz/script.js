// let btn = document.getElementById('btn')
// btn.onclick=()=>{
//     console.log('Button Clicked')
// }

function printLoop(){
    let inp = document.getElementById('inp')
    let N = parseInt(inp.value)
    console.log(typeof N)

    let str = ''
    for(let i=0;i<=N;i++){
        str += i+' '
    }
    console.log(str)
}

// window.onload = function(){
//     let div = document.getElementById('div')

//     console.log(div)
//     div.innerHTML = "<b>This is some text</b>"
// }