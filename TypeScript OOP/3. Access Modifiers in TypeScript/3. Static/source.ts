/**
 * Static Methods and Properties:
 * These are methods and properties of a class that you can use
 * without creating an instance of the class.
 * Think of them as utility functions that belong to the class itself,
 * not to any specific object created from the class.
 *
 * No Instantiation Needed:
 * Normally, to use a class's methods or properties,
 * you need to create an object (an instance) of that class.
 * With static methods and properties, you don't need to do that.
 * You can call them directly on the class.
 *
 * Example:
 * Imagine you have a class called Message.
 * If you have a static method in this class called getValidMessages,
 * you can call it directly like this: Message.getValidMessages().
 * You don't need to create a Message object first.
 *
 * Utility Functions:
 * Static methods are often used for tasks that are related to the class
 * but don't need to access instance-specific data.
 * For example, a method that validates a list of messages can be static
 * because it doesn't need to know about any specific message object.
 */

export class Message {
  id: number;
  content: string;
  timestamp: number;
  isSent: boolean;

  constructor(id: number, content: string, timestamp: number) {
    this.id = id;
    this.content = content;
    this.timestamp = timestamp;
    this.isSent = false;
  }
}

export class Messages extends Array<Message> {
  static messages: Message[] = [];

  static addMessage(message: Message): void {
    Messages.messages.push(message);
  }

  static getMessages(): Message[] {
    return Messages.messages;
  }

  static getValidMessages(): Message[] {
    return Messages.messages.filter(
      (message) => message.content.trim().length > 0
    );
  }

  public getValidMessages(): Message[] {
    return Messages.messages.filter(
      (message) => message.content.trim().length > 0
    );
  }
}

const message1 = new Message(1, "Hello", Date.now());

Messages.addMessage(message1);

const emptyMessage = new Message(2, "", Date.now());

Messages.addMessage(emptyMessage);

console.log(Messages.getMessages());

console.log(Messages.getValidMessages());
