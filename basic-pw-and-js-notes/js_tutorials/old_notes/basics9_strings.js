/**
 * Strings can be declared double quotes or single quotes also
 */

let day = 'Tuesday'; 

console.log("day.length - ", day.length);   // day.length -  7

// retreve first 4 characters
console.log("day.substring(0, 4) - ", day.substring(0, 4)); // day.substring(0, 4) -  Tues

// retrive using slice 
console.log("day.slice(0, 4) - ", day.slice(0, 4));         // day.slice(0, 4) -  Tues

// retrieve 2nd character of day
console.log("day[1] - ", day[1]);                          // day[1] -  u

// split string in tue and day using split
// Split a string into substrings using the specified separator and return them as an array.
let splitArr = day.split("s");
console.log("day.split('s') - ", splitArr);   // day.split('s') -  [ 'Tue', 'day' ]
console.log("splitArr[0] - ", splitArr[0]);   // splitArr[0] -  Tue

// trimming left and right spaces
let day2 = '   Tuesday   ';
console.log("day2.trim() - ", day2.trim());   // day2.trim() -  Tuesday

console.log()
console.log("********** Date diff **********")

let date = '23'
let nextdate = '27'
/**
 * We need to find diff b/w nextdate and date
 * 
 * 1. Convert string to number
 * 2. Find diff b/w them
 * 3. Convert diff to string
 * 
 * Note - from browser whatever u fetch it will be in string format
 */

let diff = parseInt(nextdate) - parseInt(date);
console.log("Date diff - ", diff);     // Date diff -  4

// converting back to string
let diffStr = diff.toString();

console.log()
console.log("********** Concatinating 2 strings **********");

day = 'Friday'; 
let newQuote = day + " is funday";
console.log("newQuote - ", newQuote);    // newQuote -  Friday is funday

console.log()
// find index of day in newQuote
console.log("newQuote.indexOf('day') - ", newQuote.indexOf('day')); // newQuote.indexOf('day') -  3

console.log()
// if any word is not present in String then indexOf() returns -1
console.log("newQuote.indexOf('weekend') - ", newQuote.indexOf('weekend')); //  newQuote.indexOf('weekend') - -1

console.log()
// find last index of day in newQuote
console.log("newQuote.lastIndexOf('day') - ", newQuote.lastIndexOf('day')); // newQuote.lastIndexOf('day') -  13

console.log()





