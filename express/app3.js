const http = require("http");
const express = require("express");
const studentsList = require("./StudentsData");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/api/students", (req, res) => {
  res.json(studentsList);
});

app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
