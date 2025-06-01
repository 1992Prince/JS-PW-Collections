// JavaScript Strings: Detailed Overview and Examples

/**
 * A String in JavaScript is a sequence of characters used to represent text.
 * Strings are one of the most commonly used data types in JavaScript, and they come with many built-in methods.
 */

// Example: Creating Strings
const singleQuoteString = 'Hello, World!';
const doubleQuoteString = "Hello, JavaScript!";
const templateLiteralString = `Hello, ES6!`;

console.log(singleQuoteString); // Output: Hello, World!
console.log(doubleQuoteString); // Output: Hello, JavaScript!
console.log(templateLiteralString); // Output: Hello, ES6!

/**
 * Important String Methods in JavaScript:
 */

// 1. length: Get the length of the string
const message = "Hello, JavaScript!";
console.log(message.length); // Output: 17

// 2. toUpperCase(): Convert all characters to uppercase
const upperCaseMessage = message.toUpperCase();
console.log(upperCaseMessage); // Output: HELLO, JAVASCRIPT!

// 3. toLowerCase(): Convert all characters to lowercase
const lowerCaseMessage = message.toLowerCase();
console.log(lowerCaseMessage); // Output: hello, javascript!

// 4. charAt(index): Get the character at a specific index
console.log(message.charAt(7)); // Output: J

// 5. indexOf(substring): Find the index of the first occurrence of a substring
console.log(message.indexOf("Java")); // Output: 7

// 6. lastIndexOf(substring): Find the index of the last occurrence of a substring
const repeatedMessage = "Hello, JavaScript! JavaScript is fun!";
console.log(repeatedMessage.lastIndexOf("JavaScript")); // Output: 19

// 7. includes(substring): Check if the string contains a substring
console.log(message.includes("Java")); // Output: true
console.log(message.includes("Python")); // Output: false

// 8. startsWith(substring): Check if the string starts with a specific substring
console.log(message.startsWith("Hello")); // Output: true

// 9. endsWith(substring): Check if the string ends with a specific substring
console.log(message.endsWith("JavaScript!")); // Output: true

// 10. substring(start, end): Extract a substring from the string
console.log(message.substring(7, 17)); // Output: JavaScript

// 11. slice(start, end): Extract a part of the string (can accept negative indices)
console.log(message.slice(7, 17)); // Output: JavaScript
console.log(message.slice(-10)); // Output: JavaScript!

// 12. split(delimiter): Split the string into an array based on a delimiter
const words = message.split(" ");
console.log(words); // Output: [ 'Hello,', 'JavaScript!' ]

// 13. replace(oldValue, newValue): Replace a part of the string with another value
const newMessage = message.replace("JavaScript", "World");
console.log(newMessage); // Output: Hello, World!

// 14. repeat(count): Repeat the string a specified number of times
const repeatedString = "Hi! ".repeat(3);
console.log(repeatedString); // Output: Hi! Hi! Hi! 

// 15. trim(): Remove whitespace from both ends of the string
const paddedString = "   Hello, JavaScript!   ";
console.log(paddedString.trim()); // Output: Hello, JavaScript!

// 16. concat(): Concatenate two or more strings
const greeting = "Hello";
const name = "Alice";
const fullGreeting = greeting.concat(", ", name, "!");
console.log(fullGreeting); // Output: Hello, Alice!

// 17. Template Literals: Using backticks to create strings with embedded expressions
const userName = "Bob";
const userAge = 25;
const userMessage = `Hello, my name is ${userName} and I am ${userAge} years old.`;
console.log(userMessage); // Output: Hello, my name is Bob and I am 25 years old.

/**
 * Iterating Over Strings in JavaScript:
 */

// 1. Using a for loop
const sampleString = "Iteration";
for (let i = 0; i < sampleString.length; i++) {
    console.log(sampleString[i]);
}
// Output:
// I
// t
// e
// r
// a
// t
// i
// o
// n

// 2. Using for...of loop
for (const char of sampleString) {
    console.log(char);
}
// Output:
// I
// t
// e
// r
// a
// t
// i
// o
// n

// 3. Using forEach with split()
const charArray = sampleString.split("");
charArray.forEach(char => console.log(char));
// Output:
// I
// t
// e
// r
// a
// t
// i
// o
// n

// 4. Using Array.from() to iterate over the string
Array.from(sampleString).forEach(char => console.log(char));
// Output:
// I
// t
// e
// r
// a
// t
// i
// o
// n

/**
 * Summary:
 * - Strings are immutable in JavaScript. Methods like toUpperCase(), replace(), etc., return new strings rather than modifying the original one.
 * - Template literals (``) are a powerful feature introduced in ES6 that makes string manipulation easier.
 * - There are many built-in methods for string manipulation that help in searching, extracting, modifying, and more.
 * - Strings can be iterated using various methods like for loop, for...of loop, and Array methods.
 */