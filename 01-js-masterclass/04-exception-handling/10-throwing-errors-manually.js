/**
 * =============================
 * 5️⃣ Throwing Custom Errors in JavaScript
 * =============================
 *
 * Kabhi-kabhi khud decide karna hota hai ki koi situation error hai.
 * Aise cases mein throw ka use karte hain.
 */

// Example: Throwing a custom error [We can throw any custom error via throw keyword]
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  let result = divide(10, 0);
  console.log("Result:", result); // This line won't execute
} catch (err) {
  console.error("Caught Error:", err.message);
}

/**
 * Output:
 * Caught Error: Cannot divide by zero
 */

/**
 * 🧠 Explanation:
 * - throw keyword manually ek Error object throw karta hai.
 * - Error ko try-catch se gracefully handle kiya gaya.
 */

/**
 * =============================
 * 6️⃣ Built-in Error Types in JavaScript
 * =============================
 * | Error Type      | Description                                 |
 * |-----------------|---------------------------------------------|
 * | Error           | Base class for all errors                    |
 * | TypeError       | Wrong type of value (e.g., null.toString())  |
 * | ReferenceError  | Using an undefined variable                  |
 * | SyntaxError     | Invalid code syntax                          |
 * | RangeError      | Value not in expected range (new Array(-1))  |
 * | EvalError       | Errors related to eval() (rarely used)       |
 */

/**
 * =============================
 * Custom Error Classes
 * =============================
 * You can also create custom error classes by extending the built-in Error class.
 * Below we are creating a custom error class called `ValidationError`.
 */

console.log();
console.log("Creating a custom error class...");
console.log();


class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

try {
  throw new ValidationError("Invalid user input");
} catch (err) {
  console.log(err.name);    // ValidationError
  console.log(err.message); // Invalid user input
}

/**
 * Output:
 * ValidationError
 * Invalid user input
 */

/**
 * =============================
 * 7️⃣ Best Practices for Exception Handling ✅
 * =============================
 * | Practice                        | Why it matters                                           |
 * |----------------------------------|----------------------------------------------------------|
 * | Handle predictable errors        | Jaise: user input, file not found, etc.                  |
 * | Don’t catch what you can’t handle| Agar kuch nahi kar sakte, toh catch bhi mat karo         |
 * | Use meaningful error messages    | "Something went wrong" ❌ → "User ID must be a number" ✅ |
 * | Use finally for cleanup          | Close files, free resources, hide loaders                |
 * | Avoid catching silently          | Error ko console.log ya throw karo — chup mat baitho ⚠️  |
 */
