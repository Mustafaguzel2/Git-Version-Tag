import { staged } from "./staged.js";
import { smart } from "./smart.js";
import { stupid } from "./stupid.js";

function helloWorld() {
  console.log("Hello World");
}
 
function main() {
  helloWorld();
  staged();
  smart();
  stupid();
}

main();