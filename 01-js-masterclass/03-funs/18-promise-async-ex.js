//🔸 Real-life Style Example: Pizza Order 🍕

function orderPizza() {
    return new Promise((resolve, reject) => {
        console.log("🍕 Pizza order diya gaya...");

        setTimeout(() => {
            let delivered = Math.random() > 0.3; // 70% chance pizza delivered

            if (delivered) {
                resolve("✅ Pizza aa gaya, enjoy!");
            } else {
                reject("❌ Pizza cancel ho gaya!");
            }
        }, 3000); // Wait 3 sec
    });
}

// Use the promise
orderPizza()
    .then((msg) => {
        console.log("Success:", msg);
    })
    .catch((err) => {
        console.log("Failure:", err);
    });

    /**
     * Explanation:You create a promise for the delivery, which resolves when the package is delivered 
     * and rejects if there’s an issue.
     * .then handles the success case, while .catch handles errors
     */