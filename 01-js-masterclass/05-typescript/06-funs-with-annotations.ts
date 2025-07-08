/**
✅ What happens when you pass null or undefined to a typed function parameter?
    🔧 It depends on:
    What type is expected
    Whether the parameter is optional or has a union type

🔴 Case 1: Passing null or undefined to a required parameter

    function greet(name: string) {
    console.log("Hello " + name);
    }

    greet(null);      // ❌ Error
    greet(undefined); // ❌ Error

    ❌ TypeScript will throw an error, because null and undefined are not assignable to type 
    string (if strictNullChecks is ON — which is recommended).

✅ Case 2: Allow null using union type

    function greet(name: string | null) {
    if (name) {
        console.log("Hello " + name);
    } else {
        console.log("Hello, guest");
    }
    }

    greet("Ankush"); // ✅ Hello Ankush
    greet(null);     // ✅ Hello, guest

✅ Case 3: Allow undefined using union type

    function greet(name: string | undefined) {
    console.log("Hello " + (name ?? "user"));
    }

    greet("Rahul");     // ✅ Hello Rahul
    greet(undefined);   // ✅ Hello user


✅ Case 4: Use optional parameter (undefined allowed)

    function greet(name?: string) {
    console.log("Hello " + (name ?? "stranger"));
    }

    greet("Aman");    // ✅ Hello Aman
    greet();          // ✅ Hello stranger
    greet(undefined); // ✅ Hello stranger

✅ Optional parameters in TypeScript are implicitly typed as string | undefined

❌ What if you pass null to an optional parameter?

    greet(null); // ❌ Error — null is not assignable to `string | undefined`

    ❗ If you want to support both null and undefined, write:

    function greet(name?: string | null) {
    ...
    }

✅ Generic Statement:
"Optional parameters in TypeScript are implicitly typed as T | undefined, where T is the type you specify (e.g., string, number, boolean, etc.)."
Optional parameters me we can pass undefined but not null.
If u want to pass null then write like  function greet(name?: string | null) {

 */