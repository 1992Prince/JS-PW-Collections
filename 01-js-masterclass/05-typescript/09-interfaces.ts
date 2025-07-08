/**
🟢 1. JavaScript mein Object Declaration (No Rules)

    JavaScript mein tu seedha object bana sakta hai — koi type-checking ya rule nahi hota.

    let user = {
    name: "Ankush",
    age: 28,
    isActive: true,
    };

    Yahaan koi check nahi karega ki "name" string hai ya number hai.
    Agar tu galti se "age": "twenty-eight" likh de, tab bhi chalega. ❌ No Type Safety

🔵 2. TypeScript mein Object Declaration (Rules Apply)

    TypeScript mein tu object banane se pehle uska structure define karta hai — jisko interface kehte hain.

    ✅ Step 1: Define Interface (structure)

        interface User {
        name: string;
        age: number;
        isActive: boolean;
        }

    ✅ Step 2: Create object as per that interface

        let user1: User = {
        name: "Ankush",
        age: 28,
        isActive: true,
        };

    🔴 Agar tu galat type dega:

        let user1: User = {
        name: "Ankush",
        age: "twenty-eight",   // ❌ Error: age should be number
        isActive: true,
        };

        TypeScript bolega “Bhai galti hai”, aur error dega compile time par hi. ✅ Type Safety

    🔶 Interface Kya Hai?

        interface ek blueprint ya contract hota hai, jo batata hai ki koi object ka structure kaisa hoga.

        - Kaunse properties honi chahiye
        - Unka type kya hoga
        - Kaun optional hai, kaun required

🧠 Interface ke Fayde (Advantages)

    | Feature            | Benefit                                   |
    | ------------------ | ----------------------------------------- |
    | ✅ Type Safety      | Galat data pehle hi pakda jaata hai       |
    | ✅ Auto Suggestions | Editor smart ho jaata hai (VS Code, etc.) |
    | ✅ Reusability      | Ek hi structure multiple jagah use        |
    | ✅ Clean Code       | Code readable aur maintainable hota hai   |

 */

// 🧪 Example in Automation Testing:[Suppose tu test case ke liye object bana raha hai:]
    
interface TestCase {
    id: number;
    name: string;
    status: "pass" | "fail" | "skip";
  }
  
  let tc1: TestCase = {
    id: 101,
    name: "Login Test",
    status: "pass",
  };
  
  /**
Explain - status: "pass" | "fail" | "skip";
    Yeh bolega:
    ⚠️ status naam ka property sirf in teeno me se ek hi string value le sakta hai:
    pass or fail or skip
    Aur kuch bhi diya to ❌ error dega.
    Same cheez number ke saath kaise hoti hai (0 | 1 | 2)
   */