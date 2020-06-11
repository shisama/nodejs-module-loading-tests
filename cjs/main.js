require("./mod1");
require("./mod2");
const fn = () => {
  require("./mod3");
}

fn();
console.log("main");