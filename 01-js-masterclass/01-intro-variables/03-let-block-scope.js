function exampleLet() {
  let name = "John";
  if (true) {
    // We are accessing 'name' inside the block
    // Since no new 'name' variable is declared here,
    // it refers to the outer 'name' declared in the function.
    console.log(name); // Output: John
  }
  console.log(name); // Output: John
}

exampleLet();

/**
 * Output:
 * John
 * John
 * 
 * * Note:
 * If we try to declare another variable with the same name 'name' inside the block using let,
 * then the block will give preference to the new 'name' variable,
 * shadowing the outer one inside that block.
 *
 * For example:
 * if (true) {
 *   let name = "Jane";  // This creates a new block-scoped variable 'name'
 *   console.log(name);  // Output: Jane (block-scoped variable)
 * }
 * console.log(name); // Output: John (outer function-scoped variable)
 */
 

