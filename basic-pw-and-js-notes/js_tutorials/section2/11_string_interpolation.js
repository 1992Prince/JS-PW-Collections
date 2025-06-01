/**
 *  string interpolation. It was introduced in ES6 (ECMAScript 2015) to make it easier to create strings with 
 *  embedded variables or expressions. Let’s go into details:
 * 
 *  Syntax: ${variableOrExpression}
 * 
 *  This helps in avoding concatenation using + sign in strings and increase readability
 */

const name = "Alice";
const age = 25;

// Using template literals with ${}
const introduction = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(introduction); // Output: Hello, my name is Alice and I am 25 years old.

/**
 * Explanation of the Syntax
Backticks (`): Template literals are enclosed in backticks rather than quotes. This allows embedding variables and expressions directly in the string.
${variableOrExpression}: The ${} syntax is used to insert a variable or expression into the string.
${name} in the example above is a way to embed the value of the name variable into the string.
You can also use expressions, such as ${age * 2}, and the expression will be evaluated before being added to the string.
 */