// File: staticMethods.js

// Notes: Using Static Methods in JavaScript Classes
/*
    1. What are Static Methods?
       - Static methods are functions defined on the class itself, not on objects created from the class.
       - They are useful for utility functions that do not depend on instance properties.

    2. Key Points:
       - Use the `static` keyword to define a static method.
       - Call static methods directly on the class: `ClassName.methodName()`.
       - Static methods cannot access instance-specific properties (`this`) because they belong to the class, not to individual objects.

    3. Syntax:
       class ClassName {
           static methodName() {
               // Static method logic
           }
       }
*/

// Example 1: Defining and Using Static Methods
class MathUtils {
    // Static method for addition
    static add(a, b) {
        return a + b;
    }

    // Static method for multiplication
    static multiply(a, b) {
        return a * b;
    }
}

// Call static methods directly on the class
console.log(MathUtils.add(5, 3));       // Output: 8
console.log(MathUtils.multiply(5, 3)); // Output: 15

/*
    4. When to Use Static Methods?
       - Utility functions (e.g., math calculations, data conversions).
       - Operations that do not depend on object properties.
*/

class StringUtils {
    // Static method to convert a string to uppercase
    static toUpperCase(str) {
        return str.toUpperCase();
    }

    // Static method to reverse a string
    static reverse(str) {
        return str.split("").reverse().join("");
    }
}

// Example 2: Utility Static Methods
console.log(StringUtils.toUpperCase("hello")); // Output: HELLO
console.log(StringUtils.reverse("world"));     // Output: dlrow

/*
    5. Limitations of Static Methods:
       - Cannot access instance-specific properties (`this.propertyName`).
       - Designed for operations tied to the class, not its instances.
*/

class Counter {
    constructor() {
        this.count = 0;
    }

    // Static method to describe the class
    static description() {
        return "Counter class is used to count numbers.";
    }
}

// Example 3: Combining Instance and Static Methods
const counter = new Counter();
console.log(Counter.description()); // Output: Counter class is used to count numbers.
