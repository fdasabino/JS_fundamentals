"use strict";

// * The BIND method
// * Allows to set the THIS keyword manually. Returning a new function.

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const bookTicket = lufthansa.book;

const euroWings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const bookEW = bookTicket.bind(euroWings);
const bookLH = bookTicket.bind(lufthansa);

bookEW(2331, "Steve Barlet");
bookLH(8977, "Antonio Maestri");

console.log(euroWings);
console.log(lufthansa);

// * BIND with event listeners
lufthansa.planes = 300;

lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

lufthansa.buyPlane();

const button = document.querySelector(".buy");
button.addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// ! important to keep in mind the order of the arguments passed in
// ? partial application
const bookEW2366N = bookTicket.bind(euroWings, 2366); //2366 is the flight number/ sets in stone the parameters
bookEW2366N("Some Name");

const bookEW2366S = bookTicket.bind(euroWings, 2366, "Another Name"); //2366 is the flight number and name/ sets in stone the parameters.
bookEW2366S();
console.log(euroWings);

const addTax = (rate, value) => {
  return Math.trunc(value + value * rate);
};

// ! important to keep in mind the order of the arguments passed in
console.log(addTax(0.1, 200)); // without the bind method

const addVat = addTax.bind(null, 0.23); // null=THIS. The THIS keyword is not relevant in this case

console.log("Total amount inc vat: $", addVat(20));
console.log("Total amount inc vat: $", addVat(50));
console.log("Total amount inc vat: $", addVat(350));
console.log("Total amount inc vat: $", addVat(47));

// ! how this would look without the bind method
// const addTaxRate = (rate) => {
//   return (value) => {
//     return Math.trunc(value + value * rate);
//   };
// };

// const addVat2 = addTaxRate(0.23);
// console.log(addVat2(100));
// console.log(addVat2(50));
