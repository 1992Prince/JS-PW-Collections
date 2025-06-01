// JavaScript Arrays: Detailed Overview and Examples

/**
 * An Array in JavaScript is a special type of object used to store multiple values in a single variable.
 * Arrays can store elements of different data types, including numbers, strings, objects, and even other arrays.
 */

// Example: Creating Arrays
const fruits = ["apple", "banana", "cherry"];
const mixedArray = [42, "Hello", { name: "Alice" }, [1, 2, 3]];

console.log(fruits); // Output: [ 'apple', 'banana', 'cherry' ]
console.log(mixedArray); // Output: [ 42, 'Hello', { name: 'Alice' }, [ 1, 2, 3 ] ]

/**
 * Important Array Methods in JavaScript:
 */

// 1. length: Get the length of the array
console.log(fruits.length); // Output: 3

// 2. push(): Add one or more elements to the end of the array
fruits.push("orange");
console.log(fruits); // Output: [ 'apple', 'banana', 'cherry', 'orange' ]

// 3. pop(): Remove the last element from the array
const lastFruit = fruits.pop();
console.log(lastFruit); // Output: orange
console.log(fruits); // Output: [ 'apple', 'banana', 'cherry' ]

// 4. unshift(): Add one or more elements to the beginning of the array
fruits.unshift("grape");
console.log(fruits); // Output: [ 'grape', 'apple', 'banana', 'cherry' ]

// 5. shift(): Remove the first element from the array
const firstFruit = fruits.shift();
console.log(firstFruit); // Output: grape
console.log(fruits); // Output: [ 'apple', 'banana', 'cherry' ]

// 6. indexOf(element): Find the index of the first occurrence of an element
console.log(fruits.indexOf("banana")); // Output: 1 
console.log(fruits.indexOf("mango")); // Output: -1 (not found)

// 7. includes(element): Check if the array contains a specific element
console.log(fruits.includes("cherry")); // Output: true
console.log(fruits.includes("mango")); // Output: false

// 8. splice(start, deleteCount, items...): Remove or add elements at a specific index
// Removing 1 element at index 1
fruits.splice(1, 1);
console.log(fruits); // Output: [ 'apple', 'cherry' ]

// Adding 2 elements at index 1
fruits.splice(1, 0, "banana", "orange");
console.log(fruits); // Output: [ 'apple', 'banana', 'orange', 'cherry' ]

// 9. slice(start, end): Extract a section of the array without modifying the original array
const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Output: [ 'banana', 'orange' ]
console.log(fruits); // Output: [ 'apple', 'banana', 'orange', 'cherry' ]

// 10. concat(): Concatenate two or more arrays
const vegetables = ["carrot", "broccoli"];
const food = fruits.concat(vegetables);
console.log(food); // Output: [ 'apple', 'banana', 'orange', 'cherry', 'carrot', 'broccoli' ]

// 11. join(separator): Join all elements of an array into a string
const fruitString = fruits.join(", ");
console.log(fruitString); // Output: apple, banana, orange, cherry

// 12. reverse(): Reverse the order of elements in the array
fruits.reverse();
console.log(fruits); // Output: [ 'cherry', 'orange', 'banana', 'apple' ]

// 13. sort(): Sort the elements of an array
const numbers = [42, 7, 13, 100, 25];
numbers.sort();
console.log(numbers); // Output: [ 100, 13, 25, 42, 7 ] (lexicographical order)

// Sorting numbers in ascending order
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [ 7, 13, 25, 42, 100 ]

// 14. map(): Create a new array by applying a function to each element of the original array
const numbersDoubled = numbers.map(num => num * 2);
console.log(numbersDoubled); // Output: [ 14, 26, 50, 84, 200 ]

// 15. filter(): Create a new array with only the elements that pass a condition
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [ 42, 100 ]

// 16. reduce(): Reduce the array to a single value by applying a function to each element
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // Output: 187

// 17. forEach(): Execute a provided function once for each array element
numbers.forEach(num => console.log(num));
// Output:
// 7
// 13
// 25
// 42
// 100

/**
 * Iterating Over Arrays in JavaScript:
 */

// 1. Using a for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Output:
// cherry
// orange
// banana
// apple

// 2. Using for...of loop
for (const fruit of fruits) {
    console.log(fruit);
}
// Output:
// cherry
// orange
// banana
// apple

// 3. Using forEach method
fruits.forEach(fruit => console.log(fruit));
// Output:
// cherry
// orange
// banana
// apple

/**
 * Best Practices for Working with Arrays:
 * - Use const when declaring arrays that do not need to be reassigned. This prevents accidental reassignment.
 * - Use descriptive variable names that convey the contents or purpose of the array.
 * - Avoid using for loops for array iteration when higher-order functions like forEach, map, filter, or reduce are available. These methods are more readable and reduce boilerplate code.
 * - Use spread operator (...) to clone or merge arrays without modifying the original.
 */

// Example: Using the spread operator to clone an array
const clonedFruits = [...fruits];
console.log(clonedFruits); // Output: [ 'cherry', 'orange', 'banana', 'apple' ]

// Example: Merging arrays using the spread operator
const mergedArray = [...fruits, ...vegetables];
console.log(mergedArray); // Output: [ 'cherry', 'orange', 'banana', 'apple', 'carrot', 'broccoli' ]

/**
 * Summary:
 * - Arrays are one of the fundamental data structures in JavaScript used for storing multiple values.
 * - JavaScript provides a wide range of built-in methods for manipulating arrays.
 * - Using modern array methods like map, filter, and reduce makes the code more readable and easier to maintain.
 * - Proper use of array methods and iteration techniques can make your code concise and effective.
 */
