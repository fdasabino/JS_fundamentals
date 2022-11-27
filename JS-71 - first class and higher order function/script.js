"use strict";

// * How passing arguments works?

const flight = "LH666";
const passenger = {
  name: "Frank Sabino",
  passport: 1588549874,
};

const checkIn = (flightNum = flight, passengerDetails) => {
  console.log(flightNum);
  console.log((passengerDetails.name = "MR " + passenger.name));

  if (passenger.passport === 1588549874) {
    console.log("You're now Checked in");
  } else {
    console.log("Wrong Passport number");
  }
};

checkIn(flight, passenger);

// another function manipulating the same obj
const newPassport = (person) => {
  console.log((person.passport = Math.trunc(Math.random() * 100000000)));
};
newPassport(passenger);
checkIn(flight, passenger);
