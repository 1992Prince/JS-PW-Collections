/**
What happens if developer is throwing error in the code but there is no catch block to handle it?

❓ What happens here?
    throw new Error(...) chalega
    Lekin usse handle karne wala catch block nahi hai

    JavaScript engine bolega: “Bhai, ye error to fek diya, par pakadne wala koi nahi hai.”

    Result:

    ⚠️ Program crash ho jayega
    Browser console me error aayega
    Node.js me run kar rahe ho to app terminate ho sakta hai

🧠 Interview Explanation:
If there is no catch block to handle a throw, the exception propagates up the call stack. 
If it's still not caught at any level, it causes an unhandled exception, which can crash the program or show a red error 
in the browser console.
 */

// 🧪 Example with crash:

function riskyCode() {
    throw new Error("Boom! No one caught me!");
  }
  
riskyCode();  // ❌ This will crash the program
console.log("This won't run");

/**
U will get below error in console :
throw new Error("Boom! No one caught me!");
    ^

Error: Boom! No one caught me!
    at riskyCode (d:\2025\17-javascript\concepts\05-risky-code.js:25:11)
    at Object.<anonymous> (d:\2025\17-javascri

✅ How to Prevent Crash?
Use try...catch always when you know the code can fail:

try {
  riskyCode();
} catch (err) {
  console.error("Handled safely:", err.message);
}

 */
  