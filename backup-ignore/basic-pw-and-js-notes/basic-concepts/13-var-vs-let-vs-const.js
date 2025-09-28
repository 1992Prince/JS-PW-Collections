// ✅ var vs let vs const – Key Differences

/**
| Feature        | `var`                             | `let`                       | `const`                     |
| -------------- | --------------------------------- | --------------------------- | --------------------------- |
| Scope          | Function & Global Scope           | Block Scope                 | Block Scope                 |
| Re-declaration | ✅ Allowed                         | ❌ Not allowed in same scope | ❌ Not allowed in same scope |
| Re-assignment  | ✅ Allowed                         | ✅ Allowed                   | ❌ Not allowed               |
| Hoisting       | ✅ Hoisted (initially `undefined`) | ✅ Hoisted (but in TDZ\*)    | ✅ Hoisted (but in TDZ\*)    |
| Use in Loops   | ❌ Risky, scope leaks              | ✅ Safer                     | ✅ Safer                     |

// 🔹 var is function scoped → If declared inside a function, it's accessible only within that function
// 🔹 var is also global scoped → If declared outside any function, it's accessible everywhere (even inside functions and blocks)
// 🔹 var is not block scoped → If declared inside a block (if, for, while), it's still accessible outside the block

// 🔹 let is block scoped → Variable is accessible only within the block where it's defined (like inside {}, if, for, while)
// 🔹 let is not function scoped → Even if declared in function, it behaves block-wise - example is below, in example fun y and z are not accessible inside fun since they are defined inside block inside fun
// 🔹 let is not global scoped unless declared outside any block or function

function example() {
  if (true) {
    var x = 1;
    let y = 2;
    const z = 3;
  }

  console.log(x); // ✅ 1 — var escapes the if block!
  console.log(y); // ❌ Error — let is block scoped
  console.log(z); // ❌ Error — const is block scoped
}


// 🔹 const is also block scoped → Just like let, it's limited to the block `{}` where it's defined
// 🔹 const cannot be re-assigned → Once assigned a value, it can't be changed
// 🔹 const is not function scoped and not global unless declared at top-level
// 🔹 const must be initialized during declaration → It can't be left undefined

 */
// // ✅ Example to explain scope differences:
