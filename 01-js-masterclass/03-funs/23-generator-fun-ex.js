// Generator function to generate squares of numbers up to a limit
function* squareGenerator(limit) {
  for (let i = 1; i <= limit; i++) {
    yield i * i;  // Pause and return the square of i
  }
}

// Using the generator function
const squares = squareGenerator(5);

console.log(squares.next().value); // Outputs: 1  (1*1)
console.log(squares.next().value); // Outputs: 4  (2*2)
console.log(squares.next().value); // Outputs: 9  (3*3)
console.log(squares.next().value); // Outputs: 16 (4*4)
//console.log(squares.next().done);  // Outputs: false (more values available)
console.log(squares.next().value); // Outputs: 25 (5*5)
console.log(squares.next().done);  // Outputs: true (no more values)
