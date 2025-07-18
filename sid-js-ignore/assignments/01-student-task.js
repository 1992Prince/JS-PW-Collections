// link - https://docs.google.com/document/d/1Uf3DZ6y4Bh0X8csZCmWYZtmCVWHN2sb1P3TMoIKW_pM/edit?tab=t.0#heading=h.4lhxiy1ifh69

/**
Scenario:
You are given an array of test results from an automated test suite. 
Each item in the array is either 'pass', 'fail', or 'skipped'.

let testResults = ['pass', 'fail', 'pass', 'pass', 'fail', 'skipped', 'pass'];

Task:
Using reduce(), write a JavaScript function to count how many times each status appears, 
and return the result as an object like this:
{
  pass: 4,
  fail: 2,
  skipped: 1
}

Expected Function Output:

{
  pass: 4,
  fail: 2,
  skipped: 1
}


Note - (acc[result] || 0)

🧠 It means:

👉 "Agar acc[result]  ki value already exist karti hai, toh use le lo.
👉 Agar nahi karti (i.e., undefined hai), toh 0 le lo."


 */

let testResults = ['pass', 'fail', 'pass', 'pass', 'fail', 'skipped', 'pass'];

const summary = testResults.reduce((acc, result) => {
  acc[result] = (acc[result] || 0) + 1;
  return acc;
}, {});

console.log(summary); // { pass: 4, fail: 2, skipped: 1 }

/**
🪜 Step-by-Step Iteration:
| Iteration | `result`    | `acc` (object) after iteration     |
| --------- | ----------- | ---------------------------------- |
| 1         | `'pass'`    | `{ pass: 1 }`                      |
| 2         | `'fail'`    | `{ pass: 1, fail: 1 }`             |
| 3         | `'pass'`    | `{ pass: 2, fail: 1 }`             |
| 4         | `'pass'`    | `{ pass: 3, fail: 1 }`             |
| 5         | `'fail'`    | `{ pass: 3, fail: 2 }`             |
| 6         | `'skipped'` | `{ pass: 3, fail: 2, skipped: 1 }` |
| 7         | `'pass'`    | `{ pass: 4, fail: 2, skipped: 1 }` |

acc[result] = (acc[result] || 0) + 1;

Means:

If result is not in acc → use 0 → 0 + 1 = 1
If already there → increment by 1
 */
