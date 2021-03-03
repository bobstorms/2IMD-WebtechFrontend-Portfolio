class Note {
    constructor(title) {
        this.title = title;
        this.element = this.createElement(this.title);
    }

    createElement(title) {
        let newNote = document.createElement("li");
        newNote.innerText = title;
        newNote.addEventListener("click", this.remove.bind(newNote));

        return newNote;
    }

    add() {
        console.log("Adding...");
        document.querySelector("#taskList").appendChild(this.element);
        console.log(this.element);
    }

    saveToStorage() {
        // HINT🤩
        // localStorage only supports strings, not arrays
        // if you want to store arrays, look at JSON.parse and JSON.stringify
    }

    remove() {
        document.querySelector("#taskList").removeChild(this);
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
            console.log(`You entered: ${this.txtTodo.value}`);

            let newNote = new Note(this.txtTodo.value);
            this.reset();
            newNote.add();
        }

        // this function should create a new note by using the Note() class
        // HINT🤩
        // note.add();
        // note.saveToStorage();
        // clear the text field with .reset in this class
    }

    reset() {
        this.txtTodo.value = "";
    }
}

let app = new App();