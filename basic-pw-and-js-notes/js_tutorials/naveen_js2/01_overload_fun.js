// File: functionOverloading.js

// Notes: Function Overloading in JavaScript
/*
    1. Does JavaScript Support Function Overloading?
       - JavaScript does not natively support function overloading., how java supports function overloading.
       - If multiple functions with the same name are defined, the last one overwrites the previous ones.

    2. How to Simulate Function Overloading?
       - Use techniques like:
           a) `arguments` object
           b) Rest parameters (`...args`)
           c) Object parameters
       - Handle varying numbers or types of arguments within a single function.

    3. Examples:
*/

// Example 1: Overwriting Functions (Native JavaScript Behavior)
function greet(name) {
    return `Hello, ${name}!`;
}

function greet(name, age) {
    return `Hello, ${name}! You are ${age} years old.`;
}

// The second function overwrites the first
console.log(greet("Alice"));       // Output: Hello, Alice! You are undefined years old.
console.log(greet("Alice", 25));   // Output: Hello, Alice! You are 25 years old.

/*
    4. Simulating Function Overloading
       - Use a single function and handle different cases based on:
           a) Number of arguments
           b) Types of arguments
*/

// Example 2: Using `arguments` Object
function greetUsingArguments() {
    if (arguments.length === 1) {
        return `Hello, ${arguments[0]}!`; // One argument
    } else if (arguments.length === 2) {
        return `Hello, ${arguments[0]}! You are ${arguments[1]} years old.`; // Two arguments
    }
    return "Invalid number of arguments!";
}

console.log(greetUsingArguments("Alice"));       // Output: Hello, Alice!
console.log(greetUsingArguments("Alice", 25));   // Output: Hello, Alice! You are 25 years old.
console.log(greetUsingArguments());              // Output: Invalid number of arguments!

// Example 3: Using Rest Parameters (`...args`)
function greetUsingRest(...args) {
    if (args.length === 1) {
        return `Hello, ${args[0]}!`; // One argument
    } else if (args.length === 2) {
        return `Hello, ${args[0]}! You are ${args[1]} years old.`; // Two arguments
    }
    return "Invalid number of arguments!";
}

console.log(greetUsingRest("Bob"));          // Output: Hello, Bob!
console.log(greetUsingRest("Bob", 30));      // Output: Hello, Bob! You are 30 years old.
console.log(greetUsingRest());               // Output: Invalid number of arguments!

// Example 4: Using Object Parameters
function greetUsingObject({ name, age } = {}) {
    if (name && age) {
        return `Hello, ${name}! You are ${age} years old.`; // Both name and age provided
    } else if (name) {
        return `Hello, ${name}!`; // Only name provided
    }
    return "Hello, stranger!";
}

console.log(greetUsingObject({ name: "Charlie" }));          // Output: Hello, Charlie!
console.log(greetUsingObject({ name: "Charlie", age: 35 })); // Output: Hello, Charlie! You are 35 years old.
console.log(greetUsingObject());                             // Output: Hello, stranger!

/*
    Summary:
    - JavaScript does not natively support function overloading.
    - Use techniques like `arguments`, rest parameters, or object parameters to simulate overloading.
    - Best Practices:
        1) Avoid defining multiple functions with the same name.
        2) Use rest parameters or object destructuring for clean and flexible code.
*/
