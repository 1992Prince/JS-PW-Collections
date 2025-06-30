/**
 * =============================
 * 🔍 Error vs Exception in JavaScript
 * =============================
 *
 * | Term        | Meaning                                                                 | JavaScript mein kya hota hai?                                               |
 * |-------------|-------------------------------------------------------------------------|-------------------------------------------------------------------------------|
 * | Error       | Jab code run karte waqt koi **galti** hoti hai.                         | Jaise: `TypeError`, `ReferenceError`, etc.                                   |
 * | Exception   | Jab koi error **aati hai aur use handle** kiya ja sakta hai (try-catch) | JavaScript mein, error ko handle karna hi "exception handling" kehlata hai.  |
 *
 * ⚙️ Toh basically:
 *   ❗ Error: Koi problem jo program mein hoti hai (jaise TypeError, etc.)
 *   🚧 Exception: Wo error ko handle karne ka process hai (try-catch se)
 *
 * -----------------------------
 * 📌 Example:
 * -----------------------------
 * // Error throw hoga
 * let a = undefinedVar; // ReferenceError
 *
 * // Agar tu isko handle kare try-catch se, toh tu exception handle kar raha hai:
 * try {
 *   let a = undefinedVar; // ❗ Error hoti hai yahan
 * } catch (err) {
 *   console.log("👀 Exception caught:", err.message);
 * }
 *
 * // Toh:
 * // Jo error aayi: ReferenceError
 * // Tu ne usko pakda: exception handling
 *
 * 🔑 Final line:
 *   "Error is the problem. Exception is how you deal with the problem."
 */

/**
 * =============================
 * Types of Errors in JavaScript
 * =============================
 *
 * Error hoti kya hai?
 * JavaScript mein jab koi unexpected kaam hota hai, jaise:
 *   - Kisi variable ko access kiya jo exist nahi karta
 *   - Kisi function ko galat tareeke se call kiya
 *   - Galat syntax likha
 * ...toh JavaScript engine ek error throw karta hai.
 *
 * Yeh errors kuch types ke hote hain. Chalo ek-ek karke real-life examples ke saath samjhte hain:
 */

/**
 * -----------------------------
 * 🔴 1. ReferenceError
 * -----------------------------
 * Jab tu kisi aise variable ko use kare jo declare hi nahi hua.
 * Example:
 *   console.log(name); // ReferenceError: name is not defined
 * Kab aata hai? Jab variable ko define kiya bina use kare.
 *
 * -----------------------------
 * 🔵 2. TypeError
 * -----------------------------
 * Jab tu galat type ke object pe kuch kaam karne ki koshish kare.
 * Example:
 *   let num = 5;
 *   num.toUpperCase(); // ❌ TypeError: num.toUpperCase is not a function
 * Kab aata hai? Jab tu kisi value pe aisa method call kare jo usme exist hi nahi karta, ya null/undefined pe property access kare.
 * Another example:
 *   let a = null;
 *   a.length; // ❌ TypeError: Cannot read properties of null
 *
 * -----------------------------
 * 🟣 3. SyntaxError
 * -----------------------------
 * Jab tu galat JavaScript syntax likh deta hai.
 * Example:
 *   let a = ; // ❌ SyntaxError: Unexpected token ';'
 * Kab aata hai? Jab code likhne mein spelling/syntax galti ho jaaye.
 *
 * -----------------------------
 * 🟠 4. RangeError
 * -----------------------------
 * Jab koi value valid range ke bahar chali jaaye.
 * Example:
 *   let arr = new Array(-5); // ❌ RangeError: Invalid array length
 * Kab aata hai? Jab array length ya number range galat ho jaaye.
 *
 * -----------------------------
 * ⚪ 5. URIError
 * -----------------------------
 * Jab encodeURI() ya decodeURI() galat string pe laga diya jaaye.
 * Example:
 *   decodeURIComponent('%'); // ❌ URIError
 *
 * -----------------------------
 * 🟤 6. EvalError
 * -----------------------------
 * Ye zyada common nahi hai. eval() ke galat use pe aata hai. Practically tu isse ignore kar sakta hai as a beginner.
 *
 * -----------------------------
 * 📌 Summary Table:
 * -----------------------------
 * | Error Type       | Kab hota hai (Reason)             | Example                      |
 * |------------------|-----------------------------------|------------------------------|
 * | ReferenceError   | Undefined variable                | console.log(x)               |
 * | TypeError        | Galat method/property access      | null.toString()              |
 * | SyntaxError      | Galat syntax                      | let a = ;                    |
 * | RangeError       | Valid range ke bahar ka value     | new Array(-1)                |
 * | URIError         | encode/decodeURI galat            | decodeURI('%')               |
 * | EvalError        | Rarely used, old style eval issue | throw new EvalError("...")   |
 */
 