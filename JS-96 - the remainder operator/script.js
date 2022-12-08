"use strict";

// * JS-96 - The remainder operator
// The remainder ( % ) operator returns the remainder left over when one operand is divided by a second operand.

console.log(5 % 2); // (1) is the remaining value

console.log(6 % 2); // (0) is the remaining value

console.log(8 % 3); // (2) is the remaining value

// checks for even numbers
const isEven = (number) => {
  return number % 2 === 0;
};

console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(2350));
