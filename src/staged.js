function add(a, b) {
  return a + b;
}

export function staged() {
  console.log("I am Staged");
  console.log(add(1, 2));
}

