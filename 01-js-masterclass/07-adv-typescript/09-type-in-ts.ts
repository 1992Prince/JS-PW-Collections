// 🔷 type kya hai?
// type ka use custom types define karne ke liye hota hai — ye TypeScript ka feature hai, JavaScript mein nahi hota.

// 🧪 Example:

type Person3 = {
    name: string;
    age: number;
};

let user3: Person3 = {
    name: "Rahul",
    age: 30
};

// Yahan Person3 koi variable nahi hai, ek type definition hai.
// TypeScript ko batata hai ki user3 ke paas name (string) aur age (number) hone chahiye.
// Ye compile-time pe check hota hai, actual JS mein exist nahi karta.

/**
📌 Difference Table:

| Feature     | `let`                    | `type`                         |
| ----------- | ------------------------ | ------------------------------ |
| Purpose     | Declare variable         | Define custom type             |
| Runtime?    | Yes (used in JS runtime) | No (removed at compile-time)   |
| Scope       | Block-scoped variable    | Type definition only           |
| Example Use | `let x = 5`              | `type User = { name: string }` |
| JS Support  | Yes                      | No (only TS)                   |

🧠 Summary:

        let → Variable ke liye
        type → Structure ya type batane ke liye

 */
