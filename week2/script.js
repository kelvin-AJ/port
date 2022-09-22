console.log("Hello small World!");

// Background change
// DOM selection
const rainBtn = document.getElementById("rainbow-btn");
const resetBtn = document.getElementById("reset-btn")
const rainbow = ['red','orange','yellow','green','blue','rebeccapurple','violet']
function change() {      
    document.body.style.background = rainbow[Math.floor(7*Math.random())];
}

rainBtn.addEventListener('click', change);
resetBtn.addEventListener('click', () => document.body.style.background = '#0a1a31');

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