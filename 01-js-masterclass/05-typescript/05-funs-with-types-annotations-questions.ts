/**
✅ Functions with Type Annotations – Interview Q&A

1. What are function parameter types in TypeScript? Why are they useful?
    Answer:
    They define the expected data type for each argument. 
    This helps catch bugs early by preventing you from passing wrong types.

    function add(a: number, b: number): number {
    return a + b;
    }

    If you call add("2", 3), TypeScript will throw an error.

2. What does the return type in a function mean?
    Answer:
    It tells TypeScript what type the function must return. 
    It helps in auto-complete and avoids returning wrong values.

    function greet(): string {
    return "Hello";
    }

3. What is the difference between void and never as return types?
    | Type    | Meaning                  | Example                   |
    | ------- | ------------------------ | ------------------------- |
    | `void`  | Function returns nothing | `console.log("Hi")`       |
    | `never` | Function never returns   | `throw new Error("Oops")` |

4. What are optional parameters? How do you declare one?
Answer:

    Add ? after the parameter name.

    function greet(name?: string) {
    console.log("Hello " + (name || "stranger"));
    }

    greet() → Hello stranger
    greet("Sid") → Hello Sid

5. What is a default parameter? How is it different from an optional parameter?
Answer:

    Optional: Can be undefined or skipped.

    Default: Has a fallback value.

    function greet(name: string = "Guest") {
    console.log("Hello " + name);
    }

    greet() → Hello Guest

6. Can you mix default and optional parameters? What's the best practice?
Answer:

    Yes, but the order matters.

    ✅ Best practice:
    Put optional at the end.
    Put default before or after depending on use case.

7. Write a function with one required, one optional, and one default parameter

    function registerUser(username: string, email?: string, role: string = "user") {
    console.log(username, email, role);
    }

    registerUser("Ankush");
    // Output: Ankush undefined user

    registerUser("Ankush", "a@mail.com");
    // Output: Ankush a@mail.com user

    registerUser("Ankush", "a@mail.com", "admin");
    // Output: Ankush a@mail.com admin

8. Can you pass undefined to skip a default parameter and fill the next one?
    Answer - Yes.

    function send(to: string, subject: string = "No Subject", cc?: string) {
    console.log(to, subject, cc);
    }

    send("sid@mail.com", undefined, "boss@mail.com");

    Output:
    sid@mail.com No Subject boss@mail.com

9. Give an example of never return type in a function.

    function throwError(message: string): never {
    throw new Error(message);
    }

    🔍 Why never?
    This function never returns normally.
    It throws an error, which stops the function instantly.
    So the return type is never, not void.

    Output: throwError("Something went wrong!");
    // ❌ Program stops here with an error

    10: 🧠 What is never used for in TypeScript?
    never means: "This function or expression will never produce a value."
    It is used to signal unreachable code, exhaustive type checking, or crashes.

    ✅ Common Use Cases for never
    1. Functions that throw errors
    If a function always throws, it never reaches the end, so return type is never.

    function crashApp(msg: string): never {
    throw new Error(msg);
        }
        Use Case: Error handling utilities or guards in critical code.

    2. Functions with infinite loops
    These never return either, so return type is never
    function hang(): never {
  while (true) {
        console.log("Stuck here forever...");
     }
    }
    Use Case: Event loops, polling systems (in rare cases).




 */