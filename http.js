const http = require("node:http");
const fs = require("node:fs");

// This will execute for every incoming request
const server = http.createServer((request, response) => {
  const superHero = {
    firstname: "bruce",
    lastname: "wayne",
  };
  //   response.writeHead(200, { "Content-Type": "application/json" });
  //   response.end(JSON.stringify(superHero));
  response.writeHead(200, "text/html");
  fs.createReadStream(__dirname + "/index.html").pipe(response);
  //   const html = fs.readFileSync("./index.html", "utf-8");
  //   response.end(html);
});

server.listen(3000, () => {
  console.log("server running on port 3000");
});
