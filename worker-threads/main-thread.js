const { Worker } = require("node:worker_threads");
const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } else if (req.url === "/slow-page") {
    const worker = new Worker("./worker-thread.js");
    worker.on("message", (data) => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`Slow Page : i = ${data}`);
    });
  }
});
const port = 3000;
server.listen(port, () => console.log(`Server is running on port ${port}`));
