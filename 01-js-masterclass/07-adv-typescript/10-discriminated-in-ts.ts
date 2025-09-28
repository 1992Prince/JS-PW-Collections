/**
🔷 What are Discriminated Unions?

Discriminated Unions (a.k.a. Tagged Unions or Algebraic Data Types) allow you to combine multiple types safely 
and distinguish them using a common literal property (called the discriminant).

👉 Ye tab use hota hai jab tumhare paas multiple types ka union ho and you want to identify each type using 
a unique property.
 */

// 🧪 Syntax & Example:

type Circle = {
    kind: "circle";
    radius: number;
};

type Square = {
    kind: "square";
    side: number;
};

type Shape = Circle | Square;

// 👉 Yahan kind is the discriminant. since it is common in both types
// ✅ Use in Code:

function getArea(shape: Shape): number {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius * shape.radius;
    } else if (shape.kind === "square") {
        return shape.side * shape.side;
    } else {
        // unreachable, but safe fallback
        throw new Error("Invalid shape");
    }
}

// ✅ TypeScript automatically narrows the type based on kind — so you don’t need to do manual type assertions or checks.

/**
🔍 Why it’s Awesome?
        - Type-safe checks
        - Cleaner switch/case logic
        - Avoids type casting (as)
        - Great for working with APIs, UI state, etc.
 */

// Perfect for API responses, test results, or UI events.

type TestPass = { status: "pass"; duration: number };
type TestFail = { status: "fail"; reason: string };
type testSkip = { status: "skip"; state: string };

type TestResult = TestPass | TestFail | testSkip;

function printResult(result: TestResult) {
    switch (result.status) {
        case "pass":
            console.log(`Test passed in ${result.duration}s`);
            break;
        case "fail":
            console.log(`Test failed: ${result.reason}`);
            break;
        case "skip":
            console.log(`Test skipped: ${result.state}`);
            break;
    }
}


printResult({ status: "pass", duration: 5 });
printResult({ status: "fail", reason: "Network error" });
printResult({ status: "skip", state: "Browser not supported" });

// output:
// Test passed in 5s
// Test failed: Network error
// Test skipped: Browser not supported

//  Use case: Model result of a test run or network call with status codes.
