/**
 * 🧠 NaN — "Not a Number"
 * 🔸 NaN ek value hai, operator nahi.
 * 
 * 🔹 1. What is NaN in JavaScript?
 * NaN is a special value in JavaScript that means: 👉 “This is not a valid number.”
 * Yeh tab aata hai jab JavaScript kisi operation ko number samajhne ki koshish karta hai, lekin wo actually number nahi hota.
 * 
 * 🔹 2. Is NaN a data type?
 * ❌ No, NaN is not a separate data type
 * ✅ NaN is of type number.
 * 
 * console.log(typeof NaN); // 👉 "number"
 * Yeh confusing lag sakta hai, but JavaScript mein NaN bhi number type hi hota hai, lekin invalid number.
 *
 * 
 * 🔹 3. When does NaN occur?
| Situation                   | Example           | Output |
| --------------------------- | ----------------- | ------ |
| Invalid math with string    | `"abc" - 5`       | `NaN`  |
| Parsing invalid number      | `Number("hello")` | `NaN`  |
| Dividing number with string | `100 / "test"`    | `NaN`  |
| Math with `undefined`       | `undefined + 5`   | `NaN`  |

✅ Examples:

 */

let a = "hello" - 2;
console.log(a); // NaN

let b = Number("xyz");
console.log(b); // NaN

let c = 10 / "world";
console.log(c); // NaN

/**
 🔹 4. Why does NaN exist? (Purpose)
 So that the program doesn’t crash when something goes wrong with a number.

 Instead of throwing an error, JavaScript says: Bhai, yeh number valid nahi hai... yeh lo NaN."
 Yeh helpful hota hai validation aur debugging ke liye.

 🔹 5. How to check if a value is NaN?
 Use isNaN() function:
 */

console.log(isNaN("abc" - 10)); // true
console.log(isNaN(100));        // false


/**

🔹 6. Interview-Ready Explanation
"NaN means 'Not a Number'. It is a special value of type number in JavaScript that represents an invalid or unrepresentable 
numeric result. For example, trying to subtract a string from a number like 'abc' - 5 results in NaN. 
We can detect this using the isNaN() function. JavaScript uses NaN to handle numeric errors without crashing the code."
 */
