function downloadFile(url){
    return new Promise(function(resolve,reject){
        console.log('Download starts')
        if(!url.startsWith('http')){
            throw new Error('Invalid File')
        }
        setTimeout(function(){
            let filename = url.split('/').pop()
            console.log('Download ends')
            resolve(filename)
        },3000)
    })
}

function compressFile(downloaded_file){
    return new Promise(function(resolve,reject){
        console.log('Compression starts')
        if(-1 == ['mp3','ogg'].indexOf(downloaded_file.split('.')[1])){
            throw new Error('We can only compress audio files')
        } 
        setTimeout(function(){
            let compressed_file = downloaded_file.split('.')[0]+'.zip'
            console.log('Compression ends')
            resolve(compressed_file)
        },3000)
    })
}

function uploadFile(compressed_file){
    return new Promise(function(resolve,reject){
        console.log('Uploading starts')
        setTimeout(function(){
            let path = `http://abc.com/${compressed_file}`
            console.log('Uploading ends')
            resolve(path) 
        },3000)
    })
}

downloadFile('http://example.com/mp.mp4')
    .then(compressFile)
    .then(uploadFile)
    .catch(function(error){
        console.log(error.message) 
    })
    
// downloadFile('http://example.com/mp.mp3') 
//     .then(function(downloaded_file){
//         console.log('file downloaded as '+downloaded_file) 
//         compressFile(downloaded_file).then(function(compressed_file){
//             console.log('File compressed as '+compressed_file)
//             uploadFile(compressed_file).then(function(path){
//                 console.log('File uploaded at '+path)
//             })
//         })
//     })
