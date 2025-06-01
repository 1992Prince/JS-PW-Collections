console.log("************************ Primitives Datatypes vs Objects *******************************")
console.log()

/**
 * Primitives datatypes are fundamental datatypes. 
 * These aer built-in in javascript.
 * There are 7 primitives data-types in js.
 * Remembering trick is - NN SS BB U
 * N - NULL
 * N - NUMBER
 * S - SYMBOL
 * S - STRING
 * B - BOOLEAN
 * B - BIGINT
 * U - UNDEFINED
 */

let a = null;
let b = 345;
let c = true
let d = BigInt("567");
let e = "Harry";
let f = Symbol("I am a nice symbol");
let g = undefined;

console.log(a, b, c, d, e, f, g); // null 345 true 567n Harry Symbol(I am a nice symbol) undefined

console.log("a value is - ", a, "and its type is - ", typeof a); // a value is -  null and its type is -  object
console.log("b value is - ", b, "and its type is - ", typeof b); // b value is -  345 and its type is -  number
console.log("c value is - ", c, "and its type is - ", typeof c); // c value is -  true and its type is -  boolean
console.log("d value is - ", d, "and its type is - ", typeof d); // d value is -  567n and its type is -  bigint
console.log("e value is - ", e, "and its type is - ", typeof e); // e value is -  Harry and its type is -  string
console.log("f value is - ", f, "and its type is - ", typeof f); // f value is -  Symbol(I am a nice symbol) and its type is -  symbol
console.log("g value is - ", g, "and its type is - ", typeof g); // g value is -  undefined and its type is -  undefined

console.log()
console.log()




/**
 * Objects are key value pairs. Key can be string, or number etc.
 * So Non-Primitive datatype in JS are objects.
 */


/**
 * Primitive data types are the basic building blocks of JavaScript. 
 * They represent simple values that are not objects and have no methods. 
 * These types are immutable, meaning they cannot be altered once created.
 * 
 * Objects in JavaScript - An object is a non-primitive data type that is used to store a collection of key-value pairs. 
 * Unlike primitive data types, objects are mutable, meaning you can change their properties and values.
 * In JavaScript objects, keys can be of type String or Symbol (symbols are unique keys introduced in ES6). 
 * On the other hand, values in objects can be anything, including:

Primitive Values:

Number: 42
String: "hello"
Boolean: true or false
Undefined: undefined
Null: null
Symbol: A symbol key itself can also be a value.
BigInt: Large integers like 9007199254740991n.
Complex Values:

Object: { key: "value" }
Array: [1, 2, 3]
Function: function() { ... }
 */

console.log("************************ Objects *******************************")
console.log()

// object example

let person = {
    name: "Jorge",            // String value
    age: 30,                  // Number value
    isStudent: false,         // Boolean value
    skills: ["JavaScript", "Playwright"], // Array value
    greet: function () {       // Function value
        console.log("Hello!");
    },
    address: {                // Nested object value
        city: "New York",
        country: "USA"
    },
    [Symbol('id')]: 101       // Symbol key and Number value
};

/**
 * Key Types:

String (or implicitly convertible to string): "name", "age", "skills", etc.
Symbol: [Symbol('id')].
Value Types:

Any JavaScript data type, including other objects and functions.
 */

console.log("person name is - ", person["name"]);      // person name is -  Jorge
console.log("person age is - ", person["age"]);        // person age is -  30
console.log("person skills are - ", person["skills"]); // person skills are -  [ 'JavaScript', 'Playwright' ]

// trying to access key wch is not present in object - will print undefined
console.log("person is student - ", person["isMale"]); // person is student -  undefined


console.log()
console.log("************************ Primitives Datatypes vs Objects *******************************")
console.log()

// Difference Between Primitives and Objects in JavaScript

/**
 * 1. Nature
 * -----------------------
 * - Primitives are immutable, meaning once created, their values cannot be changed.
 * - Objects are mutable, meaning their properties can be modified after creation.
 */

/**
 * 2. Storage
 * -----------------------
 * - Primitives are stored by value.
 * - Objects are stored by reference.
 * 
 * Example:
 * 
 * let a = 5;
 * let b = a; // Copies the value of 'a' to 'b'
 * b = 10;
 * console.log(a); // Output: 5 (a remains unchanged)
 * 
 * let obj1 = { value: 5 };
 * let obj2 = obj1; // Copies the reference of obj1 to obj2
 * obj2.value = 10;
 * console.log(obj1.value); // Output: 10 (because both obj1 and obj2 refer to the same object)
 */

/**
 * 3. Type
 * -----------------------
 * - Primitives include Number, String, Boolean, Undefined, Null, Symbol, and BigInt.
 * - Objects include Arrays, Functions, Date objects, and any custom object.
 */

/**
 * 4. Methods and Properties
 * -----------------------
 * - Primitives have no properties or methods.
 *   (However, JavaScript automatically wraps primitives in their object counterparts when accessing properties or methods).
 * 
 *   Example:
 *   let str = "hello";
 *   console.log(str.length); // Output: 5 (JavaScript creates a temporary String object)
 * 
 * - Objects can have properties and methods.
 * 
 *   Example:
 *   let car = {
 *     brand: "Toyota",
 *     start: function() {
 *       console.log("Car started");
 *     }
 *   };
 *   car.start(); // Output: Car started
 */

/**
 * 5. Comparison
 * -----------------------
 * - Primitives are compared by their values.
 *   Example:
 *   let x = 10;
 *   let y = 10;
 *   console.log(x === y); // Output: true
 * 
 * - Objects are compared by their references.
 *   Example:
 *   let obj1 = { key: "value" };
 *   let obj2 = { key: "value" };
 *   console.log(obj1 === obj2); // Output: false (different references)
 * 
 *   let obj3 = obj1;
 *   console.log(obj1 === obj3); // Output: true (same reference)
 */

/**
 * 6. Passing as Arguments
 * -----------------------
 * - Primitives are passed by value.
 * - Objects are passed by reference.
 * 
 * Example:
 * 
 * function modifyValue(val) {
 *   val = val * 2;
 * }
 * 
 * let num = 5;
 * modifyValue(num);
 * console.log(num); // Output: 5 (primitives are passed by value, so num remains unchanged)
 * 
 * function modifyObject(obj) {
 *   obj.value = obj.value * 2;
 * }
 * 
 * let myObj = { value: 10 };
 * modifyObject(myObj);
 * console.log(myObj.value); // Output: 20 (objects are passed by reference)
 */

