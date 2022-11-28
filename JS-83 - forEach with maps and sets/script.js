"use strict";

// * forEach with maps and sets

// ! forEach with Map
const currencies = new Map([
  ["USD", "United States Dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound Sterling"],
]);

currencies.forEach((value, key) => {
  console.log(`The key is ${key} and the value is ${value}`);
});

// ! forEach with Set
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);

currenciesUnique.forEach((value) => {
  console.log(`The currency is ${value}`);
});
