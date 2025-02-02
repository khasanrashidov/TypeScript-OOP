/**
 * Default Access Modifier:
 * By default, properties in TypeScript are public if no access modifier is specified.
 *
 * Public Access:
 * Public properties and methods are accessible both within and outside the class.
 *
 * Private Access:
 * Private properties and methods are only accessible within the class itself,
 * not from outside or from derived classes.
 */

export class Animal {
  name: string | null = null;
  public age: number; // by default, properties are public in TypeScript
  private legs: number;

  constructor(name: string, age: number, legs: number) {
    this.name = name;
    this.age = age;
    this.legs = legs;
  }

  get getLegs(): number {
    return this.legs;
  }
}

export class Cat extends Animal {
  constructor(name: string, age: number, legs: number) {
    super(name, age, legs);
  }
}

const cat = new Cat("Teo", 3, 4);

cat.age = 4; // public properties can be accessed and modified from outside the class

// cat.legs = 3; // private properties cannot be accessed from outside the class

console.log(cat.getLegs);
