"use strict";

// * Data transformation with map, filter and reduce

const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];
const euroToDollars = 1.1;

const convertedToUSD = movements.map((movement) => {
  return movement * euroToDollars;
});
console.log(convertedToUSD);

// ? map returns a new array containing the results of applying an operation on all original array elements
// * map
const movementDesc = movements.map((movement, index) => {
  if (movement > 0) {
    return `Movement ${index + 1}: You deposited: ${movement}`;
  } else {
    return `Movement ${index + 1}: You withdrew: ${Math.abs(movement)}`;
  }
});
console.log(movementDesc);

// ? filter returns a new array containing the array elements that passed a specified test condition
// * Filter
const deposits = movements.filter((movement) => {
  return movement > 0;
});
console.log("You deposited: ", deposits);

const withdrawals = movements.filter((movement) => {
  return movement < 0;
});
console.log("You withdrew:", withdrawals);

// ? reduce boils (“reduces”) all array elements down to one single value (e.g. adding all elements together)
// * reduce
const balance = movements.reduce((accumulator, current, iteration) => {
  console.log(`Iteration: ${iteration}: ${accumulator}`);
  return accumulator + current;
}, 0);
console.log("Your balance is: ", balance);

// returns the max value from the array
const maxValue = movements.reduce((accumulator, movement) => {
  if (accumulator > movement) {
    return accumulator;
  } else {
    return movement;
  }
}, movements[0]);

console.log(maxValue);
