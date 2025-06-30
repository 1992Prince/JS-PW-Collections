/**
 * JavaScript Functions
 * Why Functions in JS called First-Class Citizens?
 *  In JavaScript, functions are treated as first-class citizens, which means:
 *      They can be assigned to variables.
 *      They can be passed as arguments to other functions.
 *      They can be returned from other functions.
 */

/**
 * Function Expressions :
 * In a function expression, the function is assigned to a variable. 
 * These functions are not hoisted, meaning they cannot be called before they are defined
 * But normal function declarations are hoisted, meaning they can be called before they are defined.
 */


/**
 * console.log("Calling Function Expressions before definition: ", square(4));
 * // Output: Error: square is not defined
 * // ReferenceError: Cannot access 'square' before initialization
 * This will throw an error because the function is not hoisted.
 */
const square = function(number) {
    return number * number;
};
console.log(square(4)); // Output: 16

console.log();

// arrow function 
//write arrow function for add and multiplication functionality

const add = (a,b) => a + b;
const mul = (a,b) => a * b;
console.log(`Addition: ${add(5, 10)}`); // Output: Addition: 15
console.log(`Multiplication: ${mul(5, 10)}`); // Output: Multiplication: 50
console.log();

// Named Function Expression
const namedSquare = function squareFunc(number) {
    return number * number;
};
console.log(namedSquare(5)); // Output: 25
// The function can be called using the variable name or the function name
console.log(squareFunc(6)); // ReferenceError: squareFunc is not defined