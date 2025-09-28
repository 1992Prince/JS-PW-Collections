/**
 * JavaScript Data Types
 * 
 * JavaScript is a dynamically typed language, which means variables are not bound to specific data types and 
 * can hold different types of data at different times.
 * 
 * Two Main Categories of Data Types
 * 
 *   - Primitive Data Types (Immutable)
 *   - Non-Primitive Data Types (Mutable)
 * 
 * Primitive Data Types
 * These represent single values and are immutable (cannot be changed directly).
 * Below is list of Primitive data types present in Javascript
 * 
 * Data Type	  Description	                                                                     Example
 * *********************************************************************************************************************************
   Number	      Represents numbers (both integers and floats).    	                             let age = 25;
   String	  Represents text enclosed in quotes.	                                                 let name = "John";
   Boolean	  Represents logical values true or false.	                                             let isValid = true;
    Null	  Represents an intentional absence of value.	                                         let empty = null;
   Undefined	Represents an uninitialized variable.	                                             let result;          // undefined
   Symbol     Represents unique and immutable values (introduced in ES6).	                         let sym = Symbol('id');
   BigInt	  Represents large integers beyond the Number type's safe range (introduced in ES11).	 let big = 123n;


   Non-Primitive Data Types
    These are mutable and hold collections or more complex entities.

   Data Type	 Description	                                     Example
   ***********************************************************************************************************************************
   Object	     Represents a collection of key-value pairs.	     let user = {name: "John"};
   Array	     Special type of object for ordered lists.	         let arr = [1, 2, 3];
   Function	     A callable object that executes a block of code.	 function greet() {}
 */

/**
 * Primitive vs Non-Primitive
 * ****************************************

 Feature	             Primitive Types	 Non-Primitive Types
 Mutability	           Immutable	           Mutable
 Value Comparison	     Compared by value	  Compared by reference
 Storage	             Stored directly	    Stored as a reference
 */

// Dynamic Typing in JavaScript - In JavaScript, variables are dynamically typed, meaning the type is determined at runtime and can change.
let value = 42;          // Number
value = "Hello, World!"; // Now a String

/**
 * Special Case 1
    
   Difference Between undefined and null:
   undefined: Default value of an uninitialized variable.
   null: Explicitly set to represent "no value.
 */

let x;
let y = null;
console.log("x value is - ", x, "and y value is - ", y); // x value is -  undefined and y value is -  null

console.log()

/**
 * Special Case 2
    
   NaN (Not-a-Number):
   A special Number type indicating an invalid numeric operation.
 */

console.log("NAN - invalid numeric operation - ", 0 / 0);  // NAN - invalid numeric operation -  NaN

console.log()

/**
 * Checking Data Types
   Use the typeof operator to check the type of a variable:
 */

console.log(typeof 42);              // "number"
console.log(typeof "Hello");         // "string"
console.log(typeof 'p');             // "string"
console.log(typeof true);            // "boolean"
console.log(typeof undefined);       // "undefined"
console.log(typeof null);            // "object" (this is a historical quirk)
console.log(typeof Symbol());        // "symbol"
console.log(typeof { name: "John" }); // "object"

console.log()

/**
 * Key Points to Remember
   -> JavaScript has 7 primitive data types.
   -> Objects, Arrays, and Functions are non-primitive types.
   -> null and undefined are distinct but often confused.
   -> Use typeof to check types, but note the typeof null quirk (object).
 */

/**
 * A character is also a string. There is no separate type for characters. A single character is also a string.
 */

let s1 = "gfg";   // String
let s2 = 'g';    // Character

console.log(typeof s1);   // string
console.log(typeof s2);   // string

console.log()
