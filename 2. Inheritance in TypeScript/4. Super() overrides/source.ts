/**
 * Using super for Methods:
 * The super keyword allows you to access methods from the parent class
 * when they are overridden in the child class.
 *
 * Property Overrides:
 * Unlike methods, when properties are overridden in the child class,
 * they do not maintain a reference to the parent class's properties.
 *
 * Inheritance Implications:
 * Understanding the differences between extends and implements is crucial
 * for deciding which to use based on your needs for method and property inheritance.
 */

export class Animal {
  name: string;
  age: number;
  legs: number;

  lives = 1;

  constructor(name: string, age: number, legs: number) {
    this.name = name;
    this.age = age;
    this.legs = legs;
  }

  sound(): void {
    console.log("Animal sound!");
  }
}

export class Cat extends Animal {
  lives = 9;

  constructor(name: string, age: number, legs: number) {
    super(name, age, legs);
  }

  sound(): void {
    super.sound();

    console.log("Meow!");
    console.log(`I have ${this.lives} lives.`);
  }
}

const cat = new Cat("Teo", 3, 4);

cat.sound();
