const fs = require("fs/promises");

fs.readFile("./some-binary-file").then(() => {
  console.log("read a file asynchronously in mod1.js");
}).catch(() => {
  console.error("error");
})
console.log("mod1.js");