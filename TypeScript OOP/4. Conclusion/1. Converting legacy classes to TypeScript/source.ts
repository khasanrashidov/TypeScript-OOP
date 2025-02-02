/**
 * Legacy JavaScript Classes:
 * Before ES6, JavaScript used functions and prototypes to create classes.
 * This method is less familiar to developers from other programming languages.
 *
 * TypeScript Classes:
 * TypeScript builds on the ES6 class syntax,
 * making it more intuitive and similar to other object-oriented languages.
 */

export class User {
  firstName: string;
  lastName: string;
  email: string;

  constructor(firstName: string, lastName: string, email: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  doesEmailMatch(email: string): boolean {
    return this.email === email;
  }
}

function UserLegacy(firstName, lastName, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;

  this.doesEmailMatch = function (email) {
    return this.email === email;
  };
}

const user = new User("John", "Doe", "johndoe@testemail.com");

const userLegacy = new UserLegacy("Mary", "Smith", "marysmith@testemail.com");

console.log(user.email);

console.log(userLegacy.email);
