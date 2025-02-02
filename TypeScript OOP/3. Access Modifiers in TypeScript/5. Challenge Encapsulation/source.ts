/**
 * Encapsulation Practice:
 * The challenge focuses on practicing encapsulation and
 * using access modifiers (public, private, protected) in TypeScript.
 *
 * Property and Method Creation:
 * You are encouraged to think about and create
 * appropriate properties and methods,
 * including read-only and private methods,
 * without specific instructions.
 *
 * User Class:
 * Consider what properties should be public, protected, or private
 * in the user class and implement them accordingly.
 */

export class User {
  private id: number;
  private password: string;
  public firstName: string;
  public lastName: string;
  protected email: string;
  protected dob: Date;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    dob: Date
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.dob = dob;
  }

  get userFullName(): string {
    return this.firstName + " " + this.lastName;
  }

  get userPassword(): string {
    return this.password;
  }

  set userPassword(password: string) {
    this.password = password;
  }

  get userEmail(): string {
    return this.email;
  }

  get userDob(): Date {
    return this.dob;
  }

  public doesEmailMatch(email: string): boolean {
    return this.email === email;
  }
}

export class Admin extends User {
  private role: string;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    dob: Date,
    role: string
  ) {
    super(id, password, firstName, lastName, email, dob);
    this.role = role;
  }

  public getRole(): string {
    return this.role;
  }
}
