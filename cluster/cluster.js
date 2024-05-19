const OS = require("node:os");
const http = require("node:http");
const cluster = require("node:cluster");

console.log("OS.cpus.length=", OS.cpus().length); // 8

if (cluster.isMaster) {
  console.log(`Master process ${process.pid} is running`);
  cluster.fork();
  cluster.fork(); // can't exceed 8
} else {
  console.log(`Worker ${process.pid} started`);
  const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Home Page");
    } else if (req.url === "/slow-page") {
      for (let i = 0; i < 1000000000; i++) {}
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Slow Page");
    }
  });
  const port = 3000;
  server.listen(port, () => console.log(`Server is running on port ${port}`));
}
