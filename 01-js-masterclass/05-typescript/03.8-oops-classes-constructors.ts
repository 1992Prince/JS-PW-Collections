/**
classes and objects
constructors
all kinds of variables
access modifiers - (public, private, protected)
exports and default exports
Inheritance
Abstract classes
Interface

A class in Typescript is a blueprint for creating objects with properties(variables)
and methods (functions).
👉 In plain words: it’s a template to organize data + behavior.

 */

class Car {
    brand: string;
    year: number;

    // Constructor
    constructor(brand: string, year: number) {
        this.brand = brand;
        this.year = year;
    }

    // Method
    drive(): void {
        console.log(`${this.brand} is driving...`);
    }
}

// Create objects (instances) of the class
const car1 = new Car("Tesla", 2023);
const car2 = new Car("Toyota", 2020);

car1.drive(); // Tesla is driving...
car2.drive(); // Toyota is driving...


console.log();

/*
2. Constructor

The constructor is a special function inside a class.
It runs automatically when you create an object with new.
It is used to initialize properties.
*/

// 🔹 1. How to declare instance variables?
// In TypeScript, you declare variables inside the class but outside methods.

// class Person {
//     name: string;   // instance variable
//     age: number;    // instance variable
//   }

// above name and age will throw error - Property 'name' has no initializer and is not definitely assigned in the constructor.
//if you don't intialize them  by giving default values or initlaize them in constructor


// You need to assign them either:
// in the constructor, or
// give a default value, or
// mark them as optional / undefined.

/**
🔹 2. Do we need to keep them in constructor?

👉 Not mandatory, but most common.
Constructor is just one way to initialize those properties.
 */

// (a) Using constructor: - see above example of Car
// (b) Without constructor (default values):
// (c) Optional properties:

// (b) - without constructor example

class Person {
    name: string = "Pikachu";
    age: number = 23;

    intro(): void {
        console.log(`My name is ${this.name} and age is ${this.age}`)
    }
}

const p2 = new Person();
console.log(p2.name); // Pikachu
p2.intro();           // My name is Pikachu and age is 23

console.log();

// (c) Optional properties: - example

class Person2 {
    name?: string;  // optional
    age?: number;
}

const p3 = new Person2();
console.log(p3.name); // undefined
console.log(p3.age); // undefined

console.log();

/**
⚡ Conclusion

Declare instance variables inside class (above constructor).
Not mandatory to keep in constructor → you can initialize via:
    - constructor
    - default value
    - optional (?) or | undefined


📌 Notes on Instance Variables in TypeScript Classes

1. Accessing Instance Variables

Instance variables (properties) of a class are always accessed using the this keyword 
inside the class.
this refers to the current object (instance).
👉 Outside the class, we use the object reference, not this.


2. Default Values of Instance Variables

In TypeScript, unlike some languages (like Java/C#),
instance variables are NOT automatically initialized.

If you don’t give them a value (via constructor or default assignment), 
they are considered undefined at runtime.

class Test {
  x: number;   // declared but not initialized
  y?: number;  // optional
}

const t = new Test();
console.log(t.x); // ❌ Error (strict mode: must initialize)
console.log(t.y); // ✅ undefined


TypeScript (with strictPropertyInitialization) forces you to initialize non-optional variables, 
otherwise it throws an error.

Initialization Rules

👉 If an instance variable is not optional (?) → you must initialize it:
either with a default value,
or inside the constructor,
or by marking it with a definite assignment assertion (!).
 */


/*
4. Access Modifiers

public → accessible everywhere (default)
private → accessible only inside the class
protected → accessible in class + subclasses
*/