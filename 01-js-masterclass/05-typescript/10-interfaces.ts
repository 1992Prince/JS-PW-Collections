/**
🔷 interface vs type in TypeScript
    Ye dono kaam similar karte hain — object ke structure ko define karna, but kuch key differences hain.

    ✅ 1. interface – Used to define the shape (structure) of an object

        interface TestCase {
        id: number;
        name: string;
        status: "pass" | "fail" | "skip";
        }

    ✅ 2. type – Can also define object shapes, unions, primitives, tuples etc.

        type TestCase = {
        id: number;
        name: string;
        status: "pass" | "fail" | "skip";
        }

    🔁 interface vs type — Differences

    | Feature              | `interface`                    | `type`                               |          |
    | -------------------- | ------------------------------ | ------------------------------------ | -------- |
    | Object Shape         | ✅ Yes                          | ✅ Yes                                |          |
    | Union / Primitives   | ❌ Not supported                | ✅ Yes (e.g., \`type Flag = true      | false\`) |
    | Extend (Inheritance) | ✅ Better support (`extends`)   | ✅ Possible (`&`)                     |          |
    | Re-open/merge-able   | ✅ Yes (can declare again)      | ❌ No                                 |          |
    | Readability          | ✅ Clean, preferred for objects | ✅ Flexible, for complex combinations |          |

    🔥 Best practice:

    Use interface when defining object shape
    Use type when doing union, intersection, or mixing types

 */

// 🧪 Example: Structured Test Data using interface
    
interface TestCase {
    id: number;
    name: string;
    status: "pass" | "fail" | "skip";
  
    // ✅ Optional field
    comment?: string;
  
    // ✅ Readonly property
    readonly createdBy: string;
  }
  
  const tc2: TestCase = {
    id: 101,
    name: "Login Test",
    status: "pass",
    createdBy: "Ankush",
};
  
// 🔴 If we try to change a readonly property:
// tc2.createdBy = "Ravi"; // ❌ Error: Cannot assign to 'createdBy' because it is a read-only property

// 🔴 If we miss a required property: then u will get error -  Property 'name' is missing in type

const tc3: TestCase = {
    id: 102,
    name: "Logout Test", // comment it for testing
    // name missing ❌
    status: "fail",
    createdBy: "Ankush",
  };
  
/**
✅ Use Cases in Automation

- Define test case structure (ID, name, status, steps, etc.)
- Represent test suite config
- Structure user data for login/register tests
- Represent response data from APIs
 */