
// ✅ Example 1: Accessing Property of undefined Object

try {
  let user;
  console.log(user.name); // ❌ TypeError
} catch (err) {
  console.log("Error caught:", err.message);
} finally {
  console.log("✅ Cleanup done");
}

/**
 * Output:
 * Error caught: Cannot read properties of undefined (reading 'name')
 * ✅ Cleanup done
 * 
 * 🧠 Explanation:
 * user is undefined, so user.name gives TypeError
 * catch catches it
 * finally block runs no matter what
 */

console.log()

// ✅ Example 2: Division by Zero (Custom Throw)

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  let result = divide(10, 0);
  console.log("Result:", result);
} catch (err) {
  console.log("Error:", err.message);
} finally {
  console.log("Division operation completed.");
}

/**
 * Output:
 * Error: Cannot divide by zero
 * Division operation completed.
 * 
 * 🧠 Explanation:
 * We manually throw an error using throw
 * try runs the risky code
 * catch handles the custom error
 * finally runs anyway
 */

console.log()

// ✅ Example 3: File Simulation (Code continues even after error)
function readFile() {
  throw new Error("File not found");
}

try {
  readFile();
} catch (e) {
  console.log("Caught file error:", e.message);
} finally {
  console.log("Closing file stream (simulated)");
}

/**
 * Output: 
 * Caught file error: File not found
 * Closing file stream (simulated)
 * 
 * 🧠 Explanation:
 * Simulates file reading failure
 * Gracefully handles and closes stream in finally
 */

/**
 * 🔁 Summary:
 * Use try-catch-finally when:
 *      Code might throw errors
 *      You want to gracefully handle them
 *      You want to run cleanup or final code always
 */