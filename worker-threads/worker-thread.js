const { parentPort } = require("node:worker_threads");

let i;
for (i = 0; i < 7000000000; i++) {}

parentPort.postMessage(i);
