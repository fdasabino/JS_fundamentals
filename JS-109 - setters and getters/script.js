"use strict";

// * 109 - Setters and Getters
// ? functions that get and set values

const account = {
  fullName: "Francisco Sabino",
  movements: [520, 699, 333, 350, 1000],
  birthYear: 1990,

  // get does not need a parameter
  get latestMovements() {
    return this.movements.slice(-1).pop();
  },

  // set needs a parameter
  set latestMovements(mov) {
    this.movements.push(mov);
  },

  get age() {
    return 2022 - this.birthYear;
  },
};

console.log(account.latestMovements);

account.latestMovements = 50;

console.log(account.movements);

console.log(account.age);
