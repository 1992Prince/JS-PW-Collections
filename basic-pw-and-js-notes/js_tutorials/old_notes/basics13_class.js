const Person = require('./basics12_class')

  // Create an instance of the class
  const john = new Person("John", 30);
  john.introduce();        // Output: "Hi, I'm John and I'm 30 years old."
  console.log(john.name);  // John
  