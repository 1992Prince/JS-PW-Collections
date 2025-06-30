/**
 * =============================
 * ⚠️ What is Error in JavaScript?
 * =============================
 *
 * In JavaScript, jab bhi koi galti (runtime error) hoti hai, JS engine ek Error object create karta hai.
 *
 * Chahe system-thrown error ho (TypeError, ReferenceError, etc.) ya manually throw new Error("...") karein —
 * sab ek Error object banate hain.
 *
 * -----------------------------
 * 🧱 Structure of an Error Object
 * -----------------------------
 * | Property / Method | Description                                             |
 * |-------------------|---------------------------------------------------------|
 * | name              | Type of error (e.g., "TypeError", "ReferenceError")     |
 * | message           | Human-readable error message                            |
 * | stack             | Stack trace: shows where the error happened             |
 * | toString()        | Converts error to a readable string                     |
 */


// Example: Accessing Error object properties
try {
  let x = null;
  x(); // ❌ TypeError: x is not a function
} catch (err) {
  console.log("Name:", err.name);           // TypeError
  console.log("Message:", err.message);     // x is not a function
  console.log("Stack:", err.stack);         // Where error occurred
  console.log("toString:", err.toString()); // TypeError: x is not a function
}

console.log("Error object properties accessed successfully.");

/**
 * Output:
 * -----------------------------
 * Name: TypeError
 * Message: x is not a function
 * Stack: TypeError: x is not a function
 *   at ... (stack trace)
 * toString: TypeError: x is not a function
 * Error object properties accessed successfully.
 */
