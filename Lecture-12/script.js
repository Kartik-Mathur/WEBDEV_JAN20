console.log('Hello world!') 
if(typeof window!='undefined'){
    console.log(window)
}
if(typeof document!='undefined'){
    console.log(document)
}

for(let i =0;i<parseInt(process.argv[2]);i++){
    console.log(i)
}
// console.log(process.argv)
