/**
 * TypeScript is not a new language runtime. 
 * It's just a superset of JavaScript — with extra tools that run before your actual code ever runs
 * 
 * Javascript vs TypeScript:
 * 
 * 1. Typing: Dynamic vs Static
 * JavaScript (JS): Dynamically typed language. Variable ka type runtime pe decide hota hai
 * let x = 5;
 * x = "hello"; // ✅ Allowed in JS
 * 
 * TypeScript (TS): Statically typed. Aap variable ka type pehle hi define karte ho.
 * let x: number = 5;
 * x = "hello"; // ❌ Error in TS
 * 
 * Real-world impact: Zyada bugs runtime pe nahi aate — TypeScript code likhne ke time hi batata hai error.
 * 
 * 2. Structure: Flexible vs Strict
 * 
 * JS: Aap kisi bhi tarah ka object create kar sakte ho, koi restriction nahi.
 * TS: Aapko object ka structure define karna padta hai using interfaces or types.
 * 
 * example
 * interface User {
  name: string;
  age: number;
}

const u: User = { name: "A", age: 25 }; // ✅
const u2: User = { name: "B" };         // ❌ Error, age missing

 * 
📌 Real-world impact: APIs ke saath kaam karte waqt TypeScript aapko galti se bachata hai (e.g., missing fields).

3. Compile-Time Checks
JS: Sirf runtime pe errors milte hain.
TS: Compile hone se pehle hi code check hota hai (before running tests).

📌 Real-world impact: Testing se pehle hi bugs pakad jaate hain.

4. IDE Support (Autocompletion & Intellisense)
JS: Limited support, especially for custom types.
TS: IntelliSense, auto-suggestions, tooltips, type hints — sab milta hai.

📌 Real-world impact: Code likhna fast, clean aur accurate hota hai — especially testing scripts ke liye.

5. Type Safety
JS: Kisi bhi type ka value assign kar sakte ho — leads to hidden bugs.
TS: Har variable/function ke sahi type check hote hain.

📌 Real-world impact: Test cases ya automation scripts mein galti se wrong input nahi jayega.

6. Language Scope
TS: Superset of JS → Aap pura JavaScript likh sakte ho TS mein.
JS: Sirf JavaScript.

📌 Real-world impact: TS seekhna easy hai agar aapko JS aata hai.

7. Runtime Environment
Dono same JS engine pe run hote hain (like V8, Node.js). TS sirf compile hoke JS banata hai.

📌 Real-world impact: Extra infrastructure ya runtime chahiye nahi.

✅ Summary Table: JavaScript vs TypeScript

🔹 Conceptual Differences

| **Concept**             | **JavaScript** | **TypeScript** | **Real-World Impact**                        | **Example**                                                    |
| ----------------------- | -------------- | -------------- | -------------------------------------------- | -------------------------------------------------------------- |
| **Typing**              | Dynamic        | Static         | Bugs caught during coding instead of runtime | `let x = 5; x = "hello"` vs `let x: number = 5; x = "hello"` ❌ |
| **Structure**           | Flexible       | Strict         | Forces API/data structure correctness        | Missing keys in object = error in TS                           |
| **Compile-Time Checks** | ❌ No           | ✅ Yes          | Fix before test/execution                    | Spelling/field errors caught early                             |


🔸 Feature-Based Differences

| **Feature**             | **JavaScript** | **TypeScript**      | **Why It Matters (For Testers/Devs)** | **Example**                      |
| ----------------------- | -------------- | ------------------- | ------------------------------------- | -------------------------------- |
| **Type Safety**         | ❌ No           | ✅ Yes               | Prevents incorrect data               | `price = "free"` ❌               |
| **IDE Support**         | ⚠️ Limited     | ✅ Rich IntelliSense | Speeds up and guides writing          | Autocomplete for props/functions |
| **Compile-Time Checks** | ❌ No           | ✅ Yes               | Catch bugs early before runtime       | Misspelled variable = error      |
| **Language Scope**      | JS only        | JS + TS             | Easy migration, flexible              | TS supports all JS syntax        |
| **Runtime Env**         | JS Engine      | JS Engine           | No extra runtime setup needed         | Runs as JS after compilation     |

 */
