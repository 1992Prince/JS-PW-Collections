var singleNumber = function (nums) {
  let res = 0;

  for (num of nums) {
    res = res ^ num; // XOR operation
  }

  return res; // The result will be the single number since all other numbers cancel out
};

console.log(singleNumber([2, 2, 1])); // Output: 1
console.log(singleNumber([4, 1, 2, 1, 2])); // Output: 4
console.log(singleNumber([1])); // Output: 1
