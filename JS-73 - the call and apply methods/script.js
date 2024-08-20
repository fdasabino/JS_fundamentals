"use strict";

// * The CALL and APPLY methods

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(2358, "Frank Sabino");
lufthansa.book(5554, "Jesus C");
console.log(lufthansa.bookings);

const euroWings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "SWA",
  bookings: [],
};

const bookTicket = lufthansa.book;

// ? call method
bookTicket.call(euroWings, 23, "Sarah Williams");
console.log(euroWings);

bookTicket.call(swiss, 2354, "Mary Cooper");
console.log(swiss);

bookTicket.call(swiss, 1356, "John Smith");
console.log(swiss);

const flightData0 = [2354, "George Cooper"];
bookTicket.call(swiss, ...flightData0);
console.log(swiss);

// ? apply method
// const flightData = [2354, "George Cooper"];
// bookTicket.apply(swiss, flightData);
// console.log(swiss);
