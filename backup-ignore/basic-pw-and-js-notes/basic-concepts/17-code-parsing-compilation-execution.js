/**
 * 💡 How JavaScript code is parsed and executed

Parsing means the browser reads and loads the JavaScript code using its JavaScript engine (e.g., Chrome uses V8, Firefox uses SpiderMonkey).

The JavaScript engine has two main parts:
🔹 Interpreter – reads and starts running the code line by line (initial execution).
🔹 Compiler (JIT) – improves performance by converting frequently used parts of code into machine code while it's running.

First, the interpreter runs the code and generates bytecode.
Then, the Just-In-Time (JIT) compiler converts this bytecode to machine code to make it faster.

This compilation happens in the background while the interpreter is already executing the code — it's done side-by-side for better speed.

For performance, if some code doesn’t change, the engine reuses the already compiled machine code — no need to recompile again.

✅ What you can say in an interview

When a browser loads JavaScript, it first parses the code using its JavaScript engine — like V8 in Chrome. 
The engine has an interpreter that reads and starts executing the code line by line, and at the same time, 
a Just-In-Time compiler converts frequently used code into machine code to make it faster. 

This happens side-by-side, and to optimize performance, it even reuses compiled code if nothing has changed
 */

/**

✅ JavaScript Code Execution Process (with Hoisting) – Step-by-Step with Arrows

🔁 Phase 1: Parsing / Compilation Phase (before execution)
→ Browser loads the JS file
→ JS Engine starts parsing the code (line by line)
→ Syntax is checked, and memory is allocated for variables and functions
→ Hoisting happens here ✅
    🔸 Variables declared with var are hoisted with value undefined
    🔸 Functions are hoisted completely with their body
    🔸 let and const are hoisted **but kept in Temporal Dead Zone (TDZ)` until execution
    
⚙️ Phase 2: Execution Phase
→ Code starts running line by line
→ Uses memory that was allocated during parsing
→ Actual values assigned to variables
→ Function calls are executed
→ JS Engine (like V8) uses:
    🔸 Interpreter to start executing the code
    🔸 Just-In-Time (JIT) Compiler to optimize performance by converting repeated code into machine code
    
🔄 During Execution
→ Interpreter creates bytecode from source code
→ Compiler (JIT) compiles hot/repeated code into machine code
→ Execution becomes faster over time (thanks to optimizations)
→ Already compiled machine code is reused if nothing changed → boosts performance

🧠 Summary for Interview (What to Say):

JavaScript code first goes through a parsing phase where hoisting happens — variables with var are hoisted with undefined, 
and functions are fully hoisted. 

Then, during execution, the interpreter starts running the code, and the JIT compiler in the engine compiles frequently used code into machine code for faster performance. This all happens inside the browser’s JavaScript engine like V8 in Chrome
 */

/**
 * 
✅ 1) How many phases are there in JS code execution?

There are 2 main phases:

🔹 Phase 1: Compilation / Parsing Phase
🔹 Phase 2: Execution Phase

✅ 2) Purpose of each phase

🔹 Compilation / Parsing Phase (Before running the code)
        JS engine reads and parses the code
        Syntax is checked
        Memory is allocated for variables and functions (hoisting happens here)
        No execution yet
        let and const are hoisted but not initialized → stay in Temporal Dead Zone

🔹 Execution Phase (Running the code)
        Code is run line by line by the interpreter
        Actual values are assigned to variables
        Functions are executed
        Repeated parts of code are optimized using JIT compiler (converted to machine code)

✅ 3) Who converts code to bytecode and in which phase?
        The interpreter converts the JavaScript code into bytecode
        This happens in the execution phase, just before actual execution of the code
        Bytecode is an intermediate format (easier for the engine to understand and execute)

✅ 4) What is JIT Compiler and its job?
        🔸 JIT = Just-In-Time Compiler
        It’s a part of the JavaScript engine that runs during execution

        Job of JIT compiler:

        Takes frequently used bytecode and converts it to machine code
        Machine code runs much faster than interpreted bytecode
        Optimizes performance
        Skips recompiling if the code hasn’t changed → saves time

✅ 5) Components of V8 Engine and their purpose
        V8 is the JS engine used in Chrome and Node.js. It has 3 major components:

        🧩 1. Parser
        Reads the JS code
        Checks for syntax errors
        Creates an Abstract Syntax Tree (AST)

        🧩 2. Interpreter (called Ignition in V8)
        Converts AST to bytecode
        Starts executing the bytecode line by line
        Fast start-up, slower performance

        🧩 3. JIT Compiler (called TurboFan in V8)
        Monitors which bytecode runs frequently (hot code)
        Converts that bytecode into highly optimized machine code
        Improves runtime speed

Summary - 
JavaScript code goes through two main phases: parsing and execution. 
In the parsing phase, the JS engine checks syntax, hoists declarations, and allocates memory. 
Then in the execution phase, the interpreter converts code into bytecode and starts running it line by line. 
The JIT compiler then optimizes frequently used code by converting bytecode into machine code for faster performance. 
In V8, the main components are the Parser, the Interpreter (Ignition), and the JIT Compiler (TurboFan)


    */
