import("./mod1.mjs");
import("./mod2.mjs");
const fn = async () => {
  await import("./mod3.mjs");
}

fn()
console.log("main")

