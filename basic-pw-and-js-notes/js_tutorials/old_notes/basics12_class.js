/**
 * A JavaScript class is a blueprint for creating objects with shared properties and methods. 
 * It was introduced in ES6 (ECMAScript 2015) to provide a cleaner and more readable syntax for 
 * creating objects and managing inheritance compared to constructor 
 * functions and prototype-based inheritance.
 * 
 * represeting object person via class
 *  */ 

// module.exports will make Person class public to use
module.exports = class Person {
    // Constructor: Called when a new instance of the class is created
    constructor(name, age) {
      this.name = name;  // Assigning parameters to object properties
      this.age = age;
    }
  
    // Method: A function inside the class
    introduce() {
      console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
  }
  
  // Create an instance of the class
  //const john = new Person("John", 30);
  //john.introduce();        // Output: "Hi, I'm John and I'm 30 years old."
  //console.log(john.name);  // John
  

