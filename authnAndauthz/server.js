const express = require("express");
const app = express();
app.get("/set-cookies", (req, res) => {
  res.cookie("username", "divya");
  res.send("done");
});

app.get("/get-cookies", (req, res) => {
  //   res.cookie();
  let cookies = req.headers.cookie;
  res.send(cookies);
});
app.listen(3000, () => {
  console.log("server start at http://localhost:3000");
});
