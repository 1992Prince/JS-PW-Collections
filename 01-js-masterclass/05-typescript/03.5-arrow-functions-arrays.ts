
const multiplyarrow = (x: number, y: number): number => x * y;

const val1 = multiplyarrow(100, 100);
console.log(val1); // 10000

console.log();


// ------------------------------------------
// function overloading
// ------------------------------------------

function combine(a: string, b: string): string;
function combine(a: number, b: number): number;

function combine(a: any, b: any): any {
    return a + b;
}

console.log(combine("Holla ", "again")); // Holla again
console.log(combine(100, 2000));         // 2100
// console.log(combine("100", 2000));    //CE error


// Control Flow Statements
// if-else, switch, break, continue

// arrays
// 🔹 1. Empty Array
// Example A: Without type
let arr = [];
// TypeScript ise any[] maan lega (kuch bhi daal sakte ho).
arr.push(10);       // OK
arr.push("hello");  // OK

// Example B: With type
let numbers5: number[] = [];
numbers5.push(1);     // ✅
// numbers5.push("hi");  // ❌ Error

// Loops - for loop, while, do -while loop, , foreach loop for arrays

const fruits1 = ["Apple", "Banana", "Mango"];
fruits1.forEach((fruit) => {
    console.log(`I love : ${fruit}`);
});

/**
I love : Apple
I love : Banana
I love : Mango
 */

console.log();

fruits1.forEach((fruit, index) => {
    console.log(`${fruit} is at index ${index}`);
});

/**
Apple is at index 0
Banana is at index 1
Mango is at index 2
 */


console.log();

// Arrays in JS - arrays are 0 index based

const array1: number[] = [1, 2, 3, 4, 5];
// print array length
console.log(`array1.length - ${array1.length}`);  // array1.length - 5
console.log(`array type: ${typeof array1}`);      // array type: object
console.log("array1 is : ", array1);              // array1 is :  [ 1, 2, 3, 4, 5 ]
console.log(`array1 is ${array1}`);               // array1 is 1,2,3,4,5

// to check is given obj is array or not
console.log("Array.isArray(array1): - ", Array.isArray(array1)); // Array.isArray(array1): -  true

console.log();

console.log("array1[0] : ", array1[0]); // 1
console.log("array1[20]: ", array1[20]); // undefined
array1[0] = 100;
// array1[1] = "pikachu"; // CE Error - Type 'string' is not assignable to type 'number'.
console.log("array1[0] : ", array1[0]) // 100

console.log();

// creating array of size 10
const numbers1: number[] = new Array(10);

numbers1[0] = 101;
numbers1[8] = 1001;
console.log("numbers1: ", numbers1); // numbers1:  [ 101, <7 empty items>, 1001, <1 empty item> ]

console.log();

// any[] / unknown[] → kuch bhi allowed (not strict)
// array elements of any type
const array2: any[] = [10, 20, "pikachu", "alpha"];
// array elements of unknown type
const array3: unknown[] = [10, 20, "pikachu", "alpha"];

// 🔹 1. Union Type Array
//➡️ Isme sirf string ya number hi allowed hai.
//✅ "test", 100
//❌ true, {} (error aayega)
const array4: (string | number)[] = [1, "hello", 42, "world"];

// 2. Using Array<...> Generic Syntax
const array5: Array<string | number> = ["A", 1, "B", 2]; // ➡️ Same cheez, bas doosra syntax.

/**
⚖️ Summary

    number[] → sirf numbers
    string[] → sirf strings
    (string | number)[] → mix of strings and numbers (but only these two)
    any[] / unknown[] → kuch bhi allowed (not strict)
    Tuple [string, number] → exact position/type fix
 */


console.log();

// loops in arrays : 1) normal for loop, 2) of loop

for (const fruit of fruits1) {
    console.log(fruit);
}

/**
Apple
Banana
Mango
 */