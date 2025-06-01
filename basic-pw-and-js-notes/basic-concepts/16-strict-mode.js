/*
🔹 Strict Mode in JavaScript (Hinglish Explanation)

👉 Purpose:
"strict mode" JavaScript ka ek feature hai jo code ko strict tareeke se check karta hai.
Iska main purpose hai: 
✅ galtiyon ko jaldi pakadna  
✅ unsafe code ko rokna  
✅ clean aur secure code likhna

--------------------------------------------------------
🔹 Use kaise karte hain?
"use strict";  // bas itna likhna hai file ke top par ya kisi function ke andar

Example:
*/

// without strict mode
y = 100;
console.log('y - ' + y); // y - 100

('use strict');
x = 10; // ❌ Error: x is not defined
console.log('X - ' + x);

/**
above we are not able to activate strict mode bcoz it is going inside parenthesis.
There should be no parenthesis around "use strict";
and so it is giving output
X - 10
 */

/*
👆 Yahan par `x` ko bina `let`/`var`/`const` ke use kiya gaya, 
strict mode ke bina JS isko global variable maan leta
But strict mode ke saath JS turant error de deta hai. ✅

--------------------------------------------------------
🔹 Benefits of Strict Mode (Fayde):

1️⃣ **Bina declare kiye variable use karne se rokta hai**
    Example: x = 5; ❌ Error deta hai

2️⃣ **Duplicate function parameters allow nahi karta**
    function fun(a, a) {} ❌ Error

3️⃣ **'this' keyword ko window/global se bind hone se rokta hai**
    Normal function mein `this = undefined` hota hai strict mode mein

4️⃣ **Read-only ya non-writable properties ko change karne par error deta hai**
    const obj = {}; Object.defineProperty(obj, 'x', {value: 10, writable: false});
    obj.x = 20; ❌ Error

5️⃣ **eval() ke use ko safe banata hai**
    eval ke andar naye variables outer scope ko affect nahi karte

--------------------------------------------------------
🔹 Function ke andar bhi use kar sakte ho:

function test() {
  "use strict";
  y = 20; // ❌ Error: y is not defined
}

--------------------------------------------------------
🔹 Summary (Interview Ready Line):

✅ "Strict mode" ek feature hai jo JS ko strict bana deta hai — jisse galtiyan jaldi milti hain, aur code secure banta hai.
✅ Yeh common bugs jaise undeclared variable, duplicate params, unsafe this, etc. se bachata hai.
✅ Use `"use strict";` to activate it. Default hota hai ES6 modules mein.
*/
