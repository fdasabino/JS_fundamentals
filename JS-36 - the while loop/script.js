"use strict";

// *  The while Loop

// ? for loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`For loop ==> Repeatition number ${rep}`);
// }

// ? while loop same result
// let rep = 1;
// while (rep <= 10) {
//   console.log(`While loop ==> Repeatition number ${rep}`);
// ! make sure to add this (counter++)
//   rep++;
// }

// * Math.trunc()
// ? Returns the integral part of the a numeric expression, x, removing any fractional digits. If x is already an integer, the result is x.

// * Math.random()
// ? Returns a pseudorandom number between 0 and 1.

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
