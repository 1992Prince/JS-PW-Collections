/**
 * 1. var: old way, before ES6 used
 *    scope - functionally/locally + global scope
 */

var x = 10;

function foo() {
    var y = 20;
    console.log("called inside fun - ", x); // 10
    console.log("called inside fun - ", y); // 20
}

foo(); // called inside fun -  10 and called inside fun -  20 will be printed


console.log("called outside fun - ", x); // called outside fun -  10
// console.log("called outside fun - ", y); // ReferenceError: y is not defined

/**
 * Above we saw that variable x is globally defined and it is used inside foo function also.
 * variable y is locally defined inside foo function and it is not accessible outside foo function.
 * If we are trying to access it we are getting ReferenceError: y is not defined

 */

console.log()

// lets redeclare variable x with String value

var x = "I am String val now"
console.log("variable x value after redeclaration - ", x) // variable x value after redeclaration -  I am String val now

/**
 * This is a problem in var declared variables and can introdcue bug later. So we avoid using var in programming.
 */

console.log()

// lets reinitialize variable x with Number value

var x = 100

console.log("variable x value after reinitialization - ", x) // variable x value after reinitialization -  100

console.log()

// lets change value of x to diff String val again in block or any function

function test(newVal) {
    x = newVal;
}

test("Again x value changed to String");

console.log("variable x val - ", x) // variable x val -  Again x value changed to String

console.log()

/**
 * So we saw till now
 * 1) var scope is global and functionally
 * 2) var can be redeclared and reinitialized
 * 3) var can be changed value to diff type of value
 * 
 * Now lets c what is default values of var
 */

var gain
console.log("default value of var - ", gain) // default value of var -  undefined

gain = "I am String val now"
console.log("new value of var - ", gain)    // new value of var -  I am String val now

console.log()
console.log()

// lets try to create a new variable globally and inside fun also create variable with same name

var text1 = "Jai Hind"

function foo3() {
    var text1 = "Jai Shree Ram"
    console.log("inside fun - ", text1)
}

foo3()                               // inside fun -  Jai Shree Ram

console.log("outside fun - ", text1) // outside fun -  Jai Hind




