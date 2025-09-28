/*
📚 Array Basics & Functions Roadmap
1. Array Basics

        What is an Array?

        Declaring Arrays in TypeScript

        Array Type Annotations

        Array Initialization

        Array Indexing & Access

        Array Length

        Iterating over Arrays (for, for…of, forEach, etc.)

🔹 1. What is an Array?

An array is a data structure used to store multiple values in a single variable.
In TypeScript, arrays are typed, meaning you can specify the type of elements they hold.
*/

//🔹 2. Declaring Arrays in TypeScript
// You can declare arrays in two main ways:

// 1. Using square brackets
let numbers: number[] = [1, 2, 3];

// 2. Using generic Array type
let fruits: Array<string> = ["apple", "banana", "mango"];

// ✅ Both ways are equivalent; choose whichever style you prefer.

// 🔹 3. Array Initialization

let emptyArray: number[] = [];         // Empty array
let scores: number[] = [10, 20, 30];   // Initialized array

// You can also set a fixed size (but TypeScript doesn’t enforce length at runtime):

let fixedSizeArray: number[] = new Array(5);
console.log(fixedSizeArray); // [ <5 empty items> ]


// 🔹 4. Array Indexing & Access
//  Arrays are zero-indexed:

let colors: string[] = ["red", "green", "blue"];
console.log(colors[0]);  // red
console.log(colors[2]);  // blue

// You can update elements by index:
colors[1] = "yellow";
console.log(colors); // ["red", "yellow", "blue"]

console.log();

// 🔹 5. Array Length
//  Use .length to get or set size:

console.log(colors.length); // 3

colors.length = 2;
console.log(colors); // ["red", "yellow"]


console.log();

//🔹 6. Iterating Over Arrays

//There are several ways:

let nums = [10, 20, 30];

console.log("--------- 1. Traditional for loop  -----------")
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}

console.log();


console.log("--------- 2. for...of loop  -----------")
for (let num of nums) {
    console.log(num);
}

console.log();


console.log("--------- 3. forEach method  -----------")
nums.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
});

/**
 * --------- 3. forEach method  -----------
Index 0: 10
Index 1: 20
Index 2: 30
 */

console.log()


// Check if It’s an Array
// Use Array.isArray():
console.log(Array.isArray(colors)); // true

console.log();

// typeof an Array
console.log(typeof colors); // "object"

console.log();

// 💡 In JavaScript/TypeScript, arrays are objects, so typeof returns "object".
// That’s why Array.isArray() is the proper way to check if something is an array.


// Check If Array Is Not Null and Safe to Use
if (colors && Array.isArray(colors)) {
    console.log("It's a valid array");
}

//This ensures:
// fruits is not null or undefined.
// fruits is actually an array.

console.log();

// 🔹 5. Compare Text Inside Array
// We can check if an element exists using .includes():
if (colors.includes("banana")) {
    console.log("Banana is in the array!");
} else {
    console.log("Banana not found.");  // Banana not found.
}

console.log();

// 🔹 Full Example

let fruits2: string[] | null = ["apple", "banana", "mango"];
// This means:
//  fruits2 can be an array of strings (string[])
//  OR it can be null

if (fruits2 && Array.isArray(fruits2)) {
    console.log("Valid array");                  // ✅
    console.log(typeof fruits);                  // "object"

    if (fruits2.includes("banana")) {
        console.log("Banana is present!");         // ✅
    }
}




/*

        Tuples vs Arrays (difference)

2. Adding & Removing Elements

        push() – Add to end

        pop() – Remove from end

        unshift() – Add to start

        shift() – Remove from start

        splice() – Add/remove at specific index

        slice() – Copy a portion of an array

3. Searching & Checking

        indexOf() – Find index of an element

        lastIndexOf() – Find last index

        includes() – Check if value exists

        find() – Get first matching element

        findIndex() – Get index of first match

        some() – Check if any element passes condition

        every() – Check if all elements pass condition

4. Transforming Arrays

        map() – Transform each element

        filter() – Keep elements based on condition

        reduce() – Reduce array to a single value

        reduceRight() – Reduce from right to left

        flat() – Flatten nested arrays

        flatMap() – Map & flatten in one step

5. Sorting & Reordering

        sort() – Sort elements

        reverse() – Reverse order

        fill() – Fill with a value

        copyWithin() – Copy elements within array

6. Joining & Splitting

        join() – Join array into string

        toString() – Convert array to string

7. Iteration Utilities

        forEach() – Loop through elements

        keys() – Get array keys

        values() – Get array values

        entries() – Get key/value pairs

8. TypeScript Specific Features

        Readonly Arrays (readonly T[])

        Generic Arrays (Array<T>)

        Type Inference in Arrays

        Tuples in TypeScript

9. Other Handy Methods

        Array.from() – Create from iterable

        Array.of() – Create from arguments

        Spread Operator (...) with Arrays

        Destructuring Arrays

        Array.isArray() – Check if value is array
*/