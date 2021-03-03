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
      document.querySelector("#taskList").appendChild(this.element);
    }
  }, {
    key: "saveToStorage",
    value: function saveToStorage() {
      console.log("Saving to storage...");
      var key = "note_".concat(localStorage.length);
      localStorage.setItem(key, this.title);
      console.log(localStorage); // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify
    }
  }, {
    key: "remove",
    value: function remove() {
      document.querySelector("#taskList").removeChild(this); // remove the item from screen and from localstorage
    }
  }]);

  return Note;
}();

var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);

    console.log("👊🏼 The Constructor!");
    this.txtTodo = document.querySelector("#taskInput");
    this.txtTodo.addEventListener("keypress", this.createNote.bind(this));
    this.loadNotesFromStorage();
  }

  _createClass(App, [{
    key: "loadNotesFromStorage",
    value: function loadNotesFromStorage() {
      console.log("Loading notes..."); // HINT🤩
      // load all notes from storage here and add them to the screen
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