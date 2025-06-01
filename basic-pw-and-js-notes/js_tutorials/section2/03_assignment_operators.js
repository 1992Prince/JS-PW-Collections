/**
 * ASSIGNMENT OPERATORS - 
 * =     x = y
 * +=    x = x + y
 * -=    x = x - y
 * *=    x = x * y
 * /=    x = x / y
 * %=    x = x % y
 * **=   x = x ** y
 * 
 */

// Notes on Assignment Operators in JavaScript

/**
 * 1. Assignment Operator ( = )
 * ----------------------------------------------------
 * - Assigns the value of the right-hand side to the left-hand side.
 * - Example:
 */

let x = 5; // Assigns 5 to variable 'x'
console.log(x); // Output: 5

/**
 * 2. Addition Assignment ( += )
 * ----------------------------------------------------
 * - Adds the value on the right-hand side to the variable on the left-hand side and assigns the result to the variable.
 * - Example:
 */

let a = 10;
a += 5; // Equivalent to: a = a + 5
console.log(a); // Output: 15

/**
 * 3. Subtraction Assignment ( -= )
 * ----------------------------------------------------
 * - Subtracts the value on the right-hand side from the variable on the left-hand side and assigns the result to the variable.
 * - Example:
 */

let b = 20;
b -= 5; // Equivalent to: b = b - 5
console.log(b); // Output: 15

/**
 * 4. Multiplication Assignment ( *= )
 * ----------------------------------------------------
 * - Multiplies the variable on the left-hand side by the value on the right-hand side and assigns the result to the variable.
 * - Example:
 */

let c = 4;
c *= 3; // Equivalent to: c = c * 3
console.log(c); // Output: 12

/**
 * 5. Division Assignment ( /= )
 * ----------------------------------------------------
 * - Divides the variable on the left-hand side by the value on the right-hand side and assigns the result to the variable.
 * - Example:
 */

let d = 15;
d /= 3; // Equivalent to: d = d / 3
console.log(d); // Output: 5

/**
 * 6. Remainder Assignment ( %= )
 * ----------------------------------------------------
 * - Divides the variable on the left-hand side by the value on the right-hand side and assigns the remainder to the variable.
 * - Example:
 */

let e = 17;
e %= 5; // Equivalent to: e = e % 5
console.log(e); // Output: 2

/**
 * 7. Exponentiation Assignment ( **= )
 * ----------------------------------------------------
 * - Raises the variable on the left-hand side to the power of the value on the right-hand side and assigns the result to the variable.
 * - Example:
 */

let f = 3;
f **= 3; // Equivalent to: f = f ** 3
console.log(f); // Output: 27

/**
 * 8. Left Shift Assignment ( <<= )
 * ----------------------------------------------------
 * - Shifts the bits of the variable to the left by the specified number of bits and assigns the result to the variable.
 * - Example:
 */

let g = 8; // Binary: 1000
g <<= 2;   // Shifts left by 2 bits: 100000
console.log(g); // Output: 32

/**
 * 9. Right Shift Assignment ( >>= )
 * ----------------------------------------------------
 * - Shifts the bits of the variable to the right by the specified number of bits and assigns the result to the variable.
 * - Example:
 */

let h = 16; // Binary: 10000
h >>= 2;    // Shifts right by 2 bits: 100
console.log(h); // Output: 4

/**
 * 10. Unsigned Right Shift Assignment ( >>>= )
 * ----------------------------------------------------
 * - Shifts the bits of the variable to the right by the specified number of bits (unsigned) and assigns the result to the variable.
 * - Example:
 */

let i = -16; // Binary representation of negative number
i >>>= 2;    // Shifts right by 2 bits (ignores the sign bit)
console.log(i); // Output: 1073741820

/**
 * 11. Bitwise AND Assignment ( &= )
 * ----------------------------------------------------
 * - Performs a bitwise AND operation between the variable and the specified value and assigns the result to the variable.
 * - Example:
 */

let j = 7;  // Binary: 111
j &= 3;     // Bitwise AND with Binary 011
console.log(j); // Output: 3

/**
 * 12. Bitwise OR Assignment ( |= )
 * ----------------------------------------------------
 * - Performs a bitwise OR operation between the variable and the specified value and assigns the result to the variable.
 * - Example:
 */

let k = 5;  // Binary: 101
k |= 2;     // Bitwise OR with Binary 010
console.log(k); // Output: 7

/**
 * 13. Bitwise XOR Assignment ( ^= )
 * ----------------------------------------------------
 * - Performs a bitwise XOR operation between the variable and the specified value and assigns the result to the variable.
 * - Example:
 */

let l = 6;  // Binary: 110
l ^= 3;     // Bitwise XOR with Binary 011
console.log(l); // Output: 5

/**
 * 14. Logical AND Assignment ( &&= ) - ES2021
 * ----------------------------------------------------
 * - Assigns the value only if the variable is truthy.
 * - Example:
 */

let m = true;
m &&= false; // Equivalent to: if (m) m = false;
console.log(m); // Output: false

/**
 * 15. Logical OR Assignment ( ||= ) - ES2021
 * ----------------------------------------------------
 * - Assigns the value only if the variable is falsy.
 * - Example:
 */

let n = false;
n ||= true; // Equivalent to: if (!n) n = true;
console.log(n); // Output: true

/**
 * 16. Nullish Coalescing Assignment ( ??= ) - ES2021
 * ----------------------------------------------------
 * - Assigns the value only if the variable is null or undefined.
 * - Example:
 */

let o = null;
o ??= "default value";
console.log(o); // Output: "default value"

/**
 * Summary
 * ----------------------------------------------------
 * - Assignment operators allow you to modify and assign values to variables.
 * - They make it easy to perform operations like addition, subtraction, multiplication, etc., without repeating the variable name.
 */
