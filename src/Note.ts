import { User } from "./User";

export class Note {
  public id: number;
  public title: string;
  public content: string;
  public author: User; // Association: every note knows who wrote it

  constructor(id: number, title: string, content: string, author: User) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.author = author;
  }

  get userId(): number {
    return this.author.getId();
  }

  preview(length: number = 30): string {
    if (this.content.length <= length) {
      return this.content;
    }
    return this.content.slice(0, length) + "...";
  }
}
