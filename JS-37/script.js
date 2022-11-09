"use strict";

// ! Coding challenge #8

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  console.log("Tip Amount: ", tips[i], "$");

  totals.push(tip + bills[i]);
  console.log("Total Amount: ", totals[i], "$");
}

console.log(bills, tips, totals);

const calcAvg = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};

console.log("Total avg: ", calcAvg(totals));
console.log("Total bills avg: ", calcAvg(bills));
console.log("Total tip avg: ", calcAvg(tips));
