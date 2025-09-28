// sorting array of strings 
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits); // [ 'Apple', 'Banana', 'Mango', 'Orange' ]

console.log()
console.log()

/**
 * sort() method only sort Strings and not numbers
 * 
 * sort() converts elements to strings and sorts them lexicographically 
 * (i.e., based on character Unicode code points), which can lead to incorrect results when sorting numbers.
 * 
 * To properly sort numbers, you need to provide a comparator function to the sort() method.
 */

// Example 1: Sorting Numbers in Ascending Order
const numbers = [40, 100, 1, 5, 25, 10];

// Use a comparator function to sort numbers in ascending order
numbers.sort((a, b) => a - b);

console.log("sorted nums - ", numbers);  // Output: [1, 5, 10, 25, 40, 100]


console.log()
console.log()


// Use a comparator function to sort numbers in descending order

const nums = [40, 100, 1, 5, 25, 10];
nums.sort((a, b) => b - a);
console.log("sorted nums in descending order - ", nums); //  [ 100, 40, 25, 10, 5, 1 ]

console.log()
console.log()


// Using reverse() to Reverse an Array

const numbers2 = [1, 2, 3, 4, 5];
numbers2.reverse();
console.log("reversed array - ", numbers2);  // Output: [5, 4, 3, 2, 1]

