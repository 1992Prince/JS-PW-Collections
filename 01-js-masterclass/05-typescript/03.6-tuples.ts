/**
What are tuples?

A Tuple is a fixed-length, ordered array where each element can have a different type.
Unlike regular arrays that allow multiple values of the same type.
Tuples lets you define the exact type and number of elements

What is a Tuple?

    Tuple = special type of array in TypeScript.

    Difference: normal array me elements ka type same hota hai,
    but tuple me har position ka type fixed hota hai.

    Matlab: order + types dono fix.

🔹 Tuple vs Array
| Feature | Array               | Tuple                           |
| ------- | ------------------- | ------------------------------- |
| Length  | Flexible            | Fixed (can also allow optional) |
| Types   | Usually same type   | Per-position type restriction   |
| Example | `number[]` → \[1,2] | `[string, number]` → \["A", 1]  |

👉 Simple words me:
Tuple = fixed-length, ordered array jisme har position ka apna type hota hai.
Useful jab structure hamesha ek jaisa ho (jaise coordinates, API response pairs, etc.).

👉 Simple words me:
Tuple ko iterate karna = array ko iterate karna.
 */

// 🔹 Example 1: Basic Tuple
let person1: [string, number] = ["Rahul", 25];
/**
Pehla element → string
Dusra element → number 
❌ Agar galat order diya: let wrong: [string, number] = [25, "Rahul"]; // Error
 */

// 🔹 Example 2: Multiple Types
let data2: [number, string, boolean] = [101, "Active", true];

// 🔹 Example 3: Tuple with Destructuring
let user3: [string, number] = ["Sneha", 28];

let [name1, age1] = user3;
console.log(name1); // Sneha
console.log(age1);  // 28

console.log();

// 🔹 Example 4: Tuple in Function Return
// Functions often use tuple to return multiple values:

function getUser(): [string, number] {
    return ["Amit", 30];
}

const [username, userAge] = getUser();
console.log("username: ", username); // username:  Amit
console.log("userAge: ", userAge);  // userAge:  30

console.log();


// tuple iteration

let user4: [string, number, boolean] = ["Rahul", 25, true];

// 🔹 1. Normal for loop (by index)
for (let i = 0; i < user4.length; i++) {
    console.log(user4[i]);
}


// 🔹 2. for...of loop (direct values)
for (const value of user4) {
    console.log(value);
}

// 🔹 3. forEach method
user4.forEach((val, index) => {
    console.log(`Index ${index}: ${val}`);
});


// 🔹 4. Destructuring (position-based access)
const [name2, age2, isActive2] = user4;

console.log(name2);     // Rahul
console.log(age2);      // 25
console.log(isActive2); // true

console.log();

// 🔹 2. Empty Tuple
// Example A: Fixed empty tuple
let tup: [] = [];
// Ab ye tuple hamesha empty hi rehna chahiye.
// Agar kuch add karoge → ❌ error.
// tup.push(10); // ❌ Error: Tuple of length 0

// Example B: Flexible tuple with optional / rest
// Agar tum chahte ho tuple me baad me elements aaye, toh pehle type specify karna padega:
let tup2: [number?, string?] = [];   // optional elements
tup2 = [42];         // ✅ OK
// tup2 = ["hi"];       // ❌ error.
tup2 = [42, "hi"];   // ✅ OK

// Or with rest elements[spread operator]:
let tup3: [number, ...string[]] = [1];
tup3.push("hello");  // ✅ OK
console.log(tup3); // [ 1, 'hello' ]

console.log();

// TypeScript me tuple with optional params (?) aur tuple with rest/spread (...) dono alag kaam karte hain.

/**
🔹 1. Tuple with Optional Params

👉 Matlab: Tuple ke kuch positions ho bhi sakti hain, na bhi ho sakti hain.

Fixed length hoti hai, but kuch positions optional hain.
 */

// Tuple with optional second and third elements
let tup4: [number, string?, boolean?];

// Allowed
tup4 = [10];                  // ✅ only first
tup4 = [10, "hello"];         // ✅ first + second
tup4 = [10, "hello", true];   // ✅ all three

console.log("tup4: ", tup4); // tup4:  [ 10, 'hello', true ]

// Not Allowed
// tup4 = [];                    // ❌ must have at least number

console.log();

/**
🔹 2. Tuple with Rest/Spread

👉 Matlab: Tuple ke andar ek part fixed hota hai, baaki ke elements ek hi type ke unlimited ho sakte hain.
 */

// At least one number, rest can be many strings
let tup5: [number, ...string[]];

// Allowed
tup5 = [1];                        // ✅ only number
tup5 = [1, "a", "b", "c"];         // ✅ one number + multiple strings

// Not Allowed
//tup5 = ["a", "b"];                 // ❌ first element must be number

/**
🔹 Side-by-Side Difference
| Feature             | Optional Params (`?`)                 | Rest/Spread (`...`)                       |
| ------------------- | ------------------------------------- | ----------------------------------------- |
| Length              | Mostly fixed (small variation)        | Flexible (can grow a lot)                 |
| Position            | Specific positions may be missing     | First few positions fixed, rest unlimited |
| Example             | `[number, string?, boolean?]`         | `[number, ...string[]]`                   |
| Allowed Assignments | `[10]`, `[10,"hi"]`, `[10,"hi",true]` | `[1]`, `[1,"a","b","c"]`                  |
| Use Case            | Small, well-defined optional fields   | Fixed head + variable-length tail         |

👉 Simple words me:

Optional (?) → "thode positions chhod sakte ho"

Rest (...) → "ek fixed shuruat + baad me unlimited elements of same type"

TypeScript me tuple variables reassignable hote hain (just like normal arrays or objects), 
lekin sirf wahi values assign kar sakte ho jo us tuple ke type ke rules follow karti ho.

👉  can we assign value to specific index of tuple

🔹 Tuple = special kind of array
Runtime (JavaScript me), tuple = bas array hi hota hai.
Matlab: index access / assignment possible hai.
 */

console.log();

let tup6: [string, number] = ["Rahul", 25];

// Change value at index 0
tup6[0] = "Amit";   // ✅ OK (string type allowed)
// Change value at index 1
tup6[1] = 30;       // ✅ OK (number type allowed)

console.log(tup6); // ["Amit", 30]

// tup6[1] = "30"; // CE Error - Type 'string' is not assignable to type 'number'.
// tup6[4] = 30; // CE Error
// Error is
// Type '30' is not assignable to type 'undefined'.ts(2322)
// Tuple type '[string, number]' of length '2' has no element at index '4'.

/***
⚖️ Summary

✅ Tuple me index se value assign kar sakte ho (jaise array).

✅ TypeScript ensure karega ki correct type assign ho.

❌ Out-of-bounds index allowed nahi (except rest operator case).

❌ Agar tuple readonly hai to index assignment possible nahi
 */




