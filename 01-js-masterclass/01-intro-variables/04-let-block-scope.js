let x = 10;
function exampleLet() {
  let name = "John";
  if (true) {
    let name = "Jane"; // different variable, block-scoped
    console.log(name); // Output: Jane
    console.log(x); // Output: 10 (x is accessible here)
  }
  console.log(name); // Output: John
}

exampleLet();

/**
 * Output:
 * Jane
 * 10
 * John
 */

