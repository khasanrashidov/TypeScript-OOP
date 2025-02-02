/**
 * Setters in TypeScript:
 * Setters, defined using the set keyword, are used to update class properties
 * while incorporating additional logic.
 *
 * Private Variables:
 * Setters often work with private variables to manage internal state,
 * typically denoted with an underscore (e.g., _isSent).
 *
 * Automatic Updates:
 * Setters can perform actions like updating other properties
 * (e.g., setting a delivery date when isSent is set to true),
 * ensuring related data stays consistent.
 */

export class Message {
  id: number;
  title: string;
  content: string;
  private _deliveryDate: Date;
  private _isSent: boolean;

  constructor(id: number, title: string, content: string) {
    this.id = id;
    this.title = title;
    this.content = content;
  }

  set isSent(value: boolean) {
    this._isSent = value;

    if (value) {
      this._deliveryDate = new Date();
    }
  }

  get isSent(): boolean {
    return this._isSent;
  }

  get messageStatus(): string {
    return this._isSent
      ? `Message delivered on ${this._deliveryDate}`
      : "Message pending delivery";
  }
}

const message1 = new Message(
  1,
  "New Course!!!",
  "Check out our latest course on TypeScript."
);

console.log(message1.messageStatus);

message1.isSent = true;
console.log(message1.isSent);

console.log(message1.messageStatus);
