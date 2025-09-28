/*
🔹 1) What are the phases of JavaScript execution?

✅ JavaScript runs in two main phases:

1️⃣ Compilation Phase:
   - Code is scanned before execution
   - All variable (var, let, const) and function declarations are hoisted
   - `var` → hoisted & initialized with `undefined`
   - `let` / `const` → hoisted but not initialized (they go into the TDZ)
   - Function declarations → hoisted with full body

2️⃣ Execution Phase:
   - Code is run line-by-line
   - Variables are assigned values
   - If a `let` or `const` variable is accessed before declaration → ReferenceError (due to TDZ)
*/

/*
🔹 2) What is Hoisting?

✅ Hoisting is a behavior in JavaScript where:
   - Declarations of variables and functions are moved to the top of their scope
   - Happens during the compilation phase
*/

/*
🔹 3) What happens behind the scenes of hoisting?

Behind the scenes:
   - JavaScript engine scans for all declarations
   - Moves them to top of their scope
   - Initializes:
     - `var` with `undefined`
     - `let` / `const` are NOT initialized (put into TDZ)
     - Functions (declared using `function`) are fully hoisted
*/

/*
🔹 4) Does hoisting happen for var, let, const, and functions?

| Keyword / Type     | Hoisted | Initialized?             | Notes                                      |
|--------------------|---------|---------------------------|--------------------------------------------|
| var                | ✅ Yes  | ✅ Yes (undefined)         | Can be used before declaration (undefined) |
| let / const        | ✅ Yes  | ❌ No                      | In TDZ, can't access before declaration    |
| Function Decl.     | ✅ Yes  | ✅ Yes (with body)         | Can call before it's defined               |
| Function Expr (var f = function()) | ✅ var is hoisted | ✅ undefined        | f is undefined before assignment           |
*/

/*
🔹 5) How hoisting behaves differently for var and let/const?

Example:
*/

console.log(a); // ✅ undefined → var is hoisted & initialized
var a = 10;

console.log(b); // ❌ ReferenceError → let is hoisted but not initialized
let b = 20;

/*
🔸 var → hoisted & initialized with `undefined`
🔸 let/const → hoisted but uninitialized → live in TDZ → accessing them before declaration throws ReferenceError
*/

/*
🔹 6) What is TDZ (Temporal Dead Zone) and its purpose?

✅ TDZ is the zone between:
   - Variable hoisting and
   - Its actual declaration line

Variables in TDZ are not accessible → accessing leads to ReferenceError.

Example:
*/

console.log(x); // ❌ ReferenceError
let x = 5;

/*
🔸 Purpose of TDZ:
   - Prevents use of variables before they're declared
   - Makes code more predictable and safe
*/

/*
🔹 7) Is TDZ applicable to var, let, and const?

| Keyword | Hoisted | TDZ Exists? | Initialized at Compile Time |
|---------|---------|-------------|------------------------------|
| var     | ✅ Yes  | ❌ No        | ✅ Yes (`undefined`)         |
| let     | ✅ Yes  | ✅ Yes       | ❌ No                        |
| const   | ✅ Yes  | ✅ Yes       | ❌ No                        |
*/

/*
🧠 Bonus Interview Example:

function test() {
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log(a); // ❌ Error
console.log(b); // ❌ Error
console.log(c); // ❌ Error

✅ All are scoped to the function, cannot access outside
*/

/*
🧠 Bonus: Why does var give undefined but let/const give ReferenceError?

- var is hoisted + initialized with undefined → safe to access before declaration
- let/const are hoisted but NOT initialized → unsafe to access before declaration → ReferenceError
*/

/*
🔹 8) Example of Function Hoisting

✅ Function declarations are fully hoisted – both the name and the body.
   → You can call them before they are defined in the code.

Example:
*/

greet(); // ✅ Works → "Hello, world!"

function greet() {
  console.log('Hello, world!');
}

/*
🔸 This works because during the compilation phase, the entire function greet is hoisted to the top.
*/

/*
❌ But Function Expressions are different:

sayHi(); // ❌ TypeError: sayHi is not a function

var sayHi = function () {
  console.log("Hi!");
};

🔸 Here, only the `var sayHi` is hoisted and initialized with `undefined`.
🔸 The function definition (right-hand side) is assigned during execution.
🔸 So calling `sayHi()` before assignment throws TypeError because you're calling `undefined()`.

✅ Summary:

| Type                | Hoisted | Callable Before Declaration? |
|---------------------|---------|-------------------------------|
| Function Declaration| ✅ Yes  | ✅ Yes                        |
| Function Expression | ✅ (var only) | ❌ No → TypeError          |
| Arrow Function (with var/let/const) | ✅ (var/let/const hoisted) | ❌ No → ReferenceError / TypeError |
*/
