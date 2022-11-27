"use strict";

// *  Closures

// * Closure definitions:

// ? A closure is the closed-over variable environment of the execution context in which a function was created, even after that execution context is gone;

// ? A closure gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughout time.

// ? A closure makes sure that a function doesn’t loose connection to variables that existed at the function’s birth place;

const secureBooking = () => {
  let passengerCount = 0;

  return () => {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
