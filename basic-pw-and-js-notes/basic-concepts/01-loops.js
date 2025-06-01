/**
 * 🔁 for loop – Classic Loop
    ➤ Kab Use Karein?
        Jab tujhe kisi ka index chahiye ho, ya tujhe kisi loop ko specific number of times run karna ho.

    📌 Syntax:
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
    
    ✅ Use Case:
        Array access by index
        Loop N times

🧪 Example:
 */

let fruits = ['Apple', 'Banana', 'Cherry', 'Date'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

/**
 * Output - 
 * Apple
   Banana
   Cherry
   Date
 */

console.log("-------------------");

/**
 * 🌀 for...in loop – Loop through Object Keys
    ➤ Kab Use Karein?
        Jab tujhe kisi object ke keys (property names) chahiye ho.

    📌 Syntax:
    for (let key in object) {
        console.log(key, object[key]);
    }
    
    ✅ Use Case:
        Loop through object keys
        Use with non-array objects

    ⚠️ Caution:
        Don't use it with arrays — kyunki for...in index ko string ke form mein deta hai, aur order guarantee nahi karta.


    🧪 Example:
 */

let person = {
    name: 'John',
    age: 30,
    city: 'New York'
}

for (let key in person) {
    console.log(key,' : ', person[key]);
}

/**
name  :  John
age  :  30
city  :  New York
 */

console.log("-------------------");

/**
 * 🔄 for...of loop – Loop through Iterable Items
   ➤ Kab Use Karein?
       Jab tujhe kisi iterable cheez (like Array, String, Map, Set) ke values chahiye ho.

📌 Syntax:
for (let value of iterable) {
  console.log(value);
}

✅ Use Case:
    Loop through values of an array
    Loop through characters of a string
    Use with Map, Set, arguments

🧪 Example:
 */

let newFruits = ["apple", "banana", "mango"];

for (let fruit of newFruits) {
  console.log(fruit);
}

/**
apple
banana
mango
 */

// 🔁 Summary Table
/**
 | Loop Type  | Use On                             | Iterates Over         | Use Case Example           |
| ---------- | ---------------------------------- | --------------------- | -------------------------- |
| `for`      | Array                              | Indexes               | Fixed length iterations    |
| `for...in` | Object                             | Keys (property names) | Loop through object keys   |
| `for...of` | Iterable (Array, String, Map, Set) | Values                | Get array or string values |

Bhai, agar tu beginner hai, toh:

🔹 for loop — jab index zaroori ho
🔹 for...in — sirf objects ke keys ke liye
🔹 for...of — arrays, strings, sets, maps ke values ke liye best hai

 */

console.log("-------------------");

// 🔡 String using for...of

let text = "Hello World";

for (let char of text) {
    console.log(char);
}

/**
H
e
l
l
o
 
W
o
r
l
d
 */

/**
 * while and do...while loops - pending do it later
 */