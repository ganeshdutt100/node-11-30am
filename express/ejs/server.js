const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const userName = "Ganesh Dutt";
  const techSkills = ["mernStack", "DA", "DS", "FS"];
  res.render("index", { name: userName, skills: techSkills });
});

app.listen(4000, () => {
  console.log(`http://localhost:4000`);
});
