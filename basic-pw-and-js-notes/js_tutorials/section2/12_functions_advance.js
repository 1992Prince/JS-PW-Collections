// JavaScript Functions: In-depth Overview and Examples

/**
 * Topics covered:
 * 1. Function Expression
 * 2. Arrow Functions
 * 3. Anonymous Functions
 * 4. Higher-Order Functions
 */

// 1. Function Expression
// ---------------------------
/**
 * A function expression is when a function is assigned to a variable.
 * Function expressions are not hoisted, meaning they cannot be used before they are defined.
 */

// Example:
const greet = function (name) {
    return `Hello, ${name}!`;
};

console.log(greet("Alice")); // Output: Hello, Alice!

/**
 * Differences between Function Declarations and Function Expressions:
 * - Function declarations are hoisted, while function expressions are not.
 * - Function expressions can be anonymous.
 */


// 2. Arrow Functions
// ---------------------------
/**
 * Arrow functions provide a more concise way to write functions in JavaScript.
 * They do not have their own 'this' context, making them useful in certain scenarios.
 * Syntax: (parameter1, parameter2, ...) => { expression }
 */

// Example:
const sum = (a, b) => a + b;
console.log(sum(5, 3)); // Output: 8

/**
 * Arrow Functions vs Regular Functions:
 * - Arrow functions do not have their own 'this'. They inherit 'this' from their surrounding context.
 * - Arrow functions are great for one-liners and inline callbacks.
 */


// 3. Anonymous Functions
// ---------------------------
/**
 * Anonymous functions are functions without a name.
 * They are typically used as arguments to other functions or assigned to variables.
 */

// Example: Using an anonymous function in setTimeout
setTimeout(function () {
    console.log("This message appears after 1 second.");
}, 1000);

// Example: Anonymous function in array methods
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(function (number) {
    return number * 2;
});
console.log(doubled); // Output: [2, 4, 6, 8]

/**
 * Pros and Cons:
 * - Pros: Great for one-time use, less boilerplate code.
 * - Cons: Hard to debug (stack traces might not be as informative).
 */


// 4. Higher-Order Functions
// ---------------------------
/**
 * Higher-order functions are functions that either:
 * - Take other functions as arguments, or
 * - Return functions as their result.
 * They allow for more flexible, modular, and reusable code.
 */

// Example 1: Function as an argument
function greetUser(username, callback) {
    console.log(callback(username));
}

const politeGreeting = function (name) {
    return `Hello, ${name}! It's nice to meet you.`;
};

// Passing a function as an argument
greetUser("Charlie", politeGreeting); // Output: Hello, Charlie! It's nice to meet you.

// Example 2: Function returning another function
function multiplier(factor) {
    return function (number) {
        return number * factor;
    };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10

/**
 * Key Points:
 * - Higher-order functions like 'map', 'filter', and 'reduce' are very useful in functional programming.
 * - Example: Using 'filter' with an arrow function.
 */

const ages = [15, 18, 21, 30, 12];
const adults = ages.filter(age => age >= 18);
console.log(adults); // Output: [18, 21, 30]

/**
 * Summary:
 * - Function Expressions are functions assigned to variables.
 * - Arrow Functions are concise and have no 'this' of their own.
 * - Anonymous Functions are unnamed functions, used often for one-time tasks.
 * - Higher-Order Functions can take or return functions, enabling modular and reusable code.
 */
