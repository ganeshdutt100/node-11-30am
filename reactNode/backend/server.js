const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const testRoutes = require("./routes/testRoutes");

require("dotenv").config();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch(() => console.log("DB connection Error "));

app.use("/api", testRoutes);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
