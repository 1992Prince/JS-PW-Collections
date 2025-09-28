// 1. 🔧 Promise-returning function:

function fetchData(): Promise<string> {
    return new Promise((resolve, reject) => {
        const success = false;

        setTimeout(() => {
            if (success) {
                resolve("✅ Data received!");
            } else {
                reject("❌ Failed to fetch data.");
            }
        }, 1000);
    });
}


// 2. 📦 Using .then() and .catch():

fetchData()
    .then((data) => {
        console.log("Using then:", data);
    })
    .catch((error) => {
        console.error("Using catch:", error);
    });
