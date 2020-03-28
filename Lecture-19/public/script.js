
const socket = io()

setTimeout(()=>{
    console.log(socket.id)
},100)

socket.on('chat_recieved',()=>{
    console.log('Chat recieved successfully')
})

socket.on('signup_successfull',()=>{
    console.log('Signup successfully')
    $('#signupbox').hide()
    $('#chatbox').show()
})

$(()=>{
    $('#chatbox').hide()
    $('#signup').click(()=>{
        socket.emit('signup',{
            username:$('#username').val()
        })

    })
    $('#send').click(()=>{
        console.log('Sending Chat')
        socket.emit('chat',{
            msg:$('#msg').val()
        })
    })
})
