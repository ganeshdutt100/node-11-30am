const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
let tasks = ["HTML", "React"];
app.get("/", (req, res) => {
  res.render("toDoList", { todoList: tasks });
});

app.post("/addTask", (req, res) => {
  const incomingTask = req.body.newTask;
  if (incomingTask) {
    tasks.push(incomingTask);
  }
  res.redirect("/");
});

app.listen(4000, () => {
  console.log(`http://localhost:4000`);
});
