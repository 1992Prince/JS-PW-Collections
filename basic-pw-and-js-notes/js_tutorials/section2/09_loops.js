// JavaScript Tutorial: Loops in JavaScript

/**
 * Loops allow us to repeat a block of code multiple times.
 * The main types of loops in JavaScript are:
 * 
 * 1. for loop
 * 2. while loop
 * 3. do...while loop
 * 4. for...of loop
 * 5. for...in loop
 */

console.log("\n=== JavaScript Loops Tutorial ===");

// 1. for loop
console.log("\n=== for Loop ===");

for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
}
// Output: 
// Iteration: 1
// Iteration: 2
// Iteration: 3
// Iteration: 4
// Iteration: 5

// Explanation:
// - The `for` loop runs from `i = 1` to `i <= 5`.
// - The value of `i` increases by 1 in each iteration (`i++`).
// - This loop executes the block of code 5 times.


// 2. while loop
console.log("\n=== while Loop ===");

let count = 1;
while (count <= 3) {
    console.log("Count:", count);
    count++;
}
// Output: 
// Count: 1
// Count: 2
// Count: 3

// Explanation:
// - The `while` loop continues as long as the condition (`count <= 3`) is true.
// - `count++` increases the value of `count` by 1 in each iteration.


// 3. do...while loop
console.log("\n=== do...while Loop ===");

let num = 1;
do {
    console.log("Number:", num);
    num++;
} while (num <= 2);
// Output:
// Number: 1
// Number: 2

// Explanation:
// - The `do...while` loop runs the code block at least once, even if the condition is false.
// - It checks the condition (`num <= 2`) only after executing the block.


// 4. for...of loop (used to iterate over iterable objects like arrays)
console.log("\n=== for...of Loop ===");

let colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log("Color:", color);
}
// Output:
// Color: red
// Color: green
// Color: blue

// Explanation:
// - The `for...of` loop iterates over the elements of an iterable (like arrays).
// - Each element (`color`) is accessed during every iteration.


// 5. for...in loop (used to iterate over the properties of an object)
console.log("\n=== for...in Loop ===");

let person = {
    name: "Alice",
    age: 25,
    occupation: "Developer"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
// Output:
// name: Alice
// age: 25
// occupation: Developer

// Explanation:
// - The `for...in` loop iterates over the properties of an object.
// - `key` is the property name, and `person[key]` accesses the value.


// BONUS: Nesting Loops
console.log("\n=== Nested for Loop ===");

for (let i = 1; i <= 3; i++) {
    console.log("Outer Loop Iteration:", i);
    for (let j = 1; j <= 2; j++) {
        console.log("  Inner Loop Iteration:", j);
    }
}
// Output:
// Outer Loop Iteration: 1
//   Inner Loop Iteration: 1
//   Inner Loop Iteration: 2
// Outer Loop Iteration: 2
//   Inner Loop Iteration: 1
//   Inner Loop Iteration: 2
// Outer Loop Iteration: 3
//   Inner Loop Iteration: 1
//   Inner Loop Iteration: 2

// Explanation:
// - We can also nest one loop inside another to create nested loops.
// - The outer loop runs three times, and the inner loop runs twice for each outer iteration.


// Summary:
/**
 * 1. for loop:
 *    - Used when we know in advance how many times we want to iterate.
 * 
 * 2. while loop:
 *    - Used when we do not know the exact number of iterations.
 *    - The condition is checked before the first execution.
 * 
 * 3. do...while loop:
 *    - Similar to `while` but executes the code block at least once.
 * 
 * 4. for...of loop:
 *    - Used to iterate over the values of an iterable, such as an array.
 * 
 * 5. for...in loop:
 *    - Used to iterate over the properties of an object.
 */

console.log()
console.log()

// File: breakContinueExamples.js

// Notes: Using `break` and `continue` statements in JavaScript `for` loops
/*
    1. `break` Statement:
       - Exits the loop immediately when the condition is met.
       - The loop stops running any further iterations.

    2. `continue` Statement:
       - Skips the current iteration of the loop when the condition is met.
       - The loop proceeds to the next iteration without executing the remaining code in the current iteration.

    Syntax:
        for (initialization; condition; increment) {
            if (conditionToBreak) {
                break; // Exit the loop
            }
            if (conditionToContinue) {
                continue; // Skip the rest of the current iteration
            }
            // Remaining loop logic
        }
*/

// Example 1: Using `break` to exit a loop when a condition is met
const numbers = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 4) {
        console.log('Breaking the loop at number:', numbers[i]);
        break; // Exit the loop when the number is 4
    }
    console.log('Number:', numbers[i]);
}

// Output:
// Number: 1
// Number: 2
// Number: 3
// Breaking the loop at number: 4

// Example 2: Using `continue` to skip specific iterations in a loop
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log('Skipping even number:', numbers[i]);
        continue; // Skip the rest of the iteration if the number is even
    }
    console.log('Odd number:', numbers[i]);
}

// Output:
// Odd number: 1
// Skipping even number: 2
// Odd number: 3
// Skipping even number: 4
// Odd number: 5
// Skipping even number: 6

/*
    Summary:
    - `break`: Stops the loop execution entirely.
    - `continue`: Skips the rest of the current iteration and proceeds to the next iteration.
    - Use these statements carefully to control loop flow based on conditions.
*/
