/**
 * The JavaScript Array.reduce() method iterates over an array, applying a reducer function to each element, 
 * accumulating a single output value. 
 * It takes an initial value and processes elements from left to right, reducing the array to a single result. 
 * It is useful for doing operations like max in an array, min in an array and sum of array
 * 
 * Syntax of reduce(): array.reduce( function(total, currentValue, currentIndex, arr), initialValue )
 *                     arr.reduce(callback(accumulator, currentValue), initialValue)
 * 
 * Return value: The JavaScript array reduce method returns a single value/element after traversing the complete array.
 */

// JavaScript Array Method: reduce

/**
 * Topics covered:
 * 1. Array reduce()
 */

// 1. Array reduce()
// ---------------------------
/**
 * The reduce() method executes a reducer function on each element of the array, resulting in a single output value.
 * It can be used to accumulate array values, such as summing all elements.
 * The reducer function takes two arguments: an accumulator and the current value.
 */

// Example: Summing all numbers in an array
/**
 * Step-by-Step Explanation of reduce():
 *
 * Array: [5, 1, 8, 3, 12]
 * Initial value of the accumulator: 0
 *
 * Steps:
 * 1. First iteration:
 *    - Accumulator = 0 (initial value)
 *    - Current Value = 5 (first element of the array)
 *    - Accumulator after operation = 0 + 5 = 5
 *
 * 2. Second iteration:
 *    - Accumulator = 5 (result from the previous iteration)
 *    - Current Value = 1 (second element of the array)
 *    - Accumulator after operation = 5 + 1 = 6
 *
 * 3. Third iteration:
 *    - Accumulator = 6
 *    - Current Value = 8 (third element of the array)
 *    - Accumulator after operation = 6 + 8 = 14
 *
 * 4. Fourth iteration:
 *    - Accumulator = 14
 *    - Current Value = 3 (fourth element of the array)
 *    - Accumulator after operation = 14 + 3 = 17
 *
 * 5. Fifth iteration:
 *    - Accumulator = 17
 *    - Current Value = 12 (fifth element of the array)
 *    - Accumulator after operation = 17 + 12 = 29
 *
 * Final result: 29
 */
const numbers = [5, 1, 8, 3, 12];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 29

// Example: Subtracting all numbers in an array
/**
 * Step-by-Step Explanation of reduce():
 *
 * Array: [5, 1, 8, 3, 12]
 * Initial value of the accumulator: The first element of the array (5)
 *
 * Steps:
 * 1. First iteration:
 *    - Accumulator = 5 (initial value, first element)
 *    - Current Value = 1 (second element of the array)
 *    - Accumulator after operation = 5 - 1 = 4
 *
 * 2. Second iteration:
 *    - Accumulator = 4
 *    - Current Value = 8 (third element of the array)
 *    - Accumulator after operation = 4 - 8 = -4
 *
 * 3. Third iteration:
 *    - Accumulator = -4
 *    - Current Value = 3 (fourth element of the array)
 *    - Accumulator after operation = -4 - 3 = -7
 *
 * 4. Fourth iteration:
 *    - Accumulator = -7
 *    - Current Value = 12 (fifth element of the array)
 *    - Accumulator after operation = -7 - 12 = -19
 *
 * Final result: -19
 */
const subtract = numbers.reduce((accumulator, currentValue) => accumulator - currentValue);
console.log(subtract); // Output: -19

// Example: Multiplying all numbers in an array
/**
 * Step-by-Step Explanation of reduce():
 *
 * Array: [5, 1, 8, 3, 12]
 * Initial value of the accumulator: 1
 *
 * Steps:
 * 1. First iteration:
 *    - Accumulator = 1 (initial value)
 *    - Current Value = 5 (first element of the array)
 *    - Accumulator after operation = 1 * 5 = 5
 *
 * 2. Second iteration:
 *    - Accumulator = 5
 *    - Current Value = 1 (second element of the array)
 *    - Accumulator after operation = 5 * 1 = 5
 *
 * 3. Third iteration:
 *    - Accumulator = 5
 *    - Current Value = 8 (third element of the array)
 *    - Accumulator after operation = 5 * 8 = 40
 *
 * 4. Fourth iteration:
 *    - Accumulator = 40
 *    - Current Value = 3 (fourth element of the array)
 *    - Accumulator after operation = 40 * 3 = 120
 *
 * 5. Fifth iteration:
 *    - Accumulator = 120
 *    - Current Value = 12 (fifth element of the array)
 *    - Accumulator after operation = 120 * 12 = 1440
 *
 * Final result: 1440
 */
const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log(product); // Output: 1440

// Example: Creating a sentence from an array of words
/**
 * Step-by-Step Explanation of reduce():
 *
 * Array: ["JavaScript", "is", "awesome"]
 * Initial value of the accumulator: "JavaScript"
 *
 * Steps:
 * 1. First iteration:
 *    - Accumulator = "JavaScript" (initial value)
 *    - Current Value = "is" (second element of the array)
 *    - Accumulator after operation = "JavaScript" + " " + "is" = "JavaScript is"
 *
 * 2. Second iteration:
 *    - Accumulator = "JavaScript is"
 *    - Current Value = "awesome" (third element of the array)
 *    - Accumulator after operation = "JavaScript is" + " " + "awesome" = "JavaScript is awesome"
 *
 * Final result: "JavaScript is awesome"
 */
const words = ["JavaScript", "is", "awesome"];
const sentence = words.reduce((accumulator, word) => `${accumulator} ${word}`);
console.log(sentence); // Output: "JavaScript is awesome"

/**
 * Summary:
 * - reduce(): Reduces an array to a single value by applying a function to each element.
 *   It takes an accumulator and a current value and performs the specified operation on them.
 */

// File: arrayReduceExamples.js

// Notes: Using `reduce` function in JavaScript for various operations
/*
    1. The `reduce` method applies a reducer function on each element of the array.
    2. The reducer function takes two main arguments:
       - `accumulator`: Carries the result of the previous computation.
       - `currentValue`: The current element in the array.
    3. Syntax:
       array.reduce((accumulator, currentValue) => {
           // logic to update the accumulator
           return updatedAccumulator;
       }, initialValue);
    4. Common use cases:
       - Finding the minimum or maximum value
       - Calculating the sum or product of all elements
       - Flattening arrays or transforming data
*/

// Example 1: Finding the Minimum value in an array
const numbers = [4, 7, 2, 8, 5];

// Use reduce to find the minimum value
const min = numbers.reduce((acc, curr) => (curr < acc ? curr : acc), numbers[0]);

console.log(`Minimum value: ${min}`); // Output: Minimum value: 2

// Example 2: Finding the Maximum value in an array
// Use reduce to find the maximum value
const max = numbers.reduce((acc, curr) => (curr > acc ? curr : acc), numbers[0]);

console.log(`Maximum value: ${max}`); // Output: Maximum value: 8

// Example 3: Calculating the product of all elements in an array
// Use reduce to multiply all elements
const product = numbers.reduce((acc, curr) => acc * curr, 1);

console.log(`Product of all elements: ${product}`); // Output: Product of all elements: 2240

/*
    Explanation of each example:
    1. Finding Minimum:
       - Initial value: numbers[0] (4)
       - Compare each element with `acc` (accumulator).
       - If current element is smaller, update `acc`.
    2. Finding Maximum:
       - Initial value: numbers[0] (4)
       - Compare each element with `acc`.
       - If current element is larger, update `acc`.
    3. Product of All Elements:
       - Initial value: 1 (neutral for multiplication).
       - Multiply each element with `acc` and update `acc`.
*/

// Additional Notes:
// - Always provide an initial value to avoid unexpected behavior with empty arrays.
// - `reduce` can perform many complex operations like flattening arrays, grouping, etc.
