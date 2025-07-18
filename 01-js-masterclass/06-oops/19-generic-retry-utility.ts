/**
🔁 What is a Generic Retry Utility?

A retry utility is a function that retries an operation (usually asynchronous) if it fails — for example due to:
    - Network errors 🌐
    - API rate limits 🚫
    - Intermittent failures ⚡

When we make this utility generic (<T>), it becomes type-safe and reusable with any return type:
    - string, boolean, number
    - API response types
    - Custom objects, etc.

✅ Benefits of Making It Generic
          async function retry<T>(operation: () => Promise<T>): Promise<T>

    - Works with any async function
    - Maintains strong typing
    - Prevents type casting or any usage
    - Reusable across your entire codebase

 */

// 🛠️ Simple Generic Retry Utility in TypeScript

async function retry<T>(
    operation: () => Promise<T>,  // the async function to retry
    retries: number = 3,          // how many times to retry
    delayMs: number = 1000        // delay between retries (in ms)
): Promise<T> {
    let lastError: any;

    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            return await operation(); // ✅ success
        } catch (error) {
            lastError = error;
            console.warn(`Attempt ${attempt} failed. Retrying...`);

            if (attempt < retries) {
                await new Promise(res => setTimeout(res, delayMs)); // wait before retry
            }
        }
    }

    throw lastError; // ❌ All retries failed
}

// 🎯 Example 1: Retry fetching user
async function fetchUser(): Promise<{ name: string; id: number }> {
    if (Math.random() < 0.7) {
        throw new Error("Random failure"); // simulate flaky behavior
    }
    return { name: "Sidharth", id: 101 };
}

retry(fetchUser, 5, 500)
    .then(user => console.log("✅ Got user:", user))
    .catch(err => console.error("❌ Failed:", err.message));

// Output:
// Attempt 1 failed. Retrying...
// ✅ Got user: { name: 'Sidharth', id: 101 }

/**
🔍 What Happens Here?
The retry function takes:
    an async operation (like fetchUser()),
    a retry count (e.g., 5),
    and a delay between retries.

🔄 Step-by-step Explanation:

1) The retry utility is called with:
    The fetchUser async function.
    A retry limit of 5 attempts.
    A 500ms delay between each attempt.

2) fetchUser() is a flaky function — it randomly fails 70% of the time by throwing an error.

3) On each attempt:
    If it throws an error, the retry function catches it.
    Logs a warning like Attempt 1 failed. Retrying...
    Waits 500ms, then tries again.

4) If fetchUser() succeeds on any attempt (say, attempt 3), the result { name: "Sidharth", id: 101 } 
   is immediately returned — ✅ success!

5) If it fails all 5 attempts, the last error is thrown and caught in the .catch() block — ❌ failure.

✅ What This Guarantees:
    - Flaky functions still succeed most of the time due to retrying.
    - No need for try/catch in your business logic.
    - The code stays clean, type-safe, and robust.
 */