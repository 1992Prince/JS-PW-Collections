/**
 * Chapter 1 - Practice Set

1) Create a variable of type string and try to add a number to it.
2) Use typeof operator to find the datatype of the string in the last question.
3) Create a const object in JavaScript. Can you change it to hold a number later?
4) Try to add a new key to the const object in Problem 3. Were you able to do it?
5) Write a JS program to create a word-meaning dictionary of 5 words.

 */

console.log("Q1 - Create a variable of type string and try to add a number to it.");
console.log("Q2 - Use typeof operator to find the datatype of the string in the last question.");
console.log()

let str1;
str1 = "pikachu";
str1 = str1 + 10;
console.log("str1 - ", str1, " typeof str1 is - ", typeof str1); // str1 -  pikachu10  typeof str1 is -  string

console.log()
console.log("Q3 - Create a const object in JavaScript. Try to modify its values");
console.log()

const obj1 = {
    name: "pikachu",
    age: 10
}

console.log("obj1 age is - ", obj1["age"]);   // obj1 age is -  10
obj1["age"] = 120;
console.log("obj1 age is - ", obj1["age"]);   // obj1 age is -  120

console.log()

console.log("Q4 - Try to add a new key to the const object in Problem 3. Were you able to do it?")

obj1["skill"] = "java"

console.log(obj1); // { name: 'pikachu', age: 120, skill: 'java' }

console.log()

console.log("Q5 - in above object constant obj1 is holding object, try to make it to hold number instead of object")
// It will throw TypeError since obj1 is declared const and it is holdng object and we can't make it to hold number.
// but we can modify object properties wch we already did above

obj1 = 100;
console.log("obj1 - ", obj1); // TypeError: Assignment to constant variable.

console.log()

console.log("Q6 - Write a JS program to create a word-meaning dictionary of 5 words.")


