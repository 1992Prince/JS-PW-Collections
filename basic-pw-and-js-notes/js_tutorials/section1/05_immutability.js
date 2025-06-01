/**
 * how can u call primitive type as immutable when we are able to assign diff value to same variable name
 * 
 * Immutability of Primitive Data Types Explained
   When we say that primitive types are immutable, we mean that the value itself cannot be changed. 
   However, this does not mean that the variable holding the value cannot be reassigned.

    Immutability refers to the inability to change the value in memory.
    A variable can be reassigned to a new value, but the original value itself remains unchanged.
    Let me explain this further with an example:

    let x = 5;    // x points to a value of 5
    x = 10;       // x now points to a completely new value of 10

    In the above example:

   When you assign x = 5, a new value 5 is created in memory, and x is pointing to it.
   When you assign x = 10, a new value 10 is created in memory, and x is now pointing to 10.
   The value 5 remains unchanged, but the variable x has been reassigned to a new value 10.

   How Immutability Works
   Original Value Remains Unchanged:
   When you change the value of x, you are not modifying the existing value of 5.
   Instead, you are creating a new value in memory and assigning the variable x to that new value.

   No In-Place Modification:
   Unlike objects or arrays, where you can modify properties or elements "in-place," primitives do not allow in-place modification.

   Here’s another example for clarity:

   Object vs Primitive Comparison

 */

// Primitive Type Example
let a = 42;
let b = a;    // b is now a copy of the value of a (42)

b = 50;       // Change b to 50

console.log(a); // Output: 42 (a is not affected)

// Non-Primitive Type Example
let obj1 = { name: "John" };
let obj2 = obj1;  // obj2 is a reference to obj1

obj2.name = "Doe";  // Modify obj2

console.log(obj1.name); // Output: "Doe" (obj1 is affected because both reference the same object)


/**
 * 
 * For primitive types (a and b), changing b does not affect a since the value itself is copied, not referenced.
   For non-primitive types (obj1 and obj2), both variables reference the same memory location, so changes in one reflect in the other.

   Summary
   Primitives are immutable: Once a value like 5 is created, it cannot be changed. 
   If you "change" a variable, you are creating a new value and reassigning it.

   Variables are mutable: You can reassign variables to point to new values.
 */