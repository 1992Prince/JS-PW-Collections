/**
🔹 1. What are Objects in TS?

JavaScript me objects = key–value pairs.

TypeScript me objects ko type annotation milta hai → compiler check karta hai ki object structure sahi hai ya nahi.


🔹 2. Basic Object Type [Inline type declaration]

        let person: { name: string; age: number } = {
        name: "Rahul",
        age: 25,
        };

        Object ke andar 2 properties fix hain:
        name → string
        age → number
        Agar koi property missing ho ya galat type ho → ❌ error.

🔹 3. Optional Properties

Kuch properties optional bhi ho sakti hain → ? use karo.

let user: { name: string; age?: number } = {
  name: "Sneha",
}; // ✅ allowed, age optional hai

🔹 4. Readonly Properties

Jo property ek baar set ho gayi, usko change nahi kar sakte.

let car: { readonly brand: string; year: number } = {
  brand: "Tesla",
  year: 2023,
};

car.year = 2024;   // ✅ OK
car.brand = "BMW"; // ❌ Error (readonly)


🔹 5. Nested Objects

Objects ke andar bhi objects ka type define kar sakte ho.

let employee: {
  id: number;
  details: { name: string; department: string };
} = {
  id: 1,
  details: {
    name: "Amit",
    department: "IT",
  },
};


🔹 6. Array of Objects

let people: { name: string; age: number }[] = [
  { name: "Raj", age: 25 },
  { name: "Anita", age: 28 },
];


🔹 7. Index Signatures (Dynamic Keys)

Agar keys pehle se nahi pata ho:

type Scores = { [subject: string]: number };

let marks: Scores = {
  math: 95,
  english: 88,
};


🔹 8. Reusable Types

Object structure ko baar-baar likhna boring hai → type ya interface use karo.

Using type

type User = { name: string; age: number };

let u1: User = { name: "Raj", age: 25 };
let u2: User = { name: "Neha", age: 30 };


Using interface

interface User {
  name: string;
  age: number;
}

let u: User = { name: "Amit", age: 28 };


🔹 9. Extending Objects

Interfaces ko extend karke naye objects bana sakte ho.

interface Person {
  name: string;
}

interface Employee extends Person {
  id: number;
}

let emp: Employee = { name: "Ravi", id: 101 };



⚖️ Summary

Object types → contract ki tarah kaam karte hain (compiler check karta hai).

Use cases:

✅ Fixed structure → Inline object types
✅ Reusable structure → type / interface
✅ Large apps → interface (extendable)
✅ Dynamic keys → Index signatures

👉 Simple words me:
Objects in TypeScript = JS objects + type safety.
Ye ensure karta hai ki object ke andar correct properties, correct types honi chahiye.


🔹 Key Differences - type vs interface


1. Extension / Inheritance

interface → extend kar sakte ho (multiple bhi).

type → intersect (&) use karna padta hai.

    // Interface extend
    interface Person { name: string }
    interface Employee extends Person { id: number }

    let e: Employee = { name: "Amit", id: 101 };

    // Type intersection
    type PersonT = { name: string };
    type EmployeeT = PersonT & { id: number };

    let et: EmployeeT = { name: "Sneha", id: 102 };

2. Declaration Merging

interface → same naam se multiple times likho, woh merge ho jaata hai.

type → multiple bar declare nahi kar sakte.

    interface Car { brand: string }
    interface Car { year: number }   // merges!

    let c: Car = { brand: "Tesla", year: 2024 };

    type Bike = { brand: string };
    // type Bike = { year: number }  // ❌ Error: duplicate


3. Use with Primitives & Unions

type → primitives, union, tuple, function signatures define kar sakta hai.

interface → sirf objects aur classes ke liye.

// ✅ Valid type
type ID = string | number;
type Tuple = [string, number];

// ❌ Interface can't do this
// interface ID = string | number;  // Error


4. Readability / Style

Interfaces → large apps me prefer hote hain (extendable, mergeable).

Types → short, flexible, quick use ke liye.


🔹 Comparison Table
| Feature                    | `type` ✅                | `interface` ✅                          |
| -------------------------- | ----------------------- | -------------------------------------- |
| Object structure define    | ✔️                      | ✔️                                     |
| Extend karna               | `&` (intersection)      | `extends` keyword                      |
| Declaration merging        | ❌                       | ✔️                                     |
| Primitives define karna    | ✔️                      | ❌                                      |
| Union / Tuple define karna | ✔️                      | ❌                                      |
| Best for                   | Aliases, unions, tuples | Contracts, large-scale objects/classes |

 */

// 🔹 1. Object Declaration
let person4 = { name: "Rahul", age: 25 };

// TypeScript automatically type inference kar lega:
// inferred type: { name: string; age: number }

// 🔹 2. Property Access
console.log(person4.name);  // ✅ "Rahul"
console.log(person4["age"]); // ✅ 25
//console.log(person4.salary); // ❌ Error (salary property does not exist)

// 🔹 3. Assignment Rules

let person5: { name: string; age: number } = { name: "Rahul", age: 25 };

person5.age = 30;       // ✅ Allowed (correct type)
person5.name = "Neha";  // ✅ Allowed
// person5.age = "thirty"; // ❌ Error (expected number, got string)
// person5.city = "Delhi"; // ❌ Error (extra property not allowed unless explicitly typed)


// 🔹 4. Key–Value Pairs - TypeScript expects keys exactly as defined:
let user5: { id: number; active: boolean } = { id: 1, active: true };

// Invalid → missing property
// let u2: { id: number; active: boolean } = { id: 1 }; ❌ Error


// 🔹 5. Functions Inside Objects
// You can define methods in objects:

let calculator: {
    add: (a: number, b: number) => number;
} = {
    add: (a, b) => a + b,
};

console.log(calculator.add(5, 3)); // ✅ 8


// 🔹 6. Nested Objects

let employee4: {
    id: number;
    details: { name: string; dept: string };
} = {
    id: 101,
    details: {
        name: "Sneha",
        dept: "IT",
    },
};

console.log(employee4.details.name); // ✅ Sneha



// 🔹 7. Optional & Readonly

let car: { brand: string; readonly year: number; owner?: string } = {
    brand: "Tesla",
    year: 2024,
};

car.brand = "BMW";   // ✅ Allowed
// car.year = 2025;  ❌ Error (readonly)
// owner is optional

// 🔹 9. Array of Objects
let students: { name: string; age: number }[] = [
    { name: "Raj", age: 20 },
    { name: "Priya", age: 22 },
];

students[0].name = "Rahul"; // ✅ Allowed

/**
⚖️ Summary

Access: dot (obj.key) or bracket (obj["key"])

Assignment: only allowed if type matches

Keys: must match declared type (extra keys ❌ unless using index signature)

Functions: can be defined as properties (methods)

Nested objects: define structure recursively

Optional & readonly: extra control

Dynamic keys: use index signatures

👉 Simple words me:
Objects in TypeScript behave like JS objects, but with strict rules on what properties exist and what types they hold.
 */
