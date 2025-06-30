//  Example: Promise with setTimeout() (Simulating async task)
// Here we are creating a promise that simulates an asynchronous task using `setTimeout()`.

// creating a promise for an async task
let delayedPromise = new Promise((resolve, reject) => {
    console.log("⏳ Kaam shuru...");

    setTimeout(() => {
        let kaamHoGaya = true;

        if (kaamHoGaya) {
            resolve("✅ Async kaam complete ho gaya (after 2 sec)");
        } else {
            reject("❌ Async kaam fail ho gaya");
        }
    }, 2000); // 2 second delay
});

// Handling the promise
delayedPromise
    .then((result) => {
        console.log("Success:", result);
    })
    .catch((error) => {
        console.log("Failure:", error);
    });

    /**
     * 🧠 Breakdown:
     * setTimeout() simulates an async task (e.g., like server response delay).
     * resolve() runs if kaam safal.
     * reject() runs agar kaam fail ho gaya.
     * .then() and .catch() handle response.
     */