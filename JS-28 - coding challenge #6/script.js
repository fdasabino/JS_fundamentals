"use strict";

// ! Coding challenge #6
const calcTip = (number) => {
  return number >= 50 && number <= 300 ? number * 0.15 : number * 0.2;
};

const bills = [125, 555, 44, 600, 700];
const tips = [
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[2]),
  calcTip(1000), // * number outside the array
];

console.log(tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]; // * array of totals

console.log(`Franks bill is ${totals[2]}`); // * index of the array of totals
console.log("Total bills: ", totals);
