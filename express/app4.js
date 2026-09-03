const http = require("http");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/users/:name", (req, res) => {
  const userName = req.params.name;
  res.send(`User Name: ${userName}`);
});
app.listen(5000, () => {
  console.log("Server is running at http://localhost:5000");
});

// params

// http://localhost:5000/users/123
// userId: 123
