import { User } from "./User";
import { Admin } from "./Admin";
import { NoteBook } from "./NoteBook";
import { Storage } from "./Storage";

const user = new User(1, "Sara Ali", "sara@mail.com", "pass123", "01012345678", 25);
const admin = new Admin(2, "Omar Hassan", "omar@mail.com", "admin456", "01198765432", 40);

user.displayInfo();
console.log("---");
admin.displayInfo();
console.log("---");

// Age validation
try {
  new User(3, "Kid", "kid@mail.com", "x", "010", 15);
} catch (err) {
  console.log((err as Error).message);
}
console.log("---");

// Aggregation: the notebook exists on its own, then the user takes it
const workBook = new NoteBook(1, "Work");
user.addNotebook(workBook);

// Composition + Association
workBook.addNote("Meeting", "Discuss the project deadline with the whole team", user);
workBook.addNote("Todo", "Buy milk", user);

for (const note of workBook.getNotes()) {
  console.log(`${note.title} by ${note.author.name} (userId ${note.userId}): ${note.preview(20)}`);
}
console.log("---");

admin.manageNotes(workBook, "list");
admin.manageNotes(workBook, "remove", 2);
admin.manageNotes(workBook, "remove", 99);
console.log("---");

// Generic storage with two different types
const numbers = new Storage<number>();
numbers.addItem(10);
numbers.addItem(20);
numbers.removeItem(10);
console.log(numbers.getAllItems());

const users = new Storage<User>();
users.addItem(user);
users.addItem(admin);
console.log(users.getAllItems().map((u) => u.name));
