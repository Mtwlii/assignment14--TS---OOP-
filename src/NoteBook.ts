import { Note } from "./Note";
import { User } from "./User";

export class NoteBook {
  public id: number;
  public name: string;
  private notes: Note[] = [];
  private nextNoteId: number = 1;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  // Composition: the notebook creates its own notes, so a note
  // only lives as long as the notebook that owns it.
  addNote(title: string, content: string, author: User): Note {
    const note = new Note(this.nextNoteId++, title, content, author);
    this.notes.push(note);
    return note;
  }

  removeNote(noteId: number): boolean {
    const before = this.notes.length;
    this.notes = this.notes.filter((n) => n.id !== noteId);
    return this.notes.length < before;
  }

  getNotes(): Note[] {
    return this.notes;
  }
}
