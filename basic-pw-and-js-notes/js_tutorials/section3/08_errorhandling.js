// File: errorHandling.js

// Notes: Handling Errors in JavaScript with `try` and `catch`
/*
    1. What is Error Handling?
       - Error handling ensures your application can gracefully handle unexpected errors without crashing.
       - The `try...catch` block is used to catch and handle errors.

    2. Syntax of `try...catch`:
       try {
           // Code that might throw an error
       } catch (error) {
           // Code to handle the error
       }

    3. Key Points:
       - The code in the `try` block is executed first.
       - If an error occurs in the `try` block, it is "caught" by the `catch` block.
       - The `catch` block contains the error-handling logic.
       - The `error` object in `catch` provides details about the error.

    4. Optional `finally` Block:
       - The `finally` block is executed after `try` and `catch`, regardless of whether an error occurred.
       - Used for cleanup tasks (e.g., closing files, clearing timers).

    5. Real-Time Use Cases:
       - Handling invalid user input.
       - Dealing with API response errors.
       - Managing file reading/writing errors.
*/

// Example 1: Basic Try-Catch
try {
    const result = 10 / 0; // No error here; Infinity is returned
    console.log(result);
    throw new Error("Manually throwing an error"); // Manually throw an error
} catch (error) {
    console.log("An error occurred:", error.message); // Output: An error occurred: Manually throwing an error
}

// Example 2: Handling JSON Parsing Errors
const invalidJson = '{"name": "John", "age":}'; // Invalid JSON format
try {
    const user = JSON.parse(invalidJson); // Will throw an error
    console.log(user);
} catch (error) {
    console.log("JSON Parsing Error:", error.message); // Output: JSON Parsing Error: Unexpected token } in JSON
}

// Example 3: Using `finally` for Cleanup
try {
    console.log("Trying to read a file...");
    throw new Error("File not found"); // Simulate an error
} catch (error) {
    console.log("Caught an error:", error.message); // Output: Caught an error: File not found
} finally {
    console.log("Cleanup: Closing file reader."); // Always executes
}

// Example 4: Real-Time Use Case - API Call Simulation
function fetchData(url) {
    try {
        if (!url.startsWith("https://")) {
            throw new Error("Invalid URL: URL must start with 'https://'");
        }
        console.log("Fetching data from:", url);
        // Simulate successful API call
        return { data: "Sample Data" };
    } catch (error) {
        console.log("Error during API call:", error.message);
        return null; // Return fallback data
    } finally {
        console.log("API call process complete.");
    }
}

const data = fetchData("http://example.com"); // Invalid URL
console.log("Data:", data); // Output: Data: null

// Example 5: Error Object Details
try {
    throw new Error("Custom error example");
} catch (error) {
    console.log("Error Name:", error.name); // Output: Error Name: Error
    console.log("Error Message:", error.message); // Output: Error Message: Custom error example
}

/*
    Summary:
    - Use `try` for code that might throw errors.
    - Handle errors gracefully with `catch`.
    - Use `finally` for cleanup tasks, regardless of whether an error occurred.
    - Real-time use cases include handling API failures, invalid input, or resource cleanup.
*/
