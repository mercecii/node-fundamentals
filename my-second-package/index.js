const debounce = require("mercecii-debounce");

const x = debounce(() => {
  console.log("hello");
}, 3000);

x();
