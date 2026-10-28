const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT;

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.log("DB  not connected", err));

app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
