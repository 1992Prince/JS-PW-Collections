/**
 * let
 * scope - block scope
 *         block scope means anything that starts with {} like if block, switch block etc.
 */

let m = "hey naveen"
let time = 4

if (time > 3) {
    let msz = "hey hw r u."
    console.log("inside if block - ", msz) // inside if block -  hey hw r u.
    console.log("inside if block - ", m)   // inside if block -  hey naveen
}

console.log("outside block - ", m)         // outside block -  hey naveen
// console.log("outside block - ", msz)       // ReferenceError: msz is not defined

console.log()

/**
 * Above we saw that let is block scope and it is not accessible outside block.
 * If we are trying to access it we are getting ReferenceError: msz is not defined
 * So m can be used anywhere but msz variable have to be used inside block only . So let is always block scoped
 * 
 * Redeclaration - We can't redeclared let variables again and if we try to do it, we will get compile time error i.e.
 *                 Cannot redeclare block-scoped variable 'm'. i.e. if we do let m = 10; again then we will get compile time error
 * 
 * Reinitalization - reinitialization is possible for let variables. 
 * 
 * So let can be updated but not redeclared
 */


m = "hey naveen, lets learn together"
console.log("let variable reinitialized - ", m) // let variable reinitialized -  hey naveen, lets learn together

console.log()

/**
 * Lets try to create new variable m in a block and see how outside declared m and fun declared m behaves
 */

function foo() {
    m = "Jai Shree Ram"

}

foo()
console.log("variable m val - ", m)  // variable m val -  Jai Shree Ram

console.log()

/**
 * We can see above that m value gets updated inside function
 * 
 * Lets try to create a new variable m inside a function and both m variables will have diff values like below.
 * function foo2 will not reinitialize m how foo fun did bcoz in foo2 we are not reinitializing m but creating a new variable
 * using let keyword
 */

function foo2() {
    let m;
    m = "arjun"
    console.log("variable m val - ", m)
}

foo2()     //  variable m val -  arjun

console.log("variable m val - ", m)  // variable m val -  Jai Shree Ram