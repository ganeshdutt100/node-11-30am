const http = require("http");
const express = require("express");
const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/users/:name", (req, res) => {
//   const userName = req.params.name;
//   res.send(`User Name: ${userName}`);
// });
const instaFinder = [
  { username: "webgyaan.com", fullName: "Ganesh Dutt", followers: 700 },
  { username: "ducat", fullName: "Ducat", followers: 1000 },
  { username: "john_doe", fullName: "John Doe", followers: 1500 },
];

app.get("/api/profile/:username", (req, res) => {
  const userName = req.params.username;
  const userProfile = instaFinder.find((user) => user.username === userName);

  if (userProfile) {
    res.send(`Welcome to ${userProfile.fullName}`);
  } else {
    res.status(404).send("User not found");
  }
});
app.listen(5000, () => {
  console.log("Server is running at http://localhost:5000");
});

// params

// http://localhost:5000/users/123
// userId: 123
