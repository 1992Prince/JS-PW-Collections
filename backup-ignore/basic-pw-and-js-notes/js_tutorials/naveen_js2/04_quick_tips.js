// File: utilitiesAndTricks.js

// 1. Find Unique Values from Array
console.log("------ 1. Find Unique Values from Array ------");
const array = [1, 1, 1, 22, 22, 33, 33, 111, 111, 45];

// Spread operator (`...`) with Set removes duplicate values
const uniqueArray = [...new Set(array)];
console.log("Unique values are:", uniqueArray); // [ 1, 22, 33, 111, 45 ]

console.log();

// 2. Convert Integer to String
console.log("------ 2. Convert Integer to String ------");
const num = 12345;

// Using concatenation
const numStr = num + "";
console.log("Using + '':", numStr, typeof numStr); // numStr - 12345 string

// Using String() method
const numStrAlt = String(num);
console.log("Using String():", numStrAlt, typeof numStrAlt); // numStrAlt - 12345 string

console.log();

// 3. Concatenating Integer with Strings
console.log("------ 3. Concatenating Integer with Strings ------");
const x = 12345;
const numStr2 = x + "0";
console.log("Concatenated value:", numStr2, typeof numStr2); // numStr2 - 123450 string

console.log();

// 4. Convert Float to Integer
console.log("------ 4. Convert Float to Integer ------");
const floatNum = 12.345;
const intNum = parseInt(floatNum);
console.log("Integer value:", intNum, typeof intNum); // intNum - 12 number

console.log();

// 5. Check if Variable is Number
console.log("------ 5. Check if Variable is Number ------");
const var1 = 12345;
if (typeof var1 === "number" && !isNaN(var1)) {
    console.log("Yes, the value is a number."); // Yes, the value is a number.
}

console.log();

// 6. Swap Two Variables
console.log("------ 6. Swap Two Variables ------");
let a = 10;
let b = 20;
[a, b] = [b, a];
console.log("After swapping: a =", a, "b =", b); // a = 20, b = 10

console.log();

// 7. Check if Object Has Specific Property
console.log("------ 7. Check if Object Has Specific Property ------");
const person = { name: "John", age: 30 };

if (person.hasOwnProperty("age")) {
    console.log("The person object has the property - age."); // person have property - age
}

console.log();

// 8. Remove Falsey Values from Array
console.log("------ 8. Remove Falsey Values from Array ------");
const values = [0, 1, false, 2, "", "", null, false, 10, NaN, "mirror", 0, false];

// Filter removes falsey values: false, 0, "", null, undefined, NaN
const newValuesArr = values.filter(Boolean);
console.log("Array after removing falsey values:", newValuesArr); // [ 1, 2, 10, 'mirror' ]

console.log();

// 9. String: Uppercase and Lowercase
console.log("------ 9. String: Uppercase and Lowercase ------");
const str1 = "hello world";
const str2 = str1.toUpperCase();
const str3 = str1.toLowerCase();
console.log(`Original: ${str1}, Uppercase: ${str2}, Lowercase: ${str3}`);
// Original: hello world, Uppercase: HELLO WORLD, Lowercase: hello world

console.log();

// 10. Check if Array Contains Specific Value
console.log("------ 10. Check if Array Contains Specific Value ------");
const lang = ["java", "js", "node", "c++"];

if (lang.includes("c++")) {
    console.log("The array contains the value 'c++'."); // lang is present
}

console.log();

// 11. Check if Array is Empty
console.log("------ 11. Check if Array is Empty ------");
const emptyArr = [];
if (emptyArr.length === 0) {
    console.log("The array is empty."); // Array is empty
}

console.log();

// 12. Generate Random Number Between 1 and 100
console.log("------ 12. Generate Random Number Between 1 and 100 ------");
const randomNum = Math.floor(Math.random() * 100) + 1;
console.log("Random number:", randomNum); // Example output: Random number - 45

console.log();

// 13. Convert String to Number
console.log("------ 13. Convert String to Number ------");
const str1Num = "1234";
const x3 = parseFloat(str1Num);
console.log("Converted value:", x3, typeof x3); // x3 - 1234 number
