// Task1 : Map<string, number> → Print Even Values

let mathScores = new Map<string, number>();
mathScores.set("A", 1);
mathScores.set("B", 2);
mathScores.set("C", 3);
mathScores.set("D", 4);
mathScores.set("E", 5);
mathScores.set("F", 6);
mathScores.set("G", 7);

for (let [key, value] of mathScores.entries()) {
    if (value % 2 === 0) {
        console.log(`${key} --> ${value}`); // Only even values
    }
}

/**
 * Output:
 * B --> 2
 * D --> 4
 * F --> 6
 */

console.log();

// Task2 : Map<number,string> → Print Employee name
let employeeMap = new Map<number, string>();
employeeMap.set(101, "Alice");
employeeMap.set(102, "Bob");
employeeMap.set(103, "Charlie");

// find employee with ID 102
let employeeIdToFind = 102;
if (employeeMap.has(employeeIdToFind)) {
    console.log(`Name of Employee with Employee ID ${employeeIdToFind} is ${employeeMap.get(employeeIdToFind)}`);
}

// Name of Employee with Employee ID 102 is Bob

console.log();

// Task3 : Count frequency of elements 
let itemsFruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

let fruitCountMap = new Map<string, number>();

for (let fruit of itemsFruits) {
    if (fruitCountMap.has(fruit)) {
        fruitCountMap.set(fruit, fruitCountMap.get(fruit)! + 1);
    } else {
        fruitCountMap.set(fruit, 1);
    }
}

// Print frequency of each fruit
for (let [fruit, count] of fruitCountMap.entries()) {
    console.log(`${fruit}: ${count}`);
}

/**
 * Output:
 * apple: 3
 * banana: 2
 * orange: 1
 */

/**
 * ✅ What does ! mean in TypeScript?
 * This is the non-null assertion operator (!).
 * It tells TypeScript:
 *                      “Hey compiler, I’m sure this value is not null or undefined, so stop complaining.”
 * 
 * fruitCountMap.get(fruit)! + 1
 * Means - 
 * "get the value for key 'fruit'" → this could return number | undefined
 * But since you're already checking .has(fruit) above, you know the value exists
 * So you forcefully tell TypeScript to treat the value as a number by using !
 * 
 * ❌ What happens if you remove the !?
 * 
 * fruitCountMap.set(fruit, fruitCountMap.get(fruit) + 1);
//                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// Error: Object is possibly 'undefined'.

Because .get() returns T | undefined, TypeScript cannot guarantee the result is a number — even though your .has() check does.
 */