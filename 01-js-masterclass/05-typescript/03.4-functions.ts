//-------------------------------
// basic function
//-------------------------------


function printHello(): void {
    console.log("Hello");
}

printHello(); // Hello


console.log();


//-------------------------------
// parametrized fun
//-------------------------------


function log(msg: string): void {
    console.log(`Hey David, you have one message i.e. ${msg}`);
}

log("Come home early!!!"); // Hey David, you have one message i.e. Come home early!!!

console.log();

//-------------------------------
// fun with string return type
//-------------------------------

function holla(name: string): string {
    return `Holla ${name}`;
}

console.log(holla("Pikachu")); // Holla Pikachu

console.log()

// ----------------------------------------------
// Optional Parameters functios -  use ? to make a parameter optional
// ----------------------------------------------

function welcome(name: string, age?: number): string {
    return age ? `Welcome ${name} and age ${age}` : `Welcome ${name}`
}

console.log(welcome("Prema", 34)); // Welcome Prema and age 34
console.log(welcome("Amrita"));    // Welcome Amrita

