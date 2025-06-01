function add(a, b){
    return a+b;
}

let sum = add(1, 2);
console.log("sum val -", sum);  // sum val - 3

console.log()

/**
 * Anonymous function - that do not have name and have only expression
 */

let sumNums = function(c,d){
    return c + d;
}

// above can also be written like

let sumNums2 = (c,d) => c + d;

console.log("sumNums - ", sumNums(100,200));     // sumNums -  300
console.log("sumNums2 - ", sumNums2(100,200));   // sumNums2 -  300