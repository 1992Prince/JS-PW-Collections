// File: classInheritance.js

// Notes: Understanding Inheritance in JavaScript Classes
/*
    1. What is Inheritance?
       - Inheritance allows one class (child class) to inherit properties and methods from another class (parent class).
       - Promotes code reuse by enabling a child class to use and extend the functionality of the parent class.

    2. Key Points:
       - Use the `extends` keyword for inheritance.
       - The `super` keyword is used to:
         - Call the parent class constructor.
         - Access methods from the parent class.

    3. Syntax:
       class ParentClass {
           constructor(parameters) {
               // Initialize parent properties
           }

           parentMethod() {
               // Parent method logic
           }
       }

       class ChildClass extends ParentClass {
           constructor(parameters) {
               super(parameters); // Call parent class constructor
               // Initialize child-specific properties
           }

           childMethod() {
               // Child method logic
           }
       }
*/

// Example 1: Basic Inheritance
class Animal {
    constructor(name) {
        this.name = name; // Parent class property
    }

    speak() {
        return `${this.name} makes a noise.`; // Parent class method
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call parent constructor
        this.breed = breed; // Child-specific property
    }

    // Overriding parent method
    speak() {
        return `${this.name}, a ${this.breed}, barks.`; // Customized behavior
    }
}

// Example 2: Creating Instances
const dog = new Dog("Buddy", "Golden Retriever");
console.log(dog.speak()); // Output: Buddy, a Golden Retriever, barks.

// Example 3: Accessing Parent Method
class Cat extends Animal {
    constructor(name, color) {
        super(name); // Call parent constructor
        this.color = color; // Child-specific property
    }

    // Additional method
    meow() {
        return `${this.name}, the ${this.color} cat, meows.`;
    }
}

const cat = new Cat("Whiskers", "white");
console.log(cat.speak()); // Output: Whiskers makes a noise. (from parent class)
console.log(cat.meow());  // Output: Whiskers, the white cat, meows.

/*
    4. Method Overriding:
       - Child classes can redefine methods from the parent class.
       - Use `super.methodName()` to call the parent method explicitly.
*/

// Example 4: Overriding and Calling Parent Method
class Bird extends Animal {
    speak() {
        const parentMessage = super.speak(); // Call parent method
        return `${parentMessage} But ${this.name} chirps!`;
    }
}

const bird = new Bird("Tweety");
console.log(bird.speak()); // Output: Tweety makes a noise. But Tweety chirps!

/*
    Summary:
    - Inheritance allows classes to share behavior and structure.
    - Use `extends` to inherit from a parent class.
    - Use `super` to call the parent constructor or methods.
    - Child classes can add or override methods to extend functionality.
*/
