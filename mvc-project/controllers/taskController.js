const TaskModel = require("../models/taskModel");

const renderHomePage = (req, res) => {
  const allTasks = TaskModel.getAllTasks();
  res.render("index", { tasks: allTasks });
};

const handleAddTask = (req, res) => {
  const newTask = req.body.taskText;
  if (newTask) {
    TaskModel.addTask(newTask);
  }
  res.redirect("/");
};

const handleDeleteTask = (req, res) => {
  const idToDelete = parseInt(req.params.id);
  TaskModel.deleteTask(idToDelete);
  res.redirect("/");
};

module.exports = {
  renderHomePage,
  handleAddTask,
  handleDeleteTask,
};
