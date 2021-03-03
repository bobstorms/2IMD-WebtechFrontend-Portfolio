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
        document.getElementById("taskList").appendChild(this.element);
    }

    saveToStorage() {
        let notes = localStorage.getItem("notes");
        notes = JSON.parse(notes) || [];

        notes.push(this.title);
        localStorage.setItem("notes", JSON.stringify(notes));
    }

    remove() {
        document.getElementById("taskList").removeChild(this);
        let value = this.innerText;

        let notes = localStorage.getItem("notes");
        notes = JSON.parse(notes) || [];

        let index = notes.indexOf(value);
        notes.splice(index, 1);

        localStorage.setItem("notes", JSON.stringify(notes));
    }
}

class App {
    constructor() {
        this.txtTodo = document.querySelector("#taskInput");
        this.txtTodo.addEventListener("keypress", this.createNote.bind(this));
        this.loadNotesFromStorage();
    }

    loadNotesFromStorage() {

        let notes = localStorage.getItem("notes");
        notes = JSON.parse(notes) || [];

        for(let i = 0; i < notes.length; i++) {
            let title = notes[i];
            let newNote = new Note(title);
            newNote.add();
        }

    }

    createNote(evt) {
        if(evt.key == "Enter" || evt.keyCode == 13) {
            evt.preventDefault();

            if(this.txtTodo.value != "") {
                let newNote = new Note(this.txtTodo.value);
                newNote.add();
                newNote.saveToStorage();
            }

            this.reset();
        }
    }

    reset() {
        this.txtTodo.value = "";
    }
}

let app = new App();