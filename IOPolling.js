// const fs = require("node:fs");

// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
//   setImmediate(() => console.log("this is inner setImmediate inside readFile"));
//   process.nextTick(() => {
//     console.log("this is inner process.nextTick inside readFile");
//   });
//   Promise.resolve().then(() => {
//     console.log("this is inner Promise.resolve inside readFile");
//   });
// });

const fs = require("node:fs");
setImmediate(() => console.log("this is setImmediate 1"));
setImmediate(() => {
  console.log("this is setImmediate 2");
  process.nextTick(() => console.log("this is process.nextTick 1"));
  Promise.resolve().then(() => {
    console.log("this is Promise.resolve 1");
  });
});
setImmediate(() => console.log("this is setImmediate 3"));
