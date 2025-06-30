// 🔶 What is Promise Chaining?
// Promise chaining ka matlab hai ek ke baad ek asynchronous kaam ko sequence me run karna using .then().
/**
 * Jaise:
 *   doThis()
 *     .then(doThat)
 *     .then(doNext)
 *     .then(finalStep)
 *     .catch(handleError);
 *
 * 🔶 Purpose of Promise Chaining:
 *   - Asynchronous kaam ko order me chalana
 *   - Data ko step-by-step process karna
 *   - Callback hell se bachna
 *   - Har step ke result ko agle step me use karna
 *
 * 🔶 Use Case: Example of a User Flow
 * 🧠 Scenario:
 *   1. Server se user ID lo
 *   2. Us ID se user details fetch karo
 *   3. Us details se user posts lo
 *   4. Final result dikhao ya error pakdo
 *
 * 🔶 Extra: Agar koi bhi step fail kare to?
 *   - catch() automatic run ho jaata hai
 *   - Sabse pehle error pe jump karta hai
 *
 * ✅ Promise Chaining — Clear Concept
 *   - Asynchronous tasks are executed in order
 *   - Each task depends on the result of the previous task
 *   - They don't run together — they wait for the previous one to finish
 *
 * 🔄 Why? Because:
 *   - Each .then() waits for the previous .then() to resolve.
 *   - Jo value return hoti hai ek .then() me, wo agli .then() ka input ban jaati hai
 * 
 * “In Promise chaining, asynchronous tasks are executed one after another, where each task depends 
 * on the result of the previous one. So they must run in sequence and cannot run in parallel.”
 */

function getUserId() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("✅ User ID mila");
            resolve(101);
        }, 1000);
    });
}

function getUserDetails(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("✅ User details mile for ID:", id);
            resolve({ id: id, name: "Rahul" });
        }, 1000);
    });
}

function getUserPosts(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`✅ Posts mile for user: ${user.name}`);
            resolve(["Post 1", "Post 2"]);
        }, 1000);
    });
}

// 🔗 Promise Chaining Starts Here
getUserId()
    .then(getUserDetails) // Passes ID to next
    .then(getUserPosts)   // Passes user object to next
    .then((posts) => {
        console.log("📦 Final Posts:", posts);
    })
    .catch((err) => {
        console.log("❌ Error:", err);
    });
