// Destructuring
// Destructuring allows you to extract values from arrays or properties from objects into individual variables.

// 1. Array Destructuring

const numbers3 = [1, 2, 3];

const [a1, b1] = numbers3;

console.log(a1); // 1
console.log(b1); // 2

// You can skip values: below we skip the second value

const [x, , z, k] = numbers3;
console.log(z); // 3
console.log(k); // undefined // very imp from interview perspective

console.log();


// ✅ Object Destructuring

const user = {
    name2: 'Alice',
    age2: 30,
    location2: 'NYC'
};

const { name2, location2 } = user;

console.log(name2);     // 'Alice'
console.log(location2); // 'NYC'

// You can rename while destructuring:

const { name2: userName } = user; // renaming 'name2' to 'userName'
console.log(userName); // 'Alice'

console.log();

// You can also set default values:

/**
You're trying to destructure the property job2 from the user object.
Since user doesn't have a job2 property, the default value "Engineer" is used.

user object me job2 nae hah, while destructuring we are setting default value as 'Engineer'.
toh job2 variable will be created with value 'Engineer' in object user.

But when we uncomment below lines, error will come due to typescript error
 the error you're seeing is coming from TypeScript’s type checking, not from JavaScript runtime.
 We need to fix it
 */
// const { job2 = 'Engineer' } = user;
// console.log(job2); // 'Engineer'




