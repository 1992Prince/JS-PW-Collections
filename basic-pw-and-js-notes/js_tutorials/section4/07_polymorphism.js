// File: polymorphism.js

// Notes: Understanding Polymorphism in JavaScript Classes
/*
    1. What is Polymorphism?
       - Polymorphism means "many forms."
       - It allows methods in different classes to have the same name but behave differently depending on the object calling them.
       - Achieved through method overriding in JavaScript classes.

    2. Key Points:
       - Polymorphism is commonly used in inheritance.
       - The child class can override a method in the parent class.
       - When calling the method, the behavior depends on the object type (parent or child).

    3. Syntax:
       class ParentClass {
           methodName() {
               // Parent method logic
           }
       }

       class ChildClass extends ParentClass {
           methodName() {
               // Child-specific method logic (overrides parent method)
           }
       }
*/

// Example 1: Basic Polymorphism with Method Overriding
class Animal {
    speak() {
        return "This animal makes a noise.";
    }
}

class Dog extends Animal {
    speak() {
        return "The dog barks.";
    }
}

class Cat extends Animal {
    speak() {
        return "The cat meows.";
    }
}

// Example 2: Demonstrating Polymorphism
const animals = [new Animal(), new Dog(), new Cat()];

animals.forEach((animal) => {
    console.log(animal.speak());
});

// Output:
// This animal makes a noise.
// The dog barks.
// The cat meows.

/*
    4. Using Polymorphism in Real-Life Scenarios:
       - Polymorphism is useful when working with collections of objects of different types but sharing a common base class.
*/

class Shape {
    area() {
        return 0; // Default implementation
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius ** 2; // Specific implementation for Circle
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height; // Specific implementation for Rectangle
    }
}

// Example 3: Polymorphism in Action
const shapes = [new Circle(5), new Rectangle(4, 6), new Shape()];

shapes.forEach((shape) => {
    console.log(`Area: ${shape.area()}`);
});

// Output:
// Area: 78.53981633974483 (Circle)
// Area: 24 (Rectangle)
// Area: 0 (Default Shape)

/*
    Summary:
    - Polymorphism allows objects to be treated as instances of their parent class while retaining their specific behavior.
    - Use method overriding to implement polymorphism.
    - Useful for working with groups of related objects with shared behaviors.
*/


console.log()
console.log()
console.log()

// File: shapesArrayExplanation.js

// Notes: Explanation of the Line - `const shapes = [new Circle(5), new Rectangle(4, 6), new Shape()]`
/*
    1. What Happens in `const shapes = [new Circle(5), new Rectangle(4, 6), new Shape()]`?
       - This line creates an **array of objects**.
       - Each element in the array is an **instance of a class** (`Circle`, `Rectangle`, or `Shape`).

    2. Breakdown of How It Works:
       - `new Circle(5)`:
           - Creates a new object using the `Circle` class.
           - Initializes it with the constructor logic of the `Circle` class (e.g., `radius = 5`).
           - The resulting object belongs to the `Circle` class.

       - `new Rectangle(4, 6)`:
           - Creates a new object using the `Rectangle` class.
           - Initializes it with the constructor logic of the `Rectangle` class (e.g., `width = 4`, `height = 6`).
           - The resulting object belongs to the `Rectangle` class.

       - `new Shape()`:
           - Creates a new object using the `Shape` class.
           - Initializes it with the constructor logic of the `Shape` class (if any).
           - The resulting object belongs to the `Shape` class.

       - All three objects are then stored as elements in the `shapes` array.

    3. Why Are Class Names Associated with Each Object?
       - When you use the `new` keyword with a class, it:
           1. Allocates memory for a new object.
           2. Sets the **prototype** of the new object to the class's prototype.
           3. Initializes the object by calling the class's `constructor` method.

       - The resulting object retains an internal reference to the class (via the prototype), which tells JavaScript which class the object belongs to.

       - In the example:
           - `new Circle(5)` creates an object associated with the `Circle` class.
           - `new Rectangle(4, 6)` creates an object associated with the `Rectangle` class.
           - `new Shape()` creates an object associated with the `Shape` class.

    4. How the `shapes` Array Works:
       - The array `shapes` is a collection of objects, each created by a different class.
       - JavaScript knows the class of each object because of the `new` keyword and the associated prototype chain.
*/

// Example: Defining the Classes
class Shape {
    constructor() {
        this.type = "Generic Shape"; // Property to identify the type
    }
    area() {
        return 0;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super(); // Calls the Shape constructor
        this.radius = radius;
        this.type = "Circle"; // Override type
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super(); // Calls the Shape constructor
        this.width = width;
        this.height = height;
        this.type = "Rectangle"; // Override type
    }
    area() {
        return this.width * this.height;
    }
}

// Example: Creating the `shapes` Array
const shapes = [new Circle(5), new Rectangle(4, 6), new Shape()];

// Example: Iterating Over the Array
shapes.forEach((shape) => {
    console.log(
        `Type: ${shape.type}, Area: ${shape.area()}`
    );
});

/*
    Output:
    - Type: Circle, Area: 78.53981633974483
    - Type: Rectangle, Area: 24
    - Type: Generic Shape, Area: 0
*/

/*
    5. Why Does Each Object Retain Its Class Name?
       - The `new` keyword associates the object with its class (via the prototype chain).
       - When you call `shape.area()`:
           - JavaScript determines the method to execute based on the class of the object (dynamic dispatch).
       - When you access `shape.type`, you get the value initialized by the respective class's constructor.

    6. Summary:
       - `shapes` is an array of objects created from different classes.
       - Each object retains its class association because of the `new` keyword and the prototype chain.
       - JavaScript uses the class association to resolve methods (like `area()`) and properties (like `type`).


    JavaScript does not natively support method overloading in the traditional sense (like in Java or C#), 
    where multiple methods can have the same name but differ in their parameter lists. 
    However, you can simulate method overloading using techniques such as checking the number or type of 
    arguments inside the method.
*/
