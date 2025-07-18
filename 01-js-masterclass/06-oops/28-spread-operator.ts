// 🔹 2. Spread Operator (...)
// The spread operator is used to expand arrays or objects. It's useful for copying or merging data structures.


// ✅ Spread in Arrays

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // clone and add

console.log(arr2); // [1, 2, 3, 4, 5]

//  ✅  Useful for merging arrays:

const a3 = [1, 2];
const a4 = [3, 4];
const mergedArray = [...a3, ...a4]; // merge arrays
console.log(mergedArray); // [1, 2, 3, 4]


console.log();

// ✅ Spread in Objects
const user2 = { name: 'Alice', age: 30 };
const updatedUser = { ...user2, age: 31, city: 'Seattle' }; // here age is updated and city is added

console.log(updatedUser);// { name: 'Alice', age: 31, city: 'Seattle' }
