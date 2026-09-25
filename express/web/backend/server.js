const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

let students = ["A", "B", "C", "D"];

app.get("/api/students", (req, res) => {
  res.json(students);
});
app.listen(5000, () => {
  console.log("http://localhost:5000");
});
