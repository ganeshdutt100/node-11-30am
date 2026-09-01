const http = require("http");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("I am a simple Express server");
});
app.get("/contact", (req, res) => {
  res.send("You can contact me at contact@example.com");
});

app.get("/projects", (req, res) => {
  res.send("Here are my projects");
});
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
