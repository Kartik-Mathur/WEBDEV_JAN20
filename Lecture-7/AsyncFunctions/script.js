function myFun(){
    console.log('Running myFun')
}

function waitASec(){
    let startTime = new Date().getTime()
    while(new Date().getTime()<1000+startTime);
}

function waitNSec(N){
    for(let i =0;i<N;i++){
        waitASec()
    }
}

waitNSec(4) 
myFun() 