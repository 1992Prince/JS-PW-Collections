/**
 * LOGICAL OPERATORS -
 * &&    logical and
 * ||    logical or
 * !     logical not
 */

// Notes on Logical Operators in JavaScript

/**
 * Logical operators are used to combine multiple conditions or to invert the value of a condition.
 * They return boolean values (true/false) based on the evaluation of the conditions.
 */

/**
 * 1. Logical AND ( && )
 * ----------------------------------------------------
 * - Returns true if **both** operands are true.
 * - Returns false if **at least one** of the operands is false.
 * - Example:
 */

let isAdult = true;
let hasLicense = true;

if (isAdult && hasLicense) {
    console.log("Eligible to drive."); // Output: "Eligible to drive."
} else {
    console.log("Not eligible to drive.");
}

/**
 * 2. Logical OR ( || )
 * ----------------------------------------------------
 * - Returns true if **at least one** of the operands is true.
 * - Returns false if **both** operands are false.
 * - Example:
 */

let hasPermission = false;
let isAdmin = true;

if (hasPermission || isAdmin) {
    console.log("Access granted."); // Output: "Access granted."
} else {
    console.log("Access denied.");
}

/**
 * 3. Logical NOT ( ! )
 * ----------------------------------------------------
 * - Inverts the value of a condition.
 * - Returns false if the condition is true, and true if the condition is false.
 * - Example:
 */

let isAvailable = false;

if (!isAvailable) {
    console.log("Item is not available."); // Output: "Item is not available."
}

/**
 * 4. Combining Logical Operators
 * ----------------------------------------------------
 * - Logical operators can be combined to create more complex conditions.
 * - Example:
 */

let age = 25;
let hasValidID = true;

if ((age >= 18 && age <= 60) && hasValidID) {
    console.log("You can enter the event."); // Output: "You can enter the event."
} else {
    console.log("You cannot enter the event.");
}

/**
 * 5. Short-Circuit Evaluation
 * ----------------------------------------------------
 * - Logical operators use **short-circuit evaluation**.
 * - In the case of `&&`:
 *   - If the first operand is false, the second operand is not evaluated.
 * - In the case of `||`:
 *   - If the first operand is true, the second operand is not evaluated.
 * 
 * Example with AND ( && ):
 */

let value1 = false;
let value2 = true;

console.log(value1 && value2); // Output: false (second operand is not evaluated)

/**
 * Example with OR ( || ):
 */

let value3 = true;
let value4 = false;

console.log(value3 || value4); // Output: true (second operand is not evaluated)

/**
 * 6. Logical Operator with Non-Boolean Values
 * ----------------------------------------------------
 * - Logical operators can also be used with non-boolean values.
 * - When used with non-boolean values, they return one of the operand values.
 * 
 * Example with AND ( && ):
 */

let name = "Jorge";
let greeting = name && "Hello, " + name;

console.log(greeting); // Output: "Hello, Jorge" (returns the second operand if the first is truthy)

/**
 * Example with OR ( || ):
 */

let username = "";
let defaultName = username || "Guest";

console.log(defaultName); // Output: "Guest" (returns the second operand if the first is falsy)

/**
 * 7. Using Logical Operators in Conditions
 * ----------------------------------------------------
 * - Logical operators are very useful in conditional (if-else) statements to create more concise conditions.
 * 
 * Example:
 */

let isMember = true;
let hasPaid = false;

if (isMember && !hasPaid) {
    console.log("Please complete your payment."); // Output: "Please complete your payment."
}

/**
 * 8. Logical Assignment Operators - ES2021
 * ----------------------------------------------------
 * - Logical AND Assignment ( &&= ): Assigns the value if the variable is truthy.
 * - Example:
 */

let hasAccess = true;
hasAccess &&= false; // Equivalent to: if (hasAccess) hasAccess = false;

console.log(hasAccess); // Output: false

/**
 * - Logical OR Assignment ( ||= ): Assigns the value if the variable is falsy.
 * - Example:
 */

let role = "";
role ||= "User"; // Equivalent to: if (!role) role = "User";

console.log(role); // Output: "User"

/**
 * - Nullish Coalescing Assignment ( ??= ): Assigns the value if the variable is null or undefined.
 * - Example:
 */

let score = null;
score ??= 0; // Equivalent to: if (score === null || score === undefined) score = 0;

console.log(score); // Output: 0

/**
 * Summary
 * ----------------------------------------------------
 * - Logical operators are useful for combining conditions and controlling the flow of logic.
 * - Logical AND ( && ): Returns true if **both** operands are true.
 * - Logical OR ( || ): Returns true if **at least one** operand is true.
 * - Logical NOT ( ! ): Inverts the value of the condition.
 * - Logical operators use **short-circuit evaluation**, which means they stop evaluating as soon as the result is determined.
 * - They can also be used with non-boolean values, in which case they return one of the operand values.
 */
