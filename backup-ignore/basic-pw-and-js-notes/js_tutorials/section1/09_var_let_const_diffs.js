/**
 * Differences Between `var`, `let`, and `const` in JavaScript
 * 
 * This document provides a clear overview of the differences between `var`, `let`, and `const`,
 * allowing for easy reference and effective explanations during interviews.
 */

// 1. **Scope**
/**
 * - `var`: Function-scoped or globally scoped, depending on where it is declared. 
 *           It ignores block scope (e.g., `{}`) and can be accessed outside of blocks.
 * - `let`: Block-scoped, meaning it is only accessible within the block `{}` where it is declared.
 * - `const`: Also block-scoped, like `let`. It is only accessible within the block where it is declared.
 */

// 2. **Hoisting**
/**
 * - `var`: Hoisted to the top of its scope (function/global) and initialized with `undefined`. 
 *           It can be used before its actual declaration.
 * - `let` & `const`: Both are hoisted, but are not initialized. They remain in the "temporal dead zone (TDZ)" 
 *                    until the point in the code where they are defined. Accessing them before their declaration
 *                    results in a `ReferenceError`.
 */

// 3. **Re-declaration**
/**
 * - `var`: Can be re-declared and updated within the same scope, which can lead to unintended behavior and bugs.
 * - `let`: Cannot be re-declared within the same scope, which reduces potential bugs, but it can be updated.
 * - `const`: Cannot be re-declared or updated. It must be initialized during its declaration and remains constant.
 */

// 4. **Initialization**
/**
 * - `var`: Automatically initialized with `undefined` when hoisted.
 * - `let`: Not initialized until it is assigned a value explicitly. Accessing before initialization throws `ReferenceError`.
 * - `const`: Must be initialized at the time of declaration. Failure to do so will result in a syntax error.
 */

// 5. **Mutability**
/**
 * - `var`: Mutable, meaning the value assigned can be changed after declaration.
 * - `let`: Mutable, similar to `var`. It allows the assigned value to be updated after declaration.
 * - `const`: Immutable, meaning the assigned value cannot be changed after declaration.
 *            However, for objects and arrays, while the reference is fixed, the internal data (properties or items) can still be changed.
 */

// 6. **Usage Recommendations**
/**
 * - `var`: Avoid using `var` in modern JavaScript as it can introduce unexpected behavior due to its function/global scope and hoisting.
 * - `let`: Use `let` when you need a variable whose value can change, but where scoping and predictability are important.
 * - `const`: Prefer `const` wherever possible, especially for constants or values that should not be changed. It ensures immutability,
 *            which makes code more predictable and reduces potential bugs.
 */

// 7. **Summary Table**
/**
 * | Feature            | `var`                 | `let`                  | `const`                |
 * |--------------------|-----------------------|------------------------|------------------------|
 * | Scope              | Function or Global    | Block                  | Block                  |
 * | Hoisting           | Yes, initialized as `undefined` | Yes, but not initialized (TDZ) | Yes, but not initialized (TDZ) |
 * | Re-declaration     | Allowed               | Not Allowed            | Not Allowed            |
 * | Initialization     | Optional              | Required before use    | Required at declaration|
 * | Mutability         | Mutable               | Mutable                | Immutable (fixed reference) |
 * | Usage              | Legacy Code           | For mutable values     | For constants and fixed values |
 */

console.log("********** Differences Between var, let, and const **********");
console.log(`
1. Scope:
   - var: Function or global scope.
   - let: Block scope (limited to the block).
   - const: Block scope (limited to the block).

2. Hoisting:
   - var: Hoisted and initialized with 'undefined'.
   - let & const: Hoisted but not initialized, remain in temporal dead zone (TDZ) until assignment.

3. Re-declaration:
   - var: Can be re-declared within the same scope.
   - let: Cannot be re-declared in the same scope.
   - const: Cannot be re-declared and cannot be updated.

4. Initialization:
   - var: Automatically initialized to 'undefined'.
   - let: Must be assigned a value before use.
   - const: Must be initialized during declaration.

5. Mutability:
   - var: Mutable (value can be changed).
   - let: Mutable (value can be changed).
   - const: Immutable (assigned value cannot be changed, but object properties can be modified).

6. Usage Recommendations:
   - var: Generally avoid using in modern JavaScript.
   - let: Use for variables that may change over time.
   - const: Preferred when values are intended to remain constant.

`);
console.log("***********************************************************");



// Notes on Initialization in var, let, and const in JavaScript

/**
 * Initialization in JavaScript - var, let, and const
 * ----------------------------------------------------
 * This note explains the differences in the initialization of variables using `var`, `let`, and `const`.
 */

/**
 * 1. `var` - Optional Initialization
 * ----------------------------------------------------
 * - Initialization with `var` is optional.
 * - You can declare a variable without assigning it a value right away.
 * - If you do not assign a value, the default value is `undefined`.
 * 
 * Example:
 */

var x; // Declaration without initialization (x is `undefined` by default)
console.log(x); // Output: undefined

x = 10; // Initialization after declaration
console.log(x); // Output: 10

/**
 * Summary:
 * - With `var`, you can declare a variable without initializing it immediately.
 * - You can assign a value later on.
 */

/**
 * 2. `let` - Required Before Use
 * ----------------------------------------------------
 * - Initialization with `let` is **not required** at the time of declaration.
 * - You **must assign** a value before using it in an expression or operation, or you will get a `ReferenceError`.
 * 
 * Example:
 */

let y; // Declaration without initialization
console.log(y); // Output: undefined (y is declared but not yet initialized)

y = 20; // Initialization after declaration
console.log(y); // Output: 20

// Accessing before assignment in an expression
let z;
console.log(z + 5); // Output: NaN (`z` is `undefined`, and `undefined + 5` gives `NaN`)

/**
 * Summary:
 * - With `let`, you can declare a variable without initializing it.
 * - You **must initialize** it before using it in expressions.
 */

/**
 * 3. `const` - Required at Declaration
 * ----------------------------------------------------
 * - Initialization with `const` is **required** at the time of declaration.
 * - You **cannot declare** a `const` variable without assigning it a value immediately.
 * - Once assigned, the value cannot be changed (i.e., it becomes a constant).
 * 
 * Example:
 */

// const a; // ❌ SyntaxError: Missing initializer in const declaration (You must assign a value)
const b = 50; // ✅ Correct: Declaration with initialization
console.log(b); // Output: 50

// b = 100; // ❌ TypeError: Assignment to constant variable (cannot change the value of a const)

/**
 * Summary:
 * - With `const`, initialization is **required at declaration**.
 * - The value assigned to a `const` variable **cannot be changed** later.
 */

/**
 * Summary Table of Initialization Requirements
 * ----------------------------------------------------
 * - `var`:
 *   - Initialization: Optional.
 *   - Default value is `undefined` until a value is assigned.
 * 
 * - `let`:
 *   - Initialization: Optional at declaration, but **required before use**.
 *   - Default value is `undefined` if declared without assignment.
 * 
 * - `const`:
 *   - Initialization: **Required** at the time of declaration.
 *   - The assigned value **cannot be changed**.
 */

/**
 * Examples for All Three
 * ----------------------------------------------------
 */

// Using var
var message;
console.log(message); // Output: undefined (declared but not yet initialized)
message = "Hello, World!";
console.log(message); // Output: "Hello, World!"

// Using let
let count; // Declaration without initialization
console.log(count); // Output: undefined
count = 5; // Initialization before use
console.log(count); // Output: 5

// Using const
const pi = 3.14; // Must be initialized at declaration
console.log(pi); // Output: 3.14

// const greeting; // ❌ SyntaxError: Missing initializer in const declaration

/**
 * Key Points to Remember
 * ----------------------------------------------------
 * - **`var`**: You can declare without initialization. Default is `undefined`.
 * - **`let`**: Declaration without initialization is allowed, but **must** be initialized before any use.
 * - **`const`**: **Must** be initialized at the time of declaration, and the value **cannot be changed**.
 */

