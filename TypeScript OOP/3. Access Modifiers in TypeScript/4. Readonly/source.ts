/**
 * Readonly Modifier:
 * This modifier ensures that a property can only be read
 * and not overwritten after it has been initialized.
 *
 * Usage:
 * It is practical for properties like IDs
 * or primary keys that should not change once set.
 *
 * Access Levels:
 * The readonly property can be public, private, or protected,
 * depending on how you want to access it within or outside the class.
 *
 * Constructor Initialization:
 * You can set a readonly property in the constructor,
 * but it cannot be reassigned afterward.
 */

export class Message {
  readonly id: number;
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

const message1 = new Message(1, "Hello", Date.now());

// message1.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
