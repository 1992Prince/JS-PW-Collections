
// Example: Error-first callback pattern (Node.js style)
function fetchUserData(callback) {
  setTimeout(() => {
    const success = true;
    if (success) {
      // null means no error, data is returned
      callback(null, { name: "Amit", age: 25 });
    } else {
      // error message, no data
      callback("Failed to fetch data", null);
    }
  }, 2000);
}

fetchUserData((error, data) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("User:", data);
  }
});

/**
 * 🔍 Callback Explanation:
 *
 * callback(error, data) ka format hota hai: error-first callback (Node.js standard).
 *
 * - Jab sab kuch sahi ho, error = null, data milta hai.
 * - Jab kuch galat ho, data = null, error mein message aata hai.
 *
 * ❌ Drawbacks:
 *   - Nested callbacks create "callback hell"
 *   - Error handling is not clean (har level pe check karna padta)
 *   - Code readability suffers when more async operations are chained
 *   - Not very readable if tasks increase
 *
 * 🔍 Callback Format: callback(error, data)
 *   - null if no error
 *   - error string if there's a problem
 *   - Yeh format har developer ke liye familiar banata hai flow ko.
 */