// 1. 🔧 Promise-returning function:

function fetchData(): Promise<string> {
    return new Promise((resolve, reject) => {
        const success = true;

        setTimeout(() => {
            if (success) {
                resolve("✅ Data received!");
            } else {
                reject("❌ Failed to fetch data.");
            }
        }, 1000);
    });
}

// 2. ⚡ Using async/await instead:

async function getData() {
    try {
        const result = await fetchData(); // waits for promise to resolve
        console.log("Using async/await:", result);
    } catch (error) {
        console.error("Error caught with try/catch:", error);
    }
}

getData();
