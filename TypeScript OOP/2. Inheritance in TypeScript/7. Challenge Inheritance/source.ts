/**
 * Creating Admin and Guest Classes:
 * The challenge involves creating an admin class
 * that extends the user class and a guest class that implements the user class.
 *
 * Using Constructors:
 * Ensure that the admin and guest classes use constructors
 *  to initialize properties like firstName, lastName, and email.
 *
 * Understanding Roles:
 * This exercise helps you practice how different user roles
 *  can be managed in a typical application using inheritance and implementation.
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

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  doesEmailMatch(email: string): boolean {
    return this.email === email;
  }
}

export class Admin extends User {
  constructor(firstName: string, lastName: string, email: string) {
    super(firstName, lastName, email);
  }
}

export class Guest implements User {
  firstName: string;
  lastName: string;
  email: string;

  constructor(firstName: string, lastName: string, email: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  doesEmailMatch(email: string): boolean {
    return this.email === email;
  }
}
