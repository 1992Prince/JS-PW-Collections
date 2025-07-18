/**
✅ 1. Default Constructor (No Parameters)

    Agar tum class ka constructor bina kisi parameter ke banate ho, to usse default constructor kehte hain.
    Ye tab useful hota hai jab tumhe object create karte waqt koi specific value deni nahi hoti.
 */

class User2 {
  name: string;

  constructor() {
    this.name = "Guest"; // Default value

  }
}

const u3 = new User2();
console.log(u3.name); // Output: Guest

console.log();

/**
✅ 2. Constructor with Optional Parameter
Jab tum constructor me parameters doge but optional (?) banaoge, 
to tum object banate waqt value de bhi sakte ho, aur chhodd bhi sakte ho.
 */

class Employee {
  name: string;

  constructor(name?: string) {
    if (name) { // here we are checking truthy value
      this.name = name;
    } else {
      this.name = "Default Employee";
    }
  }
}

const emp1 = new Employee("Ankush");
console.log(emp1.name); // Output: Ankush

const emp2 = new Employee(); // No name given
console.log(emp2.name); // Output: Default Employee


console.log();

// ✅ 3. Constructor with Default Parameter Value
// Tum parameter ko optional banane ke bajaye, uska default value bhi de sakte ho.
// Ye aur bhi clean code deta hai.

class Car {
  brand: string;

  constructor(brand: string = "Honda") {
    this.brand = brand;
  }
}

const c1 = new Car("BMW");
console.log(c1.brand); // Output: BMW

const c2 = new Car(); // No brand passed
console.log(c2.brand); // Output: Honda
console.log();

/**
✅ Q: What is a Constructor in TypeScript?

    A constructor in TypeScript is a special method inside a class that is automatically called 
    when a new object of that class is created.
    Its main purpose is to initialize object properties at the time of object creation.

✅ Q: What is the Purpose of Constructor?

    To set initial values to object properties when the object is created.
    To allow flexibility by using optional/default values.
    Helps in enforcing structure while creating complex objects.

✅ Q: Types of Constructors in TypeScript

While TypeScript does not support constructor overloading like Java, 
you can achieve multiple behaviors using optional and default parameters.

1. ✅ Default Constructor

    No parameters.
    Sets hardcoded or default values.

            class Demo {
                 message: string;

                 constructor() {
                    this.message = "Hello";
                     }
                }


2. ✅ Parameterized Constructor

    Accepts input to initialize object properties.

            class User {
                name: string;

                constructor(name: string) {
                    this.name = name;
                }
                }


3. ✅ Optional Parameter Constructor

    Parameters marked as optional using ?.

        class Employee {
            name: string;

            constructor(name?: string) {
            this.name = name || "Default";
            }
         }


4. ✅ Constructor with Default Parameter Values

    Parameters have default values defined.

            class Car {
            brand: string;

            constructor(brand: string = "Honda") {
                this.brand = brand;
            }
        }



 */