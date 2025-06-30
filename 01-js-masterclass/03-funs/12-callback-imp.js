/**
 * Let's understand the importance and purpose of callback functions in JavaScript.
 *
 * 1. JavaScript is single-threaded
 * JavaScript ek single-threaded language hai, matlab ek waqt mein sirf ek kaam kar sakta hai.
 * Agar koi operation (jaise data fetch karna, file read karna, ya timer wait karna) time leta hai,
 * toh wo us waqt JavaScript ko block kar dega, aur baaki code ruk jayega.
 *
 * 2. Problem without callbacks (synchronous blocking)
 * Agar hum koi slow operation synchronously karen, toh program poora ruk jayega jab tak wo operation
 * complete na ho jaye.
 *
 * Example:
 */

function waitTwoSeconds() {
  const start = Date.now();
  while (Date.now() - start < 2000) {
    // Busy wait - program yahin 2 second tak fasa rahega
  }
  console.log("2 seconds ho gaye");
}

console.log("Start");
waitTwoSeconds();
console.log("End");

// Output:
// Start
// (2 second rukega yahin)
// 2 seconds ho gaye
// End

// Problem: Yahan poora program 2 second tak freeze ho gaya.

/**
 * 3. Callback solves this problem
 *
 * Jab hum asynchronous programming karte hain (jaise setTimeout ya data fetch),
 * toh callback hume non-blocking way deta hai.
 *
 * JavaScript wo slow operation ko start karta hai (jaise timer set karna).
 * Fir wo aage badh jata hai, baaki code ko execute karta hai.
 * Jab wo operation complete ho jata hai, tab callback function ko call karta hai.
 *
 * Iska fayda?
 * Program freeze nahi hota, user interface responsive rehta hai, events handle hote hain, aur performance better hoti hai.
 *
 * Example:
 */

console.log("Start");

setTimeout(function () {
  console.log("2 seconds baad");
}, 2000);

console.log("End");

// Output:
// Start
// End
// 2 seconds baad

// Yahan kya ho raha hai?
// setTimeout ne timer start kiya aur callback register kiya.
// JavaScript ne timer ko background mein chalne diya, aur turant "End" print kar diya.
// 2 second baad jab timer khatam hua, tab callback call hua.

/**
 * Callback importance summary:
 * - Non-blocking behavior allow karta hai — program freeze nahi hota.
 * - Asynchronous tasks ko handle karta hai — jaise network requests, timers, file I/O.
 * - JavaScript ko responsive banata hai, especially browsers mein jaha UI lagna nahi chahiye.
 * - Ye ek tarah ka event-driven programming pattern hai.
 *
 * Conclusion:
 * Callback function JavaScript ko asynchronous, non-blocking aur efficient banate hain —
 * jisse user experience smooth aur program scalable banta hai.
 */

/**
 * Prince's understanding:
 *
 * Callback ek function hota hai jo hum dusre function ke argument ke roop mein pass karte hain,
 * aur jab wo dusra function apna kaam complete kar leta hai, tab callback function execute hota hai.
 * Isse JavaScript asynchronous tasks ko handle kar pata hai.
 *
 * JavaScript single-threaded language hai, matlab ek waqt mein sirf ek kaam karta hai aur next line tabhi
 * execute hoti hai jab current code complete ho jaye.
 * Lekin asynchronous tasks jaise timers, network requests ko handle karne ke liye callbacks
 * use kiye jaate hain, jisse program block nahi hota aur dusra code continue chal sakta hai.
 *
 * Callback ke kuch disadvantages (demerits) bhi hote hain:
 * - Callback hell: Jab bahut saare nested callbacks ek ke andar ek likhne padte hain,
 *   toh code complicated aur hard to read ho jata hai.
 * - Error handling mushkil hoti hai callbacks ke saath.
 * - Kabhi-kabhi debugging difficult ho sakti hai.
 */