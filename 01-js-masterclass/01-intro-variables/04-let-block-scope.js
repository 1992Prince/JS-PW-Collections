let x = 10;
function exampleLet() {
  let name = 'John';
  if (true) {
    let name = 'Jane'; // different variable, block-scoped
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

/**
 * Since let is block-scoped, we can have a variable with the same name in different blocks.
 * And block will give preference to the variable defined in its scope.
 *
 * But suppose in above example name variable is not defined inside if block, then it will print outer name value.
 * This has been shown in next example.
 */
