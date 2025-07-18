/**
🔷 🔥 What does immutable mean for strings?
            You can’t modify a character at a specific index.
            Any operation like replace(), toUpperCase(), etc., returns a new string.
            The original string stays unchanged.
 */

// ✅ Example 1: Trying to mutate a string character directly

let str3: string = "hello";

// ❌ Attempt to change 'h' to 'H'
//str3[0] = "H"; // Index signature in type 'String' only permits reading.

console.log(str3); // Output: "hello" ❗️Still the same
console.log(`str3[0] : ${str3[0]}`); // Output: "h"

// 🧠 Why?
// Strings are primitive types. Unlike arrays or objects, string indexes are read-only

console.log();

// ✅ Example 2: Proper way to "change" a string (create a new one)

// ✅ Create a new string
let modifiedStr = "H" + str3.slice(1);
console.log(modifiedStr); // Output: "Hello"

console.log();

// ✅ Example 3: replace() returns a new string

let originalStr = "hello world";
let replacedStr = originalStr.replace("world", "TypeScript");
console.log(replacedStr, " ", originalStr); // Output: hello TypeScript   hello world

/**
why string methods can't modify existing strings and returns new strings

The reason string methods can't modify existing strings and always return new strings comes from the immutable nature of strings in 
JavaScript and TypeScript. 

🔷 1. Strings Are Immutable by Design
In JavaScript (and therefore TypeScript), strings are primitive values, just like numbers and booleans.

That means:
        They are not objects.
        They do not hold references to memory like arrays or objects.
        Once created, the value of a string cannot be changed.

🔷 2. Why Immutability? (The “Why” Behind the Design)

| Reason                            | Explanation                                                                                                            |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| ✅ **Performance & Memory Safety** | Immutability allows JavaScript engines to optimize memory usage and reuse string values internally (string interning). |
| ✅ **Predictable Behavior**        | If strings were mutable, accidental changes in one place could affect other code unexpectedly.                         |
| ✅ **Thread Safety**               | Immutability reduces bugs in concurrent or async environments — no one can "accidentally" change your string midway.   |
| ✅ **Security & Reliability**      | Prevents injection attacks and memory manipulation bugs from mutating sensitive values like passwords.                 |

 */
