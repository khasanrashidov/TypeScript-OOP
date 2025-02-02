/**
 * Legacy Code Maintenance:
 * The importance of understanding both prototypes and classes,
 * especially when updating legacy JavaScript code bases to TypeScript.
 *
 * Prototypes:
 * Before ES6, JavaScript used prototypes to define classes.
 * This involved using functions and manually setting properties.
 *
 * Classes:
 * With ES6, JavaScript introduced a more readable syntax for defining classes,
 * making it easier to manage and maintain code.
 */

export class Message {
  id;
  title;
  content;
  timestamp;
}

const message1 = new Message();

function Message2(id, title, content, timestamp) {
  this.id = id;
  this.title = title;
  this.content = content;
  this.timestamp = timestamp;
}

const message2 = new Message2(1, "Hello", "World", Date.now());
