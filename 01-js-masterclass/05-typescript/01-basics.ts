/**
 * TypeScript is not a new language runtime. 
 * It's just a superset of JavaScript — with extra tools that run before your actual code ever runs
 * 
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

8. File Extensions
   JavaScript files have the extension .js. To run them, we use the command: node filename.js
   
   TypeScript files have the extension .ts. To execute them, we use the command: ts-node filename.ts
   This command first compiles the TypeScript code into JavaScript and then runs it.
   👉 ts-node compiles TypeScript into JavaScript in memory and then executes it directly

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



✅ Prerequisites - before we start adding TypeScript to our projects:
  
1 - Install Node.js

          Download & install from 👉 https://nodejs.org
          This will also install npm (Node Package Manager).
          Verify installation:
            node -v
            npm -v

2 - Code Editor (Recommended: VS Code)

          Download from 👉 https://code.visualstudio.com/
          It has built-in support for TypeScript.

⚙️ Steps to Install TypeScript and Run Code

1. Install TypeScript Compiler (globally): npm install -g typescript
   Verify installation: tsc -v

2. (Optional but recommended) Install ts-node:
    This lets you run .ts files directly without compiling every time. : npm install -g ts-node

3. Create a TypeScript file:
   Example: hello.ts

4. Run the file:

  Compile then run (2-step way):
      tsc hello.ts   # generates hello.js
      node hello.js

  or Run directly (with ts-node):
      ts-node hello.ts



📁 Optional Project Setup (for bigger apps) and Preferred:

1. Create a new project folder:

mkdir my-ts-app && cd my-ts-app
npm init -y - this command creates a package.json file

2. Install TypeScript locally:

npm install typescript --save-dev

3. Generate a tsconfig.json file (TypeScript config):

npx tsc --init

👉 That’s it! Now you’re ready to code in TypeScript. Create ts file -> write code and -> run with ts-node command



----------------------------------------------------------

local vs global installation ka concept bahut important hai in Node.js / npm world.

🌍 Global Installation (-g)

      Command: npm install -g typescript

      Kya hota hai?

          Package pura system par install hota hai (ek hi baar).
          CLI tools (jaise tsc, ts-node) direct terminal se kahin bhi run kiye ja sakte hain.

      Kab use karein?

          Jab aapko kisi tool ka command line interface (CLI) baar-baar alag-alag projects me use karna ho.
          Example: typescript, ts-node, nodemon, eslint etc.


📂 Local Installation (inside project)

      Command:

      npm install typescript --save-dev


      Kya hota hai?

          Package sirf project ke node_modules folder me install hota hai.

          Ye project-specific dependency hoti hai (baaki projects ko fark nahi padta).

          CLI tool run karne ke liye aapko npx prefix lagana padta hai. - npx tsc


      Kab use karein?

          Jab aap chahte ho ki project ke sabhi developers ek hi version use karein.

          Example: ek project me TypeScript v5, doosre me TypeScript v4.

⚖️ Summary
| Installation      | Scope         | Run Command       | Best Use Case                                           |
| ----------------- | ------------- | ----------------- | ------------------------------------------------------- |
| **Global (`-g`)** | Entire system | `tsc file.ts`     | Tools you want available everywhere                     |
| **Local**         | Project only  | `npx tsc file.ts` | Ensures project consistency (same version for all devs) |

👉 Practice / learning ke liye: Global install kar lo (simple).
👉 Professional projects me: Local install + tsconfig.json use hota hai.
 */
