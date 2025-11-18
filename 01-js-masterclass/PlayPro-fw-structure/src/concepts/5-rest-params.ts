// 🔹 Rest Parameters kya hote hain?
// Syntax: function fn(a, b, ...rest) { }
// Matlab function ke andar tum multiple extra arguments pass kar sakte ho.
// Wo sare ek array me collect ho jaate hain.

import { customLogger } from "../loggers/customLogger";

// 🔹 Example 1: Basic

function sum(...numbers: number[]) {
    return numbers.reduce((acc, n) => acc + n, 0);
}

console.log(sum(1, 2, 3));        // 6
console.log(sum(5, 10, 15, 20));  // 50

console.log();

//🔹 Example 2: Fixed + Rest

function greet(greeting: string, ...names: string[]) {
    return `${greeting}, ${names.join(" and ")}`;
}

console.log(greet("Hello", "Rahul", "Sid"));
// Hello, Rahul and Sid

// 👉 Pehla param greeting hai, baaki sab names array me chale jaate hain.

console.log();


// 🔹 Example 3: Passing Objects


function logUserActions(user: string, ...actions: string[]) {
    console.log(`User: ${user}`);
    actions.forEach((a) => console.log(` - ${a}`));
}

logUserActions("Rahul", "login", "view dashboard", "logout");

/**
 * User: Rahul
 - login
 - view dashboard
 - logout
 */


console.log();

// in this framework, customLogger class me humne rest params ka use kiya hai
// so we need to create an instance of that class and call its methods

const logger = new customLogger();
logger.info("User logged in", { userId: 1 }, { sessionId: "abc123" });
logger.info("User logged off", "OK", 200, { userId: 1 }, { sessionId: "abc123" });
logger.error("Failed to load data", { errorCode: 500 });
logger.warn("Low disk space", { availableSpace: "500MB" });

/**
[34m[2025-08-29T02:03:09.497Z] INFO: User logged in { userId: 1 } { sessionId: 'abc123' }
[34m[2025-08-29T02:03:09.585Z] INFO: User logged off OK 200 { userId: 1 } { sessionId: 'abc123' }
[31m[2025-08-29T02:03:09.585Z] ERROR: Failed to load data { errorCode: 500 }
[33m[2025-08-29T02:03:09.586Z] WARN: Low disk space { availableSpace: '500MB' }
 */