/**
🤔 What is TypeScript?
TypeScript is a superset of JavaScript that adds types to your code. 
This means you can tell the computer what kind of data to expect — like numbers, text, 
or true/false — and it will help catch errors before your code runs.

✅ 1. string - Used for text values.

    let name: string = "Sidharth";

✅ 2. number - Used for numbers — both integers and decimals.

    let age: number = 34;

✅ 3. boolean - Only two values: true or false.

    let isLoggedIn: boolean = true;

✅ 4. any
    Can be any type: string, number, object, etc.
    Use only when you don’t know the type.

    let data: any = 42;
    data = "hello"; // This works too!

✅ 5. unknown
    Like any, but safer.
    typeScript forces you to check the type before using it.

    let value: unknown = "hello";

    if (typeof value === "string") {
    console.log(value.toUpperCase()); // Safe!
    }

🧠 Type Inference (Auto-detection of types)
    TypeScript can automatically detect the type from the value.

    const name = "Sid"; // TypeScript knows this is a string
    let score = 100;    // Inferred as number

    You don’t always need to explicitly write the type — TypeScript is smart enough to guess!

 */

    /**

    💼 Top TypeScript Interview Questions (Beginner-Friendly)

1. What is TypeScript and how is it different from JavaScript?
    Answer:
    TypeScript is a superset of JavaScript that adds static typing. 
    It helps catch errors during development and improves code readability and maintainability.

2. What are the basic types in TypeScript?
    Answer:

    string
    number
    boolean
    any
    unknown
    null, undefined
    void
    never

3. What is the any type and when should you use it?
    Answer:
    any disables type checking for a variable. 
    You should avoid it unless you're dealing with data of unknown shape (like from an API) 
    and you want flexibility.   

4. What’s the difference between any and unknown?

    | Feature      | `any`    | `unknown`             |
    | ------------ | -------- | --------------------- |
    | Type safety  | ❌ Unsafe | ✅ Safer               |
    | Restrictions | None     | Must check type first |

    let a: any = "hello";
    let b: unknown = "hello";

    console.log(a.toUpperCase()); // OK
    console.log(b.toUpperCase()); // ❌ Error unless type-checked

5. What is type inference in TypeScript?

    TypeScript can automatically guess the type of a variable based on its initial value.
    let score = 100; // inferred as number

6. What is a union type?
    Answer:
    A union type allows a variable to hold more than one type.
    let id: string | number;
    id = "ABC123";
    id = 123;

7. 🤔 What happens if you assign an incorrect value to a different data type in TypeScript?
Simple Answer:
👉 TypeScript gives you a compile-time error — it stops you from assigning a wrong type.

🔍 Example 1: Assigning string to a number
let age: number = 25;
age = "twenty-five"; // ❌ Error: Type 'string' is not assignable to type 'number'

🔍 Example 2: Assigning number to a boolean
let isLoggedIn: boolean = true;
isLoggedIn = 1; // ❌ Error: Type 'number' is not assignable to type 'boolean'

✅ What happens if you assign null or undefined to other types in TypeScript?
🔧 It depends on:
Whether strictNullChecks is enabled in tsconfig.json.

🔍 Case 1: When strictNullChecks is OFF (default in older TypeScript versions)

let name: string = null;      // ✅ Allowed
let age: number = undefined;  // ✅ Allowed

TypeScript allows null and undefined to be assigned to any type, because they are treated as "valid values".

⚠️ Not safe — can lead to runtime bugs.

🔐 Case 2: When strictNullChecks is ON (Recommended)
let name: string = null;      // ❌ Error: Type 'null' is not assignable to type 'string'
let age: number = undefined;  // ❌ Error: Type 'undefined' is not assignable to type 'number'

Here, null and undefined can only be assigned to variables explicitly typed to accept them.

✅ Correct way:
    let name: string | null = null;           // ✅ allowed
    let age: number | undefined = undefined;  // ✅ allowed

Explanation:
💬 Statement 1:
    let name: string | null = null;

🔍 What it means:
    You're saying:
    ❝This variable name can hold either a string OR null.❞
    So assigning null is perfectly valid here.
    Later, you can also assign a string:

    name = "Ankush";  // ✅ Allowed
    name = null;      // ✅ Allowed again

    ✨ This is called a union type — string | null
    It means: either string OR null is okay.

💬 Statement 2:
let age: number | undefined = undefined;

🔍 What it means:
    You're saying:
    ❝This variable age can be either a number or undefined.❞
    So writing:

    age = undefined;  // ✅ Allowed
    age = 25;         // ✅ Allowed

    Both are allowed, because of the number | undefined type.

🤯 Without the | null or | undefined part:
    TypeScript will not allow assigning null or undefined.

    let name: string = null;     // ❌ Error
    let age: number = undefined; // ❌ Error

    Unless you allow them explicitly using union types.

📦 Why use this?
    You use string | null or number | undefined when:
    You expect that value might not be there at some point.
    For example:
    Optional form field (might be null)
    API response (might be undefined)
     */