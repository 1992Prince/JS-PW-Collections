/**
 * Callback function kya hota hai?
 * Definition: A callback is a function passed into another function as an argument and is
 * executed after the first function completes its operation.
 *
 * Callback function matlab: Aisi function jo hum kisi function ko argument mein dete hain,
 * taaki wo dusra function apne kaam ke baad hume call kar sake.
 *
 * Example:
 */

// showMessage is a callback function
function showMessage(message) {
  console.log("Message: " + message);
}

// process function takes a callback and calls it with a message
function process(callback) {
  const msg = "Callback ka example";
  callback(msg);
}

// Call process with showMessage as callback
process(showMessage); // Output: Message: Callback ka example

/**
 * Yaha:
 * showMessage ek callback function hai jo process ko pass hua.
 * process function ke andar jab callback(msg) likha, to wo showMessage(msg) call hua.
 *
 * Summary: Jo function as argument pass hota hai, usko callback function kehte hain.
 */

console.log();

// Another example: Simulating data fetch with setTimeout
function fetchData(callback) {
  console.log("Data fetch kar rahe hain...");
  // Simulate slow operation (e.g., server fetch) with 2 second delay
  setTimeout(function () {
    const data = { name: "Aman", age: 25 };
    callback(data); // Jab data ready ho jaye, callback ko call karo
  }, 2000);
}

// Callback function to handle fetched data
function displayData(data) {
  console.log("Data mil gaya:", data);
}

// Call fetchData with displayData as callback
fetchData(displayData);

/**
 * Output:
 * Data fetch kar rahe hain...
 * Data mil gaya: { name: 'Aman', age: 25 }
 */


