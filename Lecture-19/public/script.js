
const socket = io()

setTimeout(()=>{
    console.log(socket.id)
},100)

socket.on('chat_recieved',(data)=>{
    console.log('Chat recieved successfully')
    $('#list').append(
        $('<li>').text(
            `${data.username} : ${data.msg}`
        )
    )
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
