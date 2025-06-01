// creating array with lenght 6 to store subject marks
let marks = Array(6)

marks[0] = 100;

console.log("marks - ", marks);                      // marks -  [ 100, <5 empty items> ]
console.log("marks length - ", marks.length);        // marks length -  6
console.log()

// creating array with values
let subMarks = new Array(20, 40, 35, 12, 37, 100)

console.log("subMarks - ", subMarks);               // subMarks -  [ 20, 40, 35, 12, 37, 100 ]
console.log("subMarks length - ", subMarks.length); // subMarks length -  6
console.log()

// add new element to array
subMarks.push(45);
console.log("subMarks - ", subMarks, "subMarks.length - ", subMarks.length);

/*
subMarks -  [
  20,  40, 35, 12,
  37, 100, 45
] subMarks.length -  7
*/

console.log()

// remove last element from array end
subMarks.pop();
console.log("subMarks - ", subMarks, "subMarks.length - ", subMarks.length);
//  subMarks -  [ 20, 40, 35, 12, 37, 100 ] subMarks.length -  6

console.log()
// add new element to array start
subMarks.unshift(12);
console.log("subMarks - ", subMarks, "subMarks.length - ", subMarks.length);

/**
 * subMarks -  [
  12, 20,  40, 35,
  12, 37, 100
] subMarks.length -  7
 */

console.log()

// get index of element
console.log("subMarks.indexOf(12) - ", subMarks.indexOf(12)); // subMarks.indexOf(12) -  0

console.log()
console.log()

/**
 * Creating subArray from existing array
 * 
 * In JavaScript, the slice() method is used to create a shallow copy of a part of an array into a new array. 
 * It takes two parameters: the start index (inclusive) and the end index (exclusive). 
 * If no end index is provided, it will slice until the end of the array.
 * 
 * It returns a new array containing the selected elements.
 */

// Example array
const fruits = ["apple", "banana", "orange", "grape", "mango"];

// Slice from index 1 to 3 (end index is exclusive)
const slicedFruits = fruits.slice(1, 3);

console.log(slicedFruits);  // Output: ["banana", "orange"]



