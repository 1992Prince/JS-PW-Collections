/*
 filter() – Keep only what you need
 What it does:
 Checks each item in the array.
 Keeps only the ones that pass a test (returns true)

 It returns a new array with only the elements that match a condition (i.e., where the callback returns true).
*/

let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

console.log();

// Get nums >= 3

let nums2 = numbers.filter((num) => num >= 3);
console.log('nums2 - ', nums2);
// nums2 - [3, 4, 5]

console.log();

// filter Names starting with 'A'
const names = ['Amit', 'John', 'Ankit', 'Sam'];
const aNames = names.filter((name) => name.startsWith('A'));
console.log(aNames); // ["Amit", "Ankit"]

console.log();

// filter Strings longer than 4 characters

const fruits = ['apple', 'kiwi', 'banana'];
const longFruits = fruits.filter((fruit) => fruit.length > 4);
console.log(longFruits); // ["apple", "banana"]

console.log();

// Filter users older than 18, below users is an array of user objects

const users = [
  { name: 'Amit', age: 25 },
  { name: 'Ravi', age: 17 },
  { name: 'Neha', age: 19 },
];

let men = users.filter((user) => user.age > 18);
console.log(men); // [ { name: 'Amit', age: 25 }, { name: 'Neha', age: 19 } ]

console.log();

// 🤖 4. filter() in Automation / Real-world Scripting

// ✅ Use Case 1: Get only failed test cases

const testResults = [
  { id: 1, status: 'passed' },
  { id: 2, status: 'failed' },
  { id: 3, status: 'failed' },
];

const failedTests = testResults.filter((test) => test.status === 'failed');
console.log(failedTests);
// [{ id: 2, status: "failed" }, { id: 3, status: "failed" }]

console.log();

// ✅ Use Case 2: Filter active users from API response

const users2 = [
  { name: 'Amit', active: true },
  { name: 'Ravi', active: false },
];

const activeUsers = users2.filter((u) => u.active);
console.log(activeUsers);
// [{ name: "Amit", active: true }]

console.log();

// ✅ Use Case 3: Clean null/undefined values from data array

const responses = [null, 'data1', undefined, 'data2'];

const cleaned = responses.filter(Boolean);
console.log(cleaned); // ["data1", "data2"]

// filter(Boolean) removes falsy values like null, undefined, false, 0, ""

console.log();

// ✅ Use Case 4: Filter log entries with “error”

const logs = [
  'INFO: server started',
  'ERROR: DB connection failed',
  'INFO: health check passed',
  'ERROR: Disk space low',
];

const errors = logs.filter((log) => log.includes('ERROR'));
console.log(errors);
// ["ERROR: DB connection failed", "ERROR: Disk space low"]
