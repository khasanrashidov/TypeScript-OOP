/**
 * Creating a User Class:
 * We'll practice defining a user class with three properties:
 * first name, last name, and email.
 *
 * Defining a Get Property:
 * We'll create a get property to return the full name,
 * which is a combination of the first and last names.
 *
 * Adding a Method:
 * We'll write a method to check if the provided email matches the email property of the user class.
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

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  checkEmail(email: string): boolean {
    return this.email === email;
  }
}

const user1 = new User("John", "Doe", "johndoe@email.com");

console.log(user1.fullName);

console.log(user1.checkEmail("johnsmith@email.com"));
