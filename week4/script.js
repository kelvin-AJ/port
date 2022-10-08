
// Object-oriented programming is often used to model representations of objects in the real world.

// Encapsulation involves keeping all programming logic hidden(encapsulated) in an object then providing methods to the users without them having to understand how it works.

// Polymorphism: various objects can share the same methods and can override those methods based on what they do. How the on button for a light bulb turns the light on and another on button for a fan would get it to spin. "same method, different implementation".

// Inheritance provides us to be ability to take an object that already exists then inherit all it's methods and properties as if they were defined by the new object, then add methods and properties to it.

// Classes are like a blueprint for creating objects.
// The constructor function returns the object we want to create.
// We create instances of constructor functions with the follwing syntax
// the this keyword represents the object that is returned.
// ES6 class declaration syntax does the same thing as a constructor function but tooks similar to classes in class-based programming languages
// all code in a class definition is implicitly in strict mode, so doesn't need the 'use strict' statement at the start of the file.
//  This means that every class has a prototype property that is shared by every instance of the class. So any properties or methods of a class’s prototype can be accessed by every object instantiated by that class.
//  It is not possible to overwrite the prototype by assigning it to a new object literal if class declarations are used. We can overrite prototypes if constructor functions are used. becasue of the danger that comes with reassigning prototypes, class declarations are recommended.
// Properties can be reassigned.
// When a property or a method is called, The engine would check if that object has that method. If it doesn't, it would look it up by 'going up' the prototype chain until it finds it. 
// By default, JavaScript object’s methods are public. They can be changed externally simply by reassigning. We use getters and setter to access and modify private properties.
//  enumerable object properties show up when a for-in loop is used to loop through that object’s properties.
// A class can inherit from another class using the 'extends' keyword in a class declaration.
// When a method is called on a primitive value, JavaScript creates a wrapper object for the primitive, which converts it into an object and then calls the method on the object.
// monkey-patching involves adding our own methods to the prototype of inbuilt objects.It should be avoided because it can cause unexpected behavior in javascript. A way avoiding monkey-patching is by using 'extends' so yoyu inherit all methods of that inbuilt objects.
// Instead of using assignment, we can add properties to an object using the Object.defineProperty() method so we can explicitly set it's propertyDescriptor
// A mixin is a way of adding properties and methods of some objects to another object without using inheritance.
// object methods returning 'this' make it easy to chain methods.
// We can borrow methods by using the call method. This lets us assign the 'this' keyword to the object we pass in as the parameter.



// const Dice = function(sides=6){
//     this.sides = sides;
//     this.roll = function() {
//         return Math.floor(this.sides * Math.random() + 1)
//     }
// }



class Dice {
    constructor(sides=6){    
        Object.defineProperty(this, 'sides', {
            get() {
            return `This dice has ${sides} sides`;
            },
            set(value) {
            if(value > 0) {
                sides = value;
                return sides;
            } else {
                throw new Error('The number of sides must be positive');
            }
            }
        });
    
        this.roll = function() {
            return Math.floor(sides * Math.random() + 1)
        }
    }

    roll() {
        return Math.floor(this.sides * Math.random() + 1)
    }

    static description() {
        return 'A way of choosing random numbers'
    }
}


const redDice = new Dice();
console.log(redDice)

console.log(redDice instanceof Dice);
console.log({} instanceof Object);
console.log([] instanceof Array)

const myArr = new Array(5).fill();

console.log(myArr);
console.log(redDice.constructor);

const blueDice = new redDice.constructor(16)
console.log(blueDice)
console.log(blueDice instanceof Dice)

console.log(redDice.__proto__);

console.log(Dice.description());

class Turtle {
    constructor(name) {
        this.name = name;
        this.weapon = 'hands';
    }
    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }
    attack(){
        return `Feel the power of my ${this.weapon}!`;
    }

    toString() {
        return `A turtle called ${this.name}`;
    }
}

const leo = new Turtle('Leonardo');
console.log("leo >> ", leo)


leo.constructor.prototype.fight = function() {
    return "That's too much work"
}

console.log("leo.fight() >> ", leo.fight());

const raph = new Turtle('Raphael');

console.log(raph.name)
console.log(raph.sayHi())
console.log(raph.weapon)
console.log(raph.attack())

console.log(Object.getPrototypeOf(raph));

Turtle.prototype.food = 'Pizza';
Turtle.prototype.eat = function() {
    return `Mmm, this ${this.food} tastes great!`;
}

class myArray extends Array {
    constructor(...args){
        super(...args);
        return this
    }
    delete(i) {
        return this.splice(i,1);
    }
}

const me = { name: 'DAZ' };

Object.defineProperty(me, 'eyeColor', { value: 'blue', writable: false, enumerable: true });

me.age = 21;
me.retirementAge = 65;

Object.defineProperty(me, 'yearsToRetirement',{
    get() {
        if(this.age > this.retirementAge) { return 0; }
        else { return this.retirementAge - this.age; }
    },
    set(value) {
        this.age = this.retirementAge - value;
        return value;
    }
});


const Human = {
    arms: 2,
    legs: 2,
    walk() { console.log('Walking'); }
}

const lois = Object.create(Human);

const jimmy = Object.create(
    Human, 
    { name: { value: 'Jimmy Olsen', enumerable: true }, job: { value: 'Photographer', enumerable: true } });



// MODULAR JS
// A module is a self-contained piece of code that provides functions and methods that can then be used in other files and by other modules
// "Keeping code modular helps to make it more loosely coupled and interchangeable, meaning you can easily swap one module for another without affecting other parts of a project."
// All code in modules is always in strict mode.
// A module has its own global scope, so any variables created in the top-level of a module can only be accessed within that module.
// The value of this in the top level of a module is undefined.
// Default exports are single variable, function or class in a module that can be imported without having to be explicitly named.
// Having more than one default export will result in a syntax error.
// Node.js uses Common Js modules.