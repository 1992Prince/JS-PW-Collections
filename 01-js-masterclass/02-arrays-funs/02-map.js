/**
 * 1. map() – Change each item
 * What it does:
 * Goes through each item in the array and changes it using your function.
 * It gives you a new array with the changed items.
 */

let nums = [11, 22, 33];
let doubled = nums.map((num) => num * 2);

console.log(`doubled: ${doubled} and typeof doubled: ${typeof doubled}`); // doubled: 22,44,66 and typeof doubled: object
console.log(doubled); // [ 22, 44, 66 ]
console.log('doubled: ', doubled); // doubled:  [ 22, 44, 66 ]
//doubled: 22,44,66 and typeof doubled: object

console.log();

// add 1 to each item in the array
let nums1 = nums.map((num) => num + 1);

console.log('nums1:', nums1);
//nums1: [ 12, 23, 34 ]

console.log();

// convert each string to uppercase
const names = ['amit', 'john'];
const caps = names.map((name) => name.toUpperCase());
console.log(`caps - ${caps}`); // caps - AMIT,JOHN
console.log('caps - ', caps); // caps -  [ 'AMIT', 'JOHN' ]

console.log();

//  Extract name from array of objects

const users = [
  { name: 'Amit', age: 25 },
  { name: 'Rita', age: 30 },
];

let namesArr = users.map((user) => user.name);
console.log(`namesArr - ${namesArr} and typeof namesArr: ${typeof namesArr}`);
// namesArr - Amit,Rita and typeof namesArr: object

console.log();

/**
 * Use map() to convert a list of test input values into formatted test data objects.
 */

let usernames = ['user1', 'user2'];
let testUsersObjs = usernames.map((user) => ({
  username: user,
  password: 'Test@124',
}));
console.log('Arr of Objts: ', testUsersObjs);
console.log(`typeof testUsersObjs: ${typeof testUsersObjs}`);

/**
 * Arr of Objts:  [
  { username: 'user1', password: 'Test@124' },
  { username: 'user2', password: 'Test@124' }
]
typeof testUsersObjs: object
 */
