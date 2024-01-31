const mongoose = require("mongoose");
//create a schema
const taskSchema = mongoose.Schema(
  {
    title: { type: String, required: [true, "Please add a title"] },
    task: { type: String, required: [true, "Please add a task"] },
    completed: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
