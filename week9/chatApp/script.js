'use strict'

let currentUser ;
let notifyable;
const form = document.forms[0];
const userSelectArea = document.querySelector(".user-select-box");
const userSelect = document.querySelector(".user-entry");
const main = document.querySelector("main");
const chatArea = document.querySelector(".chat-area")

/*
if(window.Notification) {
    Notification.requestPermission()
    .then((permission) => {
        if(permission == 'granted'){
            notifyable = true
        }
    });
}
*/
userSelectArea.addEventListener("click", event => {
    if(! event.target.classList.contains("user-btn")) return;

    currentUser = event.target.textContent;
    userSelect.classList.add("hide")
    main.classList.remove("hide")
})

// "ws://192.168.108.37:8085"
const webSocket = new WebSocket('ws://192.168.108.37:4500')

webSocket.addEventListener("open", event => {


    form.addEventListener("submit", handleMessage);
})

const handleMessage = function(event) {
    event.preventDefault();
    
    const message = event.target.message.value;
    if(message.trim() == "") return;
    event.target.message.value = "";
    event.target.blur();

    webSocket.send(JSON.stringify({'user': currentUser, 'message': message}));
}

webSocket.addEventListener("message", event => {
    const messagesObj = JSON.parse(event.data);
    console.log(event)
    renderMessages(messagesObj)

    if(notifyable){
        const notification = new Notification(messagesObj[messagesObj.length - 1].message);
    }
})

const renderMessages = function(obj) {
    chatArea.innerHTML = "";
    
    obj.forEach(message => {
        chatArea.insertAdjacentHTML("afterbegin", 
        `<div class="text-box ${message.user == currentUser ? "text-box-me" : "text-box-other"}">${message.message}</div>`)
    })
}
