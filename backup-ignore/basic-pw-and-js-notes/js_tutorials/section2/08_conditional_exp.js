// JavaScript Tutorial: Conditional Expressions

/**
 * Conditional expressions allow us to make decisions in our code based on conditions.
 * The main types of conditional expressions in JavaScript are:
 * 
 * 1. if, else if, and else statements
 * 2. Ternary (conditional) operator
 * 3. switch statement
 */

// 1. if, else if, and else statements
console.log("\n=== if, else if, and else statements ===");

let temperature = 25;

if (temperature > 30) {
    console.log("It's a hot day!"); // This block executes if the temperature is above 30.
} else if (temperature > 20 && temperature <= 30) {
    console.log("The weather is pleasant."); // This block executes if temperature is between 21 and 30.
} else {
    console.log("It's a bit cold!"); // This block executes if none of the above conditions are met.
}

// Output will be: "The weather is pleasant."

// Explanation:
// - The `if` statement evaluates a condition (temperature > 30). 
// - If true, the corresponding block is executed.
// - If false, the code moves to `else if` (temperature between 21 and 30).
// - If none of the conditions match, the `else` block executes.


// 2. Ternary (conditional) operator
console.log("\n=== Ternary Operator ===");

// Syntax: condition ? expression_if_true : expression_if_false;

let age = 18;
let message = (age >= 18) ? "You are an adult." : "You are a minor.";
console.log(message); // Output: "You are an adult."

// Explanation:
// - The ternary operator is a shorter way to write `if...else` statements.
// - It evaluates the condition `age >= 18`. If true, it assigns "You are an adult." to `message`.
// - If false, it assigns "You are a minor."

// Note: Ternary operators are best for short, simple conditions.


// 3. switch statement
console.log("\n=== switch Statement ===");

let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day number";
        break;
}

console.log("Day:", dayName); // Output: "Day: Wednesday"

// Explanation:
// - The `switch` statement evaluates the value of `day`.
// - It checks each `case` to find a match.
// - If a match is found (case 3), the corresponding block is executed.
// - The `break` statement prevents fall-through to the subsequent cases.
// - If no match is found, the `default` block executes.


// BONUS: Using if...else, ternary, and switch together
console.log("\n=== Combination Example ===");

let num = 5;

// Using if...else
if (num % 2 === 0) {
    console.log(num + " is even.");
} else {
    console.log(num + " is odd."); // Output: "5 is odd."
}

// Using ternary operator
let parity = (num % 2 === 0) ? "even" : "odd";
console.log("The number is " + parity); // Output: "The number is odd"

// Using switch (with fall-through)
switch (true) {
    case (num % 2 === 0):
        console.log(num + " is even.");
        break;
    case (num % 2 !== 0):
        console.log(num + " is odd.");
        break;
    default:
        console.log("Unknown number");
        break;
}

/**
 * Summary:
 * 
 * 1. `if`, `else if`, and `else` are used for checking multiple conditions and executing different blocks accordingly.
 * 2. Ternary (`? :`) operator is a concise way to write simple conditions.
 * 3. `switch` is used when you have multiple values for comparison against a variable.
 */

