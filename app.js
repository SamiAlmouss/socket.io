const express = require("express")
const socket = require("socket.io")

const app = express()

const server = app.listen(5000,()=>{ 
    console.log("Server is runing ...")
})


app.use(express.static("public_html"))

const sio = socket(server)

sio.on("connection",(v)=>{
    v.on("message",(data)=>{
        sio.sockets.emit("newMessage",data)
    })

    v.on("broadcast",(data)=>{
        v.broadcast.emit("new_broadcast",data)
    })
})

