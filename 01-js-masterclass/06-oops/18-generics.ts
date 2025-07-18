/**
🔰 What is a Generic in TypeScript?
A generic is a way to create reusable code that works with any data type while maintaining type safety.

Instead of writing:
    - one function for string[]
    - another for number[]
You write one generic function that works for both

✅ Why Use Generics?
    - Reusability ✅
    - Type safety ✅
    - Cleaner code ✅
    - Auto type inference ✅

📘 Basic Syntax:

function identity<T>(value: T): T {
  return value;
}

        - T is a type placeholder
        - It will be replaced with a real type when the function is called

✅ Example:

const val1 = identity<string>("Sidharth"); // T becomes string
const val2 = identity<number>(42);         // T becomes number

⚠️ Why not just use any?

function getAny(arr: any[]): any {
  return arr[0];
}

    - ✅ Works, but ❌ loses type safety
    - Compiler can't help you with autocompletion or catching type errors

 */

// ✅ Generic Version:

function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

const getname = getFirstElement<string>(["Sid", "Rahul"]); // returns string
const getscore = getFirstElement<number>([95, 80, 70]);     // returns number

console.log(`First name: ${getname} and first score: ${getscore}`);

console.log();

// 💡 Generics in Interfaces
// Very useful in APIs or reusable components:

interface ApiResponse<T> {
    status: number;
    data: T;
}

const userResponse: ApiResponse<{ name: string; age: number }> = {
    status: 200,
    data: {
        name: "Sidharth",
        age: 34,
    },
};

const scoresResponse: ApiResponse<number[]> = {
    status: 200,
    data: [95, 85, 75],
};


console.log();

// ❌ Problem with any
// 💡 Example 1: No compile-time error with wrong type access

function getItemAny(arr: any[]): any {
    return arr[0];
}

const result2 = getItemAny(["Sid", "Rahul"]); // string expected
console.log(`result2 is ${result2}`); // result2 is Sid

console.log(result2.toFixed(2)); // ✅ Compiles but ❌ Runtime error!
// TypeError: result2.toFixed is not a function
//at Object.<anonymous> (D:\2025\17-sid-course\JS-PW-Collections\01-js-masterclass\06-oops\18-generics.ts:88:21)

/**
🧨 What went wrong?
    - We returned a string, but tried to use .toFixed(2) (which is only for numbers).
    - TypeScript didn’t complain because result is of type any.
    - You lose all type inference, checking, and autocompletion.
 */

console.log();

// ✅ Solution with Generics (type-safe)
function getItemGeneric<T>(arr: T[]): T {
    return arr[0];
}

const result4 = getItemGeneric<string>(["Sid", "Rahul"]); // result is string

// uncomment below line to see error - generics is making sure error is caught at compile time
//console.log(result4.toFixed(2)); // ❌ Compile-time error
// 🛑 Property 'toFixed' does not exist on type 'string'

// ✅ This is type safety in action.

/**
📝 Summary
| Feature             | `any`     | `generic<T>`         |
| ------------------- | --------- | -------------------- |
| Type Checking       | ❌ Skipped | ✅ Enforced           |
| Autocompletion      | ❌ None    | ✅ Full IntelliSense  |
| Compile-Time Errors | ❌ Missed  | ✅ Prevented          |
| Safer Code          | ❌ Risky   | ✅ Safe & Predictable |

 */

