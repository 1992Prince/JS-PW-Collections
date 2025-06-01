// File: carClassExample.js

// Notes: Understanding Class Design and the `this` Keyword in JavaScript
/*
    1. Overview:
       - Below we create a class `Car` with 4 instance variables: `name`, `price`, `model`, and `color`.
       - These variables are initialized using the constructor method.
       - The `this` keyword is used to refer to instance variables.

    2. Key Points:
       - Use `this.variableName` to access instance variables within class methods.
       - Without `this`, JavaScript looks for variables in the local or global scope, which can lead to `ReferenceError`.

    3. Example:
       - Create objects of the `Car` class using the `new` keyword.
       - Call the `refuel()` method to demonstrate the use of `this` in accessing instance variables.
*/

class Car {
    // Constructor to initialize instance variables
    constructor(name, price, model, color) {
        this.name = name;   // Instance variable for the car name
        this.price = price; // Instance variable for the car price
        this.model = model; // Instance variable for the car model
        this.color = color; // Instance variable for the car color
    }

    // Method to simulate refueling the car
    refuel() {
        console.log("Car is being refueled.");

        // Use `this` to access instance variables
        console.log(`Name is - ${this.name}, price is ${this.price}, model is ${this.model}, and color is ${this.color}.`);
    }
}

// Example: Creating objects of the `Car` class
const car1 = new Car("Audi", 100000, "A6", "Red");
const car2 = new Car("BMW", 200000, "X7", "Black");

// Call the `refuel` method for the first car
car1.refuel();
// Output:
// Car is being refueled.
// Name is - Audi, price is 100000, model is A6, and color is Red.

console.log()

// Accessing Instance Variables Directly
console.log("Accessing Instance Variables Directly:");
console.log(`Car Name: ${car1.name}`);   // Output: Car Name: Audi
console.log(`Car Price: ${car1.price}`); // Output: Car Price: 100000
console.log(`Car Model: ${car1.model}`); // Output: Car Model: A6
console.log(`Car Color: ${car1.color}`); // Output: Car Color: Red

console.log()
console.log()

// Call the `refuel` method for the second car
car2.refuel();
// Output:
// Car is being refueled.
// Name is - BMW, price is 200000, model is X7, and color is Black.

/*
    4. Key Takeaways:
       - **The `this` Keyword**:
           - Use `this` to access instance variables inside a class method.
           - Without `this`, JavaScript looks for variables in the local or global scope, resulting in errors like `ReferenceError`.

       - **Instance Variables**:
           - Instance variables are defined and initialized in the constructor using `this.variableName`.
           - These variables are unique to each object created from the class.

       - **Readable Code**:
           - Always include meaningful comments and proper indentation for better readability.
           - Use structured methods to organize functionality within a class.

       - inside class if we want to access instance variable then we have to use `this` keyword and outside class
         with help of obj name we can access it and we don't need to use this keyword.
*/
