// 🔷 What are Intersection Types in TypeScript?
// Combine multiple types into one
// Used when an object should have all properties from two or more types.

// Intersection types ka matlab hota hai "combine karna multiple types ko into one" — yani ek aisa type banana jo sabhi
// types ke properties ko include kare.

// Symbol used: & (ampersand)

// 🔸 Basic Syntax:

type A = { name: string };
type B = { age: number };

type Person2 = A & B;

const user: Person2 = {
    name: "Rahul",
    age: 25
};

//🧠 Explanation:

//Person type mein A aur B dono ki properties honi zaroori hai.

//It’s like: type A + type B = A & B.

// 🔸 Real Use Case – Combine features

type Admin = {
    role: string;
};

type User = {
    username: string;
};

type AdminUser = Admin & User;

const adminUser: AdminUser = {
    role: "superadmin",
    username: "rahul123"
};

// ✅ Use case: Jab ek object ko multiple roles ya interfaces ka combination banana ho.
