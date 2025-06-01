// File: vehicleClassWithChildAccess.js

// Notes: Access Parent Methods, Overridden Methods, Parent Instance Variables, and Child-Specific Methods
/*
    1. Overview:
       - Parent Class (`Vehicle`):
           a) Instance Variables: `make`, `model`, `year`.
           b) Methods: `getInfo()`, `startEngine()`, `stopEngine()`.
       - Child Class (`Car`):
           a) Adds Instance Variable: `numDoors`.
           b) Overrides Method: `getInfo()`.
           c) Adds New Method: `driveCar()`.

    2. Access via Child Class Object:
       - Parent Methods: Can access `startEngine()`, `stopEngine()`.
       - Overridden Methods: Calls the overridden `getInfo()` from the child class.
       - Parent Instance Variables: Directly accessible via the child object (`this.make`, `this.model`, etc.).
       - Child-Specific Methods: Can access `driveCar()`.

    3. Demonstration:
       - Create an object of the `Vehicle` class.
       - Create an object of the `Car` class and demonstrate all access points.
*/

class Vehicle {
    // Constructor to initialize parent instance variables
    constructor(make, model, year) {
        this.make = make;   // Manufacturer
        this.model = model; // Model
        this.year = year;   // Year
    }

    // Parent method to print vehicle details
    getInfo() {
        console.log(`Vehicle Info: Make - ${this.make}, Model - ${this.model}, Year - ${this.year}`);
    }

    // Parent method to simulate starting the engine
    startEngine() {
        console.log("Starting the vehicle's engine...");
    }

    // Parent method to simulate stopping the engine
    stopEngine() {
        console.log("Stopping the vehicle's engine...");
    }
}

// Child class extending Vehicle
class Car extends Vehicle {
    // Constructor to initialize child-specific instance variables
    constructor(make, model, year, numDoors) {
        super(make, model, year); // Call the parent constructor
        this.numDoors = numDoors; // Number of doors in the car
    }

    // Overridden method to print car details
    getInfo() {
        console.log(`Car Info: Make - ${this.make}, Model - ${this.model}, Year - ${this.year}, Doors - ${this.numDoors}`);
    }

    // Child-specific method
    driveCar() {
        console.log(`Driving the car: ${this.model}`);
    }
}

// Example 1: Object of Parent Class
console.log("---------------------- Parent Class Vehicle Object -----------------------");
const vehicle = new Vehicle("Generic Manufacturer", "Generic Model", 2000);
vehicle.getInfo();        // Access parent method
vehicle.startEngine();    // Access parent method
vehicle.stopEngine();     // Access parent method

// Example 2: Object of Child Class
console.log("\n---------------------- Child Class Car Object -----------------------");
const car = new Car("Toyota", "Corolla", 2022, 4);

// Accessing overridden method
car.getInfo();            // Output: Car Info: Make - Toyota, Model - Corolla, Year - 2022, Doors - 4

// Accessing parent methods
car.startEngine();        // Output: Starting the vehicle's engine...
car.stopEngine();         // Output: Stopping the vehicle's engine...

// Accessing child-specific method
car.driveCar();           // Output: Driving the car: Corolla

// Accessing parent instance variables directly from the child object
console.log("\nAccessing Parent Instance Variables from Child Object:");
console.log(`Make: ${car.make}`);   // Output: Make: Toyota
console.log(`Model: ${car.model}`); // Output: Model: Corolla
console.log(`Year: ${car.year}`);   // Output: Year: 2022

/*
    4. Key Takeaways:
       - A child class object can:
           a) Access parent methods (`startEngine()`, `stopEngine()`).
           b) Call overridden methods (`getInfo()` from the child class).
           c) Directly access parent instance variables (`make`, `model`, `year`).
           d) Use child-specific methods (`driveCar()`).
*/

/**
 * 
 *                      Output
 ---------------------- Parent Class Vehicle Object -----------------------
Vehicle Info: Make - Generic Manufacturer, Model - Generic Model, Year - 2000
Starting the vehicle's engine...
Stopping the vehicle's engine...

---------------------- Child Class Car Object -----------------------
Car Info: Make - Toyota, Model - Corolla, Year - 2022, Doors - 4
Starting the vehicle's engine...
Stopping the vehicle's engine...
Driving the car: Corolla

Accessing Parent Instance Variables from Child Object:
Make: Toyota
Model: Corolla
Year: 2022

 */