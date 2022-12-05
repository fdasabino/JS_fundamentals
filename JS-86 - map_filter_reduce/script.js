"use strict";

// * Data transformation with map, filter and reduce

// ? map returns a new array containing the results of applying an operation on all original array elements
// ? filter returns a new array containing the array elements that passed a specified test condition
// ? reduce boils (“reduces”) all array elements down to one single value (e.g. adding all elements together)

const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];
const euroToDollars = 1.1;

const convertedToUSD = movements.map((movement) => {
  return movement * euroToDollars;
});
console.log(convertedToUSD);

// * map
const movementDesc = movements.map((movement, index) => {
  if (movement > 0) {
    return `Movement ${index + 1}: You deposited: ${movement}`;
  } else {
    return `Movement ${index + 1}: You withdrew: ${Math.abs(movement)}`;
  }
});
console.log(movementDesc);

// * Filter
const deposits = movements.filter((movement) => {
  return movement > 0;
});
console.log(deposits);

const withdrawals = movements.filter((movement) => {
  return movement < 0;
});
console.log(withdrawals);
