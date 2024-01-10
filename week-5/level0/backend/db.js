const mongoose = require("mongoose");

require("dotenv").config();
const mongoUrl = process.env.mongo_url;
mongoose.connect(mongoUrl);

const todoSchema = {
  title: String,
  description: String,
  completed: Boolean,
};

const todo = mongoose.model("todo", todoSchema);

module.exports = {
  todo,
};
