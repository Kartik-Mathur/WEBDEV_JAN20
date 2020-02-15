

function printLoop(){
    let rms = document.getElementById('rms')
    rms.innerText = `RMS : This is the value`

    let inp = document.getElementById('inp')

    let arr = inp.value.split(',')
    console.log(arr)
    for(let i =0;i<arr.length;i++){
        arr[i]=+arr[i] 
        if(arr[i]>0){

        }
        else if(arr[i]<0){

        }

    }
    console.log(arr) 



}