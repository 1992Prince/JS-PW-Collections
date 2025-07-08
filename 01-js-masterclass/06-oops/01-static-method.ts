/**
✅ What is a static method?
A static method is a method that belongs to the class itself, not to instances (objects) of the class.
🧠 That means:
        You don’t need to create an object to use a static method.
        It is called using the class name, not this.

syntax:
    class Utility {
    static greet(name: string): void {
        console.log(`Hello, ${name}!`);
    }
    }

    // ✅ Called using the class name
    Utility.greet("Dilip"); // Output: Hello, Dilip!

❌ NOT like this:

const u = new Utility();
u.greet("Dilip"); // ❌ Error: greet is static and cannot be called on an instance

📦 Use Cases:

| Use Case                          | Why `static`?                            |
| --------------------------------- | ---------------------------------------- |
| Utility/helper functions          | No need for object state                 |
| Constants / configuration methods | Global logic accessible without instance |
| Factory methods                   | Create instances with pre-defined logic  |


 */

class MathUtil {
    static PI: number = 3.14159;

    static areaOfCircle(radius: number): number {
        return MathUtil.PI * radius * radius;
    }
}

console.log(MathUtil.areaOfCircle(5)); // 78.53975
console.log(MathUtil.PI);              // 3.14159
