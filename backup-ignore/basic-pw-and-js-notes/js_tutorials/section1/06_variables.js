/**
 * JS is a dynamic typed lang. We can change js variables values with diff data-types.
 * In Java it is not allowed. In java if var is declared as String type then it will store only Strings and not other types.
 * But in JS it s allowed and so it is called dynamic types lang means at run time we can store diff data type values in js variable.
 * 
 */

// a var is assigned with Number type value
let a = 67;
console.log("a value is - ", a);    // a value is -  67

// a var is assigned with String type value now at run time
a = "harry";
console.log("a value is - ", a);    // a value is -  harry

// a var is assigned with Boolean type value now at run time
a = true;
console.log("a value is - ", a);    // a value is -  true

// a var is assigned with null type value now at run time
a = null;

console.log()

/**
 * ------------------------------------------------------------------------------------------------
 */

/**
 * Before ES6, in JS if u want to declare and define variables we used to use var keyword
 * In today, we never use var keyword to declare and define variables in js.
 * So var was used before ES6 version.
 * But now we use let keyword to declare and define variables in js.
 * let is used to declare block scoped variables in js.
 * var is used to declare global scoped variables in js.
 *
 * 
 * const is used to declare constants in js. Const values once initialized will not be changed again throughout the program.
 */