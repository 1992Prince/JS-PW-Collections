// Import the Person class
const Person = require('./basics12_class');

// Create the Men class that extends Person
class Men extends Person {

  constructor(name, age, profession) {
    // Call the parent class constructor with the name and age
    super(name, age);
    this.profession = profession;  // Additional property specific to Men class
  }

  // Override the introduce method or add new methods
  introduce() {
    super.introduce();  // Call the parent class's introduce method
    console.log(`I work as a ${this.profession}.`);
  }
}

// Create an instance of the Men class
const john = new Men("John", 30, "Software Engineer");
john.introduce();
// Output:
// Hi, I'm John and I'm 30 years old.
// I work as a Software Engineer.

