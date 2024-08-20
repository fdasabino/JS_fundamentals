"use strict";

// * Functions Default Parameters
const bookingsArray = [];

const createBooking = (flightNum, numPassengers = 1, price = 199 * numPassengers) => {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookingsArray.push(booking);
};

createBooking("LH123", 2, 900);
createBooking("LH123", 2);
createBooking("LH1255", 5);
createBooking("LH1255", undefined, 500);
