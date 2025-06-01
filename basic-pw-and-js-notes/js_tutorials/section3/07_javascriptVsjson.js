// File: javascriptVsJson.js

// Notes: JavaScript Objects vs JSON + Converting Between Them
/*
    1. Key Differences Between JavaScript Objects and JSON:
       - **JavaScript Objects**:
           - A data structure native to JavaScript.
           - Keys can be strings (quoted or unquoted), symbols, or numbers (converted to strings).
           - Values can be any data type, including functions, `undefined`, or special objects.
       
       - **JSON (JavaScript Object Notation)**:
           - A text format used to store and exchange data.
           - Keys must be strings enclosed in double quotes.
           - Values must be valid JSON types: strings, numbers, booleans, arrays, objects, or `null`.
           - Does not support functions, `undefined`, or special objects (e.g., Dates, Symbols).

    2. Examples:
       - JavaScript Object:
           const jsObject = {
               name: "Alice", 
               age: 25, 
               greet: () => "Hello", 
               hobby: undefined 
           };

       - JSON:
           {
               "name": "Alice",
               "age": 25,
               "hobby": null
           }

    3. Conversion Between JavaScript Objects and JSON:
       - `JSON.stringify(obj)`: Converts a JavaScript object to a JSON string.
       - `JSON.parse(jsonString)`: Converts a JSON string into a JavaScript object.
*/

// Example 1: JavaScript Object
const jsObject = {
    name: "Bob",
    age: 40,
    greet: () => "Hello",  // Function (not supported in JSON)
    hobby: undefined       // Undefined (not supported in JSON)
};

console.log(jsObject); // Output: { name: 'Bob', age: 40, greet: [Function: greet], hobby: undefined }

// Example 2: Convert JavaScript Object to JSON String
const jsonString = JSON.stringify(jsObject); // Function and undefined are removed
console.log(jsonString); // Output: {"name":"Bob","age":40}

// Example 3: Convert JSON String to JavaScript Object
const parsedObject = JSON.parse('{"name":"Bob","age":40}');
console.log(parsedObject); // Output: { name: 'Bob', age: 40 }

/*
    4. Limitations of JSON:
       - JSON cannot include functions or special types (like `undefined`, Symbols, or Dates).
       - During `JSON.stringify`, unsupported values are ignored or replaced with `null`.

    5. Use Cases:
       - JSON is used for transmitting and storing structured data (e.g., REST APIs).
       - JavaScript objects are used for dynamic programming within applications.
*/

// Example 4: JSON with Nested Structure
const nestedJsonString = `{
    "name": "Alice",
    "skills": ["JavaScript", "Node.js"],
    "address": {
        "city": "New York",
        "zip": "10001"
    }
}`;

const nestedObject = JSON.parse(nestedJsonString);
console.log(nestedObject.address.city); // Output: New York

// Example 5: Handling JSON Errors
try {
    const invalidJson = JSON.parse('{"name": "Alice", "age": }'); // Missing value for `age`
} catch (error) {
    console.log("Error parsing JSON:", error.message); // Output: Error parsing JSON: Unexpected token } in JSON
}

/*
    Summary:
    - Use `JSON.stringify()` to serialize JavaScript objects into JSON strings.
    - Use `JSON.parse()` to deserialize JSON strings into JavaScript objects.
    - JSON is stricter than JavaScript objects and is ideal for data storage or communication.
*/
