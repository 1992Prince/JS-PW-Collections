/**
 * Generator Function
 *
 * A generator function allows you to pause and resume function execution. 
 * It’s denoted with an asterisk (*),
 * and within the function, the yield keyword is used to pause the execution and return values at different stages.
 *
 * Key Concepts:
 *   - A generator function returns an iterator object.
 *   - yield is used to pause execution and return intermediate results.
 *   - The function can resume from where it left off using .next().
 */

function* generatorFunction() {
    yield 'Hello';
    yield 'World';
    yield '!';
}

// Using the generator function
const iterator = generatorFunction();

console.log(iterator.next().value); // Outputs: Hello
console.log(iterator.next().value); // Outputs: World
console.log(iterator.next().value); // Outputs: !
console.log(iterator.next().value); // Outputs: undefined (done: true)

/**
 * Explanation:
 *   - Each call to iterator.next() resumes the function from where it left off and returns the yield value.
 *   - After all yield expressions have been exhausted, calling next() will return done: true.
 *
 * Real-world Use Case:
 *   - Generators are useful for handling asynchronous operations or iterating through sequences lazily,
 *     especially when you don't want to compute all values at once (e.g., handling large datasets).
 */

