/**
📌 Access Modifiers in TypeScript

In TypeScript classes, we can use 3 main access modifiers:

1. public (default)

Accessible everywhere (inside class, outside class, subclasses).
Agar kuch nahi likha, toh default public hota hai.
 */

class Car11 {
    public brand: string; // same as just "brand: string"

    constructor(brand: string) {
        this.brand = brand;
    }
}

const c11 = new Car11("Tesla");
console.log(c11.brand); // Tesla ✅ Accessible outside

console.log();

/**
2. private

Accessible only inside the same class.
Not accessible outside class or in subclasses.
 */

class Account {
    private balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    getBalance() {
        return this.balance; // ✅ Accessible inside class
    }
}

const acc = new Account(1000);
console.log(acc.getBalance()); // ✅ 1000
// console.log(acc.balance); ❌ Error: balance is private


console.log();


/**
3. protected

Accessible inside the class and also in child classes (subclasses).
Not accessible from outside objects. [VIMP point]
 */

class Animal {
    protected sound: string;

    constructor(sound: string) {
        this.sound = sound;
    }
}

class Dog1 extends Animal {
    bark() {
        console.log(this.sound); // ✅ Accessible in subclass
    }
}

const d1 = new Dog1("Woof!");
d1.bark();        // Woof!
// console.log(d1.sound); ❌ Error: sound is protected

/**
 * 
Doubt - kya hum Dog class se Animal class k constructor ko call nahi karenge kya in above example?

Case 1: No constructor in child class

Agar child class ka constructor likha hi nahi hai → to TypeScript automatically parent constructor 
ko call kar deta hai.
Isiliye jo maine example diya tha, usme Dog ka constructor optional tha.

Case 2: Child has its own constructor

Ab agar Dog me constructor likhna ho → fir super(sound) call karna mandatory hai warna error aayega.

class Animal {
  protected sound: string;
  constructor(sound: string) {
    this.sound = sound;
  }
}

class Dog extends Animal {
  breed: string;

  constructor(sound: string, breed: string) {
    super(sound);   // ✅ must call parent constructor
    this.breed = breed;
  }

  bark() {
    console.log(`${this.breed} dog says ${this.sound}`);
  }
}

const d = new Dog("Woof!", "German Shepherd");
d.bark(); // German Shepherd dog says Woof!

 */
console.log();

/**
4. (Extra) readonly with modifier

Can combine readonly with access modifiers.
Example: private readonly id: number;

class User {
  private readonly id: number;

  constructor(id: number) {
    this.id = id;
  }

  showId() {
    console.log(this.id); // ✅ allowed
  }
}

const u = new User(101);
u.showId();
// u.id = 200; ❌ Error (private + readonly)

 */

/**
⚡ Summary Table
| Modifier      | Inside Class | Subclass | Outside Object |
| ------------- | ------------ | -------- | -------------- |
| **public**    | ✅ Yes        | ✅ Yes    | ✅ Yes          |
| **private**   | ✅ Yes        | ❌ No     | ❌ No           |
| **protected** | ✅ Yes        | ✅ Yes    | ❌ No           |

 */