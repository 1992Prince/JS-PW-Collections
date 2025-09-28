const { lstat } = require("fs");

console.log("*************************Operators and Expressions*************************")

/**
 * ARITHMETIC OPERATORS
 * Addition, Subtraction, Multiplication, Division, Exponentiation, Modulus, Increment, Decrement
 */
let a = 45;
let b = 4;

console.log("a + b = ", a + b);    // a + b =  49
console.log("a - b = ", a - b);    // a - b =  41
console.log("a * b = ", a * b);   // a * b =  180
console.log("a / b = ", a / b);   // a / b =  11.25
console.log("a ** b = ", a ** b); // a ** b =  4100625 i.e. 45 power 4 , Exponentiation example
console.log("a % b = ", a % b);   // a % b =  1  i.e. this will give remainder

console.log("a++ = ", a++);      // a++ =  45 , here it is printing 45 first  but now a value is incremented to 46
// bole toh in above expression first will perform operation with current value like here printing then it will increment the value
console.log("a value now - ", a) // a value now -  46

let c = 45;
console.log("++c = ", ++c);       // ++c =  46
console.log("c value now - ", c) // c value now -  46
// in ++c case, in first step only it will increment and then it will perform next action

// Notes on Prefix Increment (++a) vs Postfix Increment (a++)

/**
 * 1. Prefix Increment ( ++a )
 * ----------------------------------------------------
 * - Increment happens first, then the updated value is returned.
 * - Useful when you need the updated value immediately.
 * - Example:
 */

let m = 5;
let n = ++m; // 'a' is incremented first, then assigned to 'b'

console.log(m); // Output: 6 (a is incremented by 1)
console.log(n); // Output: 6 (b gets the incremented value)

/**
 * - In this case:
 *   - 'a' starts as 5.
 *   - '++a' increments 'a' to 6.
 *   - 'b' is assigned the value of 'a', which is now 6.
 */

/**
 * 2. Postfix Increment ( a++ )
 * ----------------------------------------------------
 * - The original value is returned first, then the increment happens.
 * - Useful when you need to use the original value before incrementing it.
 * - Example:
 */

let x = 5;
let y = x++; // 'x' is assigned to 'y', then 'x' is incremented

console.log(x); // Output: 6 (x is incremented by 1)
console.log(y); // Output: 5 (y gets the original value before increment)

/**
 * - In this case:
 *   - 'x' starts as 5.
 *   - 'y' gets the value of 'x' first, which is 5.
 *   - After that, 'x' is incremented to 6.
 */

/**
 * 3. Summary of Differences
 * ----------------------------------------------------
 * - ++a (Prefix Increment):
 *   - Increment first, then use.
 *   - 'a' is updated immediately.
 * 
 * - a++ (Postfix Increment):
 *   - Use first, then increment.
 *   - Original value is used, and then 'a' is updated.
 */

/**
 * 4. Examples in Different Scenarios
 * ----------------------------------------------------
 * - Using Prefix in an Expression:
 */

let num = 3;
console.log(++num); // Output: 4 (increment happens first)

/**
 * - Using Postfix in an Expression:
 */

let count = 3;
console.log(count++); // Output: 3 (value is used first, then increment happens)
console.log(count);   // Output: 4 (now the value is incremented)

/**
 * 5. Prefix vs Postfix in Loops
 * ----------------------------------------------------
 * - In loops, both ++i and i++ are often used to increment counters.
 * - When used in a 'for' loop, there's usually no visible difference:
 */

for (let i = 0; i < 5; ++i) {
    console.log(i); // Outputs: 0, 1, 2, 3, 4
}

for (let i = 0; i < 5; i++) {
    console.log(i); // Outputs: 0, 1, 2, 3, 4
}

/**
 * - In both loops, i is incremented after each iteration.
 * - Since the loop continues until the condition is met, there's no visible difference between ++i and i++.
 */

/**
 * 6. Key Points to Remember
 * ----------------------------------------------------
 * - Prefix Increment (++a): Increment happens immediately, then the new value is used.
 * - Postfix Increment (a++): Original value is used first, then the increment happens.
 * - In terms of usage, always consider whether you need the incremented value immediately or the original value first.
 */



