/**
 * Creating Derived Classes:
 * The demonstration of how to create derived classes (child classes)
 * like Dog and Cat that extend a base class Animal.
 *
 * Inheritance of Properties:
 * Derived classes inherit properties from the base class,
 * allowing access to those properties without redefining them.
 *
 * Adding Methods:
 * You can add specific methods to derived classes,
 * such as a woof method for the Dog class and a meow method for the Cat class,
 * while still inheriting properties from the base class.
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

export class Dog extends Animal {
  woof(): void {
    console.log("Woof!");
  }
}

export class Cat extends Animal {
  meow(): void {
    console.log("Meow!");
  }
}

const dog = new Dog("Rex", 5, 4);

console.log(dog.name);

dog.woof();

const cat = new Cat("Teo", 3, 4);

console.log(cat.name);
