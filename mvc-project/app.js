const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const taskRoutes = require("./routes/taskRoutes");

app.use("/", taskRoutes);

app.listen(4000, () => {
  console.log("http://localhost:4000");
});
