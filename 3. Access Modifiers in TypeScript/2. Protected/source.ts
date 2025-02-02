/**
 * Protected Access Modifier:
 * The protected modifier allows a class property to be accessible
 * within the parent class and its subclasses,
 * but not outside of these classes.
 *
 * Implementation Issues:
 * Using protected can cause issues with implementing interfaces
 * because the property needs to be in a child class to match the shape of the object.
 *
 */

export class Animal {
  name: string;
  protected age: number;
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

  getAge(): number {
    return this.age;
  }
}

const cat = new Cat("Teo", 3, 4);

// cat.age = 4; // protected properties cannot be accessed from outside the class

// cat.legs = 3; // private properties cannot be accessed from outside the class

console.log(cat.getLegs);

console.log(cat.getAge());
