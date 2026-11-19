import { NoteBook } from "./NoteBook";

export class User {
  protected id: number;
  public name: string;
  public email: string;
  private password: string;
  public phone: string;
  private _age: number = 18;
  private notebooks: NoteBook[] = [];

  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    phone: string,
    age: number
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.age = age;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value < 18 || value > 60) {
      throw new Error("Age must be between 18 and 60");
    }
    this._age = value;
  }

  getId(): number {
    return this.id;
  }

  checkPassword(input: string): boolean {
    return this.password === input;
  }

  displayInfo(): void {
    console.log(`ID: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Email: ${this.email}`);
    console.log(`Phone: ${this.phone}`);
    console.log(`Age: ${this._age}`);
  }

  // Aggregation: the notebook is created outside the user and only
  // referenced here, so it can still exist if the user is removed.
  addNotebook(notebook: NoteBook): void {
    this.notebooks.push(notebook);
  }

  removeNotebook(notebookId: number): void {
    this.notebooks = this.notebooks.filter((nb) => nb.id !== notebookId);
  }

  getNotebooks(): NoteBook[] {
    return this.notebooks;
  }
}
