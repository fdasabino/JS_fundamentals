"use strict";

// * Chaining methods

const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];
const euroToDollars = 1.1;

const totalDepositsUSD = movements
  .filter((movement) => movement > 0)
  .map((movement) => movement * euroToDollars)
  .reduce((acc, mov) => {
    return acc + mov;
  }, 0);
console.log(totalDepositsUSD);
