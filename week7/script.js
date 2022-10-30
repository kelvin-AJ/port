// function square(x) {
//     return x*x;
// }

function square(x){
    square.cache = square.cache || {};
    if (!square.cache[x]) {
        square.cache[x] = x*x;
    }
    return square.cache[x]
}

console.log(square.length)
// >> 1




function sayHello(greeting='Hello'){
    return `${greeting}, my name is ${ this.name }`;
}

const kelvin = {name:"kelvin"};
const ola = {name:"ola"}

console.log(sayHello.call(ola, "Hi"))
// >> Hi, my name is ola

// If a function doesn’t refer to an object as this in its body, it can still be called using the call() method, but you need provide null as its first argument;
// The 'apply()' method works the same way, only that the parameters are passed in an array
// We can add preperties to functions just as we can to normal objects
square.description = 'Squares a number that is provided as an argument';

// Memoization involves the use of a "cache" property assigned to a function to store results whenever the function runs. This is especially useful for functions that take time to run so it saves time by simply returning values already stored for reused arguments.
// IIFE are anonymous functions that are called immediately they are defined

(function(){
    const temp = 'World';
    console.log(`Hello ${temp}`);
})();

// Placing any code that uses any temporary variables inside an IIFE will ensure it’s only available while the IIFE is invoked, then it will disappear. This reduces the chances of the global namespace being polluted.

let a = 1;
let b = 2;

(()=>{
    const temp = a;
    a = b;
    b = temp;
})();

// IIFEs are alse useful to set up initialization code that won't be needed again.
// To avoid enforcing strict mode on every javascript in the file, the recommended way to use strict mode is to place all strict code inside an IIFE.

function party(){
    console.log('Wow this is amazing!');
    party = function(){
        console.log('Been there, got the T-Shirt');
    }
}

// functions in javascript can, call, define and even redefine themselves.

function party(){
    console.log('Wow this is amazing!');
    party = function(){
        console.log('Been there, got the T-Shirt');
    }
}

const beachParty = party; 

function ride(){
    if (window.unicorn) { 
        ride = function(){
        // some code that uses the brand new and sparkly unicorn methods
        return 'Riding on a unicorn is the best!';
        }
    } else {
        ride = function(){
        // some code that uses the older pony methods
        return 'Riding on a pony is still pretty good';
        }
    }
    return ride();
}

// With Init-Time Branching, we can redefine a function based on the presence of a feature.
// A recursive function is one that calls itself until a certain condition is met.

function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
// console.log(factorial(30))
function collatz(n, sequence=[n]) {
    if (n === 1){
        return `Sequence took ${sequence.length} steps. It was ${sequence}`;
    }

    if (n%2 === 0) {
        n = n/2;
    } else { 
        n = 3*n + 1;
    }

    return collatz(n,[...sequence,n]);
}

// callback functions are functions passed to other functions as arguments and then invoked inside the function they are passed to
// Call back hell occurs when we have to nest multiple callback functions in each other, usually because of their asynchronous nature

function wait(message, callback, seconds){
    setTimeout(callback,seconds * 1000);
    console.log(message);
}

function selfDestruct(){
    console.log('BOOOOM!');
}

wait('This tape will self-destruct in five seconds ... ', selfDestruct, 5);
console.log('Hmmm, should I accept this mission or not ... ?');
// Event-driven Asynchronous Programming ensure that waiting for tasks such as events and other time taking functions does not hold up execution of other parts of the program.
// Promises represent the future result od asynchronous operations. Like a placeholder while we wait for the outcomes of an asynchronous task. A settled promise can result in two outcomes: Resolved or Rejected.
// We can chain multiple promises.
const cards ={
    shuffle(){
        return new Promise((resolve, reject) => {
            const cardNum = Math.floor(Math.random() * 21);

            setTimeout(() => {
               if(cardNum > 5){
                resolve(cardNum)
            }else{
                reject(new Error("Your card number was less than 5, sorry"))
            } 
            }, 100 * cardNum)
            
        })
    }
}

cards.shuffle()
    .then(value =>  {
    console.log(value)
})
.catch(result => console.warn(result))

// Async functions
// Async functions were added to the ES2017 specification. These functions are preceded by the async keyword and allow you to write asynchronous code as if it was synchronous.
// We can have functions return other functions

// Closures
// A closure gives a function access to all the variables of its parent function or "it's birthplace" even after it has been reassigned.


let f;

const g = function() {
    const a = 23;
    f = function() {
        console.log(a*2);
    };
};

const h = function() {
    const b = 777;
    f = function() {
        console.log(2 * b);
    }
}

// Pure functions adhere to the following rules: <ol><li>The return value of a pure function should only depend on the values provided as arguments. It doesn't rely on values from somewhere else in the program.</li> <li> There are no side-effects. A pure function doesn't change any values or data elsewhere in the program. It only makes non-destructive data transformations and returns new values, rather than altering any of the underlying data. </li><li>Referential transparency. Given the same arguments, a pure function will always return the same result.</li></ol>

// Higher-Orde Functions are functions that accept other functions as arguments and/or returns another function.

// Curring involves nesting functions into other functions such that the inititial function can take one parameter and then return a function that takes another and the chain can go on until all parameter are available at the last function.This "function call chaining" is useful when other needed parameter are ot readily available.

const myCurry = ingredient1 => ingredient2 => ingredient3 => `Curry with ${ingredient1}, ${ingredient2}, and ${ingredient3}. Get it?😂😂`

// ASYNCHRONOUS JAVASCRIPT AND XML
// Clients and servers

// A brief history of Ajax

// Communicating with the server using the Fetch API

// Receiving data with Ajax

// Sending data with Ajax

// Form data