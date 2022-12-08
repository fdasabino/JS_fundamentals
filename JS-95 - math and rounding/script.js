"use strict";

// * JS-95 - Math and Rounding

// returns the square root of a number.
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));

// calculating cubic area
console.log(8 ** (1 / 3));

// returns the smaller of a set of supplied numeric expressions.
console.log(Math.max(4, 8, 9, 3, 6, 3));
console.log(Math.max(4, 8, 9, "3", 6, 3));

// returns the smaller of a set of supplied numeric expressions.
console.log(Math.min(4, 8, 9, 3, 6, 3));
console.log(Math.min(4, 8, 9, "3", 6, 3));

// calculating the area of a circle of 10px
console.log(Math.PI * Number.parseFloat("10px") ** 2);

// returns a pseudorandom number between 0 and 1.
console.log(Math.trunc(Math.random() * 6) + 1);

// function to define a random number between a min and max value
const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + 1) + min;
};
console.log(randomInt(1, 10));

// rounding integers

// returns a supplied numeric expression rounded to the nearest integer.
console.log(Math.round(25.4)); // 25

// returns the smallest integer greater than or equal to its numeric argument.
console.log(Math.ceil(25.4)); // 26

// returns the greatest integer less than or equal to its numeric argument.
console.log(Math.floor(25.4)); // 25

// returns the integral part of the a numeric expression, x.
// removing any fractional digits.
console.log(Math.trunc(23.3)); //23

// rounding decimals
console.log(+(2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.7).toFixed(4));
console.log((2.7).toFixed(1));
console.log((2.7).toFixed(5));
