/**
 * Classes vs. Objects:
 * The difference between using classes and objects in TypeScript.
 * While both compile down to the same thing,
 * classes provide a more structured approach.
 *
 * Code Consistency:
 * Using classes helps maintain consistency across your codebase.
 * When you update a class, all instances of that class are automatically updated,
 * unlike individual objects which need to be updated manually.
 *
 * Synchronization:
 * Classes ensure that properties remain in sync across different instances,
 * making it easier to manage and update your code.
 */

const message1 = { id: undefined, title: undefined, content: undefined };
const message2 = { id: undefined, title: undefined, content: undefined };
const message3 = {
  id: undefined,
  title: undefined,
  content: undefined,
  timestamp: undefined,
};

class Message {
  id: number;
  title: string;
  content: string;
  timestamp: number;

  constructor(id: number, title: string, content: string, timestamp: number) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.timestamp = timestamp;
  }
}

const message4 = new Message(1, "Hello", "World", Date.now());
const message5 = new Message(2, "Hi", "There", Date.now());
