/**
 * JavaScript Functions
 * Why Functions in JS called First-Class Citizens?
 *  In JavaScript, functions are treated as first-class citizens, which means:
 *      They can be assigned to variables.
 *      They can be passed as arguments to other functions.
 *      They can be returned from other functions.
 */

// Types of Functions in JavaScript

/**
 * 1. Function Declaration :
 * A function declaration defines a named function using the function keyword. 
 * It can be called before or after it is defined due to hoisting.
 * 
 * syntax:
 * function functionName(parameters) {
    // Function body
    return value;
}
 */
console.log('---------------- Function declaration demo ---------------------');
console.log();

console.log('Calling Function Declaration before definition: ', greet('Alice')); // working due to hoisting
function greet(name) {
  return `Hello, ${name}!`;
}

// Here, the greet function takes a name as a parameter and returns a greeting message

console.log(greet('Alice')); // Output: Hello, Alice!
console.log();
console.log();

/**
 * 2. Function Expressions :
 * In a function expression, the function is assigned to a variable.
 * These functions are not hoisted, meaning they cannot be called before they are defined
 * But normal function declarations are hoisted, meaning they can be called before they are defined.
 */

/**
 * console.log("Calling Function Expressions before definition: ", square(4));
 * // Output: Error: square is not defined
 * // ReferenceError: Cannot access 'square' before initialization
 * This will throw an error because the function is not hoisted.
 */
const square = function (number) {
  return number * number;
};
console.log(square(4)); // Output: 16

// Here, function(name) {...} is an anonymous function.
// It’s stored in the variable greet.

/**
 * Key Differences vs Function Declaration:
 * | Feature                  | Function Declaration                    | Function Expression                           |
| ------------------------ | --------------------------------------- | --------------------------------------------- |
| **Hoisting**             | Yes (can be called before it's defined) | No (reference error if called before defined) |
| **Name Requirement**     | Must have a name                        | Can be anonymous or named                     |
| **Assigned to Variable** | No                                      | Yes                                           |
| **Common Use**           | Traditional function definition         | Callbacks, IIFE, event handlers               |

🧪 Interview Tip:
Q: Can you call a function before it's defined in JavaScript?
A: If it's a function declaration — Yes.
If it's a function expression — No, because only the variable is hoisted, not the function body.
 */

// Named Function Expression example
const square2 = function calcSquare(n) {
  return n * n;
};

console.log(`square2(4) - ${square2(4)}`); // square2(4) - 16
// console.log(calcSquare(4)); ❌ ReferenceError: calcSquare is not defined
/**
 * ✅ Explanation: This is a Named Function Expression:
 * The function is assigned to the variable square2, and calcSquare is just an
 * internal name for the function (visible only inside the function body itself — for recursion, etc.).
 * Outside the function, you cannot access calcSquare — it’s not in the outer scope.
 */
// The internal name calcSquare is only accessible inside the function itself.

console.log();

/**
 * 3. Anonymous Functions
 * Anonymous functions are functions without a name, often used in function expressions or as arguments to other functions
 * 
 * Example:
setTimeout(function() {
    console.log("This runs after 2 seconds");
}, 2000);
Here, an anonymous function is passed to setTimeout to run after 2 seconds.

 */
console.log();

// 4.  Arrow Functions in JavaScript:
/**
 *  They are particularly useful when you need to write shorter, 
 * more readable functions and are commonly used in scenarios like callbacks and single-expression operations. 
 * 
 * Unlike regular functions, arrow functions do not have their own this binding, 
 * which can simplify how they behave in certain contexts.
 * 
 * Key Features of Arrow Functions:
    Concise Syntax: Arrow functions reduce the need for extra syntax like function or 
                    return (in the case of single expressions).
    No this Binding: Arrow functions do not create their own context, instead, 
                    they inherit this from the surrounding scope. Learn More Here
    Ideal for Callbacks: Their concise nature makes them perfect for situations 
                    like event handlers or passing functions as arguments (callbacks).

 */
//write arrow function for add and multiplication functionality

const add = (a, b) => a + b;
const mul = (a, b) => a * b;
console.log(`Addition: ${add(5, 10)}`); // Output: Addition: 15
console.log(`Multiplication: ${mul(5, 10)}`); // Output: Multiplication: 50
console.log();

// 5. Higher Order Functions
console.log(
  '--------------------- Higher Order functions -------------------------'
);
console.log();

/**
 * Higher-order functions are functions that take other functions as arguments or return functions as results.
 * They are commonly used in functional programming patterns.
 */

// a) map() - The map() method creates a new array by applying a function to every element of the array.
// Here, the map() function takes a callback (an arrow function) and applies it to each element,
// returning a new array of squared numbers.
// so map() is a higher-order function because it takes a function as an argument and applies it to each element of the array.

const numbers = [1, 2, 3, 4];
const squaredNumbers = numbers.map((num) => num * num);
console.log('Original Numbers:', numbers); // Output: Original Numbers: [1, 2, 3, 4]
console.log('Squared Numbers:', squaredNumbers); // Output: Squared Numbers: [1, 4, 9, 16]

console.log();

/**
b) filter()
The filter() method creates a new array with all elements 
that pass the test implemented by the provided function.

here filter() is a higher-order function because it takes a function as an argument and applies it to each element of the array, returning a new array with elements that satisfy the condition defined in the function.
 */

const ages = [12, 18, 22, 10, 30];
const adults = ages.filter((age) => age >= 18);
console.log(adults); // Output: [18, 22, 30]

console.log();

/**
 * c) reduce()
The reduce() method applies a function against an accumulator and each element of the array (from left to right) to reduce it to a single value.

here reduce() is a higher-order function because it takes a function as an argument and applies it to each element of the array, accumulating a single result.
 */

/**
Summary
  Function Declarations are hoisted and can be called before they are defined.
  Function Expressions are not hoisted and can be used after they are assigned to a variable.
  Anonymous Functions are useful when passing functions as arguments or defining unnamed functions.
  Arrow Functions provide a shorter syntax, ideal for callbacks and inline functions.
  Higher-Order Functions like map(), filter(), and reduce() enable powerful, concise functional programming patterns in JavaScript.

 */
