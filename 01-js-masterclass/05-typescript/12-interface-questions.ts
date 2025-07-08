/**
✅ What is an Interface in TypeScript?

    "An interface in TypeScript is a way to define the structure or contract of an object. 
    It tells TypeScript what properties an object must or can have, along with their types. 
    It ensures that objects follow a consistent shape throughout the application."

✅ Why Interface? / How it helps in structured data?
    Helps in defining consistent object structure
    Makes your code readable, maintainable & scalable
    Gives auto-completion in editors like VS Code
    Helps avoid typo errors or missing properties
    Supports optional & readonly properties
    Enforces type safety across functions, arrays, and APIs

✅ Syntax Example

    interface TestCase {
    id: number;
    name: string;
    status: "pass" | "fail" | "skip";
    comment?: string; // optional property
    readonly createdBy: string; // cannot be changed once set
    }

✅ Optional Properties (?)

    Marked with a ?
    Not required while creating the object
    Useful when some data is not always available
    example - comment?: string;
    If not passed → no error.

✅ Readonly Properties

    Marked with readonly
    Can be assigned once (during object creation)
    Cannot be modified later
    Ensures immutability of that property

    readonly createdBy: string;

✅ Use Cases in Automation Testing

    | Scenario                       | How Interface Helps                                     |
    | ------------------------------ | ------------------------------------------------------- |
    | API Response Handling          | Define response structure using interfaces              |
    | Test Case Modeling             | Store ID, name, status, etc., for test cases            |
    | Test Suite Configs             | Represent config data like env, retries, timeouts       |
    | Page Object Models (POM)       | Define structure of element objects                     |
    | Utility Functions Input/Output | Ensure data passed to methods follows correct structure |

🧠 Summary for Interviews

    | Feature            | Explanation                                              |
    | ------------------ | -------------------------------------------------------- |
    | What is Interface? | Defines structure for objects                            |
    | Helps With         | Type safety, consistency, auto-completion                |
    | Optional (`?`)     | Property that may or may not be present                  |
    | Readonly           | Cannot be changed after creation                         |
    | Automation Use     | API data models, test configs, results, reusable methods |
    | Functions Use      | Define parameter types & return types using interfaces   |



 */