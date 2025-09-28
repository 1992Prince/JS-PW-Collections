/**
 * 
 🔹 1. Array.isArray()

Array.isArray(value) check karta hai ki jo value hai wo array hai ya nahi.
Agar array hai → true return karega
Agar array nahi hai → false return karega
 */

// 1. Simple check

console.log(Array.isArray([1, 2, 3]));   // true
console.log(Array.isArray("hello"));     // false
console.log(Array.isArray({ a: 1 }));    // false

console.log();

// 2. With variables

let nums = [10, 20, 30];
let str = "TypeScript";

console.log(Array.isArray(nums)); // true
console.log(Array.isArray(str));  // false

console.log();

// 3. With null and undefined

console.log(Array.isArray(null));      // false
console.log(Array.isArray(undefined)); // false


console.log();

// 4. With new Array()

let arr = new Array(5); // empty array of length 5
console.log(Array.isArray(arr)); // true
