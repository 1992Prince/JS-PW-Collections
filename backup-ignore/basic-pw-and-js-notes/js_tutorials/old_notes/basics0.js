/**
 * var, let and const concept
 */

/**
 * var:
        Function-scoped (available inside the function where it is declared).
        Can be redeclared and updated.

        So var scope is global or function level
 */

var x = 10;
var x = 20;  // Allowed: Redeclaration
console.log(x);  // Output: 20          // will work since x is declared globally


// below greet is in function scope
function add(){
    var greet = "Morning";
    return 10 + 10;
}

// console.log("greet - ", greet); // will throw error - ReferenceError: greet is not defined

// let try to redeclare x in block[below is block and not function]
{
    var x = 30;  // Allowed: Redeclaration
}
console.log("x - ", x);  // Output: 30

console.log()
console.log()

/**
 * 2. let:
 *      Global scoped or 
        Block-scoped (available only within the block {} where it is declared).
        Cannot be redeclared in the same scope, but can be updated.
    
 */

let y = 10;
// let y = 20;  // Not allowed: Redeclaration in the same scope
y = 20;  // Allowed: Updating i.e. reassignment
console.log(y);  // Output: 20

{
    let y = 40;
}
console.log("y - ", y)

/**
 * 3. const:
        Block-scoped (like let).
        Cannot be redeclared or updated(reassignment is not allowed).
        Must be initialized when declared.
        Used for constants (values that shouldn’t change).
 */

const z = 30;
// z = 40;  // Not allowed: Cannot update `const` [Reassignemnt is not allowed]
console.log(z);  // Output: 30

console.log()
console.log()

/**
 * Why let and const were introduced:
 * 
 * Block Scope: var is function-scoped, which can lead to bugs due to unintended access to variables outside 
 * of blocks like loops or if statements. let and const fix this by introducing block scope.
 * 
 * Preventing Errors: const ensures that variables meant to remain constant throughout the program cannot 
 * be accidentally changed, helping avoid bugs.
 * 
 * In short:

    Use let for variables that will change.
    Use const for variables that should not change.
    Avoid var in modern JavaScript as let and const provide better scoping and clarity.

    What is Block Scope?
    Block scope means that a variable is only accessible inside the block (i.e., between curly braces {}) 
    where it is defined. In JavaScript, let and const are block-scoped, while var is function-scoped.

    A block in JavaScript is typically defined by curly braces {}, and it is commonly used in loops, 
    conditional statements, and functions.

    Example of Block Scope:

     {
        let x = 10;
        console.log(x);  // Output: 10
     }
        // Outside the block
        console.log(x);  // Error: x is not defined

        In this example:

        x is declared with let inside the block {}.
        It is only accessible inside the block.
        Trying to access x outside the block results in an error because x is block-scoped.

    Block Scope with let and const in Loops:
    Let’s take an example with a for loop.

    for (let i = 0; i < 3; i++) {
        console.log(i);  // Accessible inside the block
        }
        console.log(i);  // Error: i is not defined

    Example of var (Function Scope, Not Block Scoped):

    if (true) {
                var y = 20;
                console.log(y);  // Output: 20
                }
                console.log(y);  // Output: 20 (var is not block-scoped, so it's accessible outside)

            var is not block-scoped but function-scoped, meaning it doesn’t respect block boundaries.
            In the above example, y is accessible even outside the block {} because var ignores block scope.



 */


            /**
             * Summary:
                        Block Scope (let and const): Variables declared with let and const are only 
                        accessible within the block {} they are declared in. 
                        This helps prevent accidental usage of variables outside their intended scope.

                       Function Scope (var): Variables declared with var are scoped to the entire function or 
                       globally if declared outside a function. They ignore block boundaries, which can 
                        lead to unintended behavior.
             */
