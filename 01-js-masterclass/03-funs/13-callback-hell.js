/**
 * Callback Hell kya hai?
 * Jab hum asynchronous operations ko nested callbacks ke through handle karte hain,
 * matlab ek callback ke andar doosra callback, fir uske andar teesra, aise callbacks ka chain banta hai,
 * jise hum callback hell ya pyramid of doom kehte hain.
 *
 * Isse code bahut complicated, unreadable aur maintain karna mushkil ho jata hai.
 */


// Example of Callback Hell: 3 asynchronous tasks sequentially (ek ke baad ek)
function task1(callback) {
  setTimeout(() => {
    console.log("Task 1 complete");
    callback();
  }, 1000);
}

function task2(callback) {
  setTimeout(() => {
    console.log("Task 2 complete");
    callback();
  }, 1000);
}

function task3(callback) {
  setTimeout(() => {
    console.log("Task 3 complete");
    callback();
  }, 1000);
}

// Callback hell example:
task1(function () {
  task2(function () {
    task3(function () {
      console.log("All tasks complete");
    });
  });
});

/**
 * Output after ~3 seconds:
 * Task 1 complete
 * Task 2 complete
 * Task 3 complete
 * All tasks complete
 *
 * Problem with this approach:
 * - Code indentation bahut badh jata hai.
 * - Samajhna mushkil hota hai ki kaunsa callback kis function ke andar hai.
 * - Agar aur zyada asynchronous steps add karne ho, toh ye aur bhi complex ho jata hai.
 * - Error handling difficult hoti hai.
 *
 * Isliye modern JavaScript mein hum:
 * => Promises use karte hain, jisse chaining easy ho jata hai.
 * => async/await ka use karte hain, jisse code synchronous jaisa readable lagta hai.
 */

/**
 * Callback Hell mein:
 * task1 complete hoga tabhi task2 trigger hoga,
 * task2 complete hone ke baad hi task3 trigger hoga,
 * Aur finally jab task3 complete hoga, tab hi "All tasks complete" print hoga.
 */