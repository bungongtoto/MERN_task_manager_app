const express = require("express");
const Task = require("../models/TaskModel.js");
const {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
} = require("../controllers/TaskController.js");
const router = express.Router();
// Create A Task
router.post("/", createTask);
// Get/Read Tasks
router.get("/", getTasks);
// Get a single task
router.get("/:id", getTask);
// delete a task
router.delete("/:id", deleteTask);
// update a task
router.put("/:id", updateTask);
module.exports = router;
