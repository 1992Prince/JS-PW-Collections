/**
 * [IGNORE AND MOVE TO NEXT FILE]
callback vs callback hell
🤔 Jab hume JavaScript mein asynchronous tasks handle karne hote hain jo ek ke baad ek chalne chahiye, 
tab hum callbacks use karte hain.

Lekin agar har task dusre task ke complete hone ke baad hi chalna ho, to hume nested callbacks 
likhne padte hain — isse hi kehte hain callback hell.

📦 Real Life Example:
Agar payment successful hoga, tabhi
order confirm hoga, uske baad
food prepare hoga, aur finally
food deliver hoga.
 */

function makePayment(callback) {
  setTimeout(() => {
    console.log("✅ Payment done");
    callback();
  }, 1000);
}

function confirmOrder(callback) {
  setTimeout(() => {
    console.log("✅ Order confirmed");
    callback();
  }, 1000);
}

function prepareFood(callback) {
  setTimeout(() => {
    console.log("👨‍🍳 Food prepared");
    callback();
  }, 1000);
}

function deliverFood() {
  setTimeout(() => {
    console.log("🍕 Food delivered");
  }, 1000);
}

// Callback Hell starts here 👇
makePayment(function() {
  confirmOrder(function() {
    prepareFood(function() {
      deliverFood();
    });
  });
});

/**
🧠 Samjha de is tarah:
Har step ek asynchronous task hai.
Har step previous step ke complete hone pe chalu ho raha hai.
Isse nested structure ban gaya — jise callback hell kehte hain.

🧠 Callback Hell Execution Flow (Step by Step)

makePayment(function() {
  confirmOrder(function() {
    prepareFood(function() {
      deliverFood();
    });
  });
});

✅ Execution Sequence:

⏱️ 0 sec:
    makePayment() call hota hai.
    Uske andar setTimeout chalu hota hai 1 sec ke liye.

⏱️ 1 sec:
"   ✅ Payment done" print hota hai.
    Uske baad confirmOrder() call hota hai.
    Fir se ek aur 1 sec ka wait.

⏱️ 2 sec:
"   ✅ Order confirmed" print hota hai.
    Uske baad prepareFood() call hota hai.
    Fir se 1 sec wait.

⏱️ 3 sec:
"   👨‍🍳 Food prepared" print hota hai.
    Uske baad deliverFood() call hota hai.
    1 sec wait.

⏱️ 4 sec:
"    🍕 Food delivered" print hota hai

🕓 Total time taken: ~4 seconds
Sab kuch sequentially hua, kyunki har kaam doosre ka wait kar raha tha.

🔁 Summary in Simple Words:
    1 sec: Payment done
    +1 sec: Order confirmed
    +1 sec: Food prepared
    +1 sec: Food delivered

⚠️ Problem:
Jaise jaise tasks badhenge, code aur bhi complex ho jayega.
Read karna mushkil ho jata hai.
Error handling bhi tricky hoti hai.

🔧 Solution:
Callback hell avoid karne ke liye hum Promises aur async/await ka use karte 
hain — ye code ko readable aur clean banata hai.
 */