// File: jsonObjects.js

// Notes: Understanding JSON Objects
/*
    1. What is JSON (JavaScript Object Notation)?
       - JSON is a lightweight data format used to store and exchange data.
       - It is based on JavaScript object syntax but is text-only.

    2. JSON Object:
       - A JSON object is a collection of key-value pairs.
       - The structure is similar to JavaScript objects but with stricter rules.

    3. JSON Object Syntax Rules:
       - Keys:
           - Must be strings enclosed in double quotes.
           - Cannot be unquoted, numeric, or special types like functions.
       - Values:
           - Can be strings, numbers, booleans, arrays, objects, or null.
           - Cannot include functions, `undefined`, or special types.

    Example:
        {
            "name": "Alice",          // Key (string): Value (string)
            "age": 25,               // Key (string): Value (number)
            "isStudent": false,      // Key (string): Value (boolean)
            "skills": ["JS", "React"], // Key (string): Value (array)
            "address": {             // Key (string): Value (nested JSON object)
                "city": "New York",
                "zip": 10001
            },
            "profile": null          // Key (string): Value (null)
        }

    4. Use Cases:
       - Used for communication between server and client (e.g., REST APIs).
       - Used in configuration files (e.g., `package.json` in Node.js).
*/

// Example 1: JSON Object (Text Representation)
const jsonString = `{
    "name": "Bob",
    "age": 30,
    "isEmployed": true,
    "skills": ["JavaScript", "Node.js"],
    "address": {
        "city": "New York",
        "zip": "10001"
    },
    "profile": null
}`;

console.log(jsonString); // Output: JSON string (raw text)

// Example 2: JSON Object in JavaScript (Parsed)
const jsonObject = {
    "name": "Bob",
    "age": 30,
    "isEmployed": true,
    "skills": ["JavaScript", "Node.js"],
    "address": {
        "city": "New York",
        "zip": "10001"
    },
    "profile": null
};

console.log(jsonObject.name);       // Output: Bob
console.log(jsonObject.skills[1]); // Output: Node.js
console.log(jsonObject.address.city); // Output: New York

/*
    Key Points:
    - JSON is purely text-based and follows strict rules (e.g., double-quoted keys and values).
    - JSON data is often used to transmit data between servers and clients.
    - JavaScript objects are more flexible, allowing non-string keys and functions.
*/
