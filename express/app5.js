const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World! from app5.js");
});

app.post("/api/submit", (req, res) => {
  const studentName = req.body.name;
  const studentAge = req.body.age;

  console.log("new Data :  ", req.body);

  res.json({
    success: true,
    message: "Data received successfully",
    name: studentName,
    age: studentAge,
  });
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
