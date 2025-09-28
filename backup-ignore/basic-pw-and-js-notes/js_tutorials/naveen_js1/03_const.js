/**
 * const
 * constant values can't be reinitialized/reassigned or modified after initialization
 * 
 * we need to initialize const at the time of declaration. There is no default values of const declared variables
 * const error; will throw error 'const' declarations must be initialized.'
 */

const error = "I am the bug"

/*
error = "I can't be modified"    // will not throw any compilation errors

console.log("error val is - ", error) // TypeError: Assignment to constant variable.
*/

console.log()

/**
 * Lets creat const variables with same name inside fun also.
 */

/*
function foo() {
    error = "I can't be modified"    // will not throw any compilation errors
    console.log("Error - ", error);
}

foo()  // TypeError: Assignment to constant variable.

*/

function foo1() {
    const error = "I am new block error."
    console.log("block level error - ", error)       // block level error -  I am new block error.
}

foo1()

console.log("const variable error val - ", error)   // const variable error val -  I am the bug