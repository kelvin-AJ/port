'use strict'

/*
const global = this;
console.log(global)

Use 'alert', 'confrim' and 'prompt' methods with care. They stop code execution until the user responds. 

console.log(window.navigator)
console.log(window.location.href)
console.log(window.location.search)
console.log(window.location.origin)

function reloadMe(){
    window.location.reload();
}

function reaasignMe(){
    window.location.assign('http://127.0.0.1:5501')
}
The replace() method is almost the same as the assign() method, except the current page will not be stored in the session history, so the user will be unable to navigate back to it using the back button.

console.log(window.history)
console.log(window.screen)

window.addEventListener("resize", () => {
    document.querySelector(".notes-list").innerText = window.screen.availWidth
})
Many methods and properties in the window object were abused in the past for dubious activities such as user-agent sniffing. These practices have now been superseded by better practices.
The use of document.write() method is rearly a good idea. It's heavily frowned upon.
Cookies are small files(4kb max per cookie) that are saved locally on a user’s computer.They can be used by personalizing a user's browsing experiance, storing user preferences, keeping track of user choices (such as a shopping cart), authentication and tracking users.
document.cookie = 'name=kelvin'
console.log(document.cookie)
Cookies are session cookies by default.  Cookies can be made persistent by adding "; expires=date" to the end of the cookie when it’s set, where date is a date value in the UTC String format Day, DD-Mon-YYYY HH:MM:SS GMT.
Applications that contain sensitive information shouldn’t rely on cookies expiring using these methods
It is possible to set the path an domain where a cookie can be read
Adding the string '; secure' to the end of a cookie will ensure it’s only transmitted over a secure HTTPS network
To delete a cookie, we need to set it to expire at a time in the past
*/

// console.log(setTimeout(
//     () => console.log("Gothca man")

// , 3000))

// // clearTimeout(1)
/*
let fish = true;
setInterval(()=> {
    
    console.log(fish ? "BEEP" : "BOP")
    fish = !fish
}
,1000)

*/

// HTML5 APIs
// LocalStorage has no actual storage capacity but most browsers have a limit set to 5gb per domain.
// Any data stored does not automatically expire as it does with cookies
/*
navigator.geolocation.getCurrentPosition((position) => {
    console.log(position)
})
const id = navigator.geolocation.watchPosition((position) => {
    console.log(position)
})

navigator.geolocation.clearWatch(id)
*/
// Web workers
// Web workers allow processes to be run in the background
/*
const worker = new Worker('task.js');
worker.addEventListener("message", (event) => {
    console.log(event.data)
})
setTimeout(() => 
{
    worker.addEventListener("message", (event) => {
        console.log(event.data)
    })
}
, 6000)
*/
const btn = document.getElementById('rainbow');
const resetBtn = document.getElementById('reset');

const rainbow = ['red','orange','yellow','green','blue','rebeccapurple','violet'];

function change() {      
    document.body.style.background = rainbow[Math.floor(7*
    Math.random())];
}
btn.addEventListener('click', change);
resetBtn.addEventListener('click', () => document.body.style.backgroundColor = "#FFFFFF")

const form = document.forms[0];
form.addEventListener('submit', factorize, false);

function factorize(event) {
    // prevent the form from being submitted
    event.preventDefault();   
    document.getElementById('output').innerHTML = '<p>This could take a while ...</p>';
    const number = Number(form.number.value);

    if(window.Worker) {
        const worker = new Worker('factors.js');
        worker.postMessage(number);
        worker.addEventListener('message', (event) => {
        document.getElementById('output').innerHTML = event.data;
        }, false);
    }
}

// 'The Service Worker API allows a worker script to run in the background with the added benefit of being able to intercept network requests. This allows you to take alternative action if the network is offline, and effectively create app-like offline experiences'

// Web sockets
// Web sockets allow two way communications with a server. It's also known as push notification


const URL = 'wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self';
const outputDiv = document.getElementById('output-2');
const form1 = document.forms[1];
const connection = new WebSocket(URL);

connection.addEventListener('open', () => {
    output('CONNECTED');
}, false);

function output(message) {
    const para = document.createElement('p');
    para.innerHTML = message;
    outputDiv.appendChild(para);
}
form1.addEventListener('submit', message, false);

function message(event) {
    event.preventDefault();
    const text = form1.message.value;
    output(`SENT: ${text}`);
    connection.send(text);
}

connection.addEventListener('message', (event) => {
    output(`RESPONSE: ${event.data}`);
}, false);