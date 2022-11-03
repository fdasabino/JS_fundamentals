// * truthy and falsy values

// ? 5 falsy values:
// ? 0,
// ? "",
// ? undefined,
// ? null,
// ? NaN

console.log("0 ", Boolean(0));
console.log("undefined ", Boolean(undefined));
console.log("String ", Boolean("Jonas"));
console.log("{} ", Boolean({}));
console.log("Empty string ", Boolean(""));

const money = 100;
if (money) {
  console.log("Dont spend it all");
} else {
  console.log("You should get a job");
}

let height;
if (height === undefined) {
  height = 180;
  console.log(height);
} else {
  console.log(height);
}
