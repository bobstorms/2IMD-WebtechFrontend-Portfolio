class Note {
    constructor(title) {
        this.title = title;
        // HINT🤩 this.element = this.createElement(title);
    }

    createElement(title) {
        let newNote = document.createElement("li");

        // HINT🤩 newNote.addEventListener('click', this.remove.bind(newNote));

        return newNote;
    }

    add() {
        // HINT🤩
        // this function should append the note to the screen somehow
    }

    saveToStorage() {
        // HINT🤩
        // localStorage only supports strings, not arrays
        // if you want to store arrays, look at JSON.parse and JSON.stringify
    }

    remove() {
        // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
        // in this function, 'this' will refer to the current note element
        // .removeChild(this)
        // remove the item from screen and from localstorage
    }
}

class App {
    constructor() {
        console.log("👊🏼 The Constructor!");
        this.txtTodo = document.querySelector("#taskInput");
        this.txtTodo.addEventListener("keypress", this.createNote.bind(this));
        this.loadNotesFromStorage();
    }

    loadNotesFromStorage() {
        console.log("Loading notes...");
        // HINT🤩
        // load all notes from storage here and add them to the screen
    }

    createNote(evt) {
        
        if(evt.key == "Enter" || evt.keyCode == 13) {
            evt.preventDefault();
            console.log(this.txtTodo.value);
        }

        // this function should create a new note by using the Note() class
        // HINT🤩
        // note.add();
        // note.saveToStorage();
        // clear the text field with .reset in this class
    }

    reset() {
        // this function should reset the form / clear the text field
    }
}

let app = new App();