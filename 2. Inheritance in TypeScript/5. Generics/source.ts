/**
 * Static Typing with Generics:
 * Generics provide a way to give static typing to dynamic types,
 * avoiding the use of any which can cause problems.
 *
 * Flexibility in Data Types:
 * Generics allow you to define a type that can be used
 * across different data sets, making your code more flexible and reusable.
 *
 *  Practical Example:
 * The demonstration of using generics to merge different user data sets,
 * ensuring that the correct type is assigned and accessed.
 */

export class User<T> {
  name: string;
  age: number;
  email: string;
  isMale: boolean;

  public classicUserData: T;

  constructor(name: string, age: number, email: string, isMale: boolean) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.isMale = isMale;
  }

  public mergeClassicUserData(params: T): void {
    // Destructuring the properties of the generic data
    const { name, age, email, isMale } = this;

    // Assigning the merged data to the classicUserData property
    this.classicUserData = { ...params, name, age, email, isMale };
  }
}

interface ClassicUserOne {
  name: { first: string; last: string };
}

interface ClassicUserTwo {
  name: { first: string; last: string; middle: string };
}

const userOne = new User<ClassicUserOne>("John", 30, "john@example.com", true);

userOne.mergeClassicUserData({
  name: { first: "John", last: "Doe" },
});

console.log(userOne.classicUserData.name.first);

const userTwo = new User<ClassicUserTwo>("Jane", 25, "jane@example.com", false);

userTwo.mergeClassicUserData({
  name: { first: "Jane", last: "Doe", middle: "Mary" },
});

console.log(userTwo.classicUserData.name.middle);
