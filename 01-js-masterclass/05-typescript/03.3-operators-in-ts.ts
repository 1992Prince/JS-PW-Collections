// Let’s go step by step through operators in TypeScript. Since TypeScript is a superset of JavaScript,
// the operators are mostly the same, but with type safety baked in.

// 1. Arithmetic Operators
// Used for basic math.

let x1: number = 10;
let y1: number = 3;

console.log(x1 + y1); // 13 (Addition)
console.log(x1 - y1); // 7 (Subtraction)
console.log(x1 * y1); // 30 (Multiplication)
console.log(x1 / y1); // 3.333... (Division)
console.log(x1 % y1); // 1 (Modulus, remainder)
console.log(x1 ** y1); // 1000 (Exponentiation)

console.log();

// 2. Assignment Operators
// Used to assign values.

let a: number = 5;

a += 2; // same as a = a + 2
a -= 1; // same as a = a - 1
a *= 3; // same as a = a * 3
a /= 2; // same as a = a / 2
a %= 4; // same as a = a % 4
a **= 2; // same as a = a ** 2

console.log()

// 3. Comparison Operators
// Return true or false.

let p: number = 10;
let q: number = 20;

console.log(p == q);  // false (equal by value)
console.log(p === q); // false (strict equal: value + type)
console.log(p != q);  // true (not equal)
console.log(p !== q); // true (strict not equal)
console.log(p > q);   // false
console.log(p < q);   // true
console.log(p >= 10); // true
console.log(q <= 15); // false

// == vs === [VIMP]

console.log()

// 4. Logical Operators
// Work with boolean values.

let isLoggedIn: boolean = true;
let isAdmin: boolean = false;

console.log(isLoggedIn && isAdmin); // false (AND)
console.log(isLoggedIn || isAdmin); // true  (OR)
console.log(!isLoggedIn);           // false (NOT)

console.log();

// 5. Bitwise Operators
// Work on binary representations.

let m: number = 5; // 0101
let n: number = 3; // 0011

console.log(m & n);  // 1 (AND: 0001)
console.log(m | n);  // 7 (OR: 0111)
console.log(m ^ n);  // 6 (XOR: 0110)
console.log(~m);     // -6 (NOT: invert bits)
console.log(m << 1); // 10 (left shift: 1010)
console.log(m >> 1); // 2  (right shift: 0010)

console.log();

// 6. Unary Operators
// Work on a single operand.

let z: number = 5;

console.log(+z);  // 5 (unary plus, ensures number)
console.log(-z);  // -5 (unary minus)
console.log(++z); // 6 (pre-increment)
console.log(z++); // 6 (post-increment, then z=7)
console.log(--z); // 6 (pre-decrement)
console.log(z--); // 6 (post-decrement, then z=5)


console.log();

// 7. Conditional (Ternary) Operator
// Shorthand for if...else.

let age: number = 18;
let message: string = age >= 18 ? "Adult" : "Minor";
console.log(message); // "Adult"


console.log()

// 8. type operator : typeof, instanceof

let str = "Hello";
console.log(typeof str); // string

class Dog { }

const d = new Dog();

console.log(d instanceof Dog); // true

console.log()

// concatenation operator
let s1: string = "Way";
let s2: string = "2";
let s3: string = "Automation";

console.log(s1 + s2 + s3);  // Way2Automation
console.log(10 + 20 + s1)   // 30Way
console.log(s1 + 10 + 20 + (2 * 3)) // Way10206