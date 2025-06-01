// array iteration


// 1. Using for Loop
const fruits = ["apple", "banana", "orange", "grape", "mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// Output:
// apple
// banana
// orange
// grape
// mango

console.log()
console.log()


// 2. Using for...of Loop:

for (const fruit of fruits) {
    console.log(fruit);
  }
  // Output:
  // apple
  // banana
  // orange
  // grape
  // mango

  console.log()
  console.log()

  // 3. Using forEach() Method:
  fruits.forEach((fruit, index) => {
    console.log(`Fruit ${index + 1}: ${fruit}`);
  });
  // Output:
  // Fruit 1: apple
  // Fruit 2: banana
  // Fruit 3: orange
  // Fruit 4: grape
  // Fruit 5: mango

  console.log()
  console.log()
  

  // Get sum of numbers arrray
  const numbers = [10, 20, 30, 40, 50];

  let sum = 0;
  for (let num of numbers){
    sum += num;
  }

  console.log("Sum:", sum); // Output: Sum: 150

  console.log()
  
