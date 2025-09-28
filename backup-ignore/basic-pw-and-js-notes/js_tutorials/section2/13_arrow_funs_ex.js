// JavaScript Arrow Functions: Detailed Examples

// Arrow functions provide a more concise way to write functions in JavaScript.
// They are especially useful for inline functions and callbacks.

// Example 1: Arrow function with no parameters
const greetWorld = () => "Hello, World!";
console.log(greetWorld()); // Output: Hello, World!

// Example 2: Arrow function with a single parameter (no need for parentheses)
const square = n => n * n;
console.log(square(4)); // Output: 16

// Example 3: Arrow function with multiple parameters
const multiply = (x, y) => x * y;
console.log(multiply(3, 7)); // Output: 21

// Example 4: Arrow function with a block body
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};
console.log(divide(10, 2)); // Output: 5
console.log(divide(10, 0)); // Output: Cannot divide by zero

// Example 5: Using arrow functions with array methods
const fruits = ["apple", "banana", "cherry"];
const fruitLengths = fruits.map(fruit => fruit.length);
console.log(fruitLengths); // Output: [5, 6, 6]

// Example 6: Arrow function used in a filter method
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]

// Example 7: Arrow function in a reduce method
const total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(total); // Output: 21

// Example 8: Arrow function with default parameters
const add = (a, b = 5) => a + b;
console.log(add(10)); // Output: 15
console.log(add(10, 20)); // Output: 30

// Example 9: Arrow function returning an object
const createUser = (name, age) => ({ name, age });
console.log(createUser("Alice", 25)); // Output: { name: 'Alice', age: 25 }

// Example 10: Arrow function used as a callback
const delayedGreeting = () => {
    setTimeout(() => {
        console.log("This message appears after 2 seconds");
    }, 2000);
};

delayedGreeting();

/**
 * Key Points to Remember:
 * - Arrow functions do not have their own 'this' context. They inherit 'this' from their enclosing scope.
 * - Arrow functions are best suited for non-method functions.
 * - They cannot be used as constructors and do not have the 'new.target' keyword.
 */
