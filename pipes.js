const fs = require("node:fs");
const zlib = require("node:zlib");

const gzip = zlib.createGzip();
const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});

const writableStream = fs.createWriteStream("./file2.txt.gz");

readableStream.pipe(gzip).pipe(writableStream);
// readable steam to transform stream to a writable stream
