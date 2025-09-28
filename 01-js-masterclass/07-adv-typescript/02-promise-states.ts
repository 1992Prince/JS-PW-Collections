// Using async/await with try/catch

function simulateAsync(state: "success" | "fail"): Promise<string> {
    return new Promise((resolve, reject) => {
        console.log("▶️ Promise is in PENDING state...");

        setTimeout(() => {
            if (state === "success") {
                resolve("✅ Promise is FULFILLED: Data loaded successfully!");
            } else {
                reject("❌ Promise is REJECTED: Something went wrong.");
            }
        }, 2000); // Simulating delay
    });
}

async function handleAsync(state: "success" | "fail") {
    try {
        const result = await simulateAsync(state);
        console.log(result); // Runs when fulfilled
    } catch (error) {
        console.error(error); // Runs when rejected
    }
}

// 👇 Try both success and failure cases
//handleAsync("success"); // Will resolve after 2 seconds
handleAsync("fail");    // Will reject after 2 seconds


/**
What Happens

    simulateAsync() simulates a delayed operation like fetching data.

    When you call await simulateAsync("success"), the promise resolves after 2 seconds.

    When you call await simulateAsync("fail"), the promise rejects, and the error is caught in catch.

Concept                         Code Example
----------                      ------------------
Await pauses                    const result = await promise;
Fulfilled                       Code continues in try block
Rejected                        Error handled in catch
Cleaner than .then/.catch       Makes async logic look synchronous

When Promise is created, it starts in the PENDING state. 
After the operation completes, it transitions to either FULFILLED or REJECTED.

when the Promise is created but hasn't resolved or rejected yet, its in PENDING state.
When it resolves successfully, it transitions to FULFILLED state, and when it fails, it transitions to REJECTED state.



 */
/**
The 3 States of a Promise
    1) Pending — The initial state; the operation is still in progress.
    2) Fulfilled — The operation completed successfully.
    3) Rejected — The operation failed.

 */