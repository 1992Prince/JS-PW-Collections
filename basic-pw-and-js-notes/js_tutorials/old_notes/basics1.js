/*
To execute js file from terminal, run command - node filename.js

 print below in console
*/

console.log("Hello World");
console.log("I like Pizza");
console.log("It's really good!");


// this is a single line comment

/*
this
is
a
multiline
comment

till ES5 , for variable declaration var keword is used
from ES6 onwards let and const keywords are used

Below are most used data types in JS - 
1. number
2. string
3. boolean

*/

let a = 4;
console.log("a value is - ", a);        // a value is -  4
console.log("typeof(a) - ",typeof(a));  // typeof(a) -  number

let b = 23.34
console.log("typeof(b) - ",typeof(b))    // typeof(b) -  number

let c = "Rahul Shetty"
console.log("typeof(c) - ", typeof(c))    // typeof(c) -  string
console.log("c value is - ", c)           // c value is -  Rahul Shetty

let isFlag = true
console.log("typeof(isFlag) - ", typeof(isFlag))    // typeof(isFlag) -  boolean
console.log("isFlag value is - ", isFlag)           // isFlag value is -  true

console.log()

/*
In JavaScript, null and undefined are two distinct types that represent the absence of a 
value or a value that is not yet assigned.

undefined: 
           This means a variable has been declared but has not been assigned a value yet. 
           It is the default value for variables that are declared but not initialized.

null: 
      This is an intentional assignment of an empty or non-existent value. 
      It represents "nothing" or "no value."
*/

let x;
console.log("x - ", x);                // x -  undefined 
console.log("typeof x - ", typeof x)   // typeof x - undefined

let y = null;
console.log("y - ", y);                // y -  null
console.log("typeof y - ", typeof y)   // typeof y -  object

console.log()

/**
 * We cannot redeclare variable with let keyword but possible with var

let x = 10;

let x = "Rahul"; // ES engine will throw error
x = "Rahu";      // reassignment will also work with let

var y = 123;
var y = "Rahul"; // redeclaration with var will work
y = 200;         // reassignment will also work with var

const if for constants
we can't reassign values to it
we can't redeclare these variables
 */