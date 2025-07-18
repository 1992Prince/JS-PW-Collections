/**
🔷 1. What is a string in TypeScript?

        A string in TypeScript is a primitive data type used to represent textual data.
        Example:
        let name: string = "Playwright";

✅ TypeScript allows you to use string methods (from JavaScript) with type safety.

🔶 2. Common Use Cases
            UI text validation
            Locators in test automation (e.g. XPath, selectors)
            Name/email formatting
            Extracting dynamic values from logs

🔷 3. Declaration & Type - let message: string = "Hello World";

🔷 4. Most Useful String Methods
 */

// ✅ str.length
// Description: Returns number of characters
// Return type: number

let str = "Playwright";
console.log(`str.length is ${str.length}`); // str.length is 10

console.log();

// ✅ str.toUpperCase() / toLowerCase()
// Return type: string

str = str.toUpperCase(); // "PLAYWRIGHT"
console.log(`str.toUpperCase() is ${str}`); // str.toUpperCase() is PLAYWRIGHT
str = str.toLowerCase(); // "playwright"
console.log(`str.toLowerCase() is ${str}`); // str.toLowerCase() is playwright

console.log();

// ✅ str.includes(substring)
// Checks if substring exists
// Return type: boolean

str = "Playwright is awesome";
let hasPlay: boolean = str.includes("Play");
let hasTst: boolean = str.includes("TST");
console.log(`str.includes("Play") is ${hasPlay}`); // str.includes("Play") is true
console.log(`str.includes("TST") is ${hasTst}`); // str.includes("TST") is false

// ❌ If substring is case-sensitive and doesn't match, result is false:
// str.includes("play"); // false

console.log();

// ✅ str.replace(old, new)
// Replaces first match of substring
// Return type: string

console.log(`str.replace("awesome", "great") is ${str.replace("awesome", "great")}`); // str.replace("awesome", "great") is Playwright is great
console.log(str); // str remains unchanged: Playwright is awesome

// ❌ Doesn't change original string (strings are immutable)
// ❗ For all occurrences, use regex with /g:

console.log();

// ✅ str.substring(start, end)
// Extracts part of string
// Return type: string
// 📌 End index is exclusive
str = "Playwright is awesome";
console.log(`str.substring(0, 10) is ${str.substring(0, 10)}`); // str.substring(0, 10) is Playwright
console.log(`str.substring(11) is ${str.substring(11)}`); // str.substring(11) is awesome
console.log(str); // str remains unchanged: Playwright is awesome

console.log();

// ✅ str.slice(start, end?)
// Same as substring but supports negative indices
// Return type: string
// The slice() method extracts a portion of a string and returns it without modifying the original.

/**
🔴 So What’s a Negative Index?
➤ A negative index means:
Count backward from the end of the string.
        -1 means the last character
        -2 is second last
        -n is n-th character from the end

let str = "TypeScript is awesome";
Index:      0  1  2  3  4  5  6  7  8  9 ...
Characters: T  y  p  e  S  c  r  i  p  t ...
Negative:  -23                       -1

 */

console.log(`str.slice(-7) is ${str.slice(-7)}`); // str.slice(-7) is awesome

console.log();

// ✅ str.indexOf(substring)
// Finds position of substring
// Return type: number (-1 if not found)

console.log(`str.indexOf("is") is ${str.indexOf("is")}`); // str.indexOf("is") is 11
console.log(`str.indexOf("notfound") is ${str.indexOf("notfound")}`); // str.indexOf("notfound") is -1

console.log();

// ✅ str.split(delimiter)
// Splits string into array
// Return type: string[]

let words: string[] = str.split(" ");
console.log(words); // [ 'Playwright', 'is', 'awesome' ]

let words2: string[] = "abc,def,ghi".split(",");
console.log(words2); // [ 'abc', 'def', 'ghi' ]

console.log();

// ✅ str.trim()
// Removes leading/trailing spaces
// Return type: string

let str2: string = "   Hello World!   ";
console.log(`${str2} length is ${str2.length}`); // "   Hello World!   " length is 18
str2 = str2.trim();
console.log(`${str2} length is ${str2.length}`); // "Hello World!" length is 12

console.log();

// ✅ str.startsWith() / endsWith()
// Return type: boolean

console.log(`str.startsWith("Play") is ${str.startsWith("Play")}`); // str.startsWith("Play") is true
console.log(`str.endsWith("awesome") is ${str.endsWith("awesome")}`); // str.endsWith("awesome") is true
console.log(`str.startsWith("play") is ${str.startsWith("play")}`); // str.startsWith("play") is false
