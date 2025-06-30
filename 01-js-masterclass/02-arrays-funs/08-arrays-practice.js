/**
 * push(): Adds one or more elements to the end of an array and returns the new length of the array.
 */
console.log("--------------- push demo --------------------")

let fruits = ["apple", "banana"];
console.log(fruits.push("orange"));  // 3
console.log(fruits);                 // ["apple", "banana", "orange"]
console.log(fruits.push("kiwi", "mango"));  // 5
console.log(fruits);                 // ["apple", "banana", "orange", "kiwi", "mango"]

console.log()

/**
 * pop(): Removes the last element from an array and returns that element.
 * pop() always removes just one element — the last one.
 * If the array is empty, pop() returns undefined.
 */
console.log("--------------- pop demo --------------------")

let removedFruit = fruits.pop(); 
console.log("removedFruit - ", removedFruit);     // removedFruit -  mango
console.log(fruits);                              // ["apple", "banana", "orange", "kiwi"]

console.log()

/**
 * shift(): Removes the first element from an array and returns that element. 
 *          This method changes the length of the array
 */
console.log("--------------- shift demo --------------------")

let firstFruit = fruits.shift();
console.log("firstFruit - ", firstFruit);         // firstFruit -  apple
console.log(fruits);                              // ["banana", "orange", "kiwi"]

console.log()

/**
 * unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
 */
console.log("--------------- un-shift demo --------------------")

console.log(fruits);                                                  // ["banana", "orange", "kiwi"]
console.log(fruits.unshift("kiwi","mango", "tomato"));               // 6
console.log(fruits);                                       // [ 'kiwi', 'mango', 'tomato', 'banana', 'orange', 'kiwi' ]

console.log()

/**
 * splice(): Adds/removes items to/from an array, starting from a specific index
 * 🔧 splice() kya karta hai?
 *      JavaScript me splice() ek multi-tool hai — isse:
 *          - Element hata sakte ho
 *          - Naye element daal sakte ho
 *          - Hata bhi sakte ho + daal bhi sakte ho (replace)
 * 
 * 📘 Syntax: array.splice(startIndex, deleteCount, item1, item2, ...)
 * | Part               | Matlab                        |
| ------------------ | ----------------------------- |
| `startIndex`       | Kahan se operation start hoga |
| `deleteCount`      | Kitne element hatane hain     |
| `item1, item2,...` | Kya-kya daalna hai (optional) |

1️⃣ Sirf hataana (delete only)

let fruits = ["apple", "banana", "cherry"];
fruits.splice(1, 1);
console.log(fruits); // ["apple", "cherry"]

👉 Index 1 se 1 element hata diya → "banana" gayab

2️⃣ Sirf daalna (insert only)

let fruits = ["apple", "cherry"];
fruits.splice(1, 0, "banana");
console.log(fruits); // ["apple", "banana", "cherry"]

👉 Index 1 pe kuch delete nahi kiya (0 diya), bas "banana" daal diya

3️⃣ Replace karna (delete + insert)

let fruits = ["apple", "banana", "cherry"];
fruits.splice(1, 1, "kiwi");
console.log(fruits); // ["apple", "kiwi", "cherry"]

👉 "banana" hata ke usi jagah "kiwi" daal diya

4️⃣ Multiple elements hataana

let fruits = ["apple", "banana", "cherry", "mango"];
fruits.splice(1, 2);
console.log(fruits); // ["apple", "mango"]

👉 Index 1 se "banana" aur "cherry" dono hata diye

5️⃣ Multiple elements daalna

let fruits = ["apple", "mango"];
fruits.splice(1, 0, "banana", "cherry");
console.log(fruits); // ["apple", "banana", "cherry", "mango"]

👉 Index 1 pe kuch delete nahi kiya, bas "banana" aur "cherry" insert kar diye

6️⃣ Multiple replace (multi delete + multi insert)

let fruits = ["apple", "banana", "cherry", "mango"];
fruits.splice(1, 2, "kiwi", "grapes");
console.log(fruits); // ["apple", "kiwi", "grapes", "mango"]

👉 "banana" + "cherry" remove, unki jagah "kiwi" + "grapes" daal diye

🧠 Bonus Tip:
splice() original array ko change karta hai (mutates), koi naya array nahi deta.
Agar tumhe naya array chahiye bina original ko chhede, to slice() use karo.

✅ Return type of splice() is an array - Specifically, it returns an array of the removed elements.

let fruits = ["apple", "banana", "cherry", "mango"];
let removed = fruits.splice(1, 2);

console.log(removed); // ["banana", "cherry"]
console.log(fruits);  // ["apple", "mango"]

🔁 Example – Insert only:

let arr = [1, 2, 3];
let out = arr.splice(1, 0, 9);  // insert only

console.log(out);  // []
console.log(arr);  // [1, 9, 2, 3]
❗Even if nothing is removed, return type is always an array (here, empty [])





 */

console.log("--------------- splice demo --------------------")