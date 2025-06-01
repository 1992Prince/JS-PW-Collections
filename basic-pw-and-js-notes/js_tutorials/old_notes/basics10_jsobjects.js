/**
 * A JavaScript object is a collection of key-value pairs, where keys are also known as properties. 
 * Objects are one of the fundamental data structures in JavaScript and can be used to store 
 * multiple related pieces of data and behaviors (functions, which are then called methods).

Key Points:
    Keys (or property names) are typically strings, but ES6 also allows symbols.
    Values can be any data type: numbers, strings, arrays, functions, other objects, etc.
    Objects are created using curly braces {} and are very useful for representing real-world entities 
    with attributes.

    Example of a JavaScript Object:
    this keyword: Refers to the current object (person). In the greet function, 
    this.name refers to the name property of the person object.
 */

    const person = {
        name: "John",
        age: 30,
        isMarried: false,
        greet: function() {
          console.log("Hello, my name is " + this.name);
        }
      };
      
      // Accessing properties
      console.log(person.name);  // Output: "John"
      console.log(person.age);   // Output: 30

      // deleting property
      delete person.isMarried;
      
      // Calling a method
      person.greet();  // Output: "Hello, my name is John"
      

      console.log()
      console.log()

      /**
       * Creating Objects in JavaScript:
        There are several ways to create objects in JavaScript:
       */

        // 1. Object Literal Syntax (most common):

        const car = {
            brand: "Toyota",
            model: "Corolla",
            year: 2021
          };

        
        // 2. Using new Object():

        const book = new Object();
        book.title = "JavaScript for Beginners";
        book.author = "Jane Doe";

        // 3. Using a Constructor Function:
        // 4. Using class Syntax (Introduced in ES6):

        /**
         * Accessing Object Properties:
         * 
         * 1) Dot Notation:
         *    console.log(person.name);  // Output: "John"
         * 
         * 2) Bracket Notation (useful for dynamic property names)
         *    console.log(person["age"]);  // Output: 30
         * 
         * Adding and Modifying Properties:
         * 
         * person.height = 180;  // Add a new property
           person.age = 31;      // Modify an existing property
           console.log(person.height);  // Output: 180
           console.log(person.age);     // Output: 31

         */
