/**
⚡ Summary

Instance Variables → per object, accessed with this.
Static Variables → per class, shared, accessed with ClassName.var.
Local Variables → inside methods/constructors only.
Parameter Variables → method/constructor arguments.
Readonly Variables → cannot be reassigned after init.
Optional Variables → may be undefined.


📌 Different Kinds of Variables in a TypeScript Class

1. Instance Variables (a.k.a. Properties / Fields)

Belong to each object (instance) separately.
Declared inside class, accessed via this.
Each object has its own copy.

✅, static variables class ke hi hote hain, object ke nahi.
so even inside the class also
Isliye unhe access karne ke liye ClassName.variable use karna padta hai (not this).
 */

class Person3 {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const p1 = new Person3("Aman", 21);
const p4 = new Person3("Riya", 22);

console.log(p1.name); // Aman
console.log(p4.name); // Riya (separate copy)

console.log();

/**
2. Static Variables

Declared with static keyword.
Belong to the class itself, not objects.
Shared among all objects.
Accessed with ClassName.variable
 */

class Counter {
    static count: number = 0;  // static variable

    constructor() {
        Counter.count++;
    }
}

const c1 = new Counter();
const c2 = new Counter();

console.log(Counter.count); // 2 (shared)


console.log();

/**
3. Local Variables

Declared inside a method or constructor.
Exist only during method execution.
Not accessible outside that method.
 */

class Test {
    show() {
        let msg = "Hello"; // local variable
        console.log(msg);
    }
}

const t = new Test();
t.show(); // Hello
// console.log(t.msg); ❌ Error (not accessible)

console.log();

/**
 * 
4. Parameter Variables

Variables declared as method or constructor parameters.
Exist only during function execution.

5. Readonly Variables

Declared with readonly keyword.
Can only be assigned once (at declaration or in constructor).
Prevents accidental reassignment.
 */

class Config {
    readonly version: string = "1.0";

    constructor(readonly appName: string) { }
}

const cfg = new Config("MyApp");
console.log(cfg.version); // 1.0
// cfg.version = "2.0"; ❌ Error


console.log();

// 🔹 2) Example of Readonly Variable Initialized Inside Constructor

// readonly variable ko tum ya toh direct declaration time pe initialize kar sakte ho, ya phir constructor ke andar.

class User2 {
    readonly id: number;
    readonly name: string;

    constructor(id: number, name: string) {
        this.id = id;     // initialized inside constructor ✅
        this.name = name; // initialized inside constructor ✅
    }

    show() {
        console.log(`ID: ${this.id}, Name: ${this.name}`);
    }
}

const u1 = new User2(101, "Aman");
u1.show(); // ID: 101, Name: Aman

// u1.id = 200; ❌ Error: Cannot assign to 'id' because it is a read-only property


console.log()

/**
6. Optional Variables

Declared with ?.
May or may not have a value.
 */

class User {
    name: string;
    age?: number; // optional

    constructor(name: string, age?: number) {
        this.name = name;
        this.age = age;
    }
}
