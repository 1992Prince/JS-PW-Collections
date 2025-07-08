/**
✅ 1. What is Inheritance?

    Inheritance means one class (child/subclass) can reuse properties and 
    methods of another class (parent/superclass).

    syntax:

    class Parent {
        // ...
    }

    class Child extends Parent {
        // ...
    }

✅ 3. protected Modifier – Why and When?

    A protected member is accessible within the class and its subclasses, but not outside.
    It’s perfect when you want to give child classes access, but not expose it publicly.
 */

class Animal1 {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    public makeSound(): void {
        console.log("Some generic animal sound");
    }
}

class Dog1 extends Animal1 {
    private breed: string;

    constructor(name: string, breed: string) {
        super(name); // calling parent constructor
        this.breed = breed;
    }

    public describe(): void {
        console.log(`${this.name} is a ${this.breed}`); // ✅ name is accessible because it's protected
    }

    public makeSound2(): void {
        super.makeSound(); // calling parent method
        console.log("Woof! Woof!"); // Dog-specific sound
    }
}

const dog = new Dog1("Tommy", "Labrador");
dog.describe();         // Tommy is a Labrador
dog.makeSound();        // Some generic animal sound
dog.makeSound2();

/**
Tommy is a Labrador
Some generic animal sound
Some generic animal sound
Woof! Woof!
 */

// ❌ console.log(dog.name); // Error: Property 'name' is protected
