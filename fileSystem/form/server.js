const http = require("http");
const fs = require("fs");
const path = require("path");
const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.end(
      `
        <form action="/message" method="POST">
        <input type="text" placeholder="Enter your name " name="username" > <br><br>
        <input type="text" placeholder="Enter your course " name="course" > <br><br>
        <button type="submit" >submit</button>
        </form>
        `,
    );
  } else if (req.url === "/message" && req.method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
      //   console.log(chunk);
    });
    req.on("end", () => {
      const newText = Buffer.concat(body).toString();
      const parsedData = new URLSearchParams(newText);

      const userName = parsedData.get("username");
      const courseName = parsedData.get("course");

      const cleanData = `username : ${userName} and course :  ${courseName}`;

      //   console.log(cleanData);
      const newPath = path.join(__dirname, "data");
      const targetFile = path.join(newPath, "newData.txt");
      fs.appendFile(targetFile, cleanData, (err) => {
        if (err) return console.error(err);
        res.end("congratulation");
      });
    });
  }
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
