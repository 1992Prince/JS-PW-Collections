/**
 * Let's understand the importance and purpose of callback functions in JavaScript.
 *
 * 1. JavaScript is single-threaded
 *    Javascript is a single-threaded language, meaning it can only execute one task at a time
 *
 * 2. Problem without callbacks (synchronous blocking)
 * Agar hum koi slow operation synchronously karen, toh program poora ruk jayega jab tak wo operation
 * complete na ho jaye.
 *
 * Example:
 */

function waitTwoSeconds() {
  const start = Date.now();
  while (Date.now() - start < 2000) {
    // Busy wait - program yahin 2 second tak fasa rahega
  }
  console.log('2 seconds ho gaye');
}

console.log('Start');
waitTwoSeconds();
console.log('End');

// Output:
// Start
// (2 second rukega yahin)
// 2 seconds ho gaye
// End

// Problem: Yahan poora program 2 second tak freeze ho gaya.

/**
 * 3. Callback solves this problem
 *
 * Jab hum asynchronous programming karte hain (jaise setTimeout ya data fetch),
 * toh callback hume non-blocking way deta hai.
 *
 * JavaScript wo slow operation ko start karta hai (jaise timer set karna).
 * Fir wo aage badh jata hai, baaki code ko execute karta hai.
 * Jab wo operation complete ho jata hai, tab callback function ko call karta hai.
 *
 * Iska fayda?
 * Program freeze nahi hota, user interface responsive rehta hai, events handle hote hain, aur
 * performance better hoti hai.
 *
 * Example:
 */

console.log('Start');

setTimeout(function () {
  console.log('2 seconds baad');
}, 2000);

console.log('End');

// Output:
// Start
// End
// 2 seconds baad

// A callback is just a function you pass into another function.
// setTimeout takes a callback[anonymous fun as callback fun] and tells the system: 'Hey, run this after 2 seconds.'
// While that delay is going on, the rest of your code keeps running.
// After the delay, the callback is placed in the queue and
// executed when the main code is done

// Yahan kya ho raha hai?
// setTimeout ne timer start kiya aur callback[above anonymous fun as callback fun] register kiya.
// JavaScript ne timer ko background mein chalne diya, aur turant "End" print kar diya.
// 2 second baad jab timer khatam hua, tab callback call hua.

/**
 * 🔄 But where is the callback?
Here:

setTimeout(function () {
  console.log("2 seconds baad"); // <- This is your callback!
}, 2000);

That anonymous function (function without a name) is a callback function. 
It's being passed to setTimeout, which will call it later, after the timeout.



/**
 * Callback importance summary:
 * - Non-blocking behavior allow karta hai — program freeze nahi hota.
 * - Asynchronous tasks ko handle karta hai — jaise network requests, timers, file I/O.
 * - JavaScript ko responsive banata hai, especially browsers mein jaha UI lagna nahi chahiye.
 * - Ye ek tarah ka event-driven programming pattern hai.
 *
 * Conclusion:
 * Callback function JavaScript ko asynchronous, non-blocking aur efficient banate hain —
 * jisse user experience smooth aur program scalable banta hai.
 */

/**
 * Prince's understanding:
 *
 * Callback ek function hota hai jo hum dusre function ke argument ke roop mein pass karte hain,
 * aur jab wo dusra function apna kaam complete kar leta hai, tab callback function execute hota hai.
 * Isse JavaScript asynchronous tasks ko handle kar pata hai.
 *
 * JavaScript single-threaded language hai, matlab ek waqt mein sirf ek kaam karta hai aur next line tabhi
 * execute hoti hai jab current code complete ho jaye.
 * Lekin asynchronous tasks jaise timers, network requests ko handle karne ke liye callbacks
 * use kiye jaate hain, jisse program block nahi hota aur dusra code continue chal sakta hai.
 *
 * Callback ke kuch disadvantages (demerits) bhi hote hain:
 * - Callback hell: Jab bahut saare nested callbacks ek ke andar ek likhne padte hain,
 *   toh code complicated aur hard to read ho jata hai.
 * - Error handling mushkil hoti hai callbacks ke saath.
 * - Kabhi-kabhi debugging difficult ho sakti hai.
 */

/**
 * From interview point of view:
 * 
 * 
 
✅ What is a callback in JavaScript?

A callback is a function that is passed as an argument to another function and is executed later, 
either immediately (synchronous) or after some time/event (asynchronous).[often after some operation completes]

Callbacks are used to:

  - Control the execution flow
  - Handle asynchronous operations without blocking the main thread


📌 Examples of Callback in JavaScript

🔹 Synchronous Callback Example:

function greet(name) {
  console.log("Hello, " + name);
}

function processUser(callback) {
  const username = "Amit";
  callback(username); // callback is executed immediately
}

processUser(greet);
📝 Here, greet is a synchronous callback. It runs immediately inside processUser.



🔹 Asynchronous Callback Example:

console.log("Start");

setTimeout(function () {
  console.log("This message is shown after 2 seconds");
}, 2000);

console.log("End");


📝 In this example:
The anonymous function inside setTimeout is an asynchronous callback.
It runs after 2 seconds, allowing the rest of the code to execute first.

Output:

Edit
Start
End
This message is shown after 2 seconds

----------------------------------------------------------------------------------

✅ 2) What is the purpose of callbacks? Why do we need them?

Callbacks allow JavaScript (which is single-threaded) to handle asynchronous operations like:

  - reading files
  - making HTTP requests
  - timers
  - database queries

Instead of waiting and blocking the main thread, we pass a callback to be run after the async task completes.

Why it's needed:

JS is non-blocking, and uses the event loop.

Without callbacks (or modern alternatives like promises/async-await), 
it would be hard to manage timing and async tasks.

---------------------------------------------------------------------------------

✅ 4) Pros and Cons of Callbacks

✅ Pros:
Enables asynchronous programming in JS.
Helps keep code non-blocking, improving performance.
Easy to implement in simple use cases.

❌ Cons:
Can lead to callback hell
Harder to read, debug, and maintain when nested.
Error handling becomes messy in deeply nested callbacks.

Modern Solution: Use Promises and async/await to write cleaner, more readable async code.

🔁 Bonus Tip: How callbacks evolved

      Callbacks → Promises → async/await

      But callbacks are still used under the hood.
 */
