import { staged } from "./staged.js";
function helloWorld() {
  console.log("Hello World");
}
 
function main() {
  helloWorld();
  staged();
}

main();