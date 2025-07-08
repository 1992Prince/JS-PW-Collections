/**
✅ What is a Tuple in TypeScript?

    A tuple is a special type of array where:
        - The number of elements is fixed
        - The types of elements are known and fixed at specific positions
        - In short: "Array + Type + Position awareness"

🧠 Why do we need Tuples?

    Arrays can hold multiple items, but all of the same type (in strict typing).
    Tuples allow different types at different positions.

✅ Syntax:

    let user: [string, number] = ["Alice", 101];
        - Position 0 must be string
        - Position 1 must be number

✅ Basic Example:

    let employee: [string, number] = ["John", 25];
    console.log(employee[0]); // John
    console.log(employee[1]); // 25

❌ Invalid Tuples:

    let employee: [string, number] = [25, "John"]; // ❌ Error
    👉 Order matters in tuples!

✅ Tuple with Optional Elements:

    let person: [string, number?] = ["Alice"];
    Here:
    - First element is required (string)
    - Second element is optional (number)

✅ Tuple with Rest Elements (for variable-length data):

    let values: [string, ...number[]] = ["Start", 1, 2, 3];
    - First is string
    - Remaining can be many numbers


✅ Real-world Use Cases of Tuples:

    | Use Case                      | Tuple Example                          |
    | ----------------------------- | -------------------------------------- |
    | API Response (value + status) | `[data, statusCode]: [string, number]` |
    | Coordinates in automation     | `[x, y]: [number, number]`             |
    | Key-Value pair                | `[key, value]: [string, any]`          |
    | Selenium locator with text    | `["css", "input[name='email']"]`       |

✅ Declaring a Large Tuple in TypeScript

    A tuple is declared by specifying types of each position, like:

    let bigTuple: [string, number, boolean, string, number] = 
                ["TestUser", 123, true, "Passed", 99];

    Yahaan 5 elements hain:

    - string
    - number
    - boolean
    - string
    - number

    ☝️Important:
    You must define the type for each position.

    And you must provide all the values, unless some are optional.

    So for bigger size, tuples can get complex and not recommended, but they are powerful for structured data or paired values.

 */

let employee: [string, number] = ["John", 25];
console.log(employee[0]); // John
console.log(employee[1]); // 25

/**
✅ Arrays vs Tuples in TypeScript

| Feature            | **Array**                              | **Tuple**                                              |
| ------------------ | -------------------------------------- | ------------------------------------------------------ |
| Size               | Dynamic (can grow/shrink)              | Fixed (or known size, can have optional/rest elements) |
| Type of Elements   | Usually same type (e.g., all numbers)  | Can have **different types at specific positions**     |
| Order Importance   | ❌ Not usually important                | ✅ Yes, order matters (like: name at 0, age at 1)       |
| Index-based access | ✅ Yes                                  | ✅ Yes                                                  |
| Example            | `let ids: number[] = [101, 102, 103];` | `let user: [string, number] = ["Ankush", 28];`         |


✅ Use Cases in Automation Testing

    🔹 📌 Arrays in Automation:

        1. List of Elements (WebElements/Locators):
        const buttons: string[] = ['#submit', '#cancel', '#next'];

        2. List of Test Data Values:
        const testEmails: string[] = ['a@gmail.com', 'b@yahoo.com'];

        3. Batch screenshots or URLs:
        const urls: string[] = ['https://login.com', 'https://home.com'];

   🔹 📌 Tuples in Automation:

        1. Locator strategy + selector pair:
        const emailField: [string, string] = ['css', 'input[type="email"]'];

        2. Test case result as (testName, status):
        const result: [string, boolean] = ['Login Test', true];

        3. Error message + code pair:
        const error: [string, number] = ['Page not found', 404];

        4. Coordinate position (x, y) for mouse actions:
        const position: [number, number] = [220, 450];

        5. Label and its expected value (for UI assertions):
        const fieldLabel: [string, string] = ['Username', 'Ankush'];

   🔚 When to Use What?

    | Situation                                | Use Array 🧾 | Use Tuple 🔗               |
    | ---------------------------------------- | ------------ | -------------------------- |
    | Similar type list                        | ✅ Yes        | ❌ No                       |
    | Fixed pair or structure (like key/value) | ❌ No         | ✅ Yes                      |
    | Test data sets (emails, IDs)             | ✅ Array      | ❌                          |
    | Grouping related but different types     | ❌            | ✅ Tuple (e.g., name & age) |

🧠 Final Tip:

    🔹 Use arrays when dealing with lists of same-type items (like multiple URLs or selectors).
    🔹 Use tuples when you want to combine multiple values with different types or meaning, 
        like [name, score] or [strategy, selector]. or things in pairs.


        SID SUGGESTION - Explain where testers use this: response arrays, key-value pairs

 */
