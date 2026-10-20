const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const studentData = require("./models/User");
const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("mongoDB connected"))
  .catch((err) => console.log("DB Error :  ", err));

app.post("/api/students", async (req, res) => {
  try {
    const data = await studentData.create(req.body);
    res.json({ message: "data save successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
