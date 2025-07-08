/**
🔁 PART 2: Method Overriding in TypeScript
    Method overriding hota hai jab child class same method name ko redefine karti hai from parent class.
    Method Overriding occurs when a subclass provides its own implementation of a 
    method defined in its parent class

✅ Method Overriding — Kya Hai?
    Same method name, parameters
    Parent class defines it
    Child class replaces its behavior

- override keyword is optional but recommended (added in TypeScript 4.3).
- Ensures you're correctly overriding a method from the parent class

 */

class Animal2 {
    makeSound(): void {
        console.log("Generic animal sound");
    }
}

class Dog2 extends Animal2 {
    override makeSound(): void {
        console.log("Woof! Woof!");
    }
}

const a = new Animal2();
a.makeSound(); // Generic animal sound

const d1 = new Dog2();
d1.makeSound(); // Woof! Woof!

/**
Generic animal sound
Woof! Woof!
 */

// 🧠 Good Practice: Use override keyword (optional but helps)
