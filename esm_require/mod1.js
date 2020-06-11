const fs = require("fs/promises");
const path = require("path");
const filePath = path.resolve(__dirname, "./some-binary-file");
fs.readFile(filePath).then(() => {
  console.log("read a file asynchronously in mod1.js");
}).catch(() => {
  console.error("error");
})
console.log("mod1.js");