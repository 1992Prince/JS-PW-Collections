// Use reduce() to count the total number of passed tests in a report.

let results = ['pass', 'fail', 'pass'];

let passCount = results.reduce(
  (count, result) => (result === 'pass' ? count + 1 : count),
  0
);

console.log(`Total passed tests: ${passCount}`); // Output: Total passed tests: 2

console.log();

/**
 * 🤔 Problem:
 * Aapke paas test cases hain in this format: i.e. an array of objects.
 * 
 * const results = [
  { status: "pass" },
  { status: "fail" },
  { status: "pass" },
];

You want a final output like this: i.e. an object with counts of pass and fail.
{ pass: 2, fail: 1 }

So at the end, we need to get results into object , so our accumulator will be an object.
And initially it will be an empty object.

Note - (acc[res.status] || 0)

🧠 It means:

👉 "Agar acc[res.status] ki value already exist karti hai, toh use le lo.
👉 Agar nahi karti (i.e., undefined hai), toh 0 le lo."

 */

const teamResults = [
  { status: 'pass' },
  { status: 'fail' },
  { status: 'pass' },
];

const summary = teamResults.reduce((acc, res) => {
  acc[res.status] = (acc[res.status] || 0) + 1;
  return acc;
}, {});

console.log('Summary - ', summary); // Summary -  { pass: 2, fail: 1 }
console.log();

/**
🤔 Problem:
You have this:
const users = [
  { name: "Amit" },
  { name: "Ravi" },
  { name: "Neha" }
];

You want this output: "Amit, Ravi, Neha"

Here our input is an array of objects, and we want to convert it into a string of names.
So our final value will be a string, and we will use reduce to concatenate the names.
And our String initially will be an empty string. [Accumulator]


(acc ? ', ' : '') - Ye ek ternary operator hai:

🔍 So (acc ? ', ' : '') ka matlab:
Agar acc truthy hai → toh ', ' return karo
Nahin toh '' (empty string) return karo
 */

const users = [{ name: 'Amit' }, { name: 'Ravi' }, { name: 'Neha' }];

const names = users.reduce((acc, user) => {
  return acc + (acc ? ', ' : '') + user.name;
}, '');

console.log(names); // Output: Amit, Ravi, Neha

/**
 * Reduce full syntax:
 * 
array.reduce((accumulator, currentValue, index, array) => {
  // logic here
  return updatedAccumulator;
}, initialValue);

| Parameter       | What it means                                    |
| --------------- | ------------------------------------------------ |
| `accumulator`   | Result value that gets built up step by step     |
| `currentValue`  | Current element from array                       |
| `index` *(opt)* | Index of current element                         |
| `array` *(opt)* | Reference to the original array                  |
| `initialValue`  | Starting value for accumulator (very important!) |

⚠️ Important Note:

initialValue must dena chahiye, warna pehla element ko acc bana lega (especially if array is empty — error aayega)
Return karna mandatory hai, warna acc update nahi hota


 */
