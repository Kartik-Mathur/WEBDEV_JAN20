function downloadFile(url,download){
    console.log('Download starts')
    setTimeout(function(){
        let filename = url.split('/').pop() 
        console.log('Download completed')
        download(filename) 
    },5000) 
}

downloadFile('http://example.com/mp.mp3',function(downloaded_file){
    console.log(`File downloaded as ${downloaded_file}`)
    CompressFile(downloaded_file,function(compressed_file){
        console.log('File compressed as '+compressed_file)
        uploadFile(compressed_file,function(path){
            console.log('File uploaded at '+path)
        })
    })
})
function CompressFile(filename,compress){
    console.log('Compressions starts')
    setTimeout(function(){
        let compressed_filename = filename.split('.')[0] +'.zip'
        console.log('Compression ends')
        compress(compressed_filename)
    },5000)
}

function uploadFile(compressed_filname,upload){
    console.log('Uploading starts')
    setTimeout(function(){
        console.log('Uplaoding ends')
        let url = `http://abc.com/${compressed_filname}`
        upload(url) 
    },5000)
}




// var x = 10
// console.log('value of x : '+ x)
// console.log(`value of x : ${x}`)