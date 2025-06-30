/**
 * 📘 Async-Await in JavaScript – Notes for Understanding
 *
 * 1️⃣ async keyword:
 *   - Jab hum kisi function ke pehle async likhte hain, wo function hamesha Promise return karta hai.
 *
 * 2️⃣ await keyword:
 *   - await ko hum sirf async function ke andar hi use kar sakte hain.
 *   - Jab kisi Promise ke aage await lagta hai, toh JavaScript wait karti hai us Promise ke resolve/reject hone ka.
 *   - Jab tak wo Promise settle nahi hota, next line execute nahi hoti.
 */

// Example: Simple async/await with delay
function delay() {
  return new Promise(resolve => {
    setTimeout(() => resolve("done after 2 sec"), 2000);
  });
}

async function doTask() {
  const result = await delay();
  console.log(result); // prints after 2 sec
}

doTask();

/**
 * 3️⃣ Error handling (try-catch is must for rejected Promises)
 *
 * Agar Promise reject ho jaye aur tumne try...catch nahi lagaya hai,
 * toh error throw ho jaata hai, aur function execution wahin ruk jaata hai.
 *
 * Isliye await use karte waqt, try...catch lagana best practice hai.
 */

// Example: Error handling with async/await
function errorPromise() {
  return new Promise((_, reject) => {
    setTimeout(() => reject("Something went wrong"), 1000);
  });
}

async function fetchData() {
  try {
    const data = await errorPromise();
    console.log(data); // ye line kabhi execute nahi hogi
  } catch (err) {
    console.log("Caught Error:", err); // This will handle the rejection
  }
}

fetchData();

/**
 * 🔹 Summary – Ek Line Mein:
 *   - async ensures your function returns a Promise.
 *   - await pauses the execution until that Promise is resolved or rejected.
 *   - If rejected and not caught using try...catch, execution stops with error.
 */