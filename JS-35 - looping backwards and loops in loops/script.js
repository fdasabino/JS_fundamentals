"use strict";

// *  Looping Backwards and Loops in Loops

const franksArray = ["Frank", "Sabino", 2022 - 1990, "Student", ["Michael", "Peter", "Steven"]];

// ? Looping backwards
for (let i = franksArray.length - 1; i >= 0; i--) {
  console.log(i, franksArray[i]);
}

// ? looping through the sets
for (let set = 1; set <= 3; set++) {
  console.log(`----- Starting exercise ${set}`);

  // ? Loop inside another loop for reps
  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Set ${set} repeatition number ${rep}`);
  }
}
