/*
===========================================================
📘 Node.js Complete Beginner Notes (With Execution Flow)
===========================================================

👶 For: Freshers who are new to Node.js and JS runtime
🛠️ Format: Explained with code comments, flow diagrams, and examples
*/

/*
------------------------------------------------------------
🔷 1. What is Node.js?
------------------------------------------------------------

🟢 Node.js is a JavaScript **runtime environment**.
✔️ It allows you to run JavaScript code **outside the browser**, i.e., on your computer/server.
✔️ It's built on **Chrome's V8 JavaScript engine** (used in Chrome browser).
✔️ Node.js is used to build **server-side applications**, **CLIs**, **real-time apps**, etc.

✅ Think of it like: Browser -> Chrome runs JS for frontend,
   Server -> Node.js runs JS for backend.
*/

/*
------------------------------------------------------------
🔷 2. Why Use Node.js? (Purpose)
------------------------------------------------------------

✅ Single-threaded, non-blocking I/O model → Fast and lightweight
✅ Perfect for real-time apps (chat, notifications)
✅ Great for APIs and microservices
✅ Use JavaScript everywhere — frontend + backend

📌 Use cases:
- REST APIs
- Real-time chat apps
- File handling, automation scripts
- Streaming services (like Netflix)
*/

/*
------------------------------------------------------------
🔷 3. What is V8 Engine?
------------------------------------------------------------

🔥 V8 is Google’s JavaScript engine (written in C++).
✔️ Converts JavaScript code into **machine code** using JIT (Just-In-Time Compilation).
✔️ Node.js uses V8 to execute JavaScript code.

📌 Browser me bhi V8 hota hai (in Chrome), lekin Node.js me humne usse use kiya browser ke bahar JavaScript run karne ke liye.
*/

/*
------------------------------------------------------------
🔷 4. Core Components Involved in Code Execution
------------------------------------------------------------

📦 1. V8 Engine → Executes sync JavaScript
⚙️ 2. Libuv → Handles async operations like I/O, timers
🔁 3. Event Loop → Manages execution order of async callbacks
🧵 4. Thread Pool → Handles heavy tasks in background (fs, crypto)
🧾 5. Callback Queue → Stores async task callbacks
📌 6. Microtask Queue → Stores promise & process.nextTick callbacks

🧠 Mnemonic to Remember Core Components of Node.js Execution

V-L-E-T-C-M → "Very Little Effort Takes Coding Mastery"

V8 Engine (Executes sync JavaScript)

Libuv (Handles async operations)

Event Loop (Manages execution order)

Thread Pool (Handles heavy tasks)

Callback Queue (Stores async callbacks)

Microtask Queue (Stores promise callbacks)
*/

/*
------------------------------------------------------------
🔷 5. How Asynchronous Code Executes in Node.js (Simple Steps)
------------------------------------------------------------

💡 We'll take `setTimeout()` as an example to understand this:

📜 Example:
    console.log("Start");

    setTimeout(() => {
      console.log("Async Task Done");
    }, 1000);

    console.log("End");


✅ Step-by-step Execution:

1️⃣ Code starts → V8 engine runs all synchronous lines
    → "Start" gets printed

2️⃣ `setTimeout()` is encountered
    → Node.js tells Libuv: “Run this callback after 1000ms”
    → Meanwhile, code continues — "End" gets printed

3️⃣ Timer runs in background (handled by Libuv)

4️⃣ After 1000ms → Callback is moved to **Callback Queue**

5️⃣ Event Loop checks: "Is main thread free?" → Yes
    → Picks callback from queue → Sends to V8 → Runs callback like here runs setTimeout callback code i.e. console.log("Async Task Done")
    ✅ Step 5: Event Loop Callback uthata hai
    Event Loop check karta hai: "Kya koi callback execute karne ke liye ready hai?"

Agar haan, toh woh callback wapis JavaScript engine ko deta hai, aur fir vo run hota hai.

📌 So you finally see: "Async Task Done" printed

🧠 Bonus:
- Promises and `process.nextTick()` go into **Microtask Queue** (run before timers)
- Heavy I/O tasks (fs, crypto) may use thread pool internally
*/

/**
 * 📊 Visual Flow Diagram (Simplified)
 *         Your Code
           ↓
┌────────────┐
│ V8 Engine  │ ← Run sync code (Start, End)
└────┬───────┘
     ↓
┌────────────┐
│ Async Call │ ← setTimeout() detected
└────┬───────┘
     ↓
┌────────────┐
│ Libuv      │ ← Waits 1000ms
└────┬───────┘
     ↓
┌────────────┐
│ Callback Q │ ← After 1 sec, callback here
└────┬───────┘
     ↓
┌────────────┐
│ Event Loop │ ← Picks callback & sends to V8
└────┬───────┘
     ↓
┌────────────┐
│ V8 Engine  │ ← Executes Async Code
└────────────┘

 */

/**
 * /*
------------------------------------------------------------
🔷 6. FLOW DIAGRAM - Execution in Node.js
------------------------------------------------------------

1️⃣ SYNC FLOW:

[ Your Code ]
     ↓
[ V8 Engine ]
     ↓
[ Output printed directly ]


2️⃣ ASYNC FLOW (like setTimeout):

[ setTimeout() ]
     ↓
[ Libuv Timer Subsystem (background delay) ]
     ↓
[ Callback Queue ]
     ↓
[ Event Loop picks callback ]
     ↓
[ V8 executes callback function ]
*/

/*
------------------------------------------------------------
🔷 7. Live Code Example
------------------------------------------------------------
*/

/*
------------------------------------------------------------
🔷 5. How JavaScript Executes in Node.js (Step-by-Step)
------------------------------------------------------------

🔹 Step 1: Code starts → V8 executes synchronous JS
🔹 Step 2: Async operations (setTimeout, fs.readFile) go to Libuv
🔹 Step 3: Libuv uses thread pool or system calls to handle them
🔹 Step 4: Once done, callback is added to Callback Queue
🔹 Step 5: Event Loop picks callbacks one-by-one and executes

📝 Microtasks (Promises, nextTick) run *before* timers & I/O
*/

/*
------------------------------------------------------------
🔷 9. Summary (Cheat Sheet Style)
------------------------------------------------------------

✅ Node.js = JS runtime using V8
✅ Sync code → Runs directly in V8
✅ Async code → Goes through Libuv + Thread Pool
✅ Event Loop = Heart of Node.js async model
✅ Microtasks (Promises, nextTick) → Always run before timers
✅ Thread pool = Background async execution (fs, crypto)

🧠 Always remember:
  "JavaScript is Single-threaded, but Node.js is event-driven & non-blocking."
*/
