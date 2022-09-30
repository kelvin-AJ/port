const documentBody = document.querySelector("body")
const toggleThemeBtn = document.querySelector(".theme-switch");

const toggleTheme = function(){
    const curTheme = window.localStorage.getItem('theme');

    if(curTheme == "dark-mode"){
        window.localStorage.setItem('theme', 'light-mode')
        documentBody.classList.remove(curTheme);
    }else{
        window.localStorage.setItem('theme', 'dark-mode')
        documentBody.classList.add("dark-mode")
    }
    
};
let curTheme;
const activateTheme = function(){
    curTheme = window.localStorage.getItem('theme');
    documentBody.classList.add(curTheme)
}

activateTheme()
toggleThemeBtn.addEventListener("click", toggleTheme);


console.log("Hello small World!");

// Background change
// DOM selection
const rainBtn = document.getElementById("rainbow-btn");
const resetBtn = document.getElementById("reset-btn");
const rainbow = ['red','orange','yellow','green','blue','rebeccapurple','violet']
function change() {      
    document.body.style.background = rainbow[Math.floor(7*Math.random())];
}

rainBtn.addEventListener('click', change);
resetBtn.addEventListener('click', () => document.body.style.background = curTheme === 'dark-mode' ? '#0a1a31' : '#FFFFFF');

{
    const a = 5;
    console.log(a)
}
// console.log(a) >>  Uncaught ReferenceError: a is not defined
// Array methods
const avengers = ['Captain America', 'Iron Man', 'Thor', 'Hulk', 'Hawkeye', 'Black Widow'];
console.log("avengers >>", avengers);
avengers.pop();
console.log("avengers.pop() >> ", avengers);
avengers.push("Me")
console.log(`avengers.push("Me") >> `, avengers);
console.log(`...avengers >> `, ...avengers);
console.log(`avengers.join(" and ") >> `, avengers.join(" and "));

const strongAvengers = avengers.slice(2, 4)
console.log(`const strongAvengers = avengers.slice(2, 4) >> `, strongAvengers);

avengers.splice(1, 3, 'Ant-man', 'The wasp');
console.log(`avengers.splice(1, 3, 'Ant-man', 'The wasp') >> `, avengers);

const numbersArr = [1,2,3,3,4,5,1,4,3,333,90];
const numSqr = numbersArr.map(num => num**2);

console.log(numbersArr);
console.log(numSqr)
const numbersSet = new Set(numbersArr);
console.log(numbersSet);





const sayHello1 = function() {
    console.log("Hello from JavaScript!")
}

function sayHello2(firstName) {
    console.log(`Hello, ${firstName}!`)
}

const sayHello3 = firstName => `How are you doing today ${firstName}`

sayHello1();
sayHello2("Kelvin");
console.log(sayHello3("ola"))