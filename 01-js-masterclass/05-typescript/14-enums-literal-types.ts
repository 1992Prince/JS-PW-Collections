/**
✅ 8. Enums & Literal Types

🔶 What is an Enum in TypeScript?
Enum (short for "enumeration") is a way to give friendly names to a set of constant values.

It helps when you have a fixed set of values that represent states or options — 
jaise test statuses, user roles, environments, etc.
 */

// ✅ Example: enum for Test Status

enum TestStatus {
  Pass = "PASS",
  Fail = "FAIL",
  Skip = "SKIP"
}

// Yahaan pe:
// We created a group of string constants.
// These values are predefined and fixed.

// 🔁 Using the Enum

function logTestStatus(status: TestStatus) {
  console.log("Test Status:", status);
}

logTestStatus(TestStatus.Pass); // ✅ Output: Test Status: PASS
//logTestStatus("PASS");          // ❌ Error if not using enum value

// ✅ This keeps your code type-safe and prevents spelling mistakes like "pas" or "PaSS"

/**
💡 Use Cases in Automation

    | Scenario              | How Enum Helps                       |
    | --------------------- | ------------------------------------ |
    | Test Reporting        | Define test result statuses          |
    | API Test Responses    | Handle status codes, response states |
    | Environment Selection | Enum for `QA`, `UAT`, `PROD`         |
    | User Roles            | Enum for `Admin`, `Tester`, `Viewer` |

    🔷 What are Literal Types?
        A literal type restricts a variable to exact values only.
 */
console.log();

type TestStatusLiteral = "PASS" | "FAIL" | "SKIP";

function logStatus(status: TestStatusLiteral) {
  console.log("Status is:", status);
}

// So this status can be only "PASS", "FAIL", or "SKIP" — kuch aur value doge, error aa jaayega.
logStatus("PASS"); // ✅ Valid
// logStatus("PENDING"); // ❌ Error: Type '"PENDING"' is not assignable to type 'TestStatusLiteral'.

type TestStatusCode = 200 | 400 | 500;

function handleResponse(status: TestStatusCode) {
  console.log("Response Status Code:", status);
}

handleResponse(200); // ✅ Valid // Response Status Code: 200
// handleResponse(404); // ❌ Error: Type '404' is not assignable to type 'TestStatusCode'.

// Great for writing structured test status/reporting logic