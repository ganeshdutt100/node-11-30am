const http = require("http");
const server = http.createServer();
const PORT = 4000;

server.on("request", (req, res) => {
  if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>About page</h1> ");
  } else {
    res.end("Home Page ");
  }
});
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
