// File: utilitiesAndConcepts.js

/*
    Notes and Examples: Spread Operator, Destructuring, and Utility Functions

    1. Spread Operator (`...`):
        - Expands elements of an array or object.
        - Use Cases:
            a) Cloning arrays or objects.
            b) Merging arrays or objects.
            c) Destructuring to extract values.

    2. Destructuring:
        - Unpacks values from arrays or objects into variables.
        - Simplifies data access and assignment.

    3. Utility Functions:
        - Fetching current date and time.
        - Truncating arrays.
        - Accessing dynamic properties.
        - Working with arrays and objects efficiently.
*/

// 1. Get Current Date and Time
console.log("------ 1. Get Current Date and Time ------");
/*
    Examples:
    - Fetch full date and time, only the date, or only the time.
*/
const now = new Date();
console.log("Full Date and Time:", now.toString()); // Full date and time
console.log("Date Only:", now.toLocaleDateString()); // Only the date
console.log("Time Only:", now.toLocaleTimeString()); // Only the time

console.log();

// 2. Truncate an Array
console.log("------ 2. Truncate an Array ------");
/*
    Explanation:
    - By setting the array's length to a smaller value, elements beyond the new length are removed.
    - This modifies the original array in place.
*/
let arrToTruncate = [1, 2, 3, 4, 5];
console.log("Original Array:", arrToTruncate); // Output: [1, 2, 3, 4, 5]
arrToTruncate.length = 3; // Reduce length to 3
console.log("Truncated Array:", arrToTruncate); // Output: [1, 2, 3]

console.log();

// 3. Spread Operator
console.log("------ 3. Spread Operator ------");
/*
    Explanation:
    - Used to expand arrays or objects.
    - Useful for cloning and merging.
*/
const originalArray = [10, 20, 30];
const clonedArray = [...originalArray]; // Clone the array
console.log("Original Array:", originalArray); // Output: [10, 20, 30]
console.log("Cloned Array:", clonedArray); // Output: [10, 20, 30]

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2]; // Merge arrays
console.log("Merged Array:", mergedArray); // Output: [1, 2, 3, 4, 5, 6]

console.log();

// 4. Destructuring
console.log("------ 4. Destructuring ------");
/*
    Explanation:
    - Extract values from arrays or objects into variables.
*/
const numbers = [100, 200, 300];
const [first, second, third] = numbers; // Extract first, second, third elements
console.log("First Number:", first); // Output: 100
console.log("Second Number:", second); // Output: 200
console.log("Third Number:", third); // Output: 300

const person = { name: "John", age: 25, city: "Paris" };
const { name, age, city } = person; // Extract object properties
console.log("Name:", name); // Output: John
console.log("Age:", age); // Output: 25
console.log("City:", city); // Output: Paris

// Use destructuring with the spread operator
const [firstNum, ...rest] = numbers;
console.log("First Number (from destructuring):", firstNum); // Output: 100
console.log("Rest of the Numbers:", rest); // Output: [200, 300]

console.log();

// 5. Get Object Property Dynamically
console.log("------ 5. Get Object Property Dynamically ------");
/*
    Explanation:
    - Access object properties dynamically using square bracket notation.
*/
const dynamicPerson = { name: "Alice", age: 30, country: "USA" };
const dynamicProperty = "country";
console.log(`Value of '${dynamicProperty}':`, dynamicPerson[dynamicProperty]); // Output: USA

console.log();

// 6. Clone Objects Using Spread Operator
console.log("------ 6. Clone Objects Using Spread Operator ------");
/*
    Explanation:
    - Clone an object using the spread operator.
*/
const originalObject = { key1: "value1", key2: "value2" };
const clonedObject = { ...originalObject };
console.log("Original Object:", originalObject); // Output: { key1: 'value1', key2: 'value2' }
console.log("Cloned Object:", clonedObject); // Output: { key1: 'value1', key2: 'value2' }

console.log();

// 7. Convert Object to Arrays
console.log("------ 7. Convert Object to Arrays ------");
/*
    Explanation:
    - Convert an object into:
        a) Keys array
        b) Values array
        c) Key-value pairs array
*/
const obj = { name: "Bob", age: 30, profession: "Developer" };
console.log("Keys Array:", Object.keys(obj)); // Output: [ 'name', 'age', 'profession' ]
console.log("Values Array:", Object.values(obj)); // Output: [ 'Bob', 30, 'Developer' ]
console.log("Key-Value Pairs Array:", Object.entries(obj)); // Output: [ ['name', 'Bob'], ['age', 30], ['profession', 'Developer'] ]

console.log();

// 8. Get Last Item in an Array
console.log("------ 8. Get Last Item in an Array ------");
/*
    Explanation:
    - Access the last item in an array using its length or destructuring.
*/
const someNumbers = [10, 20, 30, 40];
const lastItem = someNumbers[someNumbers.length - 1];
console.log("Last Item (using length):", lastItem); // Output: 40

// Correct destructuring method to get last item:
const lastIndex = someNumbers.length - 1; // Get the last index
const lastElement = someNumbers[lastIndex];
console.log("Last Item (using index):", lastElement); // Output: 40
