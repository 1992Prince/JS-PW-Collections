// File: classMethods.js

// Notes: Adding Methods to a Class in JavaScript
/*
    1. What is a Method in a Class?
       - A method is a function defined inside a class.
       - Methods define the behavior of objects created from the class.

    2. Syntax for Defining Methods:
       class ClassName {
           constructor(parameters) {
               // Initialize properties
               this.propertyName = parameter;
           }

           methodName() {
               // Logic for the method
           }
       }

    3. Key Points:
       - Methods are functions attached to the class.
       - Use `this.propertyName` to access properties within methods.
       - Methods can be called on objects created from the class.
*/

// Example 1: Adding a Method to a Class
class Person {
    constructor(name, age) {
        this.name = name; // Property
        this.age = age;   // Property
    }

    // Method to describe the person
    describe() {
        return `${this.name} is ${this.age} years old.`;
    }
}

// Example 2: Using Methods
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

console.log(person1.describe()); // Output: Alice is 25 years old.
console.log(person2.describe()); // Output: Bob is 30 years old

/*
    4. Adding More Methods:
       - Classes can have multiple methods to define different behaviors.
*/

class Rectangle {
    constructor(width, height) {
        this.width = width;   // Property
        this.height = height; // Property
    }

    // Method to calculate area
    calculateArea() {
        return this.width * this.height;
    }

    // Method to calculate perimeter
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

// Example 3: Using Multiple Methods
const rect = new Rectangle(10, 5);

console.log(rect.calculateArea());      // Output: 50
console.log(rect.calculatePerimeter()); // Output: 30

/*
    Summary:
    - Methods define what objects created from the class can do.
    - Use `this` to refer to object properties within methods.
    - Call methods using object.methodName().
*/
