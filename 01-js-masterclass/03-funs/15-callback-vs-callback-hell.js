/**
Interviewer: “Can you explain what a callback is? And what is callback hell?”

A callback is simply a function that is passed as an argument to another function, 
and it gets executed after the parent function completes its task.

It’s commonly used in asynchronous operations — for example, if I’m fetching data from a server, 
I can pass a callback to process the data once it’s received.

✅ Example of a callback:
function fetchData(callback) {
  setTimeout(() => {
    const data = "Data received";
    callback(data);
  }, 1000);
}

fetchData(function(data) {
  console.log(data); // Output after 1 sec: "Data received"
});

This is clean, readable, and works well for simple flows.

🔁 Callback Hell
But when we have multiple asynchronous operations that depend on each other, 
and we try to handle them using callbacks — we end up nesting callbacks inside callbacks, 
forming a deeply indented, hard-to-read structure. 

This is what we call callback hell or the pyramid of doom.

Like below first makePayment and then only proceed to confirmOrder,
once confirmOrder is done, then prepareFood, and finally deliverFood.

Example

makePayment(function() {
  confirmOrder(function() {
    prepareFood(function() {
      deliverFood(function() {
        console.log("All tasks done");
      });
    });
  });
});

This becomes hard to manage, especially when:
    The logic grows
    Error handling is needed
    And we need to maintain or debug the code

🎯 Real-world analogy for Callback hell:
It's like saying: “Pehle payment ho, tabhi order confirm ho, fir food banega, fir deliver hoga.”
Each task depends on the previous one — and we’re nesting steps inside each other.

✅ How to handle this better?

To solve this, modern JavaScript introduced:
    Promises — which flatten the chain
    async/await — which makes async code look synchronous and clean
    So in production-level code, we avoid callback hell by using Promises or async/await.

🔚 Final Line to Leave Impact:
So sir, in short — callbacks are useful, but callback hell is a pattern we try to avoid by using 
Promises or async/await for better readability, maintainability, and error handling.


 */