// // I/O with nextTick and Promise
// const fs = require("node:fs");

// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
// });

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));

const fs = require("node:fs");

setTimeout(() => console.log("this os setTimeout 1"), 0);
fs.readFile(__filename, () => {
  console.log("this is readFile 1");
});
