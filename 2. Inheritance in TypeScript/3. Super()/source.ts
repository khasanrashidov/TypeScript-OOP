/**
 * Use of super in Constructors:
 * The explaination that when a class extends another class,
 * the derived class must call super in its constructor to pass values to the parent class's constructor.
 *
 * Parameter Flexibility:
 * It shows that the number of parameters in the derived class's
 * constructor doesn't have to match the parent class's constructor.
 * You can pass parameters as an object or directly.
 *
 * Instance Checking:
 * It highlights the difference between extends and implements
 * by showing that an instance of a class using extends will return
 * true when checked against the parent class, while implements will not.
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

export class Cat extends Animal {
  constructor(name: string, age: number, legs: number) {
    super(name, age, legs);
  }

  meow(): void {
    console.log("Meow!");
  }
}

export class Dog extends Animal {
  constructor(data: { name: string; age: number; legs: number }) {
    super(data.name, data.age, data.legs);
  }

  woof(): void {
    console.log("Woof!");
  }
}

export class Bird implements Animal {
  name: string;
  age: number;
  legs: number;

  constructor(name: string, age: number, legs: number) {
    this.name = name;
    this.age = age;
    this.legs = legs;
  }

  chirp(): void {
    console.log("Chirp!");
  }
}

const cat = new Cat("Teo", 3, 4);

console.log(cat.name);

cat.meow();

const bird = new Bird("Tweety", 2, 2);

console.log(bird.name);

bird.chirp();

console.log(cat instanceof Animal); // true

console.log(bird instanceof Animal); // false
