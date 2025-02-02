/**
 * Getters in TypeScript:
 * Getters are properties that include logic to return a value.
 * They are defined using the get keyword.
 *
 * Automatic Updates:
 * Getters automatically update when the underlying data changes,
 * ensuring the returned value is always current.
 *
 * Enhanced Functionality:
 * Using getters can add additional logic to property access,
 * such as concatenating strings or performing calculations.
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

  get details(): string {
    return `${this.title} (${this.timestamp})`;
  }

  get messageStatus(): string {
    return this.isSent ? "Sent" : "Pending";
  }
}

const message1 = new Message(
  1,
  "New Course!!!",
  "Check out our latest course on TypeScript.",
  Date.now()
);

console.log(message1.details);
console.log(message1.messageStatus);
