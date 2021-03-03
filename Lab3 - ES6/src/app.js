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
        document.querySelector("#taskList").appendChild(this.element);
    }

    saveToStorage() {
        console.log("Saving to storage...");
        let key = `note_${localStorage.length}`;
        localStorage.setItem(key, this.title);
        console.log(localStorage);
    }

    remove() {
        document.querySelector("#taskList").removeChild(this);
        let value = this.innerText;
        for(let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let title = localStorage.getItem(key);
            if(value == title) {
                localStorage.removeItem(key);
                break;
            }
        }
        // remove the item from screen and from localstorage
    }
}

class App {
    constructor() {
        this.txtTodo = document.querySelector("#taskInput");
        this.txtTodo.addEventListener("keypress", this.createNote.bind(this));
        this.loadNotesFromStorage();
    }

    loadNotesFromStorage() {

        for(let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let title = localStorage.getItem(key);
            let newNote = new Note(title);
            newNote.add();
        }

    }

    createNote(evt) {
        
        if(evt.key == "Enter" || evt.keyCode == 13) {
            evt.preventDefault();
            console.log(`You entered: ${this.txtTodo.value}`);

            let newNote = new Note(this.txtTodo.value);
            newNote.add();
            newNote.saveToStorage();

            this.reset();
        }
    }

    reset() {
        this.txtTodo.value = "";
    }
}

let app = new App();