// ✅ 3. Same Task with Async/Await
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

async function getUser() {
  try {
    const data = await fetchUserData();
    console.log("User:", data);
  } catch (error) {
    console.log("Error:", error);
  }
}

getUser();

/**
🔍 Benefits:
    Synchronous-like code → more readable
    Best for real-world projects with multiple async operations
 */
