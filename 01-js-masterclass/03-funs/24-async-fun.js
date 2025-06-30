/**
 * Async Function (ES8)
 *
 * An async function is a function that returns a Promise. 
 * Using the async keyword allows you to write asynchronous code in a cleaner, more readable way using await. 
 * It waits for the Promise to resolve before proceeding.
 *
 * Key Concepts:
 *   - An async function always returns a Promise.
 *   - await pauses the execution of the function until the Promise resolves.
 *   - It simplifies working with asynchronous code and eliminates the need for complex .then() chains.
 *   - Error handling can be done using try/catch blocks, making it easier to manage errors in asynchronous operations.
 *   - if promise is rejected, it will throw an error that can be caught in the catch block.
 *   - if you don't keep catch block, it will throw an error and stop the execution of the program.
 *
 * Example:
 */

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Calling the async function
fetchData();

/**
 * Explanation:
 *   - The fetchData function uses the fetch API to get data from a URL.
 *   - The await keyword pauses the function until the response is received, then the data is extracted using await response.json().
 *   - If there's an error (e.g., network issue), it's caught and handled in the catch block.
 *
 * Real-world Use Case:
 *   - Async functions are used in scenarios such as fetching data from a server,
 *     performing long-running tasks like reading files or querying databases.
 */
