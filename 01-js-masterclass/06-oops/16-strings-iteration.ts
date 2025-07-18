// ✅ 1. for...of loop – Easiest & cleanest 🔄
let str4: string = "Play";

for (let ch of str4) {
    console.log(ch);
}

/**
 * Output:
 * P
 * l
 * a
 * y
 */

// ➡️ for...of gives you each character of the string.
// ➡️ Fully type-safe in TypeScript (ch: string).

console.log();

// ✅ 2. for loop with index – for position-based control 🔢
let str5: string = "Test";

for (let i = 0; i < str5.length; i++) {
    console.log(`Character at ${i} is ${str5[i]}`);
}

/**
 * Output:
 * Character at 0 is T
 * Character at 1 is e
 * Character at 2 is s
 * Character at 3 is t
 */
