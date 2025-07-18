// Parent class
class Animal3 {
    protected name: string;

    constructor(name: string) {
        this.name = name;
        console.log("Animal constructor called");
    }

    speak(): void {
        console.log(`${this.name} makes a sound.`);
    }
}

// Child class
class Dog3 extends Animal3 {
    breed: string;

    constructor(name: string, breed: string) {
        super(name); // calling parent constructor
        this.breed = breed;
        console.log("Dog constructor called");
    }

    /**
     * making name as public and calling via super.name will give compile error
     * parent member name can be public or protected
     * we can access parent variables via inheritance protected way only
     */
    display(): void {
        console.log(`Accessing parent property via super: ${this.name}`); // accessing parent property
        super.speak(); // calling parent method
        console.log(`Breed: ${this.breed}`);
    }
}

// Instantiate
const myDog = new Dog3("Buddy", "Golden Retriever");
myDog.display();

/***
 * Animal constructor called
    Dog constructor called
    Accessing parent property via super: Buddy
    Buddy makes a sound.
 */
