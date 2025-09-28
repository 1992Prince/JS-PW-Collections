/**
 * COMPARISON OPERATORS -
 * ==    equal to
 * ===   equal value and equal type
 * !=    not equal
 * !==   not equal value or not equal type
 * >     greater than
 * <     less than
 * >=    greater than or equal to
 * <=    less than or equal to
 * ?     ternary operator
 */

// Notes on Comparison Operators in JavaScript

/**
 * 1. Equal to ( == )
 * ----------------------------------------------------
 * - Compares two values for equality, ignoring the data type.
 * - Performs type coercion.
 * - Example:
 */

let a = "5";
let b = 5;

console.log(a == b); // Output: true (Values are equal, type is ignored)

/**
 * 2. Strict Equal to ( === )
 * ----------------------------------------------------
 * - Compares two values for equality, including the data type.
 * - No type coercion.
 * - Example:
 */

let x = "5";
let y = 5;

console.log(x === y); // Output: false (Values are equal, but types are different)
console.log(y === 5); // Output: true (Both value and type are equal)

/**
 * 3. Not Equal to ( != )
 * ----------------------------------------------------
 * - Compares two values for inequality, ignoring the data type.
 * - Performs type coercion.
 * - Example:
 */

let c = "10";
let d = 10;

console.log(c != d); // Output: false (Values are equal, type is ignored)

/**
 * 4. Strict Not Equal to ( !== )
 * ----------------------------------------------------
 * - Compares two values for inequality, including the data type.
 * - No type coercion.
 * - Example:
 */

let p = "10";
let q = 10;

console.log(p !== q); // Output: true (Values are equal, but types are different)
console.log(q !== 5); // Output: true (Values are different)

/**
 * 5. Greater than ( > )
 * ----------------------------------------------------
 * - Checks if the value on the left is greater than the value on the right.
 * - Example:
 */

let num1 = 15;
let num2 = 10;

console.log(num1 > num2); // Output: true (15 is greater than 10)

/**
 * 6. Greater than or Equal to ( >= )
 * ----------------------------------------------------
 * - Checks if the value on the left is greater than or equal to the value on the right.
 * - Example:
 */

let age1 = 18;
let age2 = 18;

console.log(age1 >= age2); // Output: true (Both values are equal)

/**
 * 7. Less than ( < )
 * ----------------------------------------------------
 * - Checks if the value on the left is less than the value on the right.
 * - Example:
 */

let value1 = 5;
let value2 = 10;

console.log(value1 < value2); // Output: true (5 is less than 10)

/**
 * 8. Less than or Equal to ( <= )
 * ----------------------------------------------------
 * - Checks if the value on the left is less than or equal to the value on the right.
 * - Example:
 */

let weight1 = 50;
let weight2 = 50;

console.log(weight1 <= weight2); // Output: true (Both values are equal)

/**
 * 9. Ternary Operator ( ? : )
 * ----------------------------------------------------
 * - Conditional operator that returns one of two values based on a condition.
 * - Syntax: (condition) ? value_if_true : value_if_false
 * - Example:
 */

let age = 20;
let isAdult = (age >= 18) ? "Yes" : "No";

console.log(isAdult); // Output: "Yes"

/**
 * 10. Summary of Comparison Operators
 * ----------------------------------------------------
 * - Comparison operators compare values and return true or false.
 * - Commonly used in conditional statements and loops.
 * 
 * - Equal to (==): Compares values, ignoring data type.
 * - Strict Equal to (===): Compares values and data type.
 * - Not Equal to (!=): Checks if values are not equal, ignoring data type.
 * - Strict Not Equal to (!==): Checks if values and types are not equal.
 * - Greater than (>): Checks if the left value is greater.
 * - Greater than or Equal to (>=): Checks if the left value is greater or equal.
 * - Less than (<): Checks if the left value is smaller.
 * - Less than or Equal to (<=): Checks if the left value is smaller or equal.
 * - Ternary (?:): Shorthand for if-else conditions.
 */

/**
 * 11. Example with Conditional Logic
 * ----------------------------------------------------
 * - Using comparison operators in an if-else statement.
 */

let temperature = 30;

if (temperature > 25) {
    console.log("It's hot outside."); //
    // Output: "It's hot outside."
} else if (temperature < 15) {
    console.log("It's cold outside.");
} else {
    console.log("The weather is moderate.");
}

/**
 * 12. Practical Use Case: Finding Maximum Value
 * ----------------------------------------------------
 * - Using comparison operators to find the maximum value between two variables.
 */

let numA = 25;
let numB = 42;

let max = (numA > numB) ? numA : numB;

console.log("The maximum value is:", max); // Output: "The maximum value is: 42"

/**
 * 13. Truthy and Falsy Comparison
 * ----------------------------------------------------
 * - In JavaScript, when using non-boolean values, they may be treated as either "truthy" or "falsy."
 * - Example:
 */

let value = "Hello";

if (value) {
    console.log("The value is truthy."); // Output: "The value is truthy." (non-empty string is truthy)
}

let emptyString = "";

if (!emptyString) {
    console.log("The value is falsy."); // Output: "The value is falsy." (empty string is falsy)
}

/**
 * Summary
 * ----------------------------------------------------
 * - Comparison operators are essential for controlling the flow of programs.
 * - They help in making decisions based on different conditions.
 * - Understanding the difference between '==' and '===' is important.
 * - Use '==' for loose equality (type coercion happens).
 * - Use '===' for strict equality (both value and type must match).
 */

