/**
reduce() – Combine everything into one
reduce() array ke saare elements ko ek hi final value me accumulate karne ke liye use hota hai.

What it does:
 Takes all items in the array and combines them into one value using your function.

 Bhai Prince samajh, neeche num var represents each item in the array.
 acc is like var that keeps sum of all items in the array.
 and initial value is 0, so it starts from 0.

 it is like

 int acc = 0;
 int num = 5;
 while(num > 0) {
    acc += num;
    num--;
 }

 */

let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(`sum is ${sum} and typeof sum is ${typeof sum}`); // sum is 10 and typeof sum is number

console.log();

//✅ Multiply all numbers

const nums = [2, 3, 4];
let mulVal = nums.reduce((acc, num) => acc * num, 1);
console.log(mulVal); // 24

console.log();

//✅ Find max value

const nums2 = [5, 12, 7];
let maxVal = nums2.reduce((acc, num) => (acc > num ? acc : num), nums[0]);
console.log(maxVal); // 12

console.log();

// 🤖 5. Real Automation / Scripting Use Cases

// 🔧 Use Case 1: Total API response time

const apiTimes = [120, 80, 150, 100];

const totalTime = apiTimes.reduce((sum, time) => sum + time, 0);
console.log(`Total time: ${totalTime}ms`); // Total time: 450ms
// 🧠 "In performance testing, I used reduce() to calculate total API time."

console.log();

// Use Case 2: Count passed/failed test cases

const results = [{ status: 'pass' }, { status: 'fail' }, { status: 'pass' }];

const summary = results.reduce((acc, res) => {
  acc[res.status] = (acc[res.status] || 0) + 1;
  return acc;
}, {});
console.log(summary); // { pass: 2, fail: 1 }
// 🧠 "Reduced a test result array into a summary report."
