/**
❓ 1. What is Node.js?

✅ Answer:
Node.js is a JavaScript runtime environment that lets us run 
JavaScript code outside the browser — like on a server or local machine.
It uses Google's V8 engine under the hood to execute code and is used for backend development, 
APIs, real-time apps, etc.

❓ 2. What is the V8 engine and what is its role?

✅ Answer:
The V8 engine is Google’s JavaScript engine written in C++. 
It converts JavaScript into machine code using JIT (Just-in-Time) compilation, so it's fast.
Node.js uses V8 to run JavaScript outside the browser.

❓ 3. What are the core components involved in Node.js execution?

✅ Answer:

Here's a breakdown:

Component	     Role
V8 Engine	     Runs synchronous JS code
Libuv	         Handles async tasks (timers, file I/O)
Event Loop	     Picks async callbacks & runs them
Thread Pool	     Background workers for heavy tasks (like fs, crypto)
Callback Queue	 Stores callbacks from async ops
Microtask Queue	 Stores promise & process.nextTick callbacks

🧠 Mnemonic: V-L-E-T-C-M → "Very Little Effort Takes Coding Mastery"

❓ 4. What is the Event Loop?

✅ Answer:
The Event Loop is the core of async execution in Node.js.
It continuously checks whether there are any callbacks in the Callback Queue or Microtask Queue ready to be executed,
 and if the main thread is free, 
It sends them to the V8 engine for execution.
That’s how async tasks (like setTimeout) run without blocking the main thread.


❓ 5. How does setTimeout() work internally in Node.js?

✅ Answer:

    Synchronous code runs first (via V8).
    setTimeout() is handed over to Libuv, which starts a timer.
    After the timer expires, callback is moved to the Callback Queue.
    Event Loop checks if main thread is free.
    If yes, it sends the callback to V8 for execution.
    So you'll see the setTimeout() callback execute after all sync code is done.


❓ 6. What is the difference between Callback Queue and Microtask Queue?

✅ Answer:

    Callback Queue: Stores async callbacks like setTimeout, setInterval, fs.readFile, etc.

    Microtask Queue: Stores promises and process.nextTick() callbacks.

👉 Microtasks always run before callbacks in the event loop cycle.


❓ 7. What is the role of Libuv in Node.js?

✅ Answer:
Libuv is a C++ library in Node.js that handles async operations like file I/O, networking, and timers.
It provides the event loop and thread pool functionality behind the scenes.

❓ 8. Is Node.js single-threaded?

✅ Answer:
Yes, Node.js runs JavaScript on a single thread, but it uses Libuv + thread pool to handle async operations 
in the background.
That’s why it’s called non-blocking and event-driven.

❓ 9. What is the Thread Pool in Node.js?

✅ Answer:
The Thread Pool is a set of background threads managed by Libuv.
It handles heavy async tasks like fs.readFile, DNS lookups, crypto operations — so the main thread doesn’t block.


 */
