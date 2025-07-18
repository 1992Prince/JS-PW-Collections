/**
 * ✅ What is a Map?
 * A Map in TypeScript stores key-value pairs, where keys are unique and can be of any type.
 * 
 * let creds = new Map<string, any>();
 * This means: keys are strings, and values can be anything (any).
 * 
 * 
 * 🔷 1. What is a Map in TypeScript?
        A Map is a key-value collection that allows you to store data with unique keys.
        Unlike regular objects {}, Map:
            -  Allows any type of key (not just strings)
            -  Maintains insertion order
            -  Provides useful methods to manage data
 * 
🔶 2. Purpose of Map
        - Storing dynamic key-value data
        - Lookup tables (like username-password)
        - Role-based access, dropdown lists, ID-object mapping
        - When you want to maintain order of insertion

🔷 3. Basic Syntax - let mapName = new Map<KeyType, ValueType>();

      example: let creds = new Map<string, string>();




 * 🔧 Useful Map Methods Explained with Examples:
 * | Method       | Description                    | Example                             |
| ------------ | ------------------------------ | ----------------------------------- |
| `.set(k, v)` | Adds or updates key-value pair | `map.set("name", "sid")`            |
| `.get(k)`    | Gets value for a key           | `map.get("name")` → `"sid"`         |
| `.has(k)`    | Checks if key exists           | `map.has("name")` → `true`          |
| `.delete(k)` | Deletes key-value pair         | `map.delete("name")`                |
| `.clear()`   | Removes all key-value pairs    | `map.clear()`                       |
| `.keys()`    | Returns iterator of keys       | `for (let k of map.keys())`         |
| `.values()`  | Returns iterator of values     | `for (let v of map.values())`       |
| `.entries()` | Returns \[key, value] pairs    | `for (let [k, v] of map.entries())` |

 */

// ✅ .set(key, value)
// Purpose: Adds/updates a key-value pair
// Return Type: Map

let map = new Map<string, number>();
map.set("a", 1); // ✅ Adds "a" => 1
map.set("a", 2); // ✅ Updates "a" to 2
map.set("b", 3); // ✅ Adds "b" => 3
console.log(`map content is ${map} and typeof of map is ${typeof map}`); // Output: map content is [object Map] and typeof of map is object

// ❌ Negative:
// // map.set(1, "a"); ❌ Error: key must be string, not number

console.log();

// ✅ .get(key)
// Purpose: Retrieves value for given key
// Return Type: ValueType | undefined

map.set("a", 10);
console.log(map.get("a"));      // ✅ 10
console.log(map.get("missing")); // ✅ undefined

// ❌ Negative: - Compile time error
// let x: number = map.get("missing"); // ❌ Type 'number | undefined' is not assignable to type 'number'.Type 'undefined' is not assignable to type 'number'.

// ✅ Fix: Use optional chaining or type check
let val = map.get("missing");
if (val !== undefined) {
    console.log(val);
}

console.log();

// ✅ .has(key)
// Purpose: Checks if key exists
// Return Type: boolean

let hasA: boolean = map.has("a"); // ✅ true
let hasP: boolean = map.has("p"); // ✅ false
console.log(`Does map have key 'a'? ${hasA} and 'p'? ${hasP}`); // Output: Does map have key 'a'? true and 'p'? false

console.log();

// ✅ .delete(key)
// Purpose: Deletes key-value pair
// Return Type: boolean (true if deleted)
let hasADeleted: boolean = map.delete("a"); // ✅ true (if existed)
let hasZDeleted: boolean = map.delete("z"); // ✅ false (if not present)
console.log(`Was 'a' deleted? ${hasADeleted} and 'z'? ${hasZDeleted}`); // Output: Was 'a' deleted? true and 'z'? false

console.log();

// ✅ .clear()
// Purpose: Removes all entries
// Return Type: void

map.clear(); // ✅ All values gone
console.log(`After clearing, map size is ${map.size}`); // Output: After clearing, map size is 0

console.log();

// ✅ .keys()
// Purpose: Returns iterator of all keys
// Return Type: IterableIterator<KeyType>

map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

for (let key of map.keys()) {
    console.log(key); // "a", "b", ...
}

/**
 * Output:
 * a
 * b
 * 
 */

console.log();

// ✅ .values()
// Purpose: Returns iterator of all values
// Return Type: IterableIterator<ValueType>
for (let val of map.values()) {
    console.log(val); // 1, 2, 3...
}
/**
 * Output:
 * 1
 * 2
 * 3
 */

console.log();

// ✅ .entries()
// Purpose: Returns iterator of [key, value] pairs
// Return Type: IterableIterator<[KeyType, ValueType]>

for (let [k, v] of map.entries()) {
    console.log(`${k} --> ${v}`);
}

/**
 * Output:
 * a --> 1
 * b --> 2
 * c --> 3
 */

/**
 * ✅ Great for dynamic credentials, role-based data, element selectors
 * 
 * 🔷 7. ⚠️ Important Notes
 * | Topic                 | Note                                         |
| --------------------- | -------------------------------------------- |
| Key type              | Can be any type (string, number, object)     |
| get() may return      | `undefined`, handle it safely                |
| Order of keys         | Maintained as inserted                       |
| .set() overwrites key | If key already exists                        |
| Use over object `{}`  | When keys are not just strings or need order |

 */
console.log();
console.log("------ Below is for demo ----------");

for (let item of map) {
    console.log(item);
}

/**
 * ------ Below is for demo ----------
[ 'a', 1 ]
[ 'b', 2 ]
[ 'c', 3 ]
 */