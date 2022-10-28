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


// The call() method can be used to set the value of 'this' inside a function to an object that is provided as the first argument.

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
// Because Javascript runs on 