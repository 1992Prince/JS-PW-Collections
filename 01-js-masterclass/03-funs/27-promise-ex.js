// ✅ 2. Same Task with Promises

function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = false;

      if (success) {
        resolve({ name: "Amit", age: 25 });
      } else {
        reject("Failed to fetch data");
      }
    }, 2000);
  });
}

fetchUserData()
  .then(data => {
    console.log("User:", data);
  })
  .catch(error => {
    console.log("Error:", error);
  });

  /**
🔍 Benefits:
    No nested callbacks
    .catch() handles error in one place
    Readability improves for chained tasks
   */