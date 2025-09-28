/**
✅ Question:
Why can we use a var variable before it's declared (and get undefined), but using let or const before declaration gives a 
ReferenceError?
What JavaScript concept is behind this?
 */

console.log(a); // ✅ undefined (no error)
var a = 10;

console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 20;

console.log(c); // ❌ ReferenceError: Cannot access 'c' before initialization
const c = 30;

// ✅ This behavior is because of a concept called "Hoisting" in JavaScript.

/**
🧠 What is Hoisting?
JavaScript jab run hone se pehle code ko scan karta hai, tab woh sab variables aur functions ke declaration ko upar le jaata hai (memory me store karta hai).
Isi process ko Hoisting kehte hain.

But declaration ke saath kya assign bhi karta hai? Ye depend karta hai var, let, const pe.

🔹 Step-by-Step Flow (Behind the scenes):

console.log(a);
var a = 10;

💭 JavaScript Internally:

1. Compilation Phase:
   JS engine dekhta hai → "var a" → Ok, isse memory me bana do
   Memory: a = undefined

2. Execution Phase:
   console.log(a); → a ka value = undefined
   var a = 10; → ab a ka value set ho gaya = 10

✅ So, output hoga: undefined

🔸 Why let/const give error?

console.log(b);
let b = 20;

💭 JS Internally:

1. Compilation Phase:
   JS dekhta hai → "let b" → Ok, memory me reserve karo
   BUT don't initialize yet (no undefined)

   Temporal Dead Zone (TDZ) start ho gaya from line-1 to let b = 20;

2. Execution Phase:
   console.log(b); → ❌ TDZ me ho → ReferenceError
   let b = 20; → ab safe ho gaya (initialization ho gayi)

   🧨 Output: ReferenceError: Cannot access 'b' before initialization


🔥 JavaScript ka Execution Phases:

 1) Compilation Phase: Jab JavaScript code ko pehle scan kiya jaata hai (memory mein variable declarations reserve karna, functions ko prepare karna)
 2) Execution Phase: Jab code actual mein execute hota hai (values assign karna)


 💡 TDZ(Temporal Dead Zone) Kya Hai?
TDZ ek temporary phase hai jab variable ko hoisted toh kar diya jaata hai (memory mein space reserved ho jata hai), 
lekin actual initialization (value assignment) nahi hota.
TDZ ke dauran agar variable ko access karna try karoge, toh JS ReferenceError dega.

TDZ Explained with Example:

console.log(b);  // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 10;

Behind the Scenes:

1. Compilation Phase:
    let b dekha jaata hai. Memory mein space reserved ho jaata hai, lekin initialize nahi hota.
    TDZ start ho jaata hai from the line of declaration (let b) until the actual initialization (b = 10).

2. Execution Phase:
    Jab console.log(b) execute hota hai, b TDZ mein hai, aur value undefined nahi hoti.
    So, JS ReferenceError throw karta hai: "Cannot access 'b' before initialization".

🔥 Initialization:

Jab program let ya const variable ko declare kar raha hota hai, wo initialization tab hota hai jab declaration line execute hoti hai.

TDZ ka matlab yeh hai ki jab tak wo line execute nahi hoti, tab tak variable undefined ya kisi bhi tarah se accessible nahi hota.

✅ When Does Initialization Happen?
Initialization happens jab JS engine actual code line ko execute karta hai (matlab, jab woh line pe pahunchega, 
tab variable ko value milti hai).

Final Key Points:

🔹 TDZ ek phase hai jab variable declare ho gaya hai lekin initialize nahi hua.
🔹 TDZ (Temporal Dead Zone) ek logical phase hota hai jisme let/const variables hoist toh hote hain, but initialize nahi hote.
🔹 let aur const variables hoisted hote hain, lekin initialize nahi hote jab tak unki actual declaration line execute na ho.
🔹 Agar us time access karte ho jab variable TDZ mein ho, toh ReferenceError milta hai.
🔹 Is dauraan agar unhe access kiya jaye toh ReferenceError aata hai.
🔹 TDZ sirf let/const ke sath hota hai, var me nahi.
🔹 TDZ tab tak rehta hai jab tak declaration line execute nahi ho jati.

🔹 TDZ khatam kab hota hai?
Jab JS engine declaration line pe pahuchta hai, tab:
    Variable ko memory me initialize kiya jata hai
    Aur ab woh accessible ho jaata hai

🔹 TDZ me variable ka kya state hota hai?
TDZ me variable:
    memory me hota hai ✅
    lekin uninitialized hota hai ❌
    aur kisi bhi line se agar usse access karne ki koshish karo — ❌ ReferenceError aata hai

Remember TDZ is not a physical zone or any part of memory, but a conceptual phase in JavaScript's execution model.

🔑 Quick Interview Point:
TDZ ensures that JavaScript variables are only accessible after they have been properly initialized 
(unlike var, which is initialized with undefined during hoisting).
Isse JavaScript ka behavior safe aur predictable hota hai, especially in larger codebases.
 */

/**
console.log(a); // ??
var a = 5;

✅ Output: undefined

❓ Why undefined and not Error?
The reason is due to a powerful JavaScript concept called Hoisting.

🔥 Concept Behind This (Hoisting):
// JavaScript internally does this during compilation
var a;         // declaration is hoisted to the top (initialized as undefined)
console.log(a); // ✅ prints undefined (a exists, but value not yet assigned)
a = 5;         // value assignment happens here

📌 What Exactly Happens Behind the Scenes?

1. Compilation Phase (Hoisting):
JavaScript moves all variable declarations to the top of the current scope (function or global).
var a is hoisted and initialized with undefined.

2. Execution Phase:
console.log(a) runs.
Since a exists and is currently undefined, it prints undefined.
Then a = 5 assigns the actual value.

💡 So the Key Point is:
var declarations are hoisted and automatically initialized to undefined during compilation. 
That’s why accessing them before the line of assignment doesn’t throw an error — instead, it prints undefined.

 */
