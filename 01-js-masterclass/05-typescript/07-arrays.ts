/**
✅ 1. What is an Array in TypeScript?

    An array is a collection of items — all of the same type.
    let fruits: string[] = ["apple", "banana", "mango"];

    This means:
        You can only store string values.
        TypeScript will show an error if you try to store something else.

        fruits.push("orange");   // ✅ OK
        fruits.push(100);        // ❌ Error: number is not assignable to string

🚨 2. Index Out of Bounds – Error?
    This is important: TypeScript does NOT give an error for out-of-bounds access at runtime.

    let items: string[] = ["a", "b"];
    console.log(items[5]); // ❌ No compile-time or runtime error — result: undefined

    ⚠️ But:

    TypeScript knows the array length if it's a tuple.
    In normal arrays, accessing out of bounds just returns undefined (like in JavaScript).

🔍 3. Common Type Errors in TypeScript Arrays

    ❌ Type Mismatch

        let numbers: number[] = [1, 2, 3];
        numbers.push("four"); // ❌ Error: Argument of type 'string' is not assignable to 'number'

    ❌ Wrong Inferred Type

        let mix = [1, "hello"];      // inferred as (string | number)[]
        mix.push(true);              // ✅ allowed, because boolean is assignable to any

    🔐 To fix:

        let strict: (number | string)[] = [1, "hello"];
        strict.push(true); // ❌ Error: 'boolean' is not assignable to 'string | number'

🆚 TypeScript Arrays vs JavaScript Arrays

| Feature                       | JavaScript                         | TypeScript                            |
| ----------------------------- | ---------------------------------- | ------------------------------------- |
| Type Safety                   | ❌ No type checking                 | ✅ Strict type enforcement             |
| Mixed Types                   | ✅ Allowed (e.g., `[1, "a", true]`) | ✅ Allowed only if explicitly typed    |
| Out-of-Bounds Index Access    | ✅ Returns `undefined`              | ✅ Same (no error, just `undefined`)   |
| Compiler Warnings             | ❌ None                             | ✅ Warns you at compile time           |
| Developer Help (Autocomplete) | ❌ Limited                          | ✅ Shows correct methods based on type |


 */