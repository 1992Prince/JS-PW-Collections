// File: gettersAndSetters.js

// Notes: Using Getters and Setters in JavaScript Classes
/*
    1. What are Getters and Setters?
       - **Getters**: Methods to access (get) properties in a controlled way.
       - **Setters**: Methods to set (update) properties with validation or logic.

    2. Syntax for Getters and Setters:
       class ClassName {
           constructor(property) {
               this._property = property; // Use a private variable (convention: underscore)
           }

           // Getter
           get propertyName() {
               return this._property;
           }

           // Setter
           set propertyName(value) {
               // Add validation or logic here
               this._property = value;
           }
       }

    3. Key Points:
       - Getters and setters allow controlled access to properties.
       - Use `get` and `set` keywords to define them.
       - Access getter like a property: `object.propertyName`.
       - Set a value using the setter: `object.propertyName = value`.
*/

// Example 1: Using Getters and Setters
class Rectangle {
    constructor(width, height) {
        this._width = width;   // Private variable (by convention)
        this._height = height; // Private variable
    }

    // Getter for width
    get width() {
        return this._width;
    }

    // Setter for width
    set width(value) {
        if (value <= 0) {
            console.error("Width must be positive."); // Validation
            return;
        }
        this._width = value;
    }

    // Getter for height
    get height() {
        return this._height;
    }

    // Setter for height
    set height(value) {
        if (value <= 0) {
            console.error("Height must be positive."); // Validation
            return;
        }
        this._height = value;
    }

    // Method to calculate area
    calculateArea() {
        return this.width * this.height; // Use getters
    }
}

// Example 2: Using Getters and Setters
const rect = new Rectangle(10, 5);

// Access properties using getters
console.log(rect.width);  // Output: 10
console.log(rect.height); // Output: 5

// Update properties using setters
rect.width = 15;
rect.height = 10;

console.log(rect.calculateArea()); // Output: 150

// Attempt invalid values
rect.width = -5; // Output: Width must be positive.
console.log(rect.width); // Output: 15 (unchanged)

/*
    4. Advantages of Getters and Setters:
       - Validation: Ensure properties have valid values.
       - Abstraction: Hide implementation details from users.
       - Controlled Access: Add logic when getting or setting properties.
*/

