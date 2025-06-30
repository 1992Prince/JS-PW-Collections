/**
 * Assignment:
 * 9️⃣ Hands-On Exercise
🔹 Create a function parseJSON(str) that tries to parse a JSON string.
 🔹 If parsing fails, throw a custom error.
 🔹 Show how finally is used.
 */

// Custom Error Class
class InvalidJsonError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidJsonError";
  }
}

// Function to parse JSON
function parseJSON(jsonstr) {
  try {
    let user = JSON.parse(jsonstr); // May throw SyntaxError
    console.log('user.name -', user.name);
    console.log('user.age -', user.age);
  } catch (err) {
    // Wrap built-in SyntaxError inside our custom error
    throw new InvalidJsonError(`Invalid JSON provided: ${err.message}`);
  } finally {
    console.log('Parsing attempt finished.');
  }
}

// ✅ Valid JSON Example
let jsonString = '{"name": "Amit", "age": 25}';

try {
  parseJSON(jsonString);
} catch (e) {
  console.error(e.name + ":", e.message);
}

/**
 * Output:
 * user.name - Amit
 * user.age - 25
 * Parsing attempt finished.

 */

console.log(); 
console.log();

// ❌ Invalid JSON Example
let jsonString2 = '{"name": "Amit", "age": 25'; // Missing closing }

try {
  parseJSON(jsonString2);
} catch (e) {
  console.error(e.name + ":", e.message);
}

console.log("I am still running...");

/**
Parsing attempt finished.
InvalidJsonError: Invalid JSON provided: Expected ',' or '}' after property value in JSON at position 26 (line 1 column 27)
I am still running...
 */

/**
 * 🔁 Key Rule to Remember:
🧾 You can throw errors:
        Inside functions
        Inside catch
        Inside finally

📦 But then, the calling code (caller) must handle it using try-catch.
"We can throw Error or CustomError anywhere,
but the code that calls it — must be ready to catch it using try-catch."
 */
