/**
🔁 PART 1: Method Overloading in TypeScript
    JavaScript mein overloading natively nahi hota, 
    But in TypeScript, you can't create multiple methods with same name like in Java.
    Instead, you use:
        Multiple overload declarations (just signatures)
        One single method implementation

✅ Method Overloading — Kya Hai?
    Same method name, but used with different parameter types or count – in the same class.
    Method Overloading means defining multiple method signatures with the same name but different parameter types or counts

❗ Why only one implementation?
    Because JavaScript (which TypeScript compiles to) doesn't support method overloading at runtime.
    So we fake it with function signature declarations and use type-checks in the single method.
 */

class Calculator {
    // ✅ Overload declarations
    add(a: number, b: number): number;
    add(a: string, b: string): string;

    // ✅ Single implementation
    add(a: any, b: any): any {
        return a + b;
    }
}

const calc = new Calculator();
console.log(calc.add(10, 5));        // 15
console.log(calc.add("Hello, ", "World"));  // Hello, World

console.log();

// Another example

class Example {
    // ✅ Overload declarations
    greet(name: string): void;
    greet(age: number): void;

    // ✅ One actual implementation
    greet(value: any): void {
        if (typeof value === "string") {
            console.log(`Hello, ${value}`);
        } else if (typeof value === "number") {
            console.log(`You are ${value} years old`);
        }
    }

}

// 🔍 Usage
const ex = new Example();
ex.greet("Dilip");  // Hello, Dilip
ex.greet(25);       // You are 25 years old

console.log();

// another example of method overloading outside a class

function greet(name: string): void;
function greet(age: number): void;

function greet(value: string | number): void {
    if (typeof value === 'string') {
        console.log(`Hello ${value}`);
    } else {
        console.log(`You are ${value} years old`);
    }
}

greet("Dilip");  // Hello Dilip
greet(25);       // You are 25 years old

/**
⚠️ Important Notes:
    You can write multiple overloads, but only one implementation
    Overloads must come before the implementation
    The implementation should accept a union (e.g., string | number) or any

Use Case in Automation:

function fillInput(selector: string, value: string): void;
function fillInput(selector: string, value: number): void;
function fillInput(selector: string, value: string | number): void {
  // Playwright fill implementation
  console.log(`Filling ${selector} with ${value}`);
}

Why TypeScript Handles It Differently

    - TypeScript is compiled to JavaScript, which does not support method overloading natively.

    - So overloading is simulated at the type level only, and all logic must be handled manually 
     inside a single function
 */

