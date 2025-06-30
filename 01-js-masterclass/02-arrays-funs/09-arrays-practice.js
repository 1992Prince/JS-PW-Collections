/**
 * 6. slice(): Returns a shallow copy of a portion of an array into a new array, 
 *             selected from start to end (end not included)
 * 
 * 🔪 slice() — Naam hi kaafi hai

Kaam: Array (ya string) ka ek tukda (slice) nikaal ke deta hai — original array ko chhedta nahi.

📘 Syntax: array.slice(startIndex, endIndex)

    startIndex: Kahan se slice karna start karna hai (include hota hai)
    endIndex: Kahan tak slice karna hai (exclude hota hai)

    Return hota hai ek naya array

✅ Examples & Use-Cases - 

1️⃣ Simple Slice

let fruits = ["apple", "banana", "cherry", "mango"];
let sliced = fruits.slice(1, 3);

console.log(sliced); // ["banana", "cherry"]
console.log(fruits); // ["apple", "banana", "cherry", "mango"]

✅ Original array as it is
✅ Sliced result = index 1 to 2 (end index 3 is not included)


2️⃣ Only start index (upto end - here we don't specify endIndex and so it takes the rest of the array)

let fruits = ["apple", "banana", "cherry", "mango"];
let part = fruits.slice(2);

console.log(part);   // ["cherry", "mango"]

👉 Bas start index diya → 2 se end tak slice kar diya

3️⃣ Negative Index

let fruits = ["apple", "banana", "cherry", "mango"];
let lastTwo = fruits.slice(-2);

console.log(lastTwo); // ["cherry", "mango"]

❗ Negative index = count from end
-1 = last item, -2 = second last, etc.

4️⃣ Slice with strings too!
let str = "hello world";
let sliced = str.slice(0, 5);

console.log(sliced); // "hello"

💡 slice() strings pe bhi kaam karta hai

if we are using slice on a string, then its return type will be a string, not an array.


 */

/**
 * 🔄 Difference: slice() vs splice()
 * | Feature        | `slice()`                  | `splice()`                        |
| -------------- | -------------------------- | --------------------------------- |
| Mutates array? | ❌ Nahi (original safe)     | ✅ Haan (original change hota hai) |
| Return         | Naya sliced array          | Deleted elements ka array         |
| Use            | View or copy part of array | Modify array (add/remove/replace) |

🧠 Summary:
slice() = safe copy banata hai array ka
Original ko nahi chhedta
End index excluded hota hai
String pe bhi chal jaata hai
 */

/**
 * concat(): Merges two or more arrays and returns a new array.
 */

console.log("---------------- concat() - Merging arrays ----------------");
let fruits = ["apple", "banana"];
let moreFruits = ["orange", "kiwi"];
let allFruits = fruits.concat(moreFruits);  
console.log(allFruits);  // Output: ["apple", "banana", "orange", "kiwi"]

console.log();

let fruits2 = ["apple", "banana","mango"];
let fruits3 = ["mango","apple", "banana"];
let allFruits2 = fruits2.concat(fruits3); 
console.log(allFruits2);  // Output: ["apple", "banana", "mango", "mango", "apple", "banana"]

console.log();

/**
 * indexOf(): Returns the first index at which a given element is found in the array, 
 *            or -1 if it is not found
 */
console.log("---------------- indexOf() ----------------");

let fruits4 = ["apple", "banana", "orange"];
let index1 = fruits4.indexOf("banana");  
let index2 = fruits4.indexOf("vodka");  
console.log(index1," ",index2);  // 1   -1

console.log();

/**
 *  includes(): Determines whether an array includes a certain value among its entries, returning true or false
 */

let hasBanana = fruits4.includes("banana");  
console.log(hasBanana);  // Output: true

console.log();

/**
 * forEach(): Executes a provided function once for each array element.
 */
console.log("---------------- forEach() ----------------");
let fruits5 = ["apple", "banana", "orange"];
fruits5.forEach(fruit => console.log(fruit));

/**
 * apple
 * banana
 * orange
 */
