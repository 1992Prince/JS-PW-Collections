function exampleConst() {
  const name = 'John';
  if (true) {
    const name = 'Jane'; // This creates a new block-scoped variable 'name'
    console.log(name); // Output: John (yeh galat hai, actually 'Jane' print hoga)
  }
  console.log(name); // Output: John
}

exampleConst();

/**
 * Output:
 * Jane
 * John
 */

/**
 * const is also block-scoped, meaning it is limited to the block in which it is defined.
 *
 * Reasoning kyun:
 * const name = "John"; function ke scope me hai.
 * if block ke andar const name = "Jane"; se ek naya block-scoped variable ban jata hai,
 * jo outer name ko shadow karta hai.
 * Isliye, console.log(name); block ke andar block scoped "Jane" ko print karega.
 * Block ke bahar console.log(name); outer const name = "John"; ko print karega.
 */

/**
✅ var vs let vs const in JavaScript

✅ 1. Scope

  var: Has function scope. If declared inside a function, it's accessible throughout that function. 
                          If declared outside, it becomes global.

  let: Has block scope. It's only accessible within the block {} where it's defined.

  const: Also block scoped, same as let. Not accessible outside the {} where it's declared.


✅ 2. Hoisting

var: Is hoisted to the top of its function/global scope and initialized with undefined. 
So, accessing it before declaration won’t throw an error, but returns undefined.

let: Is hoisted but not initialized. Accessing it before declaration results in a ReferenceError due 
to the Temporal Dead Zone.

const: Same as let. Hoisted, but not initialized — accessing it before declaration causes a ReferenceError.

✅ 3. Temporal Dead Zone (TDZ)

var: No TDZ. It's accessible (as undefined) even before declaration.

let: Has a TDZ — accessing the variable before declaration causes a ReferenceError.

const: Also has a TDZ — must not be accessed before it's declared.


✅ 4. Re-declaration

var: Allowed. You can re-declare the same variable in the same scope without error.

let: Not allowed. Redeclaring in the same scope throws a SyntaxError.

const: Not allowed. Same restriction as let

var a = 10;
var a = 20; // ✅ Allowed

let b = 10;
let b = 20; // ❌ SyntaxError

const c = 10;
const c = 20; // ❌ SyntaxError



✅ 5. Reassignment

var: Can be reassigned freely.

let: Can be reassigned as well.

const: Cannot be reassigned. Once a value is assigned, it stays fixed.

var x = 1;
x = 2; // ✅

let y = 3;
y = 4; // ✅

const z = 5;
z = 6; // ❌ TypeError



✅ 6. Initialization Requirement

var: Initialization is optional. You can declare without assigning.

let: Initialization is optional.

const: Initialization is mandatory. Must assign a value during declaration.

var a;        // ✅ allowed
let b;        // ✅ allowed
const c;      // ❌ SyntaxError: Missing initializer

const person = { name: "Alice" };
person.name = "Bob"; // ✅ mutation allowed
person = {};         // ❌ TypeError: reassignment not allowed




below ones are not that imp

✅ 7. Use in Loops

var: Not block-safe — in loops like for, it can cause unexpected behavior due to function scope.

let: Safe for loops — each iteration gets a new instance.

const: Also safe in loops, as long as the variable isn’t reassigned inside the loop.

✅ 8. Global Object Binding (Window object in browsers)

var: If declared globally, it becomes a property of the window object.

let: Does not bind to the global window object.

const: Also does not bind to the window object.

✅ 9. Usage Recommendation

var: Avoid using in modern JavaScript. Only for legacy codebases.

let: Use when you expect the variable value to change over time.

const: Use as default choice, especially for constants, functions, objects, arrays you don’t want reassigned.

✅ 10. Mutability
var: Mutable.

let: Mutable.

const: Immutable binding — but not deep immutable. For objects/arrays, the reference can't be changed, but properties can be modified.
 */
