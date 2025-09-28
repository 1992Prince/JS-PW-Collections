// ❓ Q: Kya hum function ya block ke andar inki value change kar sakte hain?
//✅ Yes — But behavior thoda different hota hai for each keyword:

// change global variable values inside function
// ✅ Inside function:

var x = 1;
let y = 2;
const z = 3;

function changeValues() {
  x = 10;  // ✅ var can be reassigned inside function
  y = 20;  // ✅ let can be reassigned inside function
  // z = 30;  ❌ const cannot be reassigned → Error: Assignment to constant variable
}

changeValues();
console.log(x); // 10
console.log(y); // 20
console.log(z); // 3

console.log();
console.log();

// change global variable values inside block
// ✅ Inside block:

var a = 5;
let b = 6;
const c = 7;

{
  a = 50;  // ✅ var reassigned
  b = 60;  // ✅ let reassigned
  // c = 70;  ❌ const reassignment → Error
}

console.log(a); // 50
console.log(b); // 60
console.log(c); // 7


// ✅ Summary (as comments)

// 🔁 var, let, const can all be declared globally (outside blocks/functions)

// ✅ You can access global vars inside functions or blocks
// 🔁 You can also modify them inside function/block
// 🚫 const cannot be reassigned anywhere after initial assignment
