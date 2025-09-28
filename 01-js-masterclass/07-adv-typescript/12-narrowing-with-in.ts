// 📌 5. Narrowing with in Operator in TypeScript

/**
✅ What is Narrowing?

When you have a union type (A | B), TypeScript doesn’t know which exact type you're using at runtime.
Narrowing means: "TypeScript ko batana ki yeh object kis type ka hai."

✅ Why use in?
The in operator helps TypeScript decide which type is currently in use by checking if a specific property
exists in the object.
 */

// 🔧 Example: Circle vs Rectangle

type Circle2 = { radius: number };
type Rectangle2 = { width: number; height: number };
type Shape2 = Circle2 | Rectangle2;

function calculateArea(shape: Shape2) {
    if ("radius" in shape) {
        // ✅ Now TypeScript knows it's a Circle
        return Math.PI * shape.radius ** 2;
    } else {
        // ✅ Now TypeScript knows it's a Rectangle
        return shape.width * shape.height;
    }
}

/**
🔍 How it works:
        - Shape is a union of two types.

        - Only Circle has the radius property.

        - So, if ("radius" in shape) tells TypeScript:
            👉 "Agar radius hai, toh yeh Circle hi hoga."
 */

// 🧪 Test the function:
const circle: Circle2 = { radius: 5 };
const rectangle: Rectangle2 = { width: 4, height: 6 };

console.log(calculateArea(circle));    // 78.5
console.log(calculateArea(rectangle)); // 24

// 💡 Interview Tip:
// This is called Type Guarding using the in operator.
// Only use in when your types have unique properties.

// ⚠️ Note:
// Other ways to narrow types:
//      typeof → for primitives
//      instanceof → for class-based types
//      Discriminated Unions → using a common kind field
