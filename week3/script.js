const documentBody = document.querySelector("body");
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

documentBody.classList.add(window.localStorage.getItem('theme'))
toggleThemeBtn.addEventListener("click", toggleTheme);


// OBJECTS

hero = {
    heroname : "Thor",
    sayHi() {
        console.log("Hello! I'm the God of Thunder ⚡⚡")
    }
}
hero.sayHi();


user = {username : "Joe"};
admin = {username : "Acooladminname"};

function greet1() {
    console.log(`Hello there👋, I'm ${this.username}`)
}
user.greet1  = greet1;
admin.greet1 = greet1;

user.greet1();
admin.greet1();

const superman = {
    name: 'Superman',
    'real name': 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ['Batman','Supergirl','Superboy'],
    fly() {
        return 'Up, up and away!';
    }
};

console.log('superman >>', superman);
console.log(`'hero' in superman >> `, 'hero' in superman);
console.log("");

for(const key in superman){
    console.log(key + ' : '+ superman[key])
}

superman['real name'] = "Ola Ajibola";
console.log("after reassigning the real name: ",superman);

function greet({greeting, name, age}) {
    console.log(`${greeting}! My name is ${name} and I am ${age} years old.`)
}


greet({ 
    greeting: `What's up dude`,
    age: 10, name: `Bart` 
});


const dice = {
    sides: 8,
    roll() {
        console.log(Math.floor(this.sides * Math.random()) + 1)
    }
}
dice.roll();

const wonderWoman = {
    name: 'Wonder Woman',
    'real name': 'Diana Prince',
    height: 72,
    weight: 165,
    hero: true,
    villain: false,
    allies: ['Wonder Girl','Donna Troy','Superman'],
    lasso: function(){
        console.log('You will tell the truth!');
    }
}

console.log(JSON.stringify(wonderWoman));

// DATE
const christmas = new Date('2022 12 25');
christmas.toString();
console.log('christmas : ', christmas)
const chanukah = new Date('12 December 2022');
// First day of Chanukah
chanukah.toString();
console.log('chanukah : ', chanukah)
const eid = new Date('Sunday, June 25, 2022');
// Eid-al-Fitr
eid.toString();
console.log('Eid : ', eid);


const myPattern = new RegExp("Kelvin");
console.log(myPattern)

console.log(myPattern.test("popjhckchhhhh yyyyyyyyyyyyyyyyyyyyyyyjjKelvinuukjyfclcsdcucyvasdvuvsiubu"))

console.log(myPattern.exec("popjhckchhhhh yyyyyyyyyyyyyyyyyyyyyyyjjKelvinuukjyfclcsdcucyvasdvuvsiubu"))

const myRegExpForEmail = /[a-z, 0-9]{3,}@[a-z]./;
console.log('myRegExpForEmail', myRegExpForEmail)
console.log(myRegExpForEmail.exec("kelvin@gmail.com"))
console.log(myRegExpForEmail.exec("aji22001@byui.edu"))

console.log(typeof documentBody);
console.log(documentBody.nodeType);
console.log(documentBody.nodeName);

console.log(document.body, document.images, document.links, document.anchors);

console.log(document.getElementsByTagName('li'));
console.log(document.querySelectorAll('li'));
// document.querySelector("li")
console.log(documentBody.firstChild);
console.log(documentBody.lastChild);

const texts = ["This text is not hard coded into HTML. Refresh Page to confirm", "I told you it wasn't😎"];

function getText() {
    const usedText = localStorage.getItem('curText');
    const output = usedText == '0' ? texts[1] : texts [0];
    localStorage.setItem('curText', usedText == '0' ? '1' : '0')
    return output;
}

const jsText = document.createElement('li');
jsText.appendChild(document.createTextNode(getText()));

document.querySelector(".special").appendChild(jsText);
console.log(documentBody.style);



// Events
const eventBtn = document.querySelector(".event-btn");
eventBtn.addEventListener('click', (event) => {
    eventBtn.textContent = 'Check Console for event object'
    console.log(event)
});

// document.addEventListener("keypress", (e) => {
//     alert(e.key)
// })

document.addEventListener("keydown", e => console.log('You pressed a key'))

// const clickParagraph = document.getElementById('click');

// clickParagraph.addEventListener('click',() => console.log('click') );
// clickParagraph.addEventListener('mousedown',() => console.log('down') );
// clickParagraph.addEventListener('mouseup',() => console.log('up') );