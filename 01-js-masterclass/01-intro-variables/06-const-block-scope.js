function exampleConst() {
  const name = "John";
  if (true) {
    const name = "Jane"; // This creates a new block-scoped variable 'name'
    console.log(name); // Output: John (yeh galat hai, actually 'Jane' print hoga)
  }
  console.log(name); // Output: John
}

exampleConst();

/**
 * Output:
 * Jane
 * John
 */

/**
 * Reasoning kyun:
 * const name = "John"; function ke scope me hai.
 * if block ke andar const name = "Jane"; se ek naya block-scoped variable ban jata hai, 
 * jo outer name ko shadow karta hai.
 * Isliye, console.log(name); block ke andar block scoped "Jane" ko print karega.
 * Block ke bahar console.log(name); outer const name = "John"; ko print karega.
 */