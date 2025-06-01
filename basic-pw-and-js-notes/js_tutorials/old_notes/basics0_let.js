/**
 * let scope is global level or block level
 * Meaning is let is declared inside block then its scope will be within this block only
 */
let greet = "Morning"

{
    // below greet scope is within this block and will not be available outside of this block
    // similary if let is declared inside fun then outsude function that let var will not be available
    let greet = "Evening";
}

console.log(greet)  // Morning