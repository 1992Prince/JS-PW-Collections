/**
 * var is a function-scoped variable - 
 * matlab agar variable ko function ke andar declare kiya hai, to wo sirf usi function ke andar 
 * accessible hota hai. 
 * Even we can access it inside blocks like if, for, while etc inside that function.
 * 
 * lekin we can't access that variable outside the function.
 * 
 * Global variables are accessible anywhere in the code, even inside functions and blocks.
 */
// ===== Global Scope =====
var globalVar = "I am a global var";

function testVarScope() {
  // ===== Function Scope =====
  var funcVar = "I am a function-scoped var";

  if (true) {
    var blockVar = "I am var declared inside a block but still function scoped";
    console.log(blockVar);  // Accessible here - inside block
    console.log(funcVar);   // Accessible here - inside function
    console.log(globalVar);  // Accessible here - global scope
  }

  console.log(blockVar);    // Accessible here too - because var is function scoped
  console.log(funcVar);     // Accessible anywhere inside the function
}

testVarScope();

console.log(globalVar);     // Accessible anywhere - global scope

// console.log(funcVar);    // Error! funcVar is not accessible outside the function
// console.log(blockVar);   // Error! blockVar is not accessible outside the function

/**
 * Output:
 * I am var declared inside a block but still function scoped
I am a function-scoped var
I am a global var
I am var declared inside a block but still function scoped
I am a function-scoped var
I am a global var
 */

/**
 * Explanation in simple words:
-> The var keyword declares a variable with function scope or global scope if not inside any function.
-> If declared inside a function, it is accessible anywhere inside that function, 
   even inside blocks like if or loops.
-> If declared outside any function, it becomes a global variable accessible everywhere.
-> var is NOT block scoped, so variables declared with var inside blocks are still 
   accessible throughout the whole function.
 */
