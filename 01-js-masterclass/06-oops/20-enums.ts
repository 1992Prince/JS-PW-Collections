/**
 * 
 * 🧠 Enums vs Constants
 * 
 * TypeScript mein hum constants ko const keyword se define kar sakte hain, aur ek aur tarika hota hai Enums ka.
 * 
 * ✅ Lekin difference kya hai?
 * 
 Const variables:

        Hum koi bhi constant define kar sakte hain using const

        Lekin agar hum user se koi value le rahe hain (jaise function ke parameter mein),
        toh woh kuch bhi pass kar sakta hai — agar galti se kuch wrong constant likh diya, 
        toh TypeScript compile error nahi deta (sirf runtime ya logical bug ho sakta hai)

        🔴 Isse typo errors aa sakti hain — jo dangerous hote hain

Enum:

        Enum ek set of predefined constant values provide karta hai

        User sirf wohi values use kar sakta hai jo enum mein defined hain

        Agar koi galat ya extra value di gayi — toh TypeScript Compile-Time Error deta hai
        ✅ Iska matlab: Saaf code, type-safety, aur bug-free logic

📌 Example:

        ✅ Enum Use for Test Results:

        enum TestResult {
        PASS = "PASS",
        FAIL = "FAIL",
        SKIP = "SKIP"
        }

✅ Function that accepts only these:

        function printResult(result: TestResult) {
        console.log("Test Result:", result);
        }

        printResult(TestResult.PASS);  // ✅ OK
        printResult("FAIL");           // ✅ OK (if type is string)
        printResult("UNKNOWN");        // ❌ Compile-time Error (if type is TestResult)

💡 Summary in Hinglish:

"Enums mein hum sirf predefined constant values rakhte hain.
Isse user ko exact wahi values use karni padti hain jo enum mein defined hoti hain.
Agar koi galat constant use karta hai, toh TypeScript compile-time error de deta hai.
Const se agar values define karte hain, toh user kuch bhi constant pass kar sakta hai — aur agar 
galti se kuch typo ho gaya, toh TypeScript nahi rokega.
Enums ka use clean code, type safety, aur best practices ke liye ideal hai. 
Especially jab aapko limited, fixed values chahiye — jaise TestResult = PASS | FAIL | SKIP."



🔢 What is an enum in TypeScript?

An enum (short for "enumeration") is a special named constant group 
that gives friendly names to sets of numeric or string values.

👉 enum ka use hum tab karte hain jab humein set of constant values define karne hote hain.

Jaise:

        ✅ Test result ho sakta hai → PASS, FAIL, SKIP
        ✅ User role ho sakta hai → ADMIN, USER, GUEST
        ✅ Order status ho sakta hai → PENDING, SHIPPED, DELIVERED

    
It's useful when you want to represent a fixed set of related values/constants, 
like days of the week, user roles, statuses, etc.

❓ Why not just use const strings?
    Agar hum string constants use karein:
    const PASS = "PASS";
    const FAIL = "FAIL";

Toh koi bhi banda kuch bhi string de sakta hai:
    runTest("PASSS"); // Typo but no compile error ❌
    Problem: No type safety ❌
    AND USER CAN PASS ANY STRING! BUT I WANT TO LIMIT IT TO ONLY "PASS", "FAIL", "SKIP"!

✅ enum gives better safety & structure

        enum TestResult {
            PASS,
            FAIL,
            SKIP
        }

        function runTest(result: TestResult) {
            if (result === TestResult.PASS) {
                console.log("Test Passed!");
            }
        }

        runTest(TestResult.PASS); // ✅ only allowed values
        runTest(0); // ✅ because PASS = 0, it accepts numeric value of enum
        runTest("PASS"); // ❌ not allowed

🛠 Syntax and Example

        enum Direction {
            Up,       // 0 // default value starts from 0
            Down,     // 1
            Left,     // 2
            Right     // 3
        }
        
        Use:

            const move = Direction.Left;
            console.log(move); // 2

📌 By Default: Enum assigns numeric values

        enum TestResult {
        PASS,   // 0
        FAIL,   // 1
        SKIP    // 2
        }

You can also customize values:

        enum TestResult {
        PASS = 1,
        FAIL = 0,
        SKIP = -1
        }


 */

// 🔐 Real-life Example: User Roles
enum Role {
    ADMIN = "ADMIN",
    USER = "USER",
    GUEST = "GUEST"
}

function getDashboard(role: Role) {
    switch (role) {
        case Role.ADMIN:
            return "Admin Dashboard";
        case Role.USER:
            return "User Dashboard";
        case Role.GUEST:
            return "Guest Page";
    }
}

// Use:
const role: Role = Role.ADMIN;
console.log(getDashboard(role)); // Admin Dashboard

// ⚠️ If someone tries to use "OWNER" or "ROOT" → compile-time error. ✅

/**

Why enum Is Useful:
        ✅ Centralized control over routes or constants
        ✅ No typos or hard-coded strings all over your test files
        ✅ Easy to rename or refactor — change once, reflect everywhere
        ✅ Autocomplete support in editors like VSCode

🔍 Summary in Points
        enum = Type-safe set of constants
        Avoids magic strings and typos
        Used for status codes, roles, test results, etc.
        Can be numeric or string enums
        Helps with cleaner switch cases and better intellisense

🆚 enum vs const
| Feature            | enum           | const                      |
| ------------------ | -------------- | -------------------------- |
| Group of constants | ✅ Yes          | ❌ No                       |
| Type-safe          | ✅ Yes          | ❌ No                       |
| Prevent typos      | ✅ Yes          | ❌ No (any string accepted) |
| Readability        | ✅ Clear intent | ❌ Can be unclear           |

 */

console.log();

// Bonus Example: User Roles Enum

export enum UserRole {
    ADMIN = 'admin',
    EDITOR = 'editor',
    VIEWER = 'viewer'
}

function getPermissions(role: UserRole) {
    switch (role) {
        case UserRole.ADMIN:
            return 'All access';
        case UserRole.EDITOR:
            return 'Edit content';
        case UserRole.VIEWER:
            return 'Read-only access';
    }
}

// U can create ENUM for
//      - Test environments (DEV, STAGE, PROD)
//      - User types/test personas
//      - API endpoints
//      - Element selectors
//      - Enums are your best friend in scalable, readable test frameworks.

