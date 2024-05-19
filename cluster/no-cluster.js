const OS = require("node:os");
const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } else if (req.url === "/slow-page") {
    for (let i = 0; i < 7000000000; i++) {}
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Slow Page");
  }
});
const port = 3000;
server.listen(port, () => console.log(`Server is running on port ${port}`));
