// * equality operators
// ! always use strict equality operator ===

const age = 17;

if (age !== 18) {
  console.log("You cannot come in...");
} else {
  console.log("You can come in...");
}

const favourite = Number(prompt("Whats your favourite number?"));
const message = `Cool! ${favourite} is an amazing number!`;
console.log(favourite);
console.log(typeof favourite);
13;
if (favourite === 23 || favourite === 7 || favourite === 12) {
  console.log(message);
} else {
  console.log("Not a good number");
}
