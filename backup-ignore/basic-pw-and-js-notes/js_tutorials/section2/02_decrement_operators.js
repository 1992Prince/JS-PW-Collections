// Notes on Prefix Decrement (--a) vs Postfix Decrement (a--)

/**
 * 1. Prefix Decrement ( --a )
 * ----------------------------------------------------
 * - Decrement happens first, then the updated value is returned.
 * - Useful when you need the updated value immediately.
 * - Example:
 */

let a = 5;
let b = --a; // 'a' is decremented first, then assigned to 'b'

console.log(a); // Output: 4 (a is decremented by 1)
console.log(b); // Output: 4 (b gets the decremented value)

/**
 * - In this case:
 *   - 'a' starts as 5.
 *   - '--a' decrements 'a' to 4.
 *   - 'b' is assigned the value of 'a', which is now 4.
 */

/**
 * 2. Postfix Decrement ( a-- )
 * ----------------------------------------------------
 * - The original value is returned first, then the decrement happens.
 * - Useful when you need to use the original value before decrementing it.
 * - Example:
 */

let x = 5;
let y = x--; // 'x' is assigned to 'y', then 'x' is decremented

console.log(x); // Output: 4 (x is decremented by 1)
console.log(y); // Output: 5 (y gets the original value before decrement)

/**
 * - In this case:
 *   - 'x' starts as 5.
 *   - 'y' gets the value of 'x' first, which is 5.
 *   - After that, 'x' is decremented to 4.
 */

/**
 * 3. Summary of Differences
 * ----------------------------------------------------
 * - --a (Prefix Decrement):
 *   - Decrement first, then use.
 *   - 'a' is updated immediately.
 * 
 * - a-- (Postfix Decrement):
 *   - Use first, then decrement.
 *   - Original value is used, and then 'a' is updated.
 */

/**
 * 4. Examples in Different Scenarios
 * ----------------------------------------------------
 * - Using Prefix in an Expression:
 */

let num = 3;
console.log(--num); // Output: 2 (decrement happens first)

/**
 * - Using Postfix in an Expression:
 */

let count = 3;
console.log(count--); // Output: 3 (value is used first, then decrement happens)
console.log(count);   // Output: 2 (now the value is decremented)

/**
 * 5. Prefix vs Postfix in Loops
 * ----------------------------------------------------
 * - Both --i and i-- are often used to decrement counters in loops.
 * - In a 'for' loop, both have similar behavior in terms of decrementing the counter at each iteration.
 * - However, the key difference depends on when you need the value to be decremented.
 * 
 * Example:
 */

for (let i = 5; i > 0; --i) {
    console.log(i); // Outputs: 5, 4, 3, 2, 1
}

for (let i = 5; i > 0; i--) {
    console.log(i); // Outputs: 5, 4, 3, 2, 1
}

/**
 * - In both loops, 'i' is decremented after each iteration.
 * - Since the loop condition continues until 'i' is greater than 0, there's no visible difference between --i and i--.
 */

/**
 * 6. Real-World Example with Arrays
 * ----------------------------------------------------
 * - Using --a or a-- can be useful when iterating through arrays in reverse order.
 * 
 * Example with Prefix Decrement:
 */

let numbers = [10, 20, 30, 40, 50];
let index = numbers.length; // Start from the length (i.e., 5)

while (--index >= 0) {
    console.log(numbers[index]); // Outputs: 50, 40, 30, 20, 10
}

/**
 * - Here '--index' decrements the index before using it, which makes sure we start from the last element (index 4).
 * 
 * Example with Postfix Decrement:
 */

let idx = numbers.length; // Start from the length (i.e., 5)

while (idx-- > 0) {
    console.log(numbers[idx]); // Outputs: 50, 40, 30, 20, 10
}

/**
 * - In this case, 'idx--' first uses the value (e.g., 5) and then decrements it, making it ready for the next iteration.
 */

/**
 * 7. Key Points to Remember
 * ----------------------------------------------------
 * - Prefix Decrement (--a): Decrement happens immediately, then the new value is used.
 * - Postfix Decrement (a--): Original value is used first, then the decrement happens.
 * - Use '--a' when you need to decrement first, and 'a--' when you need the original value before decrementing.
 */
