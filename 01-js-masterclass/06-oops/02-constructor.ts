/**
What is a Constructor?
A constructor is a special method automatically invoked when a new instance of a class is created. 
It’s used to initialize class/object properties.

"Constructor initializes object properties, not class properties.[REMEMBER THIS]"

 */

class User {
    // Properties
    name: string;
    email: string;
  
    constructor(name: string, email: string) {
      this.name = name;
      this.email = email;
    }

  }
  
// creating class obj and initializing object properties via constructor
const u1 = new User("Alice", "alice@gmail.com");
const u2 = new User("Bob", "bob@gmail.com");
  