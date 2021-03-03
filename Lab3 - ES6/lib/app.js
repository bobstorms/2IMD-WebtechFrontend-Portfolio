"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Note = /*#__PURE__*/function () {
  function Note(title) {
    _classCallCheck(this, Note);

    this.title = title;
    this.element = this.createElement(this.title);
  }

  _createClass(Note, [{
    key: "createElement",
    value: function createElement(title) {
      var newNote = document.createElement("li");
      newNote.innerText = title;
      newNote.addEventListener("click", this.remove.bind(newNote));
      return newNote;
    }
  }, {
    key: "add",
    value: function add() {
      document.getElementById("taskList").appendChild(this.element);
    }
  }, {
    key: "saveToStorage",
    value: function saveToStorage() {
      console.log("Saving to storage...");
      var notes = localStorage.getItem("notes");
      notes = JSON.parse(notes) || [];
      notes.push(this.title);
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  }, {
    key: "remove",
    value: function remove() {
      document.getElementById("taskList").removeChild(this);
      var value = this.innerText;

      for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var title = localStorage.getItem(key);

        if (value == title) {
          localStorage.removeItem(key);
          break;
        }
      }
    }
  }]);

  return Note;
}();

var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);

    this.txtTodo = document.querySelector("#taskInput");
    this.txtTodo.addEventListener("keypress", this.createNote.bind(this));
    this.loadNotesFromStorage();
  }

  _createClass(App, [{
    key: "loadNotesFromStorage",
    value: function loadNotesFromStorage() {
      console.log("loading notes...");
      var notes = localStorage.getItem("notes");
      notes = JSON.parse(notes) || [];

      for (var i = 0; i < notes.length; i++) {
        var title = notes[i];
        var newNote = new Note(title);
        newNote.add();
      }
    }
  }, {
    key: "createNote",
    value: function createNote(evt) {
      if (evt.key == "Enter" || evt.keyCode == 13) {
        evt.preventDefault();
        console.log("You entered: ".concat(this.txtTodo.value));
        var newNote = new Note(this.txtTodo.value);
        newNote.add();
        newNote.saveToStorage();
        this.reset();
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this.txtTodo.value = "";
    }
  }]);

  return App;
}();

var app = new App();