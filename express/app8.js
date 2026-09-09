const express = require("express");
const app = express();
app.use((req, res, next) => {
  console.log(`route  -  ${req.url}`);
  next();
});

const checkAdmin = (req, res, next) => {
  if (req.query.role === "Admin") {
    next();
  } else {
    res.send("Tum Admin nhi ho ");
  }
};

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

app.get("/dashboard", checkAdmin, (req, res) => {
  res.send("Admin Dashboard :  Ganesh Dutt");
});

app.use((req, res, next) => {
  res.status(404).send(
    `
      <div style="text-align:center; margin-top:50px">
        <h1 style="color:red" >404 page not found</h1>
      </div>
        `,
  );
});
app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
