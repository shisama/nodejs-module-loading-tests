import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
const dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.resolve(dirname, "./some-binary-file");
fs.readFile(filePath).then(() => {
  console.log("read a file asynchronously in mod1.mjs");
}).catch(() => {
  console.error("error");
})
console.log("mod1.mjs");