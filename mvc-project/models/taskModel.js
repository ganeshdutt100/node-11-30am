let tasks = [
  { id: 1, text: "MVC pattern" },
  { id: 2, text: "Portfolio" },
];

const taskModel = {
  getAllTasks: () => {
    return tasks;
  },
  addTask: (newTaskText) => {
    const newTask = { id: tasks.length + 1, text: newTaskText };
    tasks.push(newTask);
  },
  deleteTask: (taskId) => {
    tasks = tasks.filter((task) => task.id !== taskId);
  },
};
module.exports = taskModel;
