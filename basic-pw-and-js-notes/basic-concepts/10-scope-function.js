// 🔍 FUNCTION SCOPE IN JAVASCRIPT

// 💡 Function scope ka matlab:
// Agar koi variable function ke andar declare kiya gaya hai,
// toh us variable ko sirf usi function ke andar access kiya ja sakta hai — uske bahar nahi.

// 🔑 Only functions create **function scope**, NOT if-blocks or loops.

// ✅ Example 1: declaring var inside a function
function testVar() {
  var a = 10;
  console.log('Inside testVar():', a); // ✅ 10
}

testVar();
try {
  console.log(a); // ❌ ReferenceError: a is not defined
} catch (error) {
  console.error('Error:', error.message); // Error: a is not defined
}

/**
Inside testVar(): 10
Error: a is not defined

so we can't access variable 'a' outside the function i.e. var declared inside a function is not accessible outside that function.
 */
console.log();
console.log();

// ✅ Example 2: declaring let and const inside a function

function testLetConst() {
  let b = 20;
  const c = 30;
  console.log('Inside testLetConst():', b, c); // ✅ 20 30
}

testLetConst();
try {
  console.log(b); // ❌ ReferenceError: b is not defined
} catch (error) {
  console.error('Error:', error.message); // Error: b is not defined
}

try {
  console.log(c); // ❌ ReferenceError: c is not defined
} catch (error) {
  console.error('Error:', error.message); // Error: c is not defined
}

/**
Inside testLetConst(): 20 30
Error: b is not defined

Error: c is not defined
 */

console.log();
console.log();

// ✅ Example 3: var declared globally vs locally
var x = 5;

function changeX() {
  var x = 100; // 👈 Yeh local variable hai, global x ko affect nahi karega
  console.log('Inside function x =', x); // 100
}

changeX();
console.log('Outside function x =', x); // 5

/**
Inside function x = 100
Outside function x = 5
 */

// 🧠 FUNCTION SCOPE SUMMARY:

// ✅ var, let, const — all are function-scoped when declared inside a function
// ❌ They are not accessible outside the function
// 🧨 var is NOT block scoped, so redefining inside if/loop affects function-scope var
// 🔒 let & const respect block boundaries — we'll go deeper into block scope next

// 🔥 Real Use: Use let or const inside functions to avoid accidental overwriting like var does
