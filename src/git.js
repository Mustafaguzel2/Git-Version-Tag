import { staged } from "./staged.js";
import { smart } from "./smart.js";

function helloWorld() {
  console.log("Hello World");
}
 
function main() {
  helloWorld();
  staged();
  smart();
}

main();