const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser());

const users = [
  { email: "admin@test.com", password: "123", role: "admin" },
  { email: "user@test.com", password: "123", role: "user" },
];

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) return res.status(401).send("Wrong email or password");

  res.cookie("email", user.email);
  res.cookie("role", user.role);
  res.send("Login successful");
});

// AUTHENTICATION: "Who are you?" -> is the user logged in?
function authenticate(req, res, next) {
  if (!req.cookies.email) {
    return res.status(401).send("Please login first"); // 401 = not logged in
  }
  next();
}

// AUTHORIZATION: "What can you do?" -> does the user have the right role?
function authorize(role) {
  return (req, res, next) => {
    if (req.cookies.role !== role) {
      return res.status(403).send("You are not allowed"); // 403 = no permission
    }
    next();
  };
}

// Any logged-in user can open this (only AuthN)
app.get("/profile", authenticate, (req, res) => {
  res.send("Hello " + req.cookies.email);
});
// Only admin can open this (AuthN + AuthZ)
app.get("/admin", authenticate, authorize("admin"), (req, res) => {
  res.send("Welcome Admin");
});
app.listen(5000, () => {
  console.log("server start at http://localhost:5000");
});
