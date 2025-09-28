/**

🔷 JavaScript Memory Management: Heap vs Stack
🔹 1. Call Stack (Stack Memory)
        Stores primitive values (number, string, boolean, etc.)
        Stores function execution contexts (local variables, arguments)
        LIFO (Last In First Out) structure

        let x = 10;  // stored in stack (primitive)
        function greet() {
        let message = "Hello"; // local variable -> stack
        }

🔹 2. Heap Memory
Used to store non-primitive/reference types (objects, arrays, functions)

        Dynamic memory: used for complex data
        let user = { name: "John" }; // `user` stored in stack, but object is in heap
        Stack stores a reference (pointer) to the actual object in the heap.

🔷 Execution Example: Stack + Heap

function sayHi() {
  let greeting = "Hi";         // stack (primitive)
  let person = { name: "Ali" } // `person` is in stack, object in heap
  console.log(greeting + " " + person.name);
}

sayHi();

✅ Memory Behind the Scenes:
| Area  | What's stored                                        |
| ----- | ---------------------------------------------------- |
| Stack | `sayHi()` context, `greeting`, reference to `person` |
| Heap  | `{ name: "Ali" }`                                    |

🔷 JavaScript is Single Threaded
    Only one call stack is present
    Executes one thing at a time
    Hence no parallel execution in core JS

function taskA() {
  console.log("A");
}
function taskB() {
  console.log("B");
}
taskA();
taskB();

Stack Execution:
    taskA() is pushed → runs → pops
    taskB() is pushed → runs → pops



 */
