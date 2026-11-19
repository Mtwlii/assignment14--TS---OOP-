import { User } from "./User";
import { NoteBook } from "./NoteBook";

export class Admin extends User {
  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    phone: string,
    age: number
  ) {
    super(id, name, email, password, phone, age);
  }

  manageNotes(
    notebook: NoteBook,
    action: "list" | "remove",
    noteId?: number
  ): void {
    if (action === "list") {
      for (const note of notebook.getNotes()) {
        console.log(`#${note.id} ${note.title} - ${note.preview(20)}`);
      }
      return;
    }

    if (noteId === undefined) {
      console.log("A note id is required to remove a note");
      return;
    }

    const removed = notebook.removeNote(noteId);
    console.log(removed ? `Note ${noteId} removed` : `Note ${noteId} not found`);
  }

  displayInfo(): void {
    console.log("Role: Admin");
    super.displayInfo();
  }
}
