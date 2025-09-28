// 🔍 GLOBAL SCOPE IN JAVASCRIPT

// 🌍 What is Global Scope?
// Variables declared outside of any function or block are in the global scope.
// They are accessible anywhere in your code (inside functions, blocks, etc.)
// remember , block have {} and function have () and we need to call function but we don't need to call block

/**
SUMMARY
// 🔸 Global Scope → Variable ko function aur block dono ke andar access kar sakte hain (declared globally)
// 🔸 Function Scope → Variable sirf us function ke andar accessible hota hai, function ke bahar nahi
// 🔸 Block Scope → Variable sirf us block `{}` ke andar accessible hota hai (like if, for, while, etc.)
 */

// ✅ Example 1: declaring var in global scope
var a = 10; // declared globally using var

function showA() {
  console.log('var a:', a); // ✅ accessible → 10
}

showA();
console.log('var a outside function:', a); // ✅ accessible → 10

/**
output - 
var a: 10
var a outside function: 10
 */

console.log();
console.log('--------------------------------------------------');

// ✅ Example 2: declaring let in global scope
let b = 20;

function showB() {
  console.log('let b:', b); // ✅ accessible → 20
}

showB();
console.log('let b outside function:', b); // ✅ accessible → 20

/**
let b: 20
let b outside function: 20
 */

console.log();
console.log('--------------------------------------------------');

// ✅ Example 3: declaring const in global scope
const c = 30;

function showC() {
  console.log('const c:', c); // ✅ accessible → 30
}

showC();
console.log('const c outside function:', c); // ✅ accessible → 30

/**
const c: 30
const c outside function: 30
 */

// 🚫 BAD PRACTICE:
// Global variables can lead to conflicts in large codebases as any function can accidentally change them.

// 💡 TIP:
// Avoid using `var` in global scope unless you have a specific reason.
// Prefer `const` (if value won't change) or `let` (if value will change).
