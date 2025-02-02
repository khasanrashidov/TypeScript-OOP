/**
 * Methods in Classes:
 * Methods are functions that belong to classes. T
 * hey can have return types, just like properties and parameters.
 *
 * Return Types:
 * You can specify the return type of a method.
 * For example, a method returning a string would have a return type of string.
 *
 * Using this Keyword:
 * The this keyword is used to access class properties within methods.
 * This allows methods to manipulate and return class property values.
 */

export class Message {
  id: number;
  title: string;
  content: string;
  timestamp: number;
  isSent: boolean;

  constructor(id: number, title: string, content: string, timestamp: number) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.timestamp = timestamp;
    this.isSent = false;
  }

  send(): void {
    this.isSent = true;
  }

  preview(): string {
    return `${this.title}: ${this.content.slice(0, 10).concat("...")}`;
  }
}

const message1 = new Message(
  1,
  "New Course!!!",
  "Check out our latest course on TypeScript.",
  Date.now()
);

console.log(message1.preview());

message1.send();

console.log(message1);
