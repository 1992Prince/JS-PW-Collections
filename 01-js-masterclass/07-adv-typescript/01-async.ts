function fetchUser(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("John Doe");
        }, 2000); // 2 seconds delay
    });
}


async function getUserAndGreet() {
    console.log("Fetching user...");
    const user = await fetchUser(); // waits for fetchUser to resolve
    console.log(`Hello, ${user}!`);
}

getUserAndGreet();

/**
Explanation

- fetchUser() simulates a network call by returning a Promise that resolves after 2 seconds.

- getUserAndGreet() is an async function:
    - It uses await to pause execution until fetchUser() resolves.
    - This makes it feel like synchronous code, even though it’s async.

 */

/**
🔹 What is async in TypeScript?

In TypeScript (and JavaScript), the async keyword is used before a function to tell the compiler that this function 
will always return a Promise, even if you return a regular value.

It makes working with asynchronous operations (like API calls, file reading, timers) feel more like synchronous code 
using await.

✅ Syntax:

async function fetchData(): Promise<string> {
  return "data"; // returns a Promise<string> automatically
}


🧠 Why Use async/await?

    - Cleaner syntax: Easier to read than nested .then() chains.
    - Error handling: You can use try-catch like in sync code.
    - Sequential execution: Can write steps one after another, even if they're async.
    - Without async/await, we have to write nested .then() calls or handle Promises manually, which can be hard to read



❓ Can we use async without await?

    ✅ Yes, you can write an async function without using await inside it.

    But usually, that’s not useful unless you're just returning a Promise manually:

    async function sayHello() {
    return "Hello"; // becomes Promise<string>
    }

    ➡ Even though you didn’t use await, the function is still asynchronous and returns a Promise.



❓ Can we use await without async?

    ❌ No, await can only be used inside an async function.
    Using await outside an async function will throw a syntax error:

    // ❌ This will throw error
    const result = await someAsyncFunction(); // await is illegal here



❓ Does async have to be before function?

    ✅ Yes, if you’re defining an async function with the regular function syntax:

    async function getUser() { ... } // ✅ Valid
    function async getUser() { ... } // ❌ Invalid

    For arrow functions or function expressions:

    const fetchData = async () => { ... } // ✅ Valid



✅ Q1: Can you write only synchronous code inside an async function?

        👉 Yes, you can write only synchronous code inside an async function.

        But even if there's only synchronous code, the function will still return a Promise.

        async function sayHello() {
        return "Hello";
        }

        const result = sayHello(); // result is a Promise<string>
        result.then(res => console.log(res)); // Output: Hello

        Even though we didn’t use any await, the function is still async and returns a Promise<string>.



✅ Q2: Can you write only asynchronous code inside an async function?

        👉 Yes, in fact, that's the main use of async functions — to use await for asynchronous operations.

        🔹 Example:

        async function fetchData() {
        const response = await fetch("https://api.com/data");
        const json = await response.json();
        return json;
        }

        Here, all operations are async using await.



✅ Q3: Can you write both synchronous and asynchronous code inside an async function?

    👉 Absolutely! This is very common.

    async function getUserInfo() {
    console.log("Fetching user info..."); // Sync
    const data = await fetch("/user");     // Async
    const user = await data.json();        // Async
    console.log("User fetched!");         // Sync
    return user;
    }

    So yes, mixing sync and async code is perfectly fine in an async function.



✅ Q4: What is Promise<string>?

    Promise<string> means:

    A Promise that will eventually resolve to a value of type string.

    async function greet(): Promise<string> {
    return "Hello";
    }

    Even though we return a string, the actual return type is Promise<string> 
    because async always wraps the return value inside a Promise.



✅ Q5: What if we return a number, or some other type?

    No problem! The Promise just changes its type based on what you return.

    async function getNumber(): Promise<number> {
    return 42;
    }

    async function getBoolean(): Promise<boolean> {
    return true;
    }

    If you return a number, it's Promise<number>,
    If you return a boolean, it's Promise<boolean>,
    If you return an object, it's Promise<object>.

    🔁 The async keyword wraps whatever you return into a Promise automatically.




❌ Incorrect Example: Return type mismatch

    // Declared return type is Promise<string>

    async function getGreeting(): Promise<string> {
    return 123;                                   // ❌ Error: Type 'number' is not assignable to type 'string'
    }



🧠 Why this fails?

    You told TypeScript that the function will return a Promise<string>.
    But 123 is a number, not a string, so TypeScript complains.

 */
