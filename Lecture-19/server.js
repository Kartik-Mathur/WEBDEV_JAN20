const express = require('express')
const http = require('http')
const socketio = require('socket.io')

const app = express()
const server = http.Server(app)
const io = socketio(server)

app.use('/',express.static(__dirname+'/public'))

let userMap = {}


io.on('connection',(socket)=>{
    console.log(socket.id) 
    socket.on('chat',(data)=>{
        console.log(userMap[socket.id] + ' says '+data.msg)
        socket.broadcast.emit('chat_recieved',{ // io.emit, socket.emit
            msg:data.msg,
            username:userMap[socket.id]
        })
    })
    socket.on('signup',(data)=>{
        userMap[socket.id] = data.username
        socket.emit('signup_successfull')
    })
})


server.listen(4444,()=>{
    console.log('http://localhost:4444')
})