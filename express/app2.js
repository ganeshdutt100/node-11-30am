const http = require("http");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/api/gym/plan", (req, res) => {
  res.json({
    name: "John Doe",
    email: "john@gmail.com",
    phone: "123-456-7890",
    course: "Node.js",
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
