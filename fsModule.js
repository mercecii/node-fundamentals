const fs = require("node:fs");

const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});
const writableStream = fs.createWriteStream("./file2.txt");

readableStream.on("data", (chunk) => {
  console.log(chunk);
  writableStream.write(chunk);
});

// const fs = require("node:fs/promises");

// fs.readFile("file.txt", "utf-8")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// async function readFile() {
//   try {
//     const data = await fs.readFile("file.txt", "utf-8");
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// const fs = require("node:fs");

// // fs module uses buffer
// const fileContents = fs.readFileSync("./file.txt", "utf-8"); // Define Encoding otherwise it will print <Buffer . . . >

// fs.readFile("./file.txt", { encoding: "utf-8" }, (err, data) => {
//   if (err) console.log(err);
//   else console.log(data);
// });

// console.log(fileContents);

// fs.writeFileSync("./greet.txt", "Hello wolrd!");
// fs.writeFile("./greet.txt", " Hello Deepak", { flag: "a" }, (err) => {
//   if (err) console.log(err);
//   else console.log("File written");
// });
