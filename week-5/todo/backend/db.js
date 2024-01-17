/*
Todo{
    title : String,
    description : string,
    completed : boolean
}
*/

const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://umakant3525:umakant3525@assignment1.kuygwww.mongodb.net/todo_app');

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model('todos', todoSchema);

module.exports = { todo };


