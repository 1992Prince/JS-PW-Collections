// File: javascriptObjects.js

// Notes: Understanding JavaScript Objects
/*
    1. What is a JavaScript Object?
       - A collection of key-value pairs.
       - Keys are also known as properties.
       - Values can be any type: strings, numbers, booleans, arrays, objects, functions, or even `undefined`.

    2. Syntax of a JavaScript Object:
       const objectName = {
           key1: value1, // Key-value pair
           key2: value2, 
           ...
       };

    3. Key Points:
       - Keys can be written with or without quotes (if no special characters are used).
       - Values can include various data types.
*/

// Example 1: Creating a JavaScript Object
const person = {
    name: "John Doe",          // String
    age: 30,                   // Number
    isEmployed: true,          // Boolean
    skills: ["JavaScript", "React"], // Array
    address: {                 // Nested Object
        city: "New York",
        zip: "10001"
    },
    greet: function () {       // Function as a value
        return `Hello, my name is ${this.name}`;
    }
};

// Example 2: Accessing Object Properties
console.log(person.name);         // Output: John Doe (dot notation)
console.log(person["age"]);       // Output: 30 (bracket notation)
console.log(person.address.city); // Output: New York
console.log(person.greet());      // Output: Hello, my name is John Doe

// Example 3: Modifying Object Properties
person.age = 31; // Updating existing property
person.gender = "Male"; // Adding a new property
console.log(person.age);    // Output: 31
console.log(person.gender); // Output: Male

/*
    Summary:
    - JavaScript Objects are dynamic and can be updated with new properties at any time.
    - Keys can be accessed using dot notation or bracket notation.
*/


console.log()
console.log()

// File: javascriptObjectKeys.js

// Notes: Understanding Keys in JavaScript Objects
/*
    1. Keys in JavaScript Objects:
       - Keys are always treated as strings internally.
       - Even if you define keys as numbers, JavaScript will convert them to strings.
       - Keys can be any valid string, including those with special characters or spaces (if enclosed in quotes).

    2. Syntax:
       const objectName = {
           "key1": value1,   // String key
           key2: value2,     // Without quotes (treated as a string)
           123: value3       // Number key (converted to string)
       };

    3. Key Points:
       - Non-string keys are automatically converted to strings.
       - If you need to use special characters or spaces in keys, use quotes.
       - Functions, arrays, or objects cannot directly be used as keys.

*/

// Example 1: Keys as Strings and Numbers
const obj = {
    name: "Alice",   // Key is a string
    42: "Answer",    // Key is a number (converted to string internally)
    "first name": "Bob" // Key with space (must be quoted)
};

console.log(obj.name);           // Output: Alice (string key)
console.log(obj["42"]);          // Output: Answer (number key accessed as a string)
console.log(obj["first name"]);  // Output: Bob (special key accessed using quotes)

// Example 2: Number Keys
const numKeyObj = {
    1: "one",
    2: "two"
};

console.log(numKeyObj[1]);       // Output: one (JavaScript treats it as a string internally)
console.log(numKeyObj["2"]);     // Output: two (Works the same as accessing 2)

// Example 3: Invalid Keys
// Keys cannot directly be objects or arrays.
// const invalidObj = { [{}]: "value" }; // SyntaxError: Invalid key
// To use objects or arrays as keys, consider using a Map instead (we'll cover Maps later).

/*
    Summary:
    - Keys are always strings, even if you define them as numbers.
    - Use quotes for keys with spaces or special characters.
    - Objects, arrays, and other non-string types cannot be keys.
*/
