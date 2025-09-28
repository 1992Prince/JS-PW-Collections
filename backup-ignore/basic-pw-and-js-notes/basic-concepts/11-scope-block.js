// 🔍 BLOCK SCOPE IN JAVASCRIPT

// 💡 Block scope ka matlab:
// Koi bhi variable agar ek `{ ... }` ke andar declare hua hai,
// toh us variable ko sirf us block ke andar hi access kar sakte ho — bahar nahi.

// 📌 NOTE: Only `let` and `const` respect block scope.
// ❌ `var` does NOT respect block scope → yeh sirf function-scope hota hai.

// ✅ Example 1: let and const in a block
{
  let x = 10;
  const y = 20;
  console.log('Inside block:', x, y); // ✅ 10 20
}

try {
  console.log(x); //❌ ReferenceError: x is not defined
} catch (error) {
  console.error('Error:', error.message); // ❌ ReferenceError: x is not defined
}

try {
  console.log(y); //❌ ReferenceError: y is not defined
} catch (error) {
  console.error('Error:', error.message); // ❌ ReferenceError: y is not defined
}

/**
Inside block: 10 20
Error: x is not defined
Error: y is not defined
 */

console.log();
console.log();

// ✅ Example 2: var in a block
{
  var z = 30; // 👈 Not block scoped — this is hoisted to function or global scope
  console.log('Inside block: z =', z); // ✅ 30
}

console.log('Outside block: z =', z); // 😱 Still accessible → 30

// 🤔 Interview Trick: if/for block with var, let, const
if (true) {
  var a = 1;
  let b = 2;
  const c = 3;
  console.log('Inside if:', a, b, c); // ✅ 1 2 3
}

console.log('Outside if: a =', a); // ✅ 1 (var is NOT block scoped)
// console.log("Outside if: b =", b); ❌ ReferenceError
// console.log("Outside if: c =", c); ❌ ReferenceError

// 🧠 Summary Notes in Comments

// 🧠 BLOCK SCOPE SUMMARY:

// ✅ let and const are block scoped → accessible only within { ... }
// ❌ var is NOT block scoped → escapes blocks like if, for, while, etc.

// 🔥 Use let/const inside blocks to avoid unwanted access outside
// 🧨 Using var inside if/for can lead to bugs in loops and async code

// 🚫 Don't use var unless there's a legacy reason
// ✅ Prefer const (default) → if variable doesn't change
// ✅ Use let → if value needs to change (e.g. counters, loop variables)

// 📝 Real-Life Tip for Interviews & Projects
/**
"Sir, JavaScript me block scope sirf let aur const follow karte hain. var sirf function scoped hota hai, isiliye agar hum blocks 
(like if, loops) me var ka use karte hain, toh wo bahar bhi accessible hota hai — jo bugs create kar sakta hai. 

Isliye modern JavaScript me hum let aur const use karte hain block-level safety ke liye."
 */
