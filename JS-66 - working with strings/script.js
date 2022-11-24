"use strict";

// * Working with strings

const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);

console.log(airline.length);
console.log("B737".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("Portugal"));

console.log(airline.slice(4)); // starts extract from the 4th character onwards
console.log(airline.slice(4, 7)); // starts extract from the 4th character and stops at the 7th

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2)); // weird
console.log(airline.slice(1, -1)); // weird

const checkMiddleSeat = (seat) => {
  // B and E are middle seat
  const assignedSeat = seat.slice(-1);

  if (assignedSeat === "B" || assignedSeat === "E") {
    console.log("You have a middle seat", assignedSeat);
  } else {
    console.log("You got Lucky!!!");
  }
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");
