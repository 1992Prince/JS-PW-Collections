/**
🔀 What Are Union Types in TypeScript?

A Union Type allows a variable, 
                    function parameter, or 
                    return type 
                                to hold multiple possible types.

💡 Syntax: let variable: string | number;

Here, variable can hold either a string or a number.
 */

let value: string | number;

value = "hello";  // ✅ OK
value = 123;      // ✅ OK
// below line will give compile time error - uncomment to see
// value = true;     // ❌ Error: type 'boolean' is not assignable to type 'string | number'.ts(2322)

// This gives flexibility, but with type safety – it only allows what's declared in the union.

console.log();

//🚀 Union Types in Functions
// Let’s say you want to write a function that works both for string (name) and number (age):

function greet(person: string | number): string {
    if (typeof person === "string") {
        return `Hello, ${person}!`;
    } else {
        return `You are ${person} years old.`;
    }
}

console.log(greet("Sidharth")); // Hello, Sidharth!
console.log(greet(25));         // You are 25 years old

console.log();

// ✅ Here we use typeof to narrow the type before acting on it.


/**
🧠 Why Use Union Types?
| Benefit                       | Explanation                                       |
| ----------------------------- | ------------------------------------------------- |
| Flexibility                   | Accept multiple input types without losing safety |
| Type-safe alternatives        | Instead of using `any`, union keeps you safe      | - Interview Question can be asked here
| Perfect for overloaded inputs | Like functions that take id as string or number   |

⚠️ How union types help in type safety and any don't do it ? [IMP FROM INTERVIEW PERSPECTIVE]

⚠️ Type Narrowing Is Important

    When using union types, TypeScript forces you to handle all possibilities.
    You can’t directly call string/number methods unless you narrow the type.
 */

function printLength(value: string | number) {
    // below line will give compile time error - uncomment to see
    // value.length ❌ Error
    if (typeof value === "string") {
        console.log(value.length); // ✅ Safe
    }
}

console.log();

// 🔁 Union Types with Arrays

let items3: (string | number)[] = ["a", 2, "b", 3];

// Means: array can have both string and number values.

items3.push("test"); // ✅
items3.push(100);    // ✅
// items3.push(true);   // ❌ ERROR: Argument of type 'boolean' is not assignable to parameter of type 'string | number'

console.log();

// 🧪 Use Case Examples

// 1. ID could be a string or number

function fetchUser(id: string | number) {
    console.log(`Fetching user with ID: ${id}`);
}

function findUser(idOrName: number | string) {
    if (typeof idOrName === "number") {
        return `Looking up user by ID: ${idOrName}`;
    } else {
        return `Looking up user by name: ${idOrName}`;
    }
}

console.log(findUser(101));      // by ID
console.log(findUser("john_doe")); // by name

console.log();

// ✅ Union Type in Return Type — Example
function getUser(id: number): string | null {
    if (id === 1) {
        return "Amit";   // string
    } else {
        return null;      // null
    }
}

console.log(getUser(1));  // "Amit"
console.log(getUser(2));  // null

console.log();

// 🔁 Another Example — Number or Error Message

function divide(a: number, b: number): number | string {
    if (b === 0) {
        return "Cannot divide by zero"; // string
    } else {
        return a / b;                   // number
    }
}

console.log(divide(10, 2)); // 5
console.log(divide(10, 0)); // "Cannot divide by zero"

/**
🔍 Return Type Explanation:
Function getUser() returns either:

        "Amit" → string

        or null

→ So return type is: string | null
→ This is called a union type
 */



/**
Why Use Union Types in Flexible Functions?

| ✅ **Benefit**           | 💬 **Explanation**                                                                    |
| ----------------------- | ------------------------------------------------------------------------------------- |
| More reusable functions | One function can handle multiple types of input (like `string` or `number`)           |
| Cleaner API design      | Easier for the caller to use — just pass what they already have                       |
| Type safety maintained  | Even with flexibility, you still get autocomplete, IntelliSense & compile-time checks |
| Great for UI/API code   | Useful when handling form inputs, user types, IDs that could be string or number      |

❌ What Not to Do with Union Types
Avoid accessing properties or methods without checking the type first:


 */

function riskyPrint(data: string | number) {
    // console.log(data.toUpperCase()); //❌ Error: number may not have toUpperCase
    if (typeof data === 'string') {
        console.log(data.toUpperCase()); // ✅ safe
    }
}


