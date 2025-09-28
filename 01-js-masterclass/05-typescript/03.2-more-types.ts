//---------------------------------------------------------
//1. Union types - let a variable hold more than one type
//---------------------------------------------------------

let x: string | number

x = "Rahul";
x = 120;

// Above x variable can be assigned with string value or number

//---------------------------------------------------------
//2. Arrays types - there are 2 ways to declare array in ts
//---------------------------------------------------------

let number: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ["Rahul", "Babita"];

console.log(names[0]); // Rahul
console.log(names[1]); // Babita
console.log(names[2]); // undefined

console.log();

// in above arrays we can add value of given types

// but if you want to add diff values in arrays then we should go with another type i.e. tuple type


//----------------------------------------------------------------------
//3. Tuple - Fixed length arrays with specific  types at each position
//----------------------------------------------------------------------
// Tuple ek array jaisa type hota hai, lekin usme fixed number of elements
//  hote hain aur har element ka type predefined hota hai.
// Matlab: Position ke hisaab se type decide hota hai.

let user: [string, number] = ["Rahul", 30];

// Tuple: har position ka apna type
let user2: [string, number, boolean] = ["Alice", 25, true];
console.log(user2[0]); // "Alice" -> string
console.log(user2[1]); // 25 -> number
console.log(user2[2]); // true -> boolean

// if u are trying to access greater index more than tuple length -> then u will get CE error
// console.log(user2[3]); // will give compile error - Tuple type '[string, number, boolean]' of length '3' has no element at index '3'

console.log();

/*
🔹 Why Tuples?

Use karo jab:
1. Fixed structure data chahiye ho. 
    Example: GPS coordinates (latitude, longitude). - let coordinates: [number, number] = [28.6139, 77.2090];

2. Return multiple values from a function.
    function getUser(): [string, number] {
    return ["Bob", 30];
    }

    const [name, age] = getUser(); // Destructuring tuple

3. Heterogeneous data (ek hi array me alag-alag types)

🔹 Difference vs Array
| Feature       | Array                         | Tuple                                    |
| ------------- | ----------------------------- | ---------------------------------------- |
| Length        | Flexible                      | Fixed                                    |
| Element Types | Usually same                  | Predefined, per-position                 |
| Example       | `let arr: number[] = [1,2,3]` | `let tup: [string, number] = ["id", 10]` |

*/

//----------------------------------------------------------------------
//4. Enums Types- Used to define a set of named constants
//----------------------------------------------------------------------

enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Down;


//----------------------------------------------------------------------
//5. Object types - this defines object structures using types
//----------------------------------------------------------------------

/*
🔹 Object Types in TypeScript (Concept)

Definition:
Object type ek aisa type hai jo batata hai ki ek object ke andar kaunse properties honge aur unka type kya hoga.

Why?
JavaScript me object structure flexible hota hai (kuch bhi add/modify kar sakte ho).
TypeScript me object type use karke compiler ko strict rules dete ho → code safe aur predictable ho jata hai.

🔹 Key Points About Object Types

1. Shape of the object define karte ho

    e.g. object me name string hona hi chahiye, age number hona hi chahiye.
    Agar property missing ya galat type di → compile-time error.

2. Optional properties

    Koi property ho bhi sakti hai ya nahi bhi.
    Syntax: propertyName?: type.

3. Readonly properties

    Jo ek baar assign ho gayi, badli nahi jaa sakti.
    Syntax: readonly propertyName: type.

4. Nested objects

    Object ke andar bhi object type define kar sakte ho.

5. Index signatures

    Jab tumhe pehle se nahi pata kitni properties hongi.
    Example: [key: string]: number → har key string hogi aur value number.

🔹 Why Important?

    - Type safety: Bugs kam hote hain, galat data structure reject hota hai.
    - Autocompletion: VS Code jaise IDE me suggestions milte hain.
    - Documentation: Dusre developers ko immediately samajh aata hai object kaise dikhna chahiye.

👉 Simple language me:
Object type = ek contract ya blueprint jo batata hai object ke andar kaunse keys aur unke types hone chahiye.
*/
let person: { name: string, age: number } = {
  name: "Rahul",
  age: 30,
}

/**
Good one 👌 - TypeScript me object structure define karne ke multiple ways hote hain. Ye interview me 
               bhi poocha jata hai.


🔹 1. Inline Object Type

Directly variable ke sath type likh dete ho.

let user: { name: string; age: number } = {
  name: "Rahul",
  age: 30
};

✅ Simple aur quick, chhote cases ke liye useful.




🔹 2. Type Alias

Ek type banate ho aur reuse kar sakte ho.

type User = { name: string; age: number };

let user1: User = { name: "Amit", age: 25 };
let user2: User = { name: "Sneha", age: 28 };

✅ Reusable, clean aur readable.




🔹 3. Interface

Almost type jaisa hi hai, but extend / merge karne ki ability ke sath.

interface User {
  name: string;
  age: number;
}

let user: User = { name: "Priya", age: 22 };

✅ Large apps ke liye best, because extend karna easy hai.




🔹 4. Class

Class ke andar properties define karke bhi object structure fix kar sakte ho.
✅ OOP style projects ke liye suitable.




🔹 5. Index Signature

Jab properties dynamic ho aur pehle se pata na ho.

type Scores = { [subject: string]: number };

let marks: Scores = { math: 90, english: 85 };

✅ Useful for maps / dictionaries.




🔹 6. Utility Types (Record, Partial, etc.)

TypeScript ke built-in helpers.

type Scores = Record<string, number>;
let marks: Scores = { math: 95, physics: 88 };

✅ Cleaner syntax, especially for generic object maps.

⚖️ Summary
| Way                | Best For                              |
| ------------------ | ------------------------------------- |
| Inline object type | Quick, one-off objects                |
| Type alias         | Reusability with simple objects       |
| Interface          | Reusability + extension in large apps |
| Class              | OOP style design                      |
| Index signature    | Dynamic keys (like maps)              |
| Utility types      | Cleaner generic object definitions    |

*/



/**
Explain Index Signature with example:

🔹 Index Signature Concept

Normally, jab hum object type banate hain, humein pehle se keys (property names) pata hote hain:

type User = {
  name: string;
  age: number;
};


Yahan keys fixed hain → name, age.
Dusri property add karoge → ❌ error.

Lekin kabhi-kabhi aisa hota hai ki hume keys pehle se nahi pata hote.
Bas itna pata hota hai ki keys ka type kya hoga (string / number) aur values ka type kya hoga.

Us situation me index signature use hota hai.

🔹 Example 1: Map of subject scores

type Scores = {
  [subject: string]: number;  // index signature
};

let marks: Scores = {
  math: 90,
  english: 85,
  physics: 92
};


➡️ Yahan:

Key = string (subject name)
Value = number (marks)
Matlab: koi bhi string key ho sakti hai, bas uski value number honi chahiye.

When to Use

  Jab keys dynamic hain aur hume pehle se pata nahi ki kya honge.
  Jab ek tarah ka dictionary / map / lookup table banana ho.
 */