/**
🔥 What is Interface Reusability?

Reusability ka matlab hai — ek interface ko baar-baar alag-alag jagah use karna without repeating code.
Bas ek baar define karo structure, fir multiple objects, functions, or arrays usko follow karenge.

✅ Interface Example (with Reusability)

Yahaan humne ek structure define kiya for test result:
    testName — string
    passed — boolean
    errorMessage — string (optional)
 */

interface TestResult {
    testName: string;
    passed: boolean;
    errorMessage?: string;  // optional
  }
  
// 🔁 Reuse this interface in function:

function printResult(result: TestResult) {
    console.log(`Test ${result.testName}: ${result.passed ? "Passed" : "Failed"}`);
}
  
/**
    Yahaan result ek parameter hai.
    Uska type humne TestResult diya (interface se liya).
    Matlab function expect karega wahi structure wala object.
 */
  
// 🧪 Calling this function:

const test1: TestResult = {
    testName: "Login Functionality",
    passed: true,
};
  
const test2: TestResult = {
    testName: "Logout Functionality",
    passed: false,
  };
  
printResult(test1); // Test Login Functionality: Passed
printResult(test2); // Test Logout Functionality: Failed
  
