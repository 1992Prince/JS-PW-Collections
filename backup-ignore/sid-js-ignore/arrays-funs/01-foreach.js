/**
 * forEach(): Executes a provided function once for each array element
 *            forEach() does not return anything (i.e., it returns undefined).
 */
let fruits = ['apple', 'banana', 'cherry'];
fruits.forEach((fruit) => console.log(fruit));

/**
 * Output
 * apple
 * banana
 * cherry
 */

console.log();

/**
 * Using forEach with index
 */

let nums = [11, 12, 13];
nums.forEach((num, index) => {
  console.log(`Index: ${index}, Value: ${num}`);
});
/**
 * Output
 * Index: 0, Value: 11
 * Index: 1, Value: 12
 * Index: 2, Value: 13
 */

console.log();

/**
 * UseCase in Automation Scenarios
 */

// ✅ Use Case 1: Logging each API endpoint being tested

const endpoints = ['/login', '/signup', '/logout'];

endpoints.forEach((endpoint) =>
  console.log(`Testing endpoint ${endpoint}....`)
);
/**
 * Output
 * Testing endpoint /login....
 * Testing endpoint /signup....
 * Testing endpoint /logout....
 */
