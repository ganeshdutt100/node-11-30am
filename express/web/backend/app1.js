const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/submit", (req, res) => {
  const { name, email } = req.body;

  console.log("data  recevied onserver  :  ", { name, email });
  res.json({
    success: true,
    message: `Hello ${name} , form submited`,
  });
});
app.listen(5000, () => {
  console.log("http://localhost:5000");
});
