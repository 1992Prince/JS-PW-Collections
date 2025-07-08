/*
✅ What are Access Modifiers in TypeScript?
Access modifiers define the visibility or accessibility of class members (properties, methods) 
from outside the class.

They help you implement Encapsulation — i.e., hiding the internal details and exposing only what's needed.

✅ Types of Access Modifiers

| Modifier    | Accessible From Class | Subclass | Outside Class |
| ----------- | --------------------- | -------- | ------------- |
| `public`    | ✅ Yes                 | ✅ Yes    | ✅ Yes         |
| `private`   | ✅ Yes                 | ❌ No     | ❌ No          |
| `protected` | ✅ Yes                 | ✅ Yes    | ❌ No          |

🔹 1. public (default)
Accessible everywhere — within the class, outside the class, and in subclasses
This is the default modifier in TypeScript if you don’t specify anything.

🔹 2. private
Accessible only inside the class where it's declared.
Not accessible outside the class or in subclasses.

 3. protected
Accessible inside the class and in subclasses.
Not accessible outside the class.


*/

// 🔹 1. public (default) example

class Person {
    public name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    public greet() {
      console.log(`Hello, ${this.name}`);
    }
  }
  
  const p = new Person("Ankush");
  console.log(p.name); // ✅ Accessible // Output: Ankush
  p.greet();           // ✅ Accessible // Output: Hello, Ankush
  
console.log();

// 🔹 2. private example

class BankAccount {
    private balance: number;
  
    constructor(amount: number) {
      this.balance = amount;
    }
  
    showBalance() {
      console.log(`Balance is ₹${this.balance}`);
    }
  }
  
const acc = new BankAccount(1000);
  // showBalance() is public, so it can be called
  acc.showBalance();      // Balance is ₹1000
// console.log(acc.balance); // ❌ Error: 'balance' is private and can't be accessed outside the class
  
console.log();
  

// 🔹 3. protected example

class Animal {
    protected species: string = "Dog";
  }
  
  class Dog extends Animal {
    bark() {
      console.log(`Species is ${this.species}`); // ✅ OK
    }
  }
  
  const d = new Dog();
  d.bark(); // Species is Dog
  // console.log(d.species); // ❌ Error: 'species' is protected
  
  /**
✅ Interview Summary Answer:

    Access modifiers in TypeScript (public, private, protected) are used to control the visibility of class members.
        public is accessible everywhere (default).
        private restricts access only to within the same class.
        protected allows access within the class and its subclasses.
        
    They help in achieving data encapsulation and better object-oriented design.
   */