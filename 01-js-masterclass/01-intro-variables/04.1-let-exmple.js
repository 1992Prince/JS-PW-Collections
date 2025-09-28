let x = 10;
function exampleLet() {
  let name = 'John';
  if (true) {
    console.log(name); // Output: John
    console.log(x); // Output: 10 (x is accessible here)
  }
  console.log(name); // Output: John
}

exampleLet();

/**
 * Output
 * John
 * 10
 * John
 */

/**
 * Above we are defining a variable `name` using `let` inside the function `exampleLet`.
 * and printing name inside the function and inside the if block also.
 */
