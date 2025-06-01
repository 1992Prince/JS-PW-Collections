/**

 Concept: throw new Error(...) ka matlab?
 Jab bhi JavaScript me hum throw keyword use karte hain, to hum janbujhkar ek error throw (fek) rahe hote hain — aur uss moment 
 par control turant catch block ko transfer ho jaata hai.


🛠️ 2. Custom Error Handling – Throwing Your Own Errors
🔥 Use Case: When your business logic breaks (ex: password too short)
 */

function registerUser(username, password) {
    try {
      if (!username || !password) {
        throw new Error("Username and password are required");
      }
  
      if (password.length < 6) {
        throw new Error("Password must be at least 6 characters");
      }
  
      console.log("✅ User registered successfully");
    } catch (err) {
      console.error("❌ Registration failed:", err.message);
    }
  }
  
registerUser("rohit", "123");  // ❌ Registration failed: Password must be at least 6 characters
  
/**
🔸 Real Flow Breakdown:
🧾 Step-by-step Execution:
username = "rohit", password = "123"

try block me check hota hai:

if (!username || !password) → ❌ false (dono mile hain)

Next check:
if (password.length < 6) → ✅ true (kyunki "123" ka length 3 hai)
Ab yahan:
throw new Error("Password must be at least 6 characters");

👉 JavaScript turant Error object create karta hai.
👉 Execution try block se jump karke catch(err) me chala jaata hai.

catch block run hota hai: console.error("❌ Registration failed:", err.message);

🖨 Output: ❌ Registration failed: Password must be at least 6 characters


🔸 Why does it go to catch?
Because throw creates an exception.
JavaScript stops executing inside try, and jumps to catch to handle the error.
 */

/**
 * 
🧠 Interview-Style Explanation:
In JavaScript, whenever we use throw new Error(), it raises an exception and stops further execution of the current try block. 
The control is passed to the corresponding catch block, where the error can be handled gracefully. 
This helps avoid crashing the program and provides meaningful feedback to the user.

✅ BONUS TIP:
You can also create your own custom error class for real apps (like validation error, DB error), but Error class is good for general use.
 */
  