/**
 * Array exposed functions - reduce, filter and map
 * 
 * reduce() - The reduce() method is used to reduce an array to a single value. 
 *            It applies a function to each element of the array (from left to right) to accumulate a result.
 * 
 *            syntax - array.reduce((accumulator, currentValue) => { ... }, initialValue);
 */

const numbers = [10, 20, 30, 40, 50];

let sum = 0;
for (let num of numbers){
  sum += num;
}

console.log()

/**
 * above sum variable will be accumulator in reduce fun and num value will be currentValue and
 * in for loop sum initial value is 0 and so in reduce fun, accumulator intial val is 0
 */

const sumVal = numbers.reduce((sum, num) => sum + num,0);
console.log("sumVal - ", sumVal); // sumVal -  150

console.log()
console.log()


/**
 * 2. filter()
   The filter() method is used to create a new array that includes only elements that satisfy a 
   certain condition (i.e., the callback function returns true).

   syntax - array.filter((element) => { ... });

 */

   // Example: Get only even numbers from an array
   const nums = [1, 2, 3, 4, 5, 6, 7, 8];
   const evenNumbers = nums.filter(number => number % 2 === 0);
   console.log("evenNums - ", evenNumbers);  // Output: [2, 4, 6, 8]


   console.log()
   console.log()

   /**
    * 3. map()
      The map() method is used to create a new array by applying a function to each element of the original 
      array. 
      It transforms each element and creates a new array of the same length.

      syntax = array.map((element) => { ... });

    */

      const numbers2 = [1, 2, 3, 4, 5];
      const squares = numbers2.map(number => number * number);
      console.log("squares - ", squares);  // Output: [1, 4, 9, 16, 25]

      console.log()
      console.log()

 // create new array with even numbers of scores and multiply each value with 3 and sum them

    let scores = [12,13,14,16];
    let evenScores = scores.filter(score => score % 2 == 0);
    let mappedArray = evenScores.map(score => score * 3);
    let totalVal = mappedArray.reduce((sum, num) => sum + num, 0);
    console.log("totalVal - ", totalVal); // totalVal -  126

    // write above code in single line only
    let totalVal2 = scores.filter(score => score % 2 == 0).map(score => score * 3).reduce((sum, num) => sum + num, 0);
    console.log("totalVal2 - ", totalVal2); // totalVal -  126