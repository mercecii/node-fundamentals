const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((request, resposne) => {
  if (request.url === "/") {
    resposne.writeHead(200, { "Content-Type": "text/html" });
    resposne.end("HomePage");
  } else if (request.url === "/about") {
    resposne.writeHead(200, { "Content-Type": "text/html" });
    resposne.end("About Page");
  } else if (request.url === "/api") {
    resposne.writeHead(200, { "Content-Type": "application/json" });
    resposne.end(
      JSON.stringify({
        name: "Deepak Kumar",
      })
    );
  }
});

server.listen(3000, () => {
  console.log("listening at port 3000");
});
