/**
 * Demystifying Polymorphism:
 * Polymorphism is a fundamental concept in object-oriented programming
 * that involves method and parameter overriding,
 * making it less intimidating by showing that you've likely used it before.
 *
 * Method Overriding:
 * The video explains how a child class can override a parent class's methods,
 * providing examples such as the hasAllAccess method in a SuperAdmin class.
 *
 * Method Overloading:
 * Although JavaScript and TypeScript don't support method overloading directly,
 * the video discusses workarounds like making parameters optional to achieve similar functionality.
 */

export class User {
  name: string;
  email: string;
  role: string;

  constructor(name: string, email: string, role: string) {
    this.name = name;
    this.email = email;
    this.role = role;
  }

  hasAccess(): boolean {
    return this.role === "Admin" || this.role === "SuperAdmin";
  }
}

export class SuperAdmin extends User {
  hasAllAccess(): boolean {
    return true;
  }
}

export class UserOne extends User {
  hasAccess(user?: User): boolean {
    if (user) {
      return user.role === "Admin" || user.role === "SuperAdmin";
    }

    return this.role === "Admin" || this.role === "SuperAdmin";
  }
}
