/**
 * 1. Hoisting Kya Hai?
Hoisting ka matlab hai ki JavaScript mein variables aur functions ko unke scope ke top par "lift" kiya jata hai, 
chahe unhe code mein kahi bhi declare kiya ho. Lekin, yeh sirf declaration ko lift karta hai, initialization ko nahi.

var: Hoisting ke saath initialize hota hai, lekin undefined set hota hai.

let aur const: Hoisting ke saath bhi initialize nahi hote, aur unhe Temporal Dead Zone (TDZ) mein rakha jata hai. 
                Isliye unhe access karne par error aata hai.
 */

/**
 * 2. var ke Saath Hoisting
    var variables hoisted hote hain aur undefined set hote hain.

    Yahan x ko declaration se pehle access kiya gaya hai, lekin error nahi aata kyunki var hoisted hai aur undefined set ho gaya hai.
 */

console.log(x); // Output: undefined (hoisting ke karan)
var x = 10;
console.log(x); // Output: 10

console.log()

/**
 * 3. let ke Saath Hoisting
      let variables bhi hoisted hote hain, lekin unhe TDZ (Temporal Dead Zone) mein rakha jata hai. Isliye unhe access karne par error aata hai.
      Yahan y ko declaration se pehle access karne par error aata hai kyunki let TDZ mein hai.
 */

console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 20;
console.log(y); // Output: 20


console.log()

/**
 * 4. const ke Saath Hoisting
      const bhi let ki tarah hoisted hota hai aur TDZ mein hota hai. Isliye access karne par error aata hai. 
      
      Yahan z ko declaration se pehle access karne par error aata hai kyunki const TDZ mein hai.
 */

console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 30;
console.log(z); // Output: 30

console.log()

/**
 * 5. Temporal Dead Zone (TDZ) Kya Hai?
TDZ woh area hai jahan let aur const variables hoisted to hote hain, lekin unhe access nahi kiya ja sakta jab tak unhe initialize nahi kiya jata.
 */

/**
 * What is Hoisting?
   Hoisting is a behavior in JavaScript where variable and function declarations are "moved" to the top of their scope 
   (either global or function scope) during the compilation phase, before the code is executed.

    This means you can use a variable or call a function before it is declared in your code.

    However, only the declaration is hoisted, not the initialization (assignment of a value).
 */

/**
 * Simple Explanation for Interview:
 "Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their 
 scope during compilation. This means you can use them before they are declared in the code. 
 However, only the declaration is hoisted, not the initialization. 
 For example, var variables are hoisted with a value of undefined, 
 while let and const are hoisted but cannot be accessed until they are declared (Temporal Dead Zone). 
 
 Function declarations are fully hoisted, so you can call them before their declaration in the code."
 */