// 🔹 WHY var is called Function Scoped & Global Scoped and not Block scoped?

// ➤ var sirf 2 scope ko maanta hai:
//     1. Function Scope
//     2. Global Scope
//     ❌ Block Scope ko ignore karta hai

// ➤ Isiliye agar var function ke andar declare kiya ho, to wo usi function tak limited rahega
// ➤ Aur agar function ke bahar banaya, to global ban jaata hai
// ➤ Lekin agar var block ke andar (like if, for) banaya ho, tab bhi wo block ke bahar accessible hota hai
//    → That's why var is ❌ NOT block scoped

// ✅ Example:
function greet() {
  var message = 'Hello';
  console.log('Inside function:', message); // ✅
}
// console.log(message); // ❌ Error - function ke bahar accessible nahi (function scoped)

if (true) {
  var city = 'Delhi';
  console.log('Inside block:', city); // ✅
}
console.log('Outside block:', city); // ✅ Accessible ❌ (Block scope ignored)

// ✅ Summary Table: var
/*
  | Declare Location         | Accessible?     | Reason                          |
  |--------------------------|------------------|---------------------------------|
  | Inside Function          | ❌ Outside       | Function Scoped                 |
  | Outside Function         | ✅ Everywhere    | Global Scoped                   |
  | Inside Block (if, for)   | ✅ Outside Block | ❌ Block Scope ignored by var   |
  */

// 🔹 WHY let and const are called Block Scoped?

// ➤ let and const block ko respect karte hain
// ➤ Block scope ka matlab hai: {} ke andar declare kiya to sirf usi ke andar accessible
// ➤ Chahe wo block if ka ho, loop ka ho ya function ka ho – bahar access nahi milega

// ✅ let and const safer hain because:
//    → Same name ka variable re-declare nahi karne dete (const bilkul nahi)
//    → Har block me alag variable bana sakte ho without conflicts

// ✅ Example:
if (true) {
  let a = 10;
  const b = 20;
  console.log('Inside block:', a, b); // ✅ Accessible
}
// console.log(a); // ❌ Error: a is not defined
// console.log(b); // ❌ Error: b is not defined

// ✅ Summary Table: let & const
/*
  | Declare Location         | Accessible?     | Reason                        |
  |--------------------------|------------------|-------------------------------|
  | Inside Function          | ❌ Outside       | Function Scoped (within block)|
  | Inside Block (if, for)   | ❌ Outside Block | ✅ Block Scoped                |
  | Re-declaration (let)     | ❌ Same Scope    | Allowed only once per scope   |
  | Re-declaration (const)   | ❌ Not allowed   | Must assign value at declare  |
  */

// 🔹 Are let and const also Global or Function Scoped?

//✅ Short Answer:
//let and const are block scoped, but they can also be global or function scoped depending on where you declare them.

// ✅ Full Explanation (with simple logic):
/**
| Where Declared              | var              | let / const              |
| --------------------------- | ---------------- | ------------------------ |
| Inside a function           | ✅ Function Scope | ✅ Function + Block Scope |
| Inside a block `{}`         | ❌ Leaks outside  | ✅ Block Scoped           |
| Outside all functions (top) | ✅ Global Scope   | ✅ Global Scoped          |


✅ Final Notes:

let and const → Always block scoped

But if you declare them outside any block or function, they live in the global scope

If you declare them inside a function, they're also function-scoped, but still restricted to any nested block

🧠 Think of let and const as:

💡 "Wherever I am declared, I belong only to the smallest {} block around me."


SUMMARY
// 🔸 Global Scope → Variable ko function aur block dono ke andar access kar sakte hain (declared globally)
// 🔸 Function Scope → Variable sirf us function ke andar accessible hota hai, function ke bahar nahi
// 🔸 Block Scope → Variable sirf us block `{}` ke andar accessible hota hai (like if, for, while, etc.)


 */

// old notes are below

// 🔹 var → Function Scoped & Global Scoped

// ➤ Agar var function ke andar declare kiya:
//    → Sirf us function ke andar hi access ho sakta hai
//    → Function ke bahar access karoge to error aayega

// ➤ Agar var function ke bahar declare kiya:
//    → Ye global ban jaata hai
//    → Function, block, har jagah accessible hota hai

// ❌ var block scope (if, for, {}) ko ignore karta hai
//    → Agar block ke andar var use kiya, to wo block ke bahar bhi accessible hota hai
//    → Ye large codebases me bugs create kar sakta hai

// ✅ Example:
if (true) {
  var language = 'JavaScript';
  console.log('Inside block:', language); // ✅ JavaScript
}
console.log('Outside block:', language); // ✅ JavaScript (❌ block ke bahar bhi access ho gaya)

// ✅ var Summary Table:
/*
  | Case                    | Accessible?  | Reason                          |
  | ----------------------- | ------------ | ------------------------------- |
  | Function ke andar var   | ❌ Outside   | Function scoped                 |
  | Function ke bahar var   | ✅ Everywhere| Global variable                 |
  | Block `{}` ke andar var | ✅ Outside   | ❌ Block scope ignore karta hai |
  */

// 🔹 let and const → Block Scoped

// ➤ let ya const agar block (if, for, {}) ke andar declare kiya:
//    → Sirf us block ke andar hi access ho sakta hai
//    → Bahar access karne par error aayega

// ➤ let aur const block scope ko follow karte hain
//    → Safer hain, predictable hain, avoid karte hain unwanted access

// ✅ Example:
if (true) {
  let x = 10;
  const y = 20;
  console.log('Inside block:', x, y); // ✅ 10 20
}
// console.log(x); // ❌ Error: x is not defined
// console.log(y); // ❌ Error: y is not defined

// ✅ let & const Summary:
/*
  | Case                    | Accessible?  | Reason                         |
  | ----------------------- | ------------ | ------------------------------ |
  | Block `{}` ke andar     | ❌ Outside   | ✅ Block scoped                |
  | Function ke andar       | ❌ Outside   | ✅ Block + Function scoped     |
  | Re-declare allowed?     | ❌ const no  | let ✅ once, const ❌          |
  */
