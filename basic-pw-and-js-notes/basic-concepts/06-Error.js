/**
✅ 1. What is throw new Error()?
🔹 throw → JavaScript ka keyword hai jo error intentionally create (ya "fekne") ke liye use hota hai.
🔹 new Error("message") → Ek Error object banata hai with a custom message.

🔧 Full Syntax: throw new Error("Your custom error message");

🎯 2. Purpose of throw new Error()

    Apne program me intentional error raise karne ke liye
    Galat input / rule violation / server error / etc. ko catch aur handle karne ke liye
    Clean and safe code likhne ke liye (instead of crashing silently)
 */

// 💡 4. Example: Basic Validation

function registerUser(username, password) {
    if (!username || !password) {
      throw new Error("Username and password are required");
    }
  
    if (password.length < 6) {
      throw new Error("Password must be at least 6 characters long");
    }
  
    console.log("✅ User registered successfully!");
  }

// 🔄 5. Use with try...catch
  
try {
    registerUser("rohit", "123");
  } catch (err) {
    console.error("❌ Error caught:", err.message);
  }

console.log("This will still run after the error is caught.");
  
/**
❌ Error caught: Password must be at least 6 characters long
This will still run after the error is caught.
 */

/**
📘 7. Interview Notes (Explain Like a Pro)
throw new Error() is used to raise a custom error manually in JavaScript.
It stops the normal program flow and transfers control to the nearest catch block (if any).
It helps enforce business rules (like validation) and improves code reliability.

 */