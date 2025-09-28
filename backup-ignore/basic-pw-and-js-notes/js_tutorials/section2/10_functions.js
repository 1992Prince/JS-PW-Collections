// JavaScript Tutorial: Functions in JavaScript

/**
 * Functions are one of the core building blocks in JavaScript.
 * A function is a reusable block of code that performs a specific task.
 * 
 * Different types of functions in JavaScript:
 * 
 * 1. Function Declaration
 * 2. Function Expression
 * 3. Arrow Functions
 * 4. Anonymous Functions
 * 5. Immediately Invoked Function Expressions (IIFE)
 * 6. Higher-Order Functions
 */

// 1. Function Declaration
console.log("\n=== Function Declaration ===");

function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Alice"); // Output: Hello, Alice!

// Explanation:
// - Function declarations start with the `function` keyword, followed by the function name, parameters, and the code block.
// - The function `greet()` takes a `name` parameter and prints a greeting.


// 2. Function Expression
console.log("\n=== Function Expression ===");

const sum = function (a, b) {
    return a + b;
};

let result = sum(5, 3);
console.log("Sum:", result); // Output: Sum: 8

// Explanation:
// - A function expression assigns an anonymous function to a variable.
// - The function `sum` is assigned to a variable and can be used like any other variable.


// 3. Arrow Functions (Introduced in ES6)
console.log("\n=== Arrow Functions ===");

const multiply = (x, y) => x * y;

console.log("Multiplication Result:", multiply(4, 5)); // Output: Multiplication Result: 20

// Explanation:
// - Arrow functions provide a shorter syntax for defining functions.
// - They remove the need for the `function` keyword and have an implicit return when there is a single statement.


// 4. Anonymous Functions
console.log("\n=== Anonymous Functions ===");

// Anonymous functions are functions without a name. They are often used in situations where functions are used temporarily.

setTimeout(function () {
    console.log("This message is displayed after 2 seconds (Anonymous Function).");
}, 2000);

// Explanation:
// - In `setTimeout()`, an anonymous function is used to execute code after a delay.
// - Anonymous functions are useful for callbacks or quick one-time use functions.


// 5. Immediately Invoked Function Expressions (IIFE)
console.log("\n=== Immediately Invoked Function Expressions (IIFE) ===");

(function () {
    console.log("This function runs immediately after it's defined!");
})();

// Explanation:
// - An IIFE is a function that runs as soon as it is defined.
// - It's wrapped in parentheses and followed by another set of parentheses to execute it immediately.


// 6. Higher-Order Functions
console.log("\n=== Higher-Order Functions ===");

// A higher-order function is a function that takes another function as a parameter or returns a function.

function applyOperation(a, b, operation) {
    return operation(a, b);
}

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

console.log("Add Result:", applyOperation(10, 5, add)); // Output: Add Result: 15
console.log("Subtract Result:", applyOperation(10, 5, subtract)); // Output: Subtract Result: 5

// Explanation:
// - The function `applyOperation` takes two numbers and a function (`operation`) as parameters.
// - The `operation` function is then used to perform different mathematical operations on the numbers.


// BONUS: Default Parameters
console.log("\n=== Default Parameters ===");

function greetWithDefault(name = "Guest") {
    console.log("Hello, " + name + "!");
}

greetWithDefault();      // Output: Hello, Guest!
greetWithDefault("Sam"); // Output: Hello, Sam!

// Explanation:
// - Default parameters allow functions to have default values if no arguments are provided.
// - In `greetWithDefault`, if `name` is not provided, it defaults to "Guest".


// Summary:
/**
 * 1. **Function Declaration**:
 *    - Declared using the `function` keyword followed by a name.
 *    - Can be used (called) before they are defined due to hoisting.
 * 
 * 2. **Function Expression**:
 *    - Functions assigned to variables.
 *    - Not hoisted, so they cannot be called before they are defined.
 * 
 * 3. **Arrow Functions**:
 *    - Introduced in ES6, they provide a concise way to write functions.
 *    - No binding to `this` keyword, which is useful in some scenarios.
 * 
 * 4. **Anonymous Functions**:
 *    - Functions without a name.
 *    - Often used for callbacks and temporary tasks.
 * 
 * 5. **Immediately Invoked Function Expressions (IIFE)**:
 *    - Functions that run as soon as they are defined.
 *    - Used to create a local scope and avoid polluting the global scope.
 * 
 * 6. **Higher-Order Functions**:
 *    - Functions that take other functions as arguments or return functions.
 *    - Useful for callbacks and functional programming.
 */

