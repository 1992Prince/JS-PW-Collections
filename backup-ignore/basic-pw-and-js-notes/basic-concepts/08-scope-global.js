// 🔍 GLOBAL SCOPE IN JAVASCRIPT

// 💡 Global Scope means:
// Any variable declared **outside of any function or block** is said to be in global scope.
// It can be accessed **anywhere in the program**, even **inside functions and blocks**.

// ✅ Example 1: var declared globally
var a = 100;

function printA() {
  console.log("Inside function: var a =", a); // ✅ Accessible → 100
}

printA();

if (true) {
  console.log("Inside block: var a =", a); // ✅ Accessible → 100
}

console.log("Outside: var a =", a); // ✅ Accessible → 100

/**
Inside function: var a = 100
Inside block: var a = 100
Outside: var a = 100
 */

console.log();
console.log();

// ✅ Example 2: let declared globally
let b = 200;

function printB() {
  console.log("Inside function: let b =", b); // ✅ Accessible → 200
}

printB();

{
  console.log("Inside block: let b =", b); // ✅ Accessible → 200
}

console.log("Outside: let b =", b); // ✅ Accessible → 200

/*
Inside function: let b = 200
Inside block: let b = 200
Outside: let b = 200
*/
console.log();
console.log();

// ✅ Example 3: const declared globally
const c = 300;

function printC() {
  console.log("Inside function: const c =", c); // ✅ Accessible → 300
}

printC();

{
  console.log("Inside block: const c =", c); // ✅ Accessible → 300
}

console.log("Outside: const c =", c); // ✅ Accessible → 300

/**
Inside function: const c = 300
Inside block: const c = 300
Outside: const c = 300
 */


// 🧠 CONCLUSION:
// - Agar hum `var`, `let`, ya `const` ko global level par declare karein
//   (yaani kisi function ya block ke bahar), toh unhe kahi bhi access kiya ja sakta hai.
// - Isiliye usse "global scope" kehte hain.
