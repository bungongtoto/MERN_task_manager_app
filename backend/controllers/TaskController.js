const Task = require("../models/TaskModel.js");
// This helps to send the data which in this case is creating a task to our database
const createTask = async (request, response) => {
  try {
    if (!request.body.title || !request.body.task ) {
      return response.status(400).send({
        message: "Send all required fields: title, task , completed",
      });
    }
    const newTask = {
      title: request.body.title,
      task: request.body.task,
      completed: request.body.completed,
    };

    const task = await Task.create(newTask);

    return response.status(201).send(task);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
};
// gets all the tasks in the database
const getTasks = async (request, response) => {
  try {
    const tasks = await Task.find({});

    return response.status(200).json({
      count: tasks.length,
      data: tasks,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
};
// Get a single task
const getTask = async (request, response) => {
  try {
    const { id } = request.params;

    const task = await Task.findById(id);

    return response.status(200).json(task);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
};
// Delete Task
const deleteTask = async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Task.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "Task not found" });
    }

    return response.status(200).send({ message: "Task deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
};
// Update a task
const updateTask = async (request, response) => {
  try {
    if (!request.body.title || !request.body.task ) {
      return response.status(400).send({
        message: "Send all required fields: title, task , completed",
      });
    }

    const { id } = request.params;

    const result = await Task.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: "Task not found" });
    }

    return response.status(200).send({ message: "Task updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
};
module.exports = {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
};
