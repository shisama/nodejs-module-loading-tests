import { createRequire } from "module";
const require = createRequire(import.meta.url);

require("./mod1");
require("./mod2");
const fn = () => {
  require("./mod3");
}

fn();
console.log("esm_require/main.mjs");