// File: basicClasses.js

// Notes: Understanding Basic Classes and Properties in JavaScript
/*
    1. What is a Class?
       - A class is a blueprint for creating objects.
       - It defines properties (data) and methods (functions) that objects created from the class will have.

    2. What are Properties?
       - Properties are variables that belong to a class.
       - They store data about the object.

    3. Syntax for Defining a Class:
       class ClassName {
           constructor(parameters) {
               // Initialize properties
               this.propertyName = parameter;
           }
       }

    4. Key Points:
       - The `constructor` method is called when a new object is created.
       - The `this` keyword refers to the current object instance.
*/

// Example 1: Basic Class with Properties
class Person {
    // Constructor initializes properties
    constructor(name, age) {
        this.name = name; // Property
        this.age = age;   // Property
    }
}

// Example 2: Creating Objects from the Class
const person1 = new Person("Alice", 25); // Create a new object
const person2 = new Person("Bob", 30);   // Create another object

console.log(person1.name); // Output: Alice
console.log(person2.name); // Bob
console.log(person2.age);  // Output: 30

/*
    Summary:
    - Classes in JavaScript help organize code.
    - Use the `constructor` method to initialize object properties.
    - Access properties with the `this` keyword inside the class.
*/

