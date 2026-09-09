const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(express.json());

const filePath = "./members.json";

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/api/members", (req, res) => {
  const { name, plan } = req.body;
  const newMember = {
    id: Date.now(),
    name: name,
    plan: plan,
  };

  fs.readFile(filePath, "utf-8", (err, fileData) => {
    let membersArray = [];
    if (!err) {
      try {
        membersArray = JSON.parse(fileData);
      } catch (parseError) {
        console.log(parseError);
      }
    }
    membersArray.push(newMember);

    fs.writeFile(filePath, JSON.stringify(membersArray, null, 2), (err) => {
      if (err) {
        return res.json("Error  : ", err);
      }
      res.json({
        message: "member  ",
        member: newMember,
      });
    });
  });
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
