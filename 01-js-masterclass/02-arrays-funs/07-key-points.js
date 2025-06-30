// find(): Returns the first element in the array that satisfies the provided testing function
// ❓ What if it doesn't find anything? - 🔴 Returns: undefined

let numbers = [5, 12, 8, 130, 44];
let found = numbers.find((num) => num > 10);
console.log(found); // Output: 12

console.log();

// findIndex(): Returns the index of the first element in the array that satisfies the provided testing function.
//              Otherwise, it returns - 1.
let foundIndex = numbers.findIndex((num) => num > 10);
console.log(foundIndex); // Output: 1

console.log();

// reverse(): Reverses the elements of an array in place.
//            The first array element becomes the last, and the last becomes the first.

let fruits = ['apple', 'banana', 'orange'];
fruits.reverse();
console.log(fruits); // Output: ["orange", "banana", "apple"]

let numbers2 = [1, 2, 3, 4, 5];
numbers2.reverse();
console.log(numbers2); // Output: [5, 4, 3, 2, 1]

console.log();

// ✅ 1. Sorting Strings Alphabetically (A → Z)
// sort(): Sorts the elements of an array in place and returns the sorted array.
//  JavaScript by default sorts strings lexicographically (dictionary order), so no custom function needed.
let fruits1 = ['banana', 'apple', 'orange'];
fruits1.sort();
console.log(fruits1); // Output: ["apple", "banana", "orange"]

const names = ['Ravi', 'Amit', 'Neha'];

names.sort(); // Default is fine for strings
console.log(names);
// Output: [ 'Amit', 'Neha', 'Ravi' ]

/**
⚡ Bonus: Case-insensitive String Sort
const names = ['ravi', 'Amit', 'neha'];

names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(names); 
// Output: [ 'Amit', 'neha', 'ravi' ]

 */

console.log();

// ✅ 2. Sorting Numbers in Ascending Order (Low → High)
//  Use (a, b) => a - b for numeric ascending sort.
const numbers1 = [5, 20, 3, 100];

numbers1.sort((a, b) => a - b);
console.log(numbers1);
// Output: [ 3, 5, 20, 100 ]

console.log();

// ✅ 3. Sorting Numbers in Descending Order (High → Low)
// 🔸 Use (a, b) => b - a for numeric descending sort.

const numbers3 = [5, 20, 3, 100];

numbers3.sort((a, b) => b - a);
console.log(numbers3);
// Output: [ 100, 20, 5, 3 ]

/**
 * Reason Y we should not use sort() method without args with numbers
 * JavaScript .sort() Default Behavior: array.sort()
 * By default, sort() converts everything to strings and then compares lexicographically (dictionary order).
 * Ye behavior strings ke liye perfect hai, numbers ke liye problem create karta hai.
 * 
 * ⚠️ Always Remember:
❗ Never trust .sort() alone with numbers
❗ Always give a compare function for numeric sorting


 */
