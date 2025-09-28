// File: privatePropertiesAndMethods.js

// Notes: Private Properties and Methods in JavaScript Classes
/*
    1. What are Private Properties and Methods?
       - Private properties and methods are accessible only within the class.
       - They are not directly accessible or modifiable from outside the class.

    2. Syntax:
       - Private properties and methods are defined using the `#` prefix.
       - Attempting to access private members from outside the class will throw an error.

    3. Key Points:
       - Use private properties to encapsulate internal data.
       - Private methods are useful for internal utility functions within the class.
       - Helps in implementing proper encapsulation and hiding implementation details.
*/

// Example 1: Private Properties
class BankAccount {
    #balance; // Private property

    constructor(accountHolder, initialBalance) {
        this.accountHolder = accountHolder; // Public property
        this.#balance = initialBalance;    // Private property
    }

    // Public method to get the balance
    getBalance() {
        return `The balance for ${this.accountHolder} is $${this.#balance}`;
    }

    // Public method to deposit money
    deposit(amount) {
        if (amount <= 0) {
            console.error("Deposit amount must be positive.");
            return;
        }
        this.#balance += amount;
        console.log(`$${amount} deposited. New balance: $${this.#balance}`);
    }

    // Public method to withdraw money
    withdraw(amount) {
        if (amount > this.#balance) {
            console.error("Insufficient funds.");
            return;
        }
        this.#balance -= amount;
        console.log(`$${amount} withdrawn. New balance: $${this.#balance}`);
    }
}

// Example 2: Using Private Properties
const account = new BankAccount("Alice", 1000);

console.log(account.getBalance()); // Output: The balance for Alice is $1000
account.deposit(500);              // Output: $500 deposited. New balance: $1500
account.withdraw(200);             // Output: $200 withdrawn. New balance: $1300

// Trying to access private property directly will throw an error
// console.log(account.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class

/*
    4. Private Methods:
       - Defined with the `#` prefix, similar to private properties.
       - Useful for internal logic that should not be exposed externally.
*/

class User {
    #password; // Private property

    constructor(username, password) {
        this.username = username;
        this.#password = password;
    }

    // Public method to validate password
    validatePassword(inputPassword) {
        return this.#checkPassword(inputPassword); // Call private method
    }

    // Private method
    #checkPassword(inputPassword) {
        return this.#password === inputPassword;
    }
}

// Example 3: Using Private Methods
const user = new User("john_doe", "securePassword123");

console.log(user.validatePassword("wrongPassword")); // Output: false
console.log(user.validatePassword("securePassword123")); // Output: true

// Trying to access private methods directly will throw an error
// console.log(user.#checkPassword("securePassword123")); // SyntaxError: Private field '#checkPassword' must be declared in an enclosing class

/*
    Summary:
    - Use `#` to define private properties and methods in classes.
    - Private members are accessible only within the class.
    - Helps in achieving encapsulation and data security.
*/
