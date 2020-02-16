$(document).ready(()=>{
    console.log('Hello World')
    // console.log($('#div'))
    $('#div').css('color','red')
    console.log($('#div').css('color'))
    $('#div').css('background-color','grey') 
    console.log($('#div').attr('id'))
    $('#div').attr('id','SomeId') 

    console.log($('#inp').prop('checked'))
    $('#inp1').val('Welcome To CB!') 
    // $('#btn').text('<b>Click!</b>') 
    $('#btn').html('<b>Click!</b>').css('background-color','green')
})
console.log('Here Here!')


// console.log($('#div'))
// $(document).ready(function(){

// })