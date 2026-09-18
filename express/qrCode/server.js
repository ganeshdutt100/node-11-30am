const express = require("express");
const QRCode = require("qrcode");
const fs = require("fs");
const path = require("path");

const app = express();

const qrFolder = path.join(__dirname, "qr_image");
if (!fs.existsSync(qrFolder)) {
  fs.mkdirSync(qrFolder);
}
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/qrCodeGen", async (req, res) => {
  const textOrURL = req.query.text;

  if (!textOrURL) {
    return res.status(400).send("invalid data");
  }
  try {
    const fileName = `qrcode_${Date.now()}.png`;
    const filePath = path.join(qrFolder, fileName);

    await QRCode.toFile(filePath, textOrURL);
    res.json({
      message: "QR code save successfully ",
      fileName: fileName,
    });
  } catch (error) {
    console.error(error);
    res.send("Server Error");
  }
});

app.listen(5000, () => {
  console.log("http://localhost:5000");
});
