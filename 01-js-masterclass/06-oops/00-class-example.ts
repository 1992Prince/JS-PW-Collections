/**
What is a Class?
    A class in TypeScript is a blueprint for creating objects with shared properties and methods. 
    It encapsulates data (properties) and behavior (methods) into a single unit.

Syntax

    class ClassName {
    // properties
    constructor(parameters) {
        // initialization
    }

    // methods
    }



 */

// Accessing method of a class with object

class LoginPage { //creating class

  open(url: string): void {//creating method with input param
    console.log(`Navigating to ${url}`); //priniting the input variable
  }

}

const login = new LoginPage();//creating object
login.open("https://example.com/login"); // calling the method form line 2
//Output: Navigating to https://example.com/login
console.log();

// Accessing method of a class with static

class LoginPage2 { //creating class

  static open(url: string): void { //creating method with input param
    console.log(`Navigating to ${url}`); //priniting the input variable
  }

}

LoginPage2.open("Static method in Typescript URL");
// Output: Navigating to Static method in Typescript URL
console.log();

// Example: A Simple Class with Constructor and Methods

class LoginPage3 {

  // Properties
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  open(): void {
    console.log(`Navigating to ${this.url}`);
  }
}

const login3 = new LoginPage3("https://example.com/login");
login3.open(); // Output: Navigating to https://example.com/login
console.log();

