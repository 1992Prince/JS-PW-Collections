/**

⚙️ 1. try, catch, finally – Basic Explanation
🔸 try – Jahan pe tu suspect karta hai ki error aa sakta hai
🔸 catch – Jab error aata hai, to yahaan handle karte hain
🔸 finally – Ye block hamesha chalega, chahe error aaye ya na aaye (cleanup ke liye)

✅ Example 1: Simple Try-Catch
 */

try {
    let a = 5;
    let b = a + unknownVar; // ⚠️ Error: unknownVar is not defined
    console.log(b);
  } catch (error) {
    console.log("⚠️ Caught an error:", error.message);
  } finally {
    console.log("✅ Code execution finished (success or error)");
}
  
/**
 * Output:
 * ⚠️ Caught an error: unknownVar is not defined
 * ✅ Code execution finished (success or error)
 */

console.log("-------------------");


// ✅ Example 2: Real-time use – User Input Validation

function getUserAge(input) {
    try {
      if (isNaN(input)) {
        throw new Error("Input must be a number");
      }
  
      if (input < 0) {
        throw new Error("Age cannot be negative");
      }
  
      console.log(`✅ User is ${input} years old`);
    } catch (err) {
      console.error("❌ Invalid input:", err.message);
    } finally {
      console.log("📌 Input checked");
    }
  }
  
  getUserAge("abc");
  getUserAge(-5);
  getUserAge(25);
  
/**
❌ Invalid input: Input must be a number
📌 Input checked
❌ Invalid input: Age cannot be negative
📌 Input checked
✅ User is 25 years old
📌 Input checked
 */
  
  