const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());

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

const checkTime = (req, res, next) => {
  const timeHours = new Date().getHours();
  if (timeHours >= 7 && timeHours < 10) {
    next();
  } else {
    res.send(" Sale End  ");
  }
};

const validateMember = (req, res, next) => {
  const { name, plan } = req.body;
  if (!name || !plan) {
    return res.json({
      error: "name  and plan empty nhi honge ",
    });
  }
  next();
};

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/sale", checkTime, (req, res) => {
  res.send("Sale is live ");
});

app.post("/api/members", validateMember, (req, res) => {
  res.send("data validate successfully");
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "pageNotFound.html"));
});
app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
