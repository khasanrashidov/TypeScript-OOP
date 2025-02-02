/**
 * Difference Between extends and implements:
 * The explainion of how extends creates a direct parent-child relationship,
 * while implements requires redefining properties and methods to match the shape of the parent class.
 *
 * Contextual Implications:
 * Using implements can improve readability by making it clear
 * what properties and methods are expected, even if they are not directly inherited.
 */

export class Animal {
  name: string;
  age: number;
  legs: number;

  constructor(name: string, age: number, legs: number) {
    this.name = name;
    this.age = age;
    this.legs = legs;
  }
}

export class Dog implements Animal {
  name: string;
  age: number;
  legs: number;

  woof(): void {
    console.log("Woof!");
  }
}
