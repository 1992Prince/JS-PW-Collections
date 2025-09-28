// 📘 Understanding this Inside Classes & Callbacks in JavaScript

// 1. ✅ Basic Class Example

class TestRunner {
    testName = "LoginTest";
    testStatus = "Pending";

    run() {
        console.log(`Running ${this.testName}`);
    }

}

const runner = new TestRunner();
runner.run(); // Output: Running LoginTest

// this.testName refers to the instance of the class (object).
// When you call runner.run(), this correctly refers to runner.
// without this - console.log(`Running ${testName}`); will give CE error - Cannot find name 'testName'. Did you mean the instance member 'this.testName'?

console.log();

// 2. ❌ Problem: Losing this in Callbacks, setTimeout is a callback function
// i.e. calling runner.run inside a callback function 
setTimeout(runner.run, 1000); // Output: Running undefined

/*
Here, runner.run is passed as a reference, not as a method of runner.
setTimeout calls it like a normal function → this becomes undefined (or window in non-strict mode).
So, this.testName throws an error or becomes undefined.
*/

console.log();

//3. ✅ Fixing the Problem
//   ✅ Option 1: Use an arrow function

setTimeout(() => runner.run(), 1000);

// Arrow functions don’t bind their own this.
// They capture this from the surrounding (lexical) scope.
// So this inside run() still refers to the original runner.
