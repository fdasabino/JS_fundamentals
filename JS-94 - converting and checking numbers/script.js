"use strict";

// * JS-94 - converting and checking numbers

console.log(23 === 23.0);

console.log(Number("23"));
console.log(+"23");

// A value between 2 and 36 that specifies the base of the number in string.
// If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal.
// All other strings are considered decimal.
// Converts A string to an integer
console.log(Number.parseInt("30px", 10));

// checking if a value is a number
console.log(Number.isFinite(20));
console.log(Number.isFinite("20"));
console.log(Number.isFinite(+"20"));
console.log(Number.isFinite(23 / 0));

// returns true if the value passed is an integer, false otherwise.
console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));
