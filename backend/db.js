const mongoose = require("mongoose");
require("dotenv").config();
const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL);

const toDo = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todo", toDo);

module.exports = {
  todo: todo,
};
