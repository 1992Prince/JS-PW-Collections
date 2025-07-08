/**
📘 4. Functions with Type Annotations

    ✅ Basic Syntax

    function add(a: number, b: number): number {
    return a + b;
    }

    ✅ void Return Type (for functions that return nothing)

    function logMessage(msg: string): void {
    console.log(msg);
    }

    void means this function does not return anything

    🧠 Why Type Annotations Help?
    Let’s say you have this:

    function multiply(a: number, b: number): number {
    return a * b;
    }

    Now if you try:

    multiply(10, "hello"); // ❌ Error at compile time!

    That’s the real power of TypeScript — you can’t pass wrong types by mistake.


    ⚙️ Default Parameters : Sometimes, you want a parameter to have a default value:

    function greet(name: string = "Guest") {
        console.log("Hello, " + name);
        }

        greet();          // Output: Hello, Guest
        greet("Sidharth"); // Output: Hello, Sidharth

    ❓ Optional Parameters (?) : What if a parameter is not always required?
        Here u can pass optional parameters using the `?` symbol.
        It is optional to developers to pass the parameter or not.
        But passing optional parameters is not mandatory.
        Below name is an optional parameter.
        And optional parameters must have symbol `?` after the parameter name.
        Keep optional parameters after mandatory parameters.

        function greetUser(name?: string) {
        if (name) {                          // It checks if name is truthy.
            console.log("Hello, " + name);
        } else {
            console.log("Hello, stranger");
        }
        }

        greetUser();        // Hello, stranger
        greetUser("Sid");   // Hello, Sid

        IMP:
        if(name) checks if name is truthy (not undefined, null, etc.)
        ❌ It won't run if name is: undefined, null, 0, false, or an empty string.

        name?: string means name is optional.
        TypeScript ensures you check for it (like if (name)).
    ❗️ Important Note: Optional parameters must come after required ones.
        else you will get an error like this: A required parameter cannot follow an optional parameter.

 */

    function greetUser(name?: string) {
        if (name) {
          console.log("Hello, " + name);
        } else {
          console.log("Hello, stranger");
        }
      }
      
    greetUser();        // Hello, stranger
    greetUser("Sid");   // Hello, Sid
console.log()
    

function greetEmployee(company: string,name?: string) {
    if (name) {
      console.log("Employee " + name + " works at " + company);
    } else {
      console.log("Hello, stranger");
    }
}
  
greetEmployee("TechCorp");        // Hello, stranger
greetEmployee("TechCorp", "Sid");   // Employee Sid works at TechCorp
console.log()

//✅ Example: Function with Default and Optional Parameters
function sendEmail(to: string, subject: string = "No Subject", cc?: string) {
    console.log("To: " + to);
    console.log("Subject: " + subject);
    
    if (cc) {
      console.log("CC: " + cc);
    } else {
      console.log("No CC provided");
    }
}
  
sendEmail("sid@example.com");  
// Output:
// To: sid@example.com
// Subject: No Subject
// No CC provided
console.log();

sendEmail("sid@example.com", "Meeting Reminder");
// Output:
// To: sid@example.com
// Subject: Meeting Reminder
// No CC provided
console.log();
sendEmail("sid@example.com", "Meeting Reminder", "manager@example.com");
// Output:
// To: sid@example.com
// Subject: Meeting Reminder
// CC: manager@example.com
      