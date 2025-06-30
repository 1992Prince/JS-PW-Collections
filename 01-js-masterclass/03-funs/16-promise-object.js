/**
 * What we are going to learn:
 * 1) What is a Promise?
 * 2) How to create a Promise?
 * 3) How to handle a Promise?
 * 4) Promise States
 * 5) Examples of Success Promises and Failure Promises
 * 
 * 
 * Promises
 * Definition: A promise is an object representing the eventual completion or failure of an 
 * asynchronous operation. 
 * It provides methods to handle success (.then()) and failure (.catch()).
 *
 * 
 * A Promise is a JavaScript object used to handle asynchronous operations like:
 *   - Waiting for a file to load
 *   - Getting a response from a server
 *   - Doing delayed work (like timeout)
 * 
 * It provides methods to handle success (.then()) and failure (.catch()).
 * 
 * Jab async operation successful hota hai to `resolve()` call hota hai,
 * aur agar async operation fail ho jaye to `reject()` call hota hai.
 * 
 * `then()` method ko use karke hum success handle karte hain,
 * aur `catch()` method se failure handle karte hain.
 * 
 *
 * 🔹 It helps avoid callback hell and gives a cleaner way to handle:
 *   ✅ Success (resolve)
 *   ❌ Failure (reject)
 *
 * 🔸 Syntax to Create a Promise
 *
 * let myPromise = new Promise((resolve, reject) => {
 *     // async task here
 *     // if success:
 *     resolve("Success value");
 *
 *     // if failure:
 *     reject("Error value");
 * });
 *
 * 🔸 Promise States
 * Every promise has 3 possible states:
 * | State       | Meaning                                     |
 * | ----------- | ------------------------------------------- |
 * | `pending`   | Initial state, operation is running         |
 * | `fulfilled` | Operation completed successfully (resolved) |
 * | `rejected`  | Operation failed (rejected)                 |
 */


// Note - In below examples of Promises, we are not creating any real asynchronous tasks for now
//        Here we are only focusing on the structure of Promises and how to handle them.


// 🔸 Promise Example: Success Only
// 🛠 Yahan banaya:
// new Promise(...) — yeh line ek Promise object banati hai.
// resolve() ya reject() ke through bataya jata hai ki kaam safal hua ya fail.
const successPromise = new Promise((resolve, reject) => {
    resolve("✅ Success: Data mil gaya!");
});

// 🔹 Jab Promise handle karte hain:
// 🔧 Yahan handle kiya:
// .then() → jab resolve() chalta hai (success handle)
// .catch() → jab reject() chalta hai (failure handle)

successPromise
    .then((result) => {
        console.log(result); // ✅ Success: Data mil gaya!
    });

console.log("");

// 🔸 Promise Example: Failure Only
const failurePromise = new Promise((resolve, reject) => {
    reject("❌ Error: Server down hai!");
});

failurePromise
    .then((result) => {
        console.log("Success:", result);
    })
    .catch((error) => {
        console.log("Failure:", error); // ❌ Error: Server down hai!
    });

console.log("");


// 🔸 Promise Example: Both (Success or Failure based on condition)
const conditionalPromise = new Promise((resolve, reject) => {
    const kaamHua = Math.random() > 0.5; // 50-50 chance

    if (kaamHua) {
        resolve("✅ Kaam ho gaya!");
    } else {
        reject("❌ Kaam fail ho gaya!");
    }
});

conditionalPromise
    .then((result) => {
        console.log("Success:", result);
    })
    .catch((error) => {
        console.log("Failure:", error);
    });


