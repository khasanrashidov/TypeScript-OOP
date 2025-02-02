/**
 * Type Safety:
 * Assigning types to class properties and constructor parameters enhances type safety,
 * preventing errors and improving code reliability.
 *
 * Property Initialization:
 * Class properties can be initialized directly in the constructor,
 * ensuring they have the correct values when an object is instantiated.
 *
 * Avoiding any Type:
 * Using the any type defeats the purpose of TypeScript.
 * Instead, specific types should be assigned to leverage TypeScript's type-checking and IntelliSense features.
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
}

const message1 = new Message(1, "Hello", "World", Date.now());

console.log(message1);
