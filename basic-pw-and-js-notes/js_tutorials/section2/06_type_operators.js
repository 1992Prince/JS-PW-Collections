/**
 * TYPE OPERATORS -
 * typeof
 * instanceof
 */

// Notes on Type Operators in JavaScript

/**
 * Type operators are used to determine the type of a variable or to check if an object is an instance of a particular class or constructor.
 */

/**
 * 1. `typeof` Operator
 * ----------------------------------------------------
 * - The `typeof` operator is used to determine the data type of a variable.
 * - It returns a string representing the type of the variable.
 * 
 * Common Return Values of `typeof`:
 * - `"number"`: For numbers (both integer and float).
 * - `"string"`: For strings.
 * - `"boolean"`: For boolean values.
 * - `"object"`: For objects, arrays, and `null`.
 * - `"undefined"`: For variables that have not been assigned a value.
 * - `"function"`: For functions.
 * - `"symbol"`: For symbols (introduced in ES6).
 * - `"bigint"`: For BigInt values (introduced in ES2020).
 * 
 * Example:
 */

let age = 30;
console.log(typeof age); // Output: "number"

let name = "Jorge";
console.log(typeof name); // Output: "string"

let isAdmin = true;
console.log(typeof isAdmin); // Output: "boolean"

let person = { name: "Jorge", age: 30 };
console.log(typeof person); // Output: "object"

let nothing = null;
console.log(typeof nothing); // Output: "object" (This is a well-known quirk in JavaScript)

let undefinedVariable;
console.log(typeof undefinedVariable); // Output: "undefined"

let greet = function () {
    console.log("Hello!");
};
console.log(typeof greet); // Output: "function"

/**
 * Important Note:
 * ----------------------------------------------------
 * - The `typeof` null returning `"object"` is a known bug in JavaScript.
 *   Despite being fixed in newer implementations, it is retained for backward compatibility.
 */

/**
 * 2. `instanceof` Operator
 * ----------------------------------------------------
 * - The `instanceof` operator is used to check if an **object** is an instance of a **specific constructor** or **class**.
 * - It returns `true` if the object is an instance of the specified constructor/class, otherwise `false`.
 * 
 * Syntax:
 * - `object instanceof constructor`
 * 
 * Example with Classes:
 */

class Animal {
    constructor(name) {
        this.name = name;
    }
}

let dog = new Animal("Buddy");

console.log(dog instanceof Animal); // Output: true (dog is an instance of Animal)

/**
 * Example with Built-In Constructors:
 */

let today = new Date();

console.log(today instanceof Date); // Output: true (today is an instance of Date)
console.log(today instanceof Object); // Output: true (all dates are also objects)

/**
 * Example with Custom Constructors:
 */

function Person(name, age) {
    this.name = name;
    this.age = age;
}

let jorge = new Person("Jorge", 30);

console.log(jorge instanceof Person); // Output: true (jorge is an instance of Person)

/**
 * Using `instanceof` with Arrays:
 * - Arrays in JavaScript are also objects, but you can use `instanceof` to determine if a variable is specifically an array.
 * 
 * Example:
 */

let fruits = ["apple", "banana", "mango"];

console.log(fruits instanceof Array); // Output: true (fruits is an instance of Array)
console.log(fruits instanceof Object); // Output: true (all arrays are objects)

/**
 * 3. Summary of Type Operators
 * ----------------------------------------------------
 * - `typeof`:
 *   - Used to determine the **data type** of a variable.
 *   - Returns a string representing the type.
 *   - Works well with primitives but may return "object" for `null`.
 * 
 * - `instanceof`:
 *   - Used to determine if an **object** is an **instance** of a specific constructor or class.
 *   - Useful for distinguishing between different kinds of objects.
 */

/**
 * 4. Practical Use Cases
 * ----------------------------------------------------
 * - `typeof` is useful for:
 *   - Checking for `undefined` values before performing operations.
 *   - Identifying variable types in generic functions.
 * 
 * Example:
 */

let value;

if (typeof value === "undefined") {
    console.log("The value is undefined."); // Output: "The value is undefined."
}

/**
 * - `instanceof` is useful for:
 *   - Validating that an object belongs to a particular class.
 *   - Checking inheritance in a class hierarchy.
 * 
 * Example:
 */

if (jorge instanceof Person) {
    console.log(jorge.name + " is a Person."); // Output: "Jorge is a Person."
}

/**
 * Example: Using `instanceof` for Custom Types
 * ----------------------------------------------------
 * - When working with inheritance, `instanceof` can also be used to check if an object belongs to a subclass.
 */

class Mammal { }
class Dog extends Mammal { }

let myPet = new Dog();

console.log(myPet instanceof Dog); // Output: true (myPet is a Dog)
console.log(myPet instanceof Mammal); // Output: true (myPet is also a Mammal)

/**
 * Summary Recap
 * ----------------------------------------------------
 * - `typeof` is a **type-checking operator** that returns a **string** describing the data type.
 * - `instanceof` is an **instance-checking operator** used to verify if an object is **created by a specific constructor** or belongs to a class.
 * - Use `typeof` for **basic types** and `instanceof` for **class/object** relationships.
 */

