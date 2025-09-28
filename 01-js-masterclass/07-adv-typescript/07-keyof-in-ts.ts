// ✅ keyof in TypeScript (Get keys as union of string literals)

//🔸 Purpose:
// keyof – Get keys of an object as a union type
// keyof ka use ek object type ke saare keys ko ek string literal union type mein badalne ke liye hota hai.

// Useful when you want to restrict access or dynamically work with properties

type Person = {
    name: string;
    age: number;
};

type PersonKeys = keyof Person; // 'name' | 'age'

function getValue(obj: Person, key: PersonKeys) {
    return obj[key];
}

const p: Person = { name: "Rahul", age: 30 };

console.log(getValue(p, "name")); // ✅ OK
console.log(getValue(p, "age"));  // ✅ OK
//getValue(p, "salary"); ❌ CE Error: Argument of type '"salary"' is not assignable to parameter of type 'keyof Person'.


// Use case in automation: Dynamically extract field values from a page object or response.
