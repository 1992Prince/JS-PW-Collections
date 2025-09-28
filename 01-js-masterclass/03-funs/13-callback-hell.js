/**
 * Explain Callback Hell?
 *
 * 🔁 Callback Hell – Key Points
 *
 * 🔹 Definition:
 *                Callback Hell is a situation in JavaScript where multiple nested callbacks are used,
 *                especially in asynchronous code, making it hard to read, debug, and maintain.
 *
 *                This often happens when one async operation depends on the result of another,
 *                leading to deeply nested code that becomes hard to read, maintain, and debug
 *
 * 🔹 Also called:
 *                  "Pyramid of Doom" – because the code forms a deep,
 *                    right-leaning structure due to nested callbacks.
 *
 *  Callback Hell is a common issue in older JavaScript code before Promises and async/await became common.
 *  Today, we use Promises or async/await to write cleaner, more manageable asynchronous code."
 *
 * 🔹 Problems it creates:
 *    - Poor readability
 *    - Difficult error handling
 *    - Hard to scale or maintain
 *    - Code becomes messy and fragile
 *
 *
 * ✅ What causes Callback Hell?
 *    - Chaining too many async operations using callbacks [Performing async operations one after another using callbacks]
 *    - Using anonymous functions inside each callback
 *    - No use of modern async patterns (Promises / async–await)
 *
 * 🔹 How to avoid Callback Hell:
 *      - Use named functions to reduce nesting
 *     - Use Promises for better chaining
 *     - Use async/await for a more synchronous style
 *
 *   🔹 Modern solution:
 *      async/await provides cleaner syntax and better error handling,
 *      making async code look like synchronous code.
 */

/**
 * Callback Hell kya hai?
 * Jab hum asynchronous operations ko nested callbacks ke through handle karte hain,
 * matlab ek callback ke andar doosra callback, fir uske andar teesra, aise callbacks ka chain banta hai,
 * jise hum callback hell ya pyramid of doom kehte hain.
 *
 * Isse code bahut complicated, unreadable aur maintain karna mushkil ho jata hai.
 */

// Example of Callback Hell: 3 asynchronous tasks sequentially (ek ke baad ek)
function task1(callback) {
  setTimeout(() => {
    console.log('Task 1 complete');
    callback();
  }, 1000);
}

function task2(callback) {
  setTimeout(() => {
    console.log('Task 2 complete');
    callback();
  }, 1000);
}

function task3(callback) {
  setTimeout(() => {
    console.log('Task 3 complete');
    callback();
  }, 1000);
}

// Callback hell example:
task1(function () {
  task2(function () {
    task3(function () {
      console.log('All tasks complete');
    });
  });
});

/**
 * Output after ~3 seconds:
 * Task 1 complete
 * Task 2 complete
 * Task 3 complete
 * All tasks complete
 *
 * Problem with this approach:
 * - Code indentation bahut badh jata hai.
 * - Samajhna mushkil hota hai ki kaunsa callback kis function ke andar hai.
 * - Agar aur zyada asynchronous steps add karne ho, toh ye aur bhi complex ho jata hai.
 * - Error handling difficult hoti hai.
 *
 * Isliye modern JavaScript mein hum:
 * => Promises use karte hain, jisse chaining easy ho jata hai.
 * => async/await ka use karte hain, jisse code synchronous jaisa readable lagta hai.
 */

/**
 * Callback Hell mein:
 * task1 complete hoga tabhi task2 trigger hoga,
 * task2 complete hone ke baad hi task3 trigger hoga,
 * Aur finally jab task3 complete hoga, tab hi "All tasks complete" print hoga.
 */

/**
 * 🔁 Callback Summary — Easy to Remember
 * 
JavaScript is single-threaded and executes synchronous code one line at a time, in order.
But when we have asynchronous operations like setTimeout, fetch, or file reading, 
we can't afford to block the thread and wait.

✅ Why Callbacks?

To handle such async tasks, callbacks were introduced.
A callback is a function that gets executed later, once the async operation finishes.
This allows JavaScript to stay non-blocking, so the rest of the synchronous code can continue running.

😵 Callback Hell Problem

If we keep nesting callbacks (e.g., async inside async), the code becomes 
hard to read and maintain — this is called callback hell.

🌟 Modern Solutions
To solve this, modern JavaScript introduced:

✅ Promises — a cleaner way to handle async flow
✅ async/await — to make async code look and behave like synchronous code

Even though we use Promises and async/await today, under the hood, it's still using callbacks.

💡 Playwright Context

In tools like Playwright, most operations (like clicking, waiting, navigating) are asynchronous and return Promises.

So we write code like:

await page.click('button');
await page.fill('#name', 'Amit');
This makes the async steps run in sequence, looking like synchronous code — easy to read and debug.

🧠 Final One-Liner to Remember:

"Callbacks made JavaScript non-blocking, but caused complexity. 
Promises and async/await solved that, making async code more readable — but callbacks still run behind the scenes."
 */
