/**
🔹 1. What is a JavaScript Engine?

JavaScript Engine ek program hota hai jo JavaScript code ko padhta, compile karta aur run karta hai.
💡 Purpose: Browser ya Node.js me likha JavaScript code machine language me convert karna aur execute karna.

📌 JavaScript Engine ka kaam:

        JS code ko read karega.
        Usse compile karega (line-by-line ya ahead of time depending on engine).
        Memory allocate karega (stack/heap).
        Execution steps manage karega.
        Optimized performance ke liye jit techniques apply karega.

🔹 2. Node.js me konsa JavaScript Engine hota hai?
    👉 Node.js uses V8 Engine — ye wahi engine hai jo Google Chrome browser use karta hai.
    ✅ V8 ko Google ne develop kiya hai — ye C++ me likha gaya hai aur bahut fast hai.
    VSCode sirf ek code editor hai. Jab tum JS file run karte ho node filename.js se, toh Node.js ke through code V8 Engine me 
    jata hai aur waha se execute hota hai.

    🔹 3. Inside a JavaScript Engine: What’s really happening?
        
        Socho tumne ek greet() function likha.

        🧠 Behind the scenes - Two main memory structures:
        ✅ 1. Heap – Long-term memory
        Ye large, unstructured memory area hai.

        Objects, functions, closures, DOM nodes, etc yahan store hote hain.

        Think of it like a big shelf – jahan cheezein padhi rehti hain for long.

        ✅ 2. Stack (Call Stack) – Short-term memory
        Ye function calls ka order manage karta hai.

        Ek LIFO (Last In First Out) structure hai.

        Jab koi function call hota hai → stack me push hota hai.

        Jab function return karta hai → stack se pop hota hai.

        🔹 4. Execution Flow Example:

        function getName() {
  return prompt("Your name?");
}

function greet() {
  const userName = getName();
  console.log("Hello " + userName);
}

greet();

🧠 Step-by-Step Execution:
Global execution context (anonymous) push hota hai stack me.

greet() call hota hai → greet context push hota hai stack me.

getName() call hota hai → getName context push hota hai.

prompt() call hota hai → browser ka built-in function → bhi stack me push hota hai.

User input deta hai → prompt() return karta hai → stack se pop hota hai.

getName() return karta hai → pop.

greet() console.log execute karta hai → return karta hai → pop.

Global context bhi pop ho jata hai → stack empty ho jaata hai.

🔍 Stack visualization:

↑
| prompt()       <-- top
| getName()
| greet()
| Global context <-- bottom

🔹 5. Single-threaded Execution

JavaScript is single-threaded, matlab ek time pe sirf ek hi kaam hota hai.

Saara kaam call stack ke through hota hai.

Jab tak stack me kaam khatam nahi hota, JavaScript kuch aur nahi karega.

Isiliye synchronous code blocking hota hai.

🔹 6. Event Loop (Important for async code)

Event loop JS engine ka part nahi hai, but browser environment ka part hai (jaise Chrome).

Event Loop dekhta hai:

Call stack empty hua ya nahi.

Agar empty hai, toh callback queue (jaise setTimeout, click listener) se ek callback utha ke stack me push karta hai.

Useful for asynchronous operations: timers, DOM events, network requests.
 */
