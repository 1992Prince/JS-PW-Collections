/**

JavaScript Course: Variables and Constants

1. Variables and Constants
In JavaScript, variables and constants are fundamental concepts used to store and manage data. 

Here's a breakdown of how to use them:
a. Variables
Variables are used to store data that can be changed later. 
In JavaScript, you can declare variables using var, let, or const.


i. var
The var keyword declares a variable with function scope or global scope if not inside a function. 
var is function-scoped, meaning it is accessible throughout the function in which it is declared, 
or globally if declared outside any function.

ii. let
The let keyword declares a variable with block scope, meaning it is only accessible 
within the block where it is defined (e.g., inside a {} block).

iii. const
The const keyword declares a variable that cannot be reassigned after its initial assignment. 
Like let, const is block-scoped.

--------------------------------------------------------------------------------------------------------


2. Scope and Hoisting


a. Scope

🔹 What is Scope in JavaScript?

  Scope in JavaScript refers to the context in which variables are declared and accessed. 
  It defines the part of the program where a variable or function is accessible or visible.

Interviewers often ask:

"Can you explain scope in JavaScript and how it affects variable visibility?"

JavaScript has two main types of scope: Global Scrope and Local Scope[Local Scope covers both function and block scope].

or u can say Scope is of 3 types:
    - Global Scope
    - Local Scope/Function Scope
    - Block Scope


🔸 1. Global Scope

✅ Definition:

  A variable has global scope if it is declared outside of any function, block, or module. 
  It is accessible from anywhere in the code after its declaration.

✅ Key Points[can be ignored]:

  Declared using var, let, or const at the top level (outside of functions).
  Becomes a property of the window object in browsers (if declared with var).

Variables declared outside any function or block are in the global scope and can be accessed anywhere in the code.

✅ Example:

    var globalVar = "I'm global";

    function showGlobal() {
      console.log(globalVar); // ✅ Accessible here
    }

    showGlobal();
    console.log(globalVar);   // ✅ Accessible here too

✅ Interview Tip:
Global variables are discouraged in large applications as they can cause naming conflicts and memory leaks.


🔸 2. Local Scope

✅ Definition:
Variables declared inside a function are locally scoped to that function. 
They cannot be accessed outside of the function.

✅ Example:


    function localScope() {
      var localVar = "I'm local";
      console.log(localVar); // ✅ Accessible here
    }

    localScope();
    console.log(localVar); // ❌ ReferenceError: localVar is not defined

✅ Interview Tip:
Local scope helps achieve encapsulation, and keeps your variables isolated and safe from external manipulation.

🔸 3. Block Scope (ES6)

✅ Definition:

Introduced in ES6 with let and const, block scope restricts the variable to the block ({}) 
it’s defined in — such as inside loops, if-statements, etc.

✅ Example:

{
  let blockVar = "I'm block scoped";
  const another = "Block level const";
  console.log(blockVar); // ✅ Accessible here
}

console.log(blockVar); // ❌ ReferenceError

✅ Note: var does not support block scope. It's function-scoped
--------------------------------------------------------------------------------------------------------

b. Hoisting

🔹 What is Hoisting in JavaScript?

Hoisting is a behavior in JavaScript where variable and function declarations are moved (or “hoisted”) 
to the top of their containing scope (global or functional) during the compilation phase, before code execution.

📌 Interview Definition:
"Hoisting is JavaScript's default behavior of moving declarations (not initializations) 
to the top of the current scope."

However, only the declarations are hoisted, not the initializations.


i. Hoisting with var
Variables declared with var are hoisted to the top of their function or global scope but initialized with undefined.
You can use the variable before its declaration, but the value will be undefined.

✅ Example:

console.log(x); // ✅ Output: undefined
var x = 5;
console.log(x); // ✅ Output: 5

🔍 Explanation:

Internally, JavaScript interprets it as:
var x;
console.log(x); // undefined
x = 5;
console.log(x); // 5

💡 Interview Tip:
This can cause bugs in larger codebases where var declarations appear far below their usage.


🔸 ii. Hoisting with let and const (ES6)
Variables declared with let and const are also hoisted, but they are not initialized. 
Accessing them before their declaration results in a ReferenceError due to the Temporal Dead Zone (TDZ).

🧠 TDZ = The time between entering scope and the actual declaration.

✅ Example:

console.log(y); // ❌ ReferenceError: Cannot access 'y' before initialization
let y = 10;


console.log(z); // ❌ ReferenceError: Cannot access 'z' before initialization
const z = 15;


🔍 Interview Insight:
The presence of TDZ helps prevent accidental usage of uninitialized variables, making let and const safer.



🔸 iii. Function Hoisting
✅ Named function declarations are fully hoisted — both the function name and body.

✅ Example:

greet(); // ✅ Works fine

function greet() {
  console.log("Hello!");
}


🔍 JavaScript moves the entire function to the top during compilation.

❌ Function expressions (especially with let or const) are not hoisted the same way:

sayHi(); // ❌ TypeError: sayHi is not a function

const sayHi = function () {
  console.log("Hi!");
};


 */

/**
 * var is a function-scoped variable -
 * matlab agar variable ko function ke andar declare kiya hai, to wo sirf usi function ke andar
 * accessible hota hai.
 * Even we can access it inside blocks like if, for, while etc inside that function.
 *
 * lekin we can't access that variable outside the function.
 *
 * Global variables are accessible anywhere in the code, even inside functions and blocks.
 */
// ===== Global Scope =====
var globalVar = 'I am a global var';

function testVarScope() {
  // ===== Function Scope =====
  var funcVar = 'I am a function-scoped var';

  if (true) {
    var blockVar = 'I am var declared inside a block but still function scoped';
    console.log(blockVar); // Accessible here - inside block
    console.log(funcVar); // Accessible here - inside function
    console.log(globalVar); // Accessible here - global scope
  }

  console.log(blockVar); // Accessible here too - because var is function scoped
  console.log(funcVar); // Accessible anywhere inside the function
}

testVarScope();

console.log(globalVar); // Accessible anywhere - global scope

// console.log(funcVar);    // Error! funcVar is not accessible outside the function
// console.log(blockVar);   // Error! blockVar is not accessible outside the function

/**
 * Output:
 * I am var declared inside a block but still function scoped
I am a function-scoped var
I am a global var
I am var declared inside a block but still function scoped
I am a function-scoped var
I am a global var
 */

/**
 * Explanation in simple words:
-> The var keyword declares a variable with function scope or global scope if not inside any function.
-> If declared inside a function, it is accessible anywhere inside that function, 
   even inside blocks like if or loops.
-> If declared outside any function, it becomes a global variable accessible everywhere.
-> var is NOT block scoped, so variables declared with var inside blocks are still 
   accessible throughout the whole function.
 */
