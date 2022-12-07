"use strict";

// * Sorting arrays

const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];

// ? Strings
// sorts items in an array alphabetically / mutates the array
const names = ["jonas", "helena", "adam", "frank", "mike", "zach"];
console.log(names.sort());

// ? Numbers
console.log(movements);

//return < 0 => A,B / keep order
//return > 0 => B,A / switch order

// ascending order
console.log(
  "ascending: ",
  movements.sort((a, b) => a - b)
);

// descending order
console.log(
  "descending: ",
  movements.sort((a, b) => b - a)
);
