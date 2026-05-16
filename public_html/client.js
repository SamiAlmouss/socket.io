const socket = io.connect("http://localhost:5000")

const username = document.getElementById("username")
const message = document.getElementById("message")
const chat = document.getElementById("chat")
const broadcast = document.getElementById("broadcast")
const send = document.getElementById("send")




send.addEventListener("click",()=>{
    socket.emit("message",{
        username:username.value,
        message:message.value
    })
})

message.addEventListener("keypress",()=>{
    socket.emit("broadcast",{
        username:username.value,
    })
})

socket.on("newMessage",(data)=>{
    chat.innerHTML +=`<div class='container'><strong>${data.username} : </strong><span>${data.message}</span/></div>`
     broadcast.innerHTML =''
})

socket.on("new_broadcast",(data)=>{
    broadcast.innerHTML =`<strong>${data.username}</strong> write message <img src="writing.gif" style="width: 48px; height: 48px">`
})