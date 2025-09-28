// ✅ typeof in TypeScript (Type extraction from variable)

//🔸 Purpose:
// Instead of rewriting types, you can infer it from existing data.
// typeof ka use kisi variable/function/object ki type ko nikalne ke liye hota hai — type ke context mein, runtime mein nahi.

// 🔸 Example:
const person = {
    name: "Rahul",
    age: 30,
};

// Extract type from `person` object
type PersonType = typeof person;

const anotherPerson: PersonType = {
    name: "Amit",
    age: 28,
};

// 🧠 Use case: Jab aapko ek object ki type baar-baar use karni ho, toh typeof se extract karlo.

// Use case: Infer the type of a locator or response schema.
