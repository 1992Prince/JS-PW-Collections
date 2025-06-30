function exampleLet() {
  let name = "John";

  if (true) {
    console.log(name);  // Error: Cannot access 'name' before initialization
    let name = "Jane";  // block-scoped variable shadows outer 'name'
    console.log(name);  // Output: Jane
  }

  console.log(name);    // Output: John
}

exampleLet();

/**
 * Reasoning:
 * - Inside the if block, a new 'let name' variable is declared, which is block scoped.
 * - This new 'name' variable is hoisted but not initialized immediately, causing a Temporal Dead Zone (TDZ).
 * - When console.log(name) is called before the declaration line, it tries to access 'name' in TDZ, causing a ReferenceError.
 * - After the declaration line, 'name' refers to the new block-scoped variable.
 * - Outside the if block, 'name' refers to the outer function-scoped variable.
 * 
 * Bhai Prince, if block me name new variable declare kiya hai jo block scoped hai,toh tu ab kahi bhi
 * uska access karega inside block even at top at first line, toh woh preference inside block k variable 
 * ko dega and na ki outer function k variable ko.
 * also yeh error isiliye dega kyu we are accessing 'name' before initialization = hoising concept[Temporal Dead Zone (TDZ)].
 */
