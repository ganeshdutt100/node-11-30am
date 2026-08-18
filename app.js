const http = require("http");
const PORT = 3000;
const server = http.createServer((req, res) => {
  res.writeHeader(200, { "Content-Type": "text/html" });
  res.end("Hello World");
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
