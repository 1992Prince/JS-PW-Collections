/**
 * 6. Working with Arrays (List Equivalent in Java)
 * 
 *  TypeScript does not have a List—we use Array
 */

let users: string[] = ['sid', 'rahul'];
let scores: Array<number> = [95, 85]; // is equivalent to let scores: number[] = [95, 85];
let mixed: (string | number)[] = ['sid', 95, 'rahul', 85]; // Array with mixed types, only string and number,
// if you want to allow more types, you can use any[] or unknown[] and
// if u try to add a different type, it will throw an error

console.log(users); // [ 'sid', 'rahul' ]
console.log(scores); // [ 95, 85 ]
console.log(mixed); // [ 'sid', 95, 'rahul', 85 ]

/**
 * In Java if u try to print an array, it will print the memory address of the array, and not its elements
 * In TypeScript, it will print the elements of the array
 * Error if you provide incorrect type: Type 'number' is not assignable to type 'string'
 * 🔴 IMP ERROR - mixed.push(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
 * ✔️ - Can be asked in interview
 * 
 */
// mixed.push(true); // 🔴 Argument of type 'boolean' is not assignable to parameter of type 'string | number'.ts(2345)

console.log();

/**
 * Java list and equivalent in TypeScript is Array
 * 
 * list.add() is equivalent to array.push()
 * list.get() is equivalent to array[index]
 * list.size() is equivalent to array.length
 * list.remove() is equivalent to array.splice(index, 1)
 * 
 * Array Methods

.push(), .pop(), .shift(), .unshift()
.includes(), .indexOf(), .filter(), .map(), .find()
.join(), .forEach()

 */

// 🔹 1. .push() – Add item(s) to the end of an array

let nums: number[] = [1, 2];
nums.push(3); // we can add single or multiple items to the end of the array
console.log(nums); // [1, 2, 3]
console.log();

// 🔹 2. .pop() – Remove item from the end
let last = nums.pop();
console.log(`last element is ${last}`); // last element is 3
console.log(nums); // [1, 2]
console.log();

// 🔹 3. .shift() – Remove item from the start
let first = nums.shift();
console.log(`removed first element is ${first}`); // removed first element is 1
console.log(nums); // [2]
console.log();

nums.push(3, 4, 5);
console.log(`latest nums: ${nums}`); // latest nums: 2,3,4,5
console.log();

// 🔹 4. .unshift() – Add item(s) to the start
// we can add single or multiple items to the start of the array
nums.unshift(0, 1);
console.log(`after unshift: ${nums}`); // after unshift: 0,1,2,3,4,5
console.log();

//🔹 5. .includes() – Check if a value exists in the array
console.log(nums.includes(2)); // true
console.log(nums.includes(50)); // false

console.log();

// 🔹 6. .indexOf() – Get the index of a value (or -1 if not found)
console.log(nums.indexOf(2)); // 2
console.log(nums.indexOf(50)); // -1

console.log();

// 🔹 7. .filter() – Return a new array based on a condition
let examscores = [45, 80, 90, 30];
let passed = examscores.filter(score => score >= 50);
console.log(passed); // [80, 90]


console.log();

// 🔹 8. .map() – Transform each item and return a new array

let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]

console.log();

// 🔹 9. .find() – Return the first element that matches a condition

numbers = [4, 9, 12, 15];
let found = numbers.find(num => num > 10);
console.log(found); // 12

console.log();

// 🔹 10. .join() – Combine array into a string
let names = ["Alice", "Bob", "Charlie"];
let result = names.join(", ");
console.log(result, " and typeof result : ", typeof result); // Alice, Bob, Charlie  and typeof result :  string

console.log();

// 🔹 11. .forEach() – Run a function for each element (no return value)


let items = ["🍎", "🍌", "🍇"];
items.forEach((fruit, index) => {
    console.log(`Item ${index}: ${fruit}`);
});

/**
Item 0: 🍎
Item 1: 🍌
Item 2: 🍇
 */

console.log();

let users2: string[] = ['sid', 'rahul'];
users2.forEach(u => console.log(u));      // Prints each user

/**
 * sid
 * rahul
 */

/**
 * ✅ Summary Table
 * | Method       | Purpose                   | Returns             |
| ------------ | ------------------------- | ------------------- |
| `push()`     | Add to end                | New length          |
| `pop()`      | Remove from end           | Removed item        |
| `shift()`    | Remove from start         | Removed item        |
| `unshift()`  | Add to start              | New length          |
| `includes()` | Check if value exists     | `true` / `false`    |
| `indexOf()`  | Index of value            | `number`            |
| `filter()`   | Filter items by condition | New array           |
| `map()`      | Transform items           | New array           |
| `find()`     | Find first matching item  | Item or `undefined` |
| `join()`     | Combine into a string     | `string`            |
| `forEach()`  | Loop through elements     | `void`              |

 */


