/**
 * Check if property exists in object or not
 */

const person = {
  name: "John",
  age: 30,
  isMarried: false,
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

// check if name property present in person object or not
console.log("name in person - ", "name" in person);  // name in person -  true
console.log("id in person - ", "id" in person);      // id in person -  false

console.log()
console.log()

// Iterating person object and print its property values
for (let key in person) {
  console.log(key + " : " + person[key]);
}

/**
 * name : John
   age : 30
   isMarried : false
   greet : function() {
    console.log("Hello, my name is " + this.name);
   }
 */