const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`<h1>Hello World</h1><br /> The Time is ${new Date().toString()}`);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log("Server listening on port ", PORT));
