
/**
 * =============================
 * 📚 JavaScript Exception Handling Notes
 * =============================
 *
 * ✨ What Are Exceptions in JavaScript?
 *   - Exception: A runtime error that disrupts the normal flow of the program.
 *   - JavaScript is dynamically typed, so it can’t catch all errors at compile time.
 *   - Some errors only appear when the code actually runs.
 *
 * -----------------------------
 * 🧪 Example:
 * -----------------------------
 * let user;
 * console.log(user);        // undefined (no error)
 * console.log(user.name);   // ❌ TypeError: Cannot read properties of undefined (reading 'name')
 *
 * -----------------------------
 * 2️⃣ Types of Common Errors in JavaScript
 * -----------------------------
 * | Type            | Example                   | Explanation                        |
 * |-----------------|--------------------------|-------------------------------------|
 * | SyntaxError     | console.log("Hello)      | Missing closing quote               |
 * | ReferenceError  | console.log(userName)    | Variable `userName` is not defined  |
 * | TypeError       | null.toString()          | Calling method on `null`            |
 *
 * -----------------------------
 * 3️⃣ try...catch Block – Exception Handling Basics
 * -----------------------------
 * try {
 *   // Code that may throw an error
 *   let result = riskyFunction();
 * } catch (error) {
 *   console.error("Error caught:", error.message);
 * }
 *
 * How it works:
 *   - try: Code inside this block might throw an error.
 *   - catch: Executes only if an error occurs in try.
 *
 * -----------------------------
 * 4️⃣ finally Block – Cleanup Code
 * -----------------------------
 * try {
 *   // risky code
 * } catch (e) {
 *   console.log("Caught error:", e);
 * } finally {
 *   console.log("Cleanup code always runs");
 * }
 *
 * finally block:
 *   - Always runs, no matter what (error or no error)
 *   - Used for cleanup tasks, like closing files, stopping loaders, etc.
 *
 * -----------------------------
 * ⚡ What is Exception Handling in JavaScript?
 * -----------------------------
 *   - JavaScript is a dynamically typed language, so variables don’t have fixed types.
 *   - Many errors are not caught at compile time.
 *   - Errors appear during runtime, i.e., when the code is actually executed.
 *   - When such runtime errors (called exceptions) occur, the program can get abruptly terminated.
 *
 * ❌ Why Is This a Problem?
 *   - If exceptions are not handled, they can:
 *     - Crash your program
 *     - Stop execution of all remaining code
 *     - Break user experience
 *
 * ✅ What’s the Solution?
 *   - To prevent abrupt program termination, JavaScript provides exception handling mechanisms.
 *   - You can handle exceptions using:
 *     - try block – for wrapping risky code
 *     - catch block – to catch and handle the error
 *     - finally block – to run cleanup code (always runs)
 *     - throw keyword – to manually throw an exception
 *
 * 🔥 Summary:
 *   JavaScript being dynamic, throws errors at runtime, which may terminate programs abruptly.
 *   To handle such situations gracefully, we use exception handling using try, catch, throw, and finally.
 */

// Example: TypeError
let user;
console.log(user); // undefined (no error)
console.log(user.name); // ❌ TypeError: Cannot read properties of undefined (reading 'name')