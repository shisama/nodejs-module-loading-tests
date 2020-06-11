import fs from "fs/promises";

fs.readFile("./some-binary-file").then(() => {
  console.log("read a file asynchronously");
}).catch(() => {
  console.error("error");
})
console.log("mod1");