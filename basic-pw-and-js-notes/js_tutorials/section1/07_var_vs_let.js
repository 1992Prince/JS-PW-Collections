console.log("JS Tutorials - : var, let, and const");

/**
 * Before ES6, only `var` was used to declare and define variables. There was no `let` or `const` keyword before ES6 version.
 * 
 * In ES6, new enhancements were introduced to make JavaScript better:
 * - `var` is globally scoped, while `let` and `const` are block scoped.
 * - `var` can be updated and re-declared within its scope.
 * - `let` can be updated but not re-declared.
 * - `const` can neither be updated nor re-declared.
 * - `const` must be initialized during declaration.
 * - `var` variables are initialized with `undefined` whereas `let` and `const` variables are not initialized.
 */

/**
 * var vs let vs const - Inmein sabse bada farq scope ka hai, matlab yeh variables kaha se access kiye ja sakte hain.
 * - `var` is global or function scoped.
 * - `var` ka use purane JavaScript versions mein hota tha.
 * - Agar tum `var` ko kisi block (`{}`) ke andar define karte ho, toh woh block ke bahar bhi accessible rahega. 
 * - Yeh global ya function scope hota hai. Yeh variable block ke andar ho ya bahar, kisi bhi jagah se access kiya ja sakta 
 *   hai agar woh function ke andar nahi hai.
 */

console.log();
console.log("***********************************************************");
console.log("------------------------var demo----------------------------");
console.log("***********************************************************");
console.log();

var b = "Harry";
console.log("b global val - ", b); // b global val -  Harry

// JavaScript block
{
    var b = "this";
    var p = "pikachu";
    console.log("b block val - ", b); // b block val -  this
}

console.log("b global val - ", b); // b global val -  this
console.log("p global val - ", p); // p global val -  pikachu

/**
 * From the above example, we can understand that `var` is globally scoped, and so its value (`b`) is changed inside the block.
 */

// var can be re-declared
var b = 22;
console.log("b global val - ", b); // b global val -  22

/**
 * Since `var` can be re-declared, it can introduce bugs in the later part of the code. For example, someone creates a variable `var gain = 100`.
 * Then, another coder comes and introduces another variable `var gain = 200`.
 * Now the old value of `gain` will be replaced with `200`, or it can even be a String value, etc.
 * This is how `var` re-declaration can introduce bugs.
 * So we should avoid using `var` and use `let` instead. `let` can't be re-declared.
 */

// `var` declared variables can be reinitialized with new values
b = "amazon";
console.log("b global val - ", b); // b global val -  amazon

console.log();
console.log("***********************************************************");
console.log("------------------------let demo----------------------------");
console.log("***********************************************************");
console.log();

/**
 * let - Block Scope
 * `let` ko ES6 (modern JavaScript) mein introduce kiya gaya.
 * Agar tum `let` ko kisi block (`{}`) ke andar declare karte ho, toh woh sirf usi block ke andar hi accessible rahega. 
 * Yeh block scope hota hai. Matlab, block ke bahar use karne par error milegi.
 */

let c = "Harry";
console.log("c global val - ", c); // c global val -  Harry

// JavaScript block
{
    let c = "this";
    let m = "mummy";
    console.log("c block val - ", c); // c block val -  this
    console.log("m block val - ", m); // m block val -  mummy
}

console.log("c global val - ", c); // c global val -  Harry
// console.log("m block val - ", m); // will throw error - ReferenceError: m is not defined

/**
 * From the above example, we can understand that `let` is block scoped.
 */

// `let` can't be re-declared
// let c = 22; // This line will throw an error - Cannot redeclare block-scoped variable 'c'.

// `let` variables can also be updated
c = "amazon";
console.log("c global val - ", c); // c global val -  amazon

console.log();
console.log("***********************************************************");
console.log("------------------------const demo--------------------------");
console.log("***********************************************************");
console.log();

const author = "Harry";

// We can't update values of `const` declared variables, else we will get a TypeError
// author = "prince";
// console.log("author - ", author); // TypeError: Assignment to constant variable.

console.log();

// Let's try to declare `author` variable using `let` now
// let author = "prince"; // will throw error - Cannot redeclare block-scoped variable 'author'

/**
 * `const` and `let` are block scoped.
 */

{
    const author = "prince";
    console.log("const author val is - ", author); // const author val is -  prince
}

console.log("const author val is - ", author); // const author val is -  Harry
