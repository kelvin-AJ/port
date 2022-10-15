'use strict'
// Errors are usually caused by: the system or external devices that interact with the program, problems in the program such as wrong syntax or faulty logic or incorrect data entered by the user that the program is unable to handle.
// exceptiosn are errors that produce return values thwt we can use to handle those errors.
// A stack trace is s sequence of methos calls that lead to the point where the eroor occured.
// An expert programmer should let errors occur loudly during development so they can be identifed and fixed easily. While in production, errors should occur gracefully, so the user experiance is not affected.
// Writing code in strict mode can helps to  improve its clarity and speed, since it follows conventions and will throw exceptions if any sloppy code practices are used.
// We activate strict mode by adding the string 'use strict' at the first line of our script file
// We can also use strict mode for individual functions by adding 'use strict' as the first line of the function.
// Linting tools test the quality of code beyond strict mode. They are useful in enforcing a programming style guide which is especially useful when working with a team so everyone follows the same conventions.
// To implement feature detection, we wrap whatever 'dangerous' method we want to use in if statements that check if the object exists befroe running them.
// When debugging, we run through the program to see what happens at differnet points of it's execution. With breakpoints, we can pause the execution at specific points and view the values of different variables at that point in the program's execution.
// we can use alerts to set breakpoints because the program actually stops running until the ok button is clicked.
// We can also use the console by logging the value of variables at strategic points in our program. This does not stop code execution like the alert.
// debugger comand sets breakpoint in the program so the debugger pauses execution at those points.
// error objects can be created by the host or in the code when an exception occurs by using the error constudtor function: 'const error = new Error('error message goes here');'
// The 'throw' statement cause the program to stop
// If we suspect a piece of code will result in an exception, we can wrap it in a try block. This will run the code inside the block as normal, but if an exception occurs it will pass the error object that is thrown onto a catch block. 
// A finally block can be added after a catch block, andything in the finally block would be executed regardless of whether an extension occured or not.
// Test-driven development (TDD) is the process of writing tests before any actual code. Following this principle resukts in the following workflow:
// Write tests (that initially fail),Write code to pass the tests,Refactor the code,Test refactored code,Write more tests for new features.



// console.log(window.navigator.userAgent);
const error = new Error('Oops, something went wrong');
// throw error;
// const factorial = num => num != 1 ? num * factorial(num - 1) : 1
// factorial(9999999)

function squareRoot(number) {
    'use strict';
    if (number < 0) {
        throw new RangeError("You can't find the square root of negative numbers")
    }
    return Math.sqrt(number);
};
// squareRoot(-2)

function imaginarySquareRoot(number) {
    'use strict';
    try {
        return String(squareRoot(number));
    } catch(error) {
        return squareRoot(-number)+'i';
    }
}
console.log(imaginarySquareRoot(-16)
)// throw 2;
// throw 'Up';
// throw { toys: 'out of pram' };


