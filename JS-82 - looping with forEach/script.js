"use strict";

// * Looping with forEach

// const currencies = new Map([
//   ["USD", "United States Dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound Sterling"],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// ? for of loop
// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`Deposit: ${movement}$`);
//   } else {
//     console.log(`Withdraw: ${movement}$`);
//   }
// }

// ? forEach loop
movements.forEach((movement, i) => {
  if (movement > 0) {
    console.log(`Movement ${i} => Deposit: ${movement}$`);
  } else {
    console.log(`Movement ${i} => Withdraw: ${movement}$`);
  }
});
