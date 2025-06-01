// JavaScript Array Methods: sort, map, filter, reduce

/**
 * Topics covered:
 * 1. Array sort()
 * 2. Array map()
 * 3. Array filter()
 * 4. Array reduce()
 */

// 1. Array sort()
// ---------------------------
/**
 * The sort() method sorts the elements of an array in place and returns the sorted array.
 * By default, the sort() method sorts elements as strings in ascending order.
 * Custom sort orders can be created by passing a compare function.
 */

// Example: Sorting numbers
const numbers = [5, 1, 8, 3, 12];
const sortedNumbers = numbers.sort((a, b) => a - b); // Ascending order
console.log(sortedNumbers); // Output: [1, 3, 5, 8, 12]

// Example: Sorting strings alphabetically
const fruits = ["banana", "apple", "cherry"];
const sortedFruits = fruits.sort();
console.log(sortedFruits); // Output: ["apple", "banana", "cherry"]

// 2. Array map()
// ---------------------------
/**
 * The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
 * It does not modify the original array but returns a new one.
 */

// Example: Doubling numbers in an array
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 6, 10, 16, 24]

// Example: Converting array of names to uppercase
const names = ["alice", "bob", "charlie"];
const upperCaseNames = names.map(name => name.toUpperCase());
console.log(upperCaseNames); // Output: ["ALICE", "BOB", "CHARLIE"]

// 3. Array filter()
// ---------------------------
/**
 * The filter() method creates a new array with all elements that pass the test implemented by the provided function.
 * It is used to filter elements based on a condition.
 */

// Example: Filtering even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [8, 12]

// Example: Filtering out strings with length greater than 5
const longFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longFruits); // Output: ["banana", "cherry"]

// 4. Array reduce()
// ---------------------------
/**
 * The reduce() method executes a reducer function on each element of the array, resulting in a single output value.
 * It can be used to accumulate array values, such as summing all elements.
 * The reducer function takes two arguments: an accumulator and the current value.
 */

// Example: Summing all numbers in an array
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 29

// Example: Subtracting all numbers in an array
const subtract = numbers.reduce((accumulator, currentValue) => accumulator - currentValue);
console.log(subtract); // Output: -27

// Example: Multiplying all numbers in an array
const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log(product); // Output: 1440

// Example: Creating a sentence from an array of words
const words = ["JavaScript", "is", "awesome"];
const sentence = words.reduce((accumulator, word) => `${accumulator} ${word}`);
console.log(sentence); // Output: "JavaScript is awesome"

/**
 * Summary:
 * - sort(): Sorts the elements in the array in ascending or custom order.
 * - map(): Creates a new array by applying a function to each element.
 * - filter(): Creates a new array with elements that pass a specified condition.
 * - reduce(): Reduces an array to a single value by applying a function to each element.
 */
