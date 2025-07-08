/**
✅ What is a Union Type in TypeScript?

Union type allows a variable to hold multiple possible types.

let input: number | string;

input = 101;       // ✅ valid
input = "Login";   // ✅ valid
input = true;      // ❌ invalid

 This means input can either be a number or a string but not both or anything else.

✅ What is a Type Alias?
Type Alias is a way to give a custom name to a complex type (like union or object type).

type ID = number | string;

Now instead of repeating number | string again and again, just use ID.

 */

// 🔁 Example: Function using Union Type & Alias

type ID = number | string;

function printId(id: ID) {
  console.log("ID:", id);
}

printId(101);           // Output: ID: 101
printId("TC-Login");    // Output: ID: TC-Login

/**
💡 Use Case in Automation Testing

| Scenario                           | How Union Type Helps                       |
| ---------------------------------- | ------------------------------------------ |
| Test ID might be numeric or string | e.g., `123` or `"TC-Login"`                |
| Dynamic form inputs                | e.g., dropdown might accept number or text |
| API inputs where type varies       | Some APIs accept both string or number     |
| Configurable test inputs           | Flexibility to send either ID or name      |

 */